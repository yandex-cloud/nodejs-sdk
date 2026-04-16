/* eslint-disable */
import Long from 'long';
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
} from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
import {
    AnonymousAccessFlags,
    ACL,
    Encryption,
    Versioning,
    BucketAllowedPrivateEndpoints,
    WebsiteSettings,
    ObjectLock,
    InventoryConfiguration,
    Bucket,
    Tag,
    CorsRule,
    LifecycleRule,
    BucketStats,
    HTTPSConfig,
    versioningFromJSON,
    versioningToJSON,
} from './bucket';
import { FieldMask } from '../../../../google/protobuf/field_mask';
import { Operation } from '../../operation/operation';
import {
    SetAccessBindingsRequest,
    UpdateAccessBindingsRequest,
    ListAccessBindingsRequest,
    ListAccessBindingsResponse,
} from '../../access/access';
import { Struct } from '../../../../google/protobuf/struct';

export const protobufPackage = 'yandex.cloud.storage.v1';

export interface GetBucketRequest {
    /**
     * Name of the bucket to return.
     * To get the bucket name, make a [BucketService.List] request.
     */
    name: string;
    /**
     * Scope of information about the bucket to return.
     * Access to scopes is managed via [Identity and Access Management roles](/docs/storage/security),
     * bucket [ACL](/docs/storage/concepts/acl) and [policies](/docs/storage/concepts/policy).
     */
    view: GetBucketRequest_View;
}

export enum GetBucketRequest_View {
    /** VIEW_UNSPECIFIED - View unspecified. */
    VIEW_UNSPECIFIED = 0,
    /**
     * VIEW_BASIC - Returns basic information about a bucket.
     * The following fields will _not_ be returned: [Bucket.acl], [Bucket.cors], [Bucket.website_settings],
     * [Bucket.lifecycle_rules], [Bucket.tags].
     */
    VIEW_BASIC = 1,
    /**
     * VIEW_ACL - Returns basic information and access control list (ACL) for the bucket.
     * The following fields will _not_ be returned: [Bucket.cors], [Bucket.website_settings], [Bucket.lifecycle_rules],
     * [Bucket.tags].
     */
    VIEW_ACL = 2,
    /** VIEW_FULL - Returns full information about a bucket. */
    VIEW_FULL = 3,
    UNRECOGNIZED = -1,
}

export function getBucketRequest_ViewFromJSON(object: any): GetBucketRequest_View {
    switch (object) {
        case 0:
        case 'VIEW_UNSPECIFIED':
            return GetBucketRequest_View.VIEW_UNSPECIFIED;
        case 1:
        case 'VIEW_BASIC':
            return GetBucketRequest_View.VIEW_BASIC;
        case 2:
        case 'VIEW_ACL':
            return GetBucketRequest_View.VIEW_ACL;
        case 3:
        case 'VIEW_FULL':
            return GetBucketRequest_View.VIEW_FULL;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return GetBucketRequest_View.UNRECOGNIZED;
    }
}

export function getBucketRequest_ViewToJSON(object: GetBucketRequest_View): string {
    switch (object) {
        case GetBucketRequest_View.VIEW_UNSPECIFIED:
            return 'VIEW_UNSPECIFIED';
        case GetBucketRequest_View.VIEW_BASIC:
            return 'VIEW_BASIC';
        case GetBucketRequest_View.VIEW_ACL:
            return 'VIEW_ACL';
        case GetBucketRequest_View.VIEW_FULL:
            return 'VIEW_FULL';
        default:
            return 'UNKNOWN';
    }
}

export interface ListBucketsRequest {
    /**
     * ID of the folder to list buckets in.
     * To get the folder ID, make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /** Indicates that the list is being continued on this bucket with a token. */
    pageToken: string;
    /** Maximum number of buckets to be returned in response. */
    pageSize: number;
}

export interface ListBucketsResponse {
    /** List of buckets in the specified folder. */
    buckets: Bucket[];
    /** Included in the response when there are more buckets that can be listed with pagination. */
    nextPageToken: string;
}

export interface CreateBucketMetadata {
    /** Name of the bucket that is being created. */
    name: string;
}

export interface UpdateBucketMetadata {
    /** Name of the bucket that is being updated. */
    name: string;
}

export interface DeleteBucketMetadata {
    /** Name of the bucket that is being deleted. */
    name: string;
}

export interface SetBucketHTTPSConfigMetadata {
    /** Name of the bucket the HTTPS configuration is being updated for. */
    name: string;
}

export interface DeleteBucketHTTPSConfigMetadata {
    /** Name of the bucket the HTTPS configuration is being deleted for. */
    name: string;
}

export interface CreateBucketRequest {
    /**
     * Name of the bucket.
     * The name must be unique within the platform. For naming limitations and rules, see
     * [documentation](/docs/storage/concepts/bucket#naming).
     */
    name: string;
    /**
     * ID of the folder to create a bucket in.
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
    /**
     * Configuration for bucket's encryption.
     * For details, see [documentation](/docs/storage/concepts/encryption).
     */
    encryption?: Encryption;
    /**
     * Bucket versioning status.
     * For details, see [documentation](/docs/storage/concepts/versioning).
     */
    versioning: Versioning;
    /**
     * Configuration for bucket's allowed private endpoints.
     * requires permission s3:PutBucketAllowedPrivateEndpoints
     */
    allowedPrivateEndpoints?: BucketAllowedPrivateEndpoints;
    /**
     * An option to disable static key auth for a bucket.
     * requires permission s3:UpdateBucketStaticKeyAuthSettings
     */
    disabledStatickeyAuth: boolean;
}

export interface UpdateBucketRequest {
    /**
     * Name of the bucket to update.
     * The name cannot be updated.
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
     * Configuration for bucket's encryption.
     * For details, see [documentation](/docs/storage/concepts/encryption)
     */
    encryption?: Encryption;
    /** requires permission s3:PutBucketAllowedPrivateEndpoints */
    allowedPrivateEndpoints?: BucketAllowedPrivateEndpoints;
    /**
     * An option to disable static key auth for a bucket.
     * requires permission s3:UpdateBucketStaticKeyAuthSettings
     */
    disabledStatickeyAuth: boolean;
}

/** DeleteBucketRequest deletes requested bucket from the Cloud. */
export interface DeleteBucketRequest {
    /**
     * Name of the bucket to update.
     * To get the bucket name, make a [BucketService.List] request.
     */
    name: string;
}

export interface GetBucketStatsRequest {
    /** Name of the bucket to return the statistics for. */
    name: string;
}

export interface GetBucketHTTPSConfigRequest {
    /** Name of the bucket to return the HTTPS configuration for. */
    name: string;
}

export interface SelfManagedHTTPSConfigParams {
    /** [PEM](https://en.wikipedia.org/wiki/Privacy-Enhanced_Mail)-encoded certificate. */
    certificatePem: string;
    /** [PEM](https://en.wikipedia.org/wiki/Privacy-Enhanced_Mail)-encoded private key for the certificate. */
    privateKeyPem: string;
}

/** A resource for a TLS certificate from Certificate Manager. */
export interface CertificateManagerHTTPSConfigParams {
    /**
     * ID of the certificate.
     * To get the list of all available certificates, make a [yandex.cloud.certificatemanager.v1.CertificateService.List]
     * request.
     */
    certificateId: string;
}

export interface SetBucketHTTPSConfigRequest {
    /**
     * Your TLS certificate, uploaded directly.
     * Object Storage only supports [PEM](https://en.wikipedia.org/wiki/Privacy-Enhanced_Mail)-encoded certificates.
     */
    selfManaged?: SelfManagedHTTPSConfigParams | undefined;
    /**
     * TLS certificate from Certificate Manager.
     * To create a certificate in Certificate Manager, make a
     * [yandex.cloud.certificatemanager.v1.CertificateService.Create] request.
     */
    certificateManager?: CertificateManagerHTTPSConfigParams | undefined;
    /** Name of the bucket to update the HTTPS configuration for. */
    name: string;
}

export interface DeleteBucketHTTPSConfigRequest {
    /** Name of the bucket to delete the HTTPS configuration for. */
    name: string;
}

export interface CreateBucketInventoryConfigurationRequest {
    /** Name of the bucket to update the inventory configuration for. */
    bucket: string;
    /** ID of the inventory configuration to set. */
    id: string;
    /** Inventory configuration. */
    configuration?: InventoryConfiguration;
}

export interface CreateBucketInventoryConfigurationMetadata {
    /** Bucket name for which inventory configuration will be set */
    name: string;
}

export interface GetBucketInventoryConfigurationRequest {
    /** Name of the bucket to get the inventory configuration for. */
    bucket: string;
    /** ID of the inventory configuration to get. */
    id: string;
}

export interface DeleteBucketInventoryConfigurationRequest {
    /** Name of the bucket to delete the inventory configuration for. */
    bucket: string;
    /** ID of the inventory configuration to delete. */
    id: string;
}

export interface DeleteBucketInventoryConfigurationMetadata {
    /** Bucket name for which inventory configuration will be set */
    name: string;
}

export interface ListBucketInventoryConfigurationsRequest {
    /** Name of the bucket to list the inventory configurations for. */
    bucket: string;
    /** Continuation token */
    pageToken: string;
}

export interface ListBucketInventoryConfigurationsResponse {
    /** List of inventory configurations. */
    configurations: InventoryConfiguration[];
    /** Continuation token to retrieve the next page of results. */
    nextPageToken: string;
}

const baseGetBucketRequest: object = { name: '', view: 0 };

export const GetBucketRequest: {
    encode(message: GetBucketRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetBucketRequest;
    fromJSON(object: any): GetBucketRequest;
    toJSON(message: GetBucketRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<GetBucketRequest>, I>>(object: I): GetBucketRequest;
} = {
    encode(message: GetBucketRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.name !== '') {
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
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.view =
            object.view !== undefined && object.view !== null
                ? getBucketRequest_ViewFromJSON(object.view)
                : 0;
        return message;
    },

    toJSON(message: GetBucketRequest): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        message.view !== undefined && (obj.view = getBucketRequest_ViewToJSON(message.view));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetBucketRequest>, I>>(object: I): GetBucketRequest {
        const message = { ...baseGetBucketRequest } as GetBucketRequest;
        message.name = object.name ?? '';
        message.view = object.view ?? 0;
        return message;
    },
};

const baseListBucketsRequest: object = { folderId: '', pageToken: '', pageSize: 0 };

export const ListBucketsRequest: {
    encode(message: ListBucketsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListBucketsRequest;
    fromJSON(object: any): ListBucketsRequest;
    toJSON(message: ListBucketsRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<ListBucketsRequest>, I>>(object: I): ListBucketsRequest;
} = {
    encode(message: ListBucketsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        if (message.pageToken !== '') {
            writer.uint32(26).string(message.pageToken);
        }
        if (message.pageSize !== 0) {
            writer.uint32(32).int64(message.pageSize);
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
                case 3:
                    message.pageToken = reader.string();
                    break;
                case 4:
                    message.pageSize = longToNumber(reader.int64() as Long);
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
                : '';
        message.pageToken =
            object.pageToken !== undefined && object.pageToken !== null
                ? String(object.pageToken)
                : '';
        message.pageSize =
            object.pageSize !== undefined && object.pageSize !== null ? Number(object.pageSize) : 0;
        return message;
    },

    toJSON(message: ListBucketsRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListBucketsRequest>, I>>(
        object: I,
    ): ListBucketsRequest {
        const message = { ...baseListBucketsRequest } as ListBucketsRequest;
        message.folderId = object.folderId ?? '';
        message.pageToken = object.pageToken ?? '';
        message.pageSize = object.pageSize ?? 0;
        return message;
    },
};

const baseListBucketsResponse: object = { nextPageToken: '' };

export const ListBucketsResponse: {
    encode(message: ListBucketsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListBucketsResponse;
    fromJSON(object: any): ListBucketsResponse;
    toJSON(message: ListBucketsResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<ListBucketsResponse>, I>>(object: I): ListBucketsResponse;
} = {
    encode(message: ListBucketsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.buckets) {
            Bucket.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
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

    fromJSON(object: any): ListBucketsResponse {
        const message = { ...baseListBucketsResponse } as ListBucketsResponse;
        message.buckets = (object.buckets ?? []).map((e: any) => Bucket.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListBucketsResponse): unknown {
        const obj: any = {};
        if (message.buckets) {
            obj.buckets = message.buckets.map((e) => (e ? Bucket.toJSON(e) : undefined));
        } else {
            obj.buckets = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListBucketsResponse>, I>>(
        object: I,
    ): ListBucketsResponse {
        const message = { ...baseListBucketsResponse } as ListBucketsResponse;
        message.buckets = object.buckets?.map((e) => Bucket.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

const baseCreateBucketMetadata: object = { name: '' };

export const CreateBucketMetadata: {
    encode(message: CreateBucketMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateBucketMetadata;
    fromJSON(object: any): CreateBucketMetadata;
    toJSON(message: CreateBucketMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<CreateBucketMetadata>, I>>(object: I): CreateBucketMetadata;
} = {
    encode(message: CreateBucketMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateBucketMetadata {
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
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        return message;
    },

    toJSON(message: CreateBucketMetadata): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateBucketMetadata>, I>>(
        object: I,
    ): CreateBucketMetadata {
        const message = { ...baseCreateBucketMetadata } as CreateBucketMetadata;
        message.name = object.name ?? '';
        return message;
    },
};

const baseUpdateBucketMetadata: object = { name: '' };

export const UpdateBucketMetadata: {
    encode(message: UpdateBucketMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateBucketMetadata;
    fromJSON(object: any): UpdateBucketMetadata;
    toJSON(message: UpdateBucketMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<UpdateBucketMetadata>, I>>(object: I): UpdateBucketMetadata;
} = {
    encode(message: UpdateBucketMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateBucketMetadata {
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
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        return message;
    },

    toJSON(message: UpdateBucketMetadata): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateBucketMetadata>, I>>(
        object: I,
    ): UpdateBucketMetadata {
        const message = { ...baseUpdateBucketMetadata } as UpdateBucketMetadata;
        message.name = object.name ?? '';
        return message;
    },
};

const baseDeleteBucketMetadata: object = { name: '' };

export const DeleteBucketMetadata: {
    encode(message: DeleteBucketMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteBucketMetadata;
    fromJSON(object: any): DeleteBucketMetadata;
    toJSON(message: DeleteBucketMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<DeleteBucketMetadata>, I>>(object: I): DeleteBucketMetadata;
} = {
    encode(message: DeleteBucketMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteBucketMetadata {
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
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        return message;
    },

    toJSON(message: DeleteBucketMetadata): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteBucketMetadata>, I>>(
        object: I,
    ): DeleteBucketMetadata {
        const message = { ...baseDeleteBucketMetadata } as DeleteBucketMetadata;
        message.name = object.name ?? '';
        return message;
    },
};

const baseSetBucketHTTPSConfigMetadata: object = { name: '' };

export const SetBucketHTTPSConfigMetadata: {
    encode(message: SetBucketHTTPSConfigMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetBucketHTTPSConfigMetadata;
    fromJSON(object: any): SetBucketHTTPSConfigMetadata;
    toJSON(message: SetBucketHTTPSConfigMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<SetBucketHTTPSConfigMetadata>, I>>(object: I): SetBucketHTTPSConfigMetadata;
} = {
    encode(
        message: SetBucketHTTPSConfigMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SetBucketHTTPSConfigMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSetBucketHTTPSConfigMetadata } as SetBucketHTTPSConfigMetadata;
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
        const message = { ...baseSetBucketHTTPSConfigMetadata } as SetBucketHTTPSConfigMetadata;
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        return message;
    },

    toJSON(message: SetBucketHTTPSConfigMetadata): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SetBucketHTTPSConfigMetadata>, I>>(
        object: I,
    ): SetBucketHTTPSConfigMetadata {
        const message = { ...baseSetBucketHTTPSConfigMetadata } as SetBucketHTTPSConfigMetadata;
        message.name = object.name ?? '';
        return message;
    },
};

const baseDeleteBucketHTTPSConfigMetadata: object = { name: '' };

export const DeleteBucketHTTPSConfigMetadata: {
    encode(message: DeleteBucketHTTPSConfigMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteBucketHTTPSConfigMetadata;
    fromJSON(object: any): DeleteBucketHTTPSConfigMetadata;
    toJSON(message: DeleteBucketHTTPSConfigMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<DeleteBucketHTTPSConfigMetadata>, I>>(object: I): DeleteBucketHTTPSConfigMetadata;
} = {
    encode(
        message: DeleteBucketHTTPSConfigMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteBucketHTTPSConfigMetadata {
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
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        return message;
    },

    toJSON(message: DeleteBucketHTTPSConfigMetadata): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteBucketHTTPSConfigMetadata>, I>>(
        object: I,
    ): DeleteBucketHTTPSConfigMetadata {
        const message = {
            ...baseDeleteBucketHTTPSConfigMetadata,
        } as DeleteBucketHTTPSConfigMetadata;
        message.name = object.name ?? '';
        return message;
    },
};

const baseCreateBucketRequest: object = {
    name: '',
    folderId: '',
    defaultStorageClass: '',
    maxSize: 0,
    versioning: 0,
    disabledStatickeyAuth: false,
};

export const CreateBucketRequest: {
    encode(message: CreateBucketRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateBucketRequest;
    fromJSON(object: any): CreateBucketRequest;
    toJSON(message: CreateBucketRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<CreateBucketRequest>, I>>(object: I): CreateBucketRequest;
} = {
    encode(message: CreateBucketRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.folderId !== '') {
            writer.uint32(18).string(message.folderId);
        }
        if (message.defaultStorageClass !== '') {
            writer.uint32(34).string(message.defaultStorageClass);
        }
        if (message.maxSize !== 0) {
            writer.uint32(40).int64(message.maxSize);
        }
        if (message.anonymousAccessFlags !== undefined) {
            AnonymousAccessFlags.encode(
                message.anonymousAccessFlags,
                writer.uint32(50).fork(),
            ).ldelim();
        }
        if (message.acl !== undefined) {
            ACL.encode(message.acl, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.tags) {
            Tag.encode(v!, writer.uint32(66).fork()).ldelim();
        }
        if (message.encryption !== undefined) {
            Encryption.encode(message.encryption, writer.uint32(74).fork()).ldelim();
        }
        if (message.versioning !== 0) {
            writer.uint32(80).int32(message.versioning);
        }
        if (message.allowedPrivateEndpoints !== undefined) {
            BucketAllowedPrivateEndpoints.encode(
                message.allowedPrivateEndpoints,
                writer.uint32(90).fork(),
            ).ldelim();
        }
        if (message.disabledStatickeyAuth === true) {
            writer.uint32(96).bool(message.disabledStatickeyAuth);
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
                        reader.uint32(),
                    );
                    break;
                case 7:
                    message.acl = ACL.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.tags.push(Tag.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.encryption = Encryption.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.versioning = reader.int32() as any;
                    break;
                case 11:
                    message.allowedPrivateEndpoints = BucketAllowedPrivateEndpoints.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 12:
                    message.disabledStatickeyAuth = reader.bool();
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
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : '';
        message.defaultStorageClass =
            object.defaultStorageClass !== undefined && object.defaultStorageClass !== null
                ? String(object.defaultStorageClass)
                : '';
        message.maxSize =
            object.maxSize !== undefined && object.maxSize !== null ? Number(object.maxSize) : 0;
        message.anonymousAccessFlags =
            object.anonymousAccessFlags !== undefined && object.anonymousAccessFlags !== null
                ? AnonymousAccessFlags.fromJSON(object.anonymousAccessFlags)
                : undefined;
        message.acl =
            object.acl !== undefined && object.acl !== null ? ACL.fromJSON(object.acl) : undefined;
        message.tags = (object.tags ?? []).map((e: any) => Tag.fromJSON(e));
        message.encryption =
            object.encryption !== undefined && object.encryption !== null
                ? Encryption.fromJSON(object.encryption)
                : undefined;
        message.versioning =
            object.versioning !== undefined && object.versioning !== null
                ? versioningFromJSON(object.versioning)
                : 0;
        message.allowedPrivateEndpoints =
            object.allowedPrivateEndpoints !== undefined && object.allowedPrivateEndpoints !== null
                ? BucketAllowedPrivateEndpoints.fromJSON(object.allowedPrivateEndpoints)
                : undefined;
        message.disabledStatickeyAuth =
            object.disabledStatickeyAuth !== undefined && object.disabledStatickeyAuth !== null
                ? Boolean(object.disabledStatickeyAuth)
                : false;
        return message;
    },

    toJSON(message: CreateBucketRequest): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.defaultStorageClass !== undefined &&
            (obj.defaultStorageClass = message.defaultStorageClass);
        message.maxSize !== undefined && (obj.maxSize = Math.round(message.maxSize));
        message.anonymousAccessFlags !== undefined &&
            (obj.anonymousAccessFlags = message.anonymousAccessFlags
                ? AnonymousAccessFlags.toJSON(message.anonymousAccessFlags)
                : undefined);
        message.acl !== undefined && (obj.acl = message.acl ? ACL.toJSON(message.acl) : undefined);
        if (message.tags) {
            obj.tags = message.tags.map((e) => (e ? Tag.toJSON(e) : undefined));
        } else {
            obj.tags = [];
        }
        message.encryption !== undefined &&
            (obj.encryption = message.encryption
                ? Encryption.toJSON(message.encryption)
                : undefined);
        message.versioning !== undefined && (obj.versioning = versioningToJSON(message.versioning));
        message.allowedPrivateEndpoints !== undefined &&
            (obj.allowedPrivateEndpoints = message.allowedPrivateEndpoints
                ? BucketAllowedPrivateEndpoints.toJSON(message.allowedPrivateEndpoints)
                : undefined);
        message.disabledStatickeyAuth !== undefined &&
            (obj.disabledStatickeyAuth = message.disabledStatickeyAuth);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateBucketRequest>, I>>(
        object: I,
    ): CreateBucketRequest {
        const message = { ...baseCreateBucketRequest } as CreateBucketRequest;
        message.name = object.name ?? '';
        message.folderId = object.folderId ?? '';
        message.defaultStorageClass = object.defaultStorageClass ?? '';
        message.maxSize = object.maxSize ?? 0;
        message.anonymousAccessFlags =
            object.anonymousAccessFlags !== undefined && object.anonymousAccessFlags !== null
                ? AnonymousAccessFlags.fromPartial(object.anonymousAccessFlags)
                : undefined;
        message.acl =
            object.acl !== undefined && object.acl !== null
                ? ACL.fromPartial(object.acl)
                : undefined;
        message.tags = object.tags?.map((e) => Tag.fromPartial(e)) || [];
        message.encryption =
            object.encryption !== undefined && object.encryption !== null
                ? Encryption.fromPartial(object.encryption)
                : undefined;
        message.versioning = object.versioning ?? 0;
        message.allowedPrivateEndpoints =
            object.allowedPrivateEndpoints !== undefined && object.allowedPrivateEndpoints !== null
                ? BucketAllowedPrivateEndpoints.fromPartial(object.allowedPrivateEndpoints)
                : undefined;
        message.disabledStatickeyAuth = object.disabledStatickeyAuth ?? false;
        return message;
    },
};

const baseUpdateBucketRequest: object = {
    name: '',
    defaultStorageClass: '',
    maxSize: 0,
    versioning: 0,
    disabledStatickeyAuth: false,
};

export const UpdateBucketRequest: {
    encode(message: UpdateBucketRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateBucketRequest;
    fromJSON(object: any): UpdateBucketRequest;
    toJSON(message: UpdateBucketRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<UpdateBucketRequest>, I>>(object: I): UpdateBucketRequest;
} = {
    encode(message: UpdateBucketRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.updateMask !== undefined) {
            FieldMask.encode(message.updateMask, writer.uint32(18).fork()).ldelim();
        }
        if (message.anonymousAccessFlags !== undefined) {
            AnonymousAccessFlags.encode(
                message.anonymousAccessFlags,
                writer.uint32(26).fork(),
            ).ldelim();
        }
        if (message.defaultStorageClass !== '') {
            writer.uint32(34).string(message.defaultStorageClass);
        }
        if (message.maxSize !== 0) {
            writer.uint32(40).int64(message.maxSize);
        }
        for (const v of message.cors) {
            CorsRule.encode(v!, writer.uint32(50).fork()).ldelim();
        }
        if (message.websiteSettings !== undefined) {
            WebsiteSettings.encode(message.websiteSettings, writer.uint32(58).fork()).ldelim();
        }
        if (message.versioning !== 0) {
            writer.uint32(64).int32(message.versioning);
        }
        for (const v of message.lifecycleRules) {
            LifecycleRule.encode(v!, writer.uint32(74).fork()).ldelim();
        }
        if (message.policy !== undefined) {
            Struct.encode(Struct.wrap(message.policy), writer.uint32(82).fork()).ldelim();
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
        if (message.allowedPrivateEndpoints !== undefined) {
            BucketAllowedPrivateEndpoints.encode(
                message.allowedPrivateEndpoints,
                writer.uint32(122).fork(),
            ).ldelim();
        }
        if (message.disabledStatickeyAuth === true) {
            writer.uint32(128).bool(message.disabledStatickeyAuth);
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
                        reader.uint32(),
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
                    message.websiteSettings = WebsiteSettings.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.versioning = reader.int32() as any;
                    break;
                case 9:
                    message.lifecycleRules.push(LifecycleRule.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.policy = Struct.unwrap(Struct.decode(reader, reader.uint32()));
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
                case 15:
                    message.allowedPrivateEndpoints = BucketAllowedPrivateEndpoints.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 16:
                    message.disabledStatickeyAuth = reader.bool();
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
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? FieldMask.fromJSON(object.updateMask)
                : undefined;
        message.anonymousAccessFlags =
            object.anonymousAccessFlags !== undefined && object.anonymousAccessFlags !== null
                ? AnonymousAccessFlags.fromJSON(object.anonymousAccessFlags)
                : undefined;
        message.defaultStorageClass =
            object.defaultStorageClass !== undefined && object.defaultStorageClass !== null
                ? String(object.defaultStorageClass)
                : '';
        message.maxSize =
            object.maxSize !== undefined && object.maxSize !== null ? Number(object.maxSize) : 0;
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
            LifecycleRule.fromJSON(e),
        );
        message.policy = typeof object.policy === 'object' ? object.policy : undefined;
        message.acl =
            object.acl !== undefined && object.acl !== null ? ACL.fromJSON(object.acl) : undefined;
        message.tags = (object.tags ?? []).map((e: any) => Tag.fromJSON(e));
        message.objectLock =
            object.objectLock !== undefined && object.objectLock !== null
                ? ObjectLock.fromJSON(object.objectLock)
                : undefined;
        message.encryption =
            object.encryption !== undefined && object.encryption !== null
                ? Encryption.fromJSON(object.encryption)
                : undefined;
        message.allowedPrivateEndpoints =
            object.allowedPrivateEndpoints !== undefined && object.allowedPrivateEndpoints !== null
                ? BucketAllowedPrivateEndpoints.fromJSON(object.allowedPrivateEndpoints)
                : undefined;
        message.disabledStatickeyAuth =
            object.disabledStatickeyAuth !== undefined && object.disabledStatickeyAuth !== null
                ? Boolean(object.disabledStatickeyAuth)
                : false;
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
        message.maxSize !== undefined && (obj.maxSize = Math.round(message.maxSize));
        if (message.cors) {
            obj.cors = message.cors.map((e) => (e ? CorsRule.toJSON(e) : undefined));
        } else {
            obj.cors = [];
        }
        message.websiteSettings !== undefined &&
            (obj.websiteSettings = message.websiteSettings
                ? WebsiteSettings.toJSON(message.websiteSettings)
                : undefined);
        message.versioning !== undefined && (obj.versioning = versioningToJSON(message.versioning));
        if (message.lifecycleRules) {
            obj.lifecycleRules = message.lifecycleRules.map((e) =>
                e ? LifecycleRule.toJSON(e) : undefined,
            );
        } else {
            obj.lifecycleRules = [];
        }
        message.policy !== undefined && (obj.policy = message.policy);
        message.acl !== undefined && (obj.acl = message.acl ? ACL.toJSON(message.acl) : undefined);
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
        message.allowedPrivateEndpoints !== undefined &&
            (obj.allowedPrivateEndpoints = message.allowedPrivateEndpoints
                ? BucketAllowedPrivateEndpoints.toJSON(message.allowedPrivateEndpoints)
                : undefined);
        message.disabledStatickeyAuth !== undefined &&
            (obj.disabledStatickeyAuth = message.disabledStatickeyAuth);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateBucketRequest>, I>>(
        object: I,
    ): UpdateBucketRequest {
        const message = { ...baseUpdateBucketRequest } as UpdateBucketRequest;
        message.name = object.name ?? '';
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? FieldMask.fromPartial(object.updateMask)
                : undefined;
        message.anonymousAccessFlags =
            object.anonymousAccessFlags !== undefined && object.anonymousAccessFlags !== null
                ? AnonymousAccessFlags.fromPartial(object.anonymousAccessFlags)
                : undefined;
        message.defaultStorageClass = object.defaultStorageClass ?? '';
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
        message.allowedPrivateEndpoints =
            object.allowedPrivateEndpoints !== undefined && object.allowedPrivateEndpoints !== null
                ? BucketAllowedPrivateEndpoints.fromPartial(object.allowedPrivateEndpoints)
                : undefined;
        message.disabledStatickeyAuth = object.disabledStatickeyAuth ?? false;
        return message;
    },
};

const baseDeleteBucketRequest: object = { name: '' };

export const DeleteBucketRequest: {
    encode(message: DeleteBucketRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteBucketRequest;
    fromJSON(object: any): DeleteBucketRequest;
    toJSON(message: DeleteBucketRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<DeleteBucketRequest>, I>>(object: I): DeleteBucketRequest;
} = {
    encode(message: DeleteBucketRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.name !== '') {
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
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        return message;
    },

    toJSON(message: DeleteBucketRequest): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteBucketRequest>, I>>(
        object: I,
    ): DeleteBucketRequest {
        const message = { ...baseDeleteBucketRequest } as DeleteBucketRequest;
        message.name = object.name ?? '';
        return message;
    },
};

const baseGetBucketStatsRequest: object = { name: '' };

export const GetBucketStatsRequest: {
    encode(message: GetBucketStatsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetBucketStatsRequest;
    fromJSON(object: any): GetBucketStatsRequest;
    toJSON(message: GetBucketStatsRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<GetBucketStatsRequest>, I>>(object: I): GetBucketStatsRequest;
} = {
    encode(message: GetBucketStatsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetBucketStatsRequest {
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
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        return message;
    },

    toJSON(message: GetBucketStatsRequest): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetBucketStatsRequest>, I>>(
        object: I,
    ): GetBucketStatsRequest {
        const message = { ...baseGetBucketStatsRequest } as GetBucketStatsRequest;
        message.name = object.name ?? '';
        return message;
    },
};

const baseGetBucketHTTPSConfigRequest: object = { name: '' };

export const GetBucketHTTPSConfigRequest: {
    encode(message: GetBucketHTTPSConfigRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetBucketHTTPSConfigRequest;
    fromJSON(object: any): GetBucketHTTPSConfigRequest;
    toJSON(message: GetBucketHTTPSConfigRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<GetBucketHTTPSConfigRequest>, I>>(object: I): GetBucketHTTPSConfigRequest;
} = {
    encode(
        message: GetBucketHTTPSConfigRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetBucketHTTPSConfigRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetBucketHTTPSConfigRequest } as GetBucketHTTPSConfigRequest;
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
        const message = { ...baseGetBucketHTTPSConfigRequest } as GetBucketHTTPSConfigRequest;
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        return message;
    },

    toJSON(message: GetBucketHTTPSConfigRequest): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetBucketHTTPSConfigRequest>, I>>(
        object: I,
    ): GetBucketHTTPSConfigRequest {
        const message = { ...baseGetBucketHTTPSConfigRequest } as GetBucketHTTPSConfigRequest;
        message.name = object.name ?? '';
        return message;
    },
};

const baseSelfManagedHTTPSConfigParams: object = { certificatePem: '', privateKeyPem: '' };

export const SelfManagedHTTPSConfigParams: {
    encode(message: SelfManagedHTTPSConfigParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SelfManagedHTTPSConfigParams;
    fromJSON(object: any): SelfManagedHTTPSConfigParams;
    toJSON(message: SelfManagedHTTPSConfigParams): unknown;
    fromPartial<I extends Exact<DeepPartial<SelfManagedHTTPSConfigParams>, I>>(object: I): SelfManagedHTTPSConfigParams;
} = {
    encode(
        message: SelfManagedHTTPSConfigParams,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.certificatePem !== '') {
            writer.uint32(10).string(message.certificatePem);
        }
        if (message.privateKeyPem !== '') {
            writer.uint32(18).string(message.privateKeyPem);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SelfManagedHTTPSConfigParams {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSelfManagedHTTPSConfigParams } as SelfManagedHTTPSConfigParams;
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
        const message = { ...baseSelfManagedHTTPSConfigParams } as SelfManagedHTTPSConfigParams;
        message.certificatePem =
            object.certificatePem !== undefined && object.certificatePem !== null
                ? String(object.certificatePem)
                : '';
        message.privateKeyPem =
            object.privateKeyPem !== undefined && object.privateKeyPem !== null
                ? String(object.privateKeyPem)
                : '';
        return message;
    },

    toJSON(message: SelfManagedHTTPSConfigParams): unknown {
        const obj: any = {};
        message.certificatePem !== undefined && (obj.certificatePem = message.certificatePem);
        message.privateKeyPem !== undefined && (obj.privateKeyPem = message.privateKeyPem);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SelfManagedHTTPSConfigParams>, I>>(
        object: I,
    ): SelfManagedHTTPSConfigParams {
        const message = { ...baseSelfManagedHTTPSConfigParams } as SelfManagedHTTPSConfigParams;
        message.certificatePem = object.certificatePem ?? '';
        message.privateKeyPem = object.privateKeyPem ?? '';
        return message;
    },
};

const baseCertificateManagerHTTPSConfigParams: object = { certificateId: '' };

export const CertificateManagerHTTPSConfigParams: {
    encode(message: CertificateManagerHTTPSConfigParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CertificateManagerHTTPSConfigParams;
    fromJSON(object: any): CertificateManagerHTTPSConfigParams;
    toJSON(message: CertificateManagerHTTPSConfigParams): unknown;
    fromPartial<I extends Exact<DeepPartial<CertificateManagerHTTPSConfigParams>, I>>(object: I): CertificateManagerHTTPSConfigParams;
} = {
    encode(
        message: CertificateManagerHTTPSConfigParams,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.certificateId !== '') {
            writer.uint32(10).string(message.certificateId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CertificateManagerHTTPSConfigParams {
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
                : '';
        return message;
    },

    toJSON(message: CertificateManagerHTTPSConfigParams): unknown {
        const obj: any = {};
        message.certificateId !== undefined && (obj.certificateId = message.certificateId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CertificateManagerHTTPSConfigParams>, I>>(
        object: I,
    ): CertificateManagerHTTPSConfigParams {
        const message = {
            ...baseCertificateManagerHTTPSConfigParams,
        } as CertificateManagerHTTPSConfigParams;
        message.certificateId = object.certificateId ?? '';
        return message;
    },
};

const baseSetBucketHTTPSConfigRequest: object = { name: '' };

export const SetBucketHTTPSConfigRequest: {
    encode(message: SetBucketHTTPSConfigRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetBucketHTTPSConfigRequest;
    fromJSON(object: any): SetBucketHTTPSConfigRequest;
    toJSON(message: SetBucketHTTPSConfigRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<SetBucketHTTPSConfigRequest>, I>>(object: I): SetBucketHTTPSConfigRequest;
} = {
    encode(
        message: SetBucketHTTPSConfigRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.selfManaged !== undefined) {
            SelfManagedHTTPSConfigParams.encode(
                message.selfManaged,
                writer.uint32(18).fork(),
            ).ldelim();
        }
        if (message.certificateManager !== undefined) {
            CertificateManagerHTTPSConfigParams.encode(
                message.certificateManager,
                writer.uint32(26).fork(),
            ).ldelim();
        }
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SetBucketHTTPSConfigRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSetBucketHTTPSConfigRequest } as SetBucketHTTPSConfigRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.selfManaged = SelfManagedHTTPSConfigParams.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 3:
                    message.certificateManager = CertificateManagerHTTPSConfigParams.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
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

    fromJSON(object: any): SetBucketHTTPSConfigRequest {
        const message = { ...baseSetBucketHTTPSConfigRequest } as SetBucketHTTPSConfigRequest;
        message.selfManaged =
            object.selfManaged !== undefined && object.selfManaged !== null
                ? SelfManagedHTTPSConfigParams.fromJSON(object.selfManaged)
                : undefined;
        message.certificateManager =
            object.certificateManager !== undefined && object.certificateManager !== null
                ? CertificateManagerHTTPSConfigParams.fromJSON(object.certificateManager)
                : undefined;
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        return message;
    },

    toJSON(message: SetBucketHTTPSConfigRequest): unknown {
        const obj: any = {};
        message.selfManaged !== undefined &&
            (obj.selfManaged = message.selfManaged
                ? SelfManagedHTTPSConfigParams.toJSON(message.selfManaged)
                : undefined);
        message.certificateManager !== undefined &&
            (obj.certificateManager = message.certificateManager
                ? CertificateManagerHTTPSConfigParams.toJSON(message.certificateManager)
                : undefined);
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SetBucketHTTPSConfigRequest>, I>>(
        object: I,
    ): SetBucketHTTPSConfigRequest {
        const message = { ...baseSetBucketHTTPSConfigRequest } as SetBucketHTTPSConfigRequest;
        message.selfManaged =
            object.selfManaged !== undefined && object.selfManaged !== null
                ? SelfManagedHTTPSConfigParams.fromPartial(object.selfManaged)
                : undefined;
        message.certificateManager =
            object.certificateManager !== undefined && object.certificateManager !== null
                ? CertificateManagerHTTPSConfigParams.fromPartial(object.certificateManager)
                : undefined;
        message.name = object.name ?? '';
        return message;
    },
};

const baseDeleteBucketHTTPSConfigRequest: object = { name: '' };

export const DeleteBucketHTTPSConfigRequest: {
    encode(message: DeleteBucketHTTPSConfigRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteBucketHTTPSConfigRequest;
    fromJSON(object: any): DeleteBucketHTTPSConfigRequest;
    toJSON(message: DeleteBucketHTTPSConfigRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<DeleteBucketHTTPSConfigRequest>, I>>(object: I): DeleteBucketHTTPSConfigRequest;
} = {
    encode(
        message: DeleteBucketHTTPSConfigRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteBucketHTTPSConfigRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteBucketHTTPSConfigRequest } as DeleteBucketHTTPSConfigRequest;
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
        const message = { ...baseDeleteBucketHTTPSConfigRequest } as DeleteBucketHTTPSConfigRequest;
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        return message;
    },

    toJSON(message: DeleteBucketHTTPSConfigRequest): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteBucketHTTPSConfigRequest>, I>>(
        object: I,
    ): DeleteBucketHTTPSConfigRequest {
        const message = { ...baseDeleteBucketHTTPSConfigRequest } as DeleteBucketHTTPSConfigRequest;
        message.name = object.name ?? '';
        return message;
    },
};

const baseCreateBucketInventoryConfigurationRequest: object = { bucket: '', id: '' };

export const CreateBucketInventoryConfigurationRequest: {
    encode(message: CreateBucketInventoryConfigurationRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateBucketInventoryConfigurationRequest;
    fromJSON(object: any): CreateBucketInventoryConfigurationRequest;
    toJSON(message: CreateBucketInventoryConfigurationRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<CreateBucketInventoryConfigurationRequest>, I>>(object: I): CreateBucketInventoryConfigurationRequest;
} = {
    encode(
        message: CreateBucketInventoryConfigurationRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.bucket !== '') {
            writer.uint32(10).string(message.bucket);
        }
        if (message.id !== '') {
            writer.uint32(18).string(message.id);
        }
        if (message.configuration !== undefined) {
            InventoryConfiguration.encode(message.configuration, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): CreateBucketInventoryConfigurationRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateBucketInventoryConfigurationRequest,
        } as CreateBucketInventoryConfigurationRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bucket = reader.string();
                    break;
                case 2:
                    message.id = reader.string();
                    break;
                case 3:
                    message.configuration = InventoryConfiguration.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateBucketInventoryConfigurationRequest {
        const message = {
            ...baseCreateBucketInventoryConfigurationRequest,
        } as CreateBucketInventoryConfigurationRequest;
        message.bucket =
            object.bucket !== undefined && object.bucket !== null ? String(object.bucket) : '';
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.configuration =
            object.configuration !== undefined && object.configuration !== null
                ? InventoryConfiguration.fromJSON(object.configuration)
                : undefined;
        return message;
    },

    toJSON(message: CreateBucketInventoryConfigurationRequest): unknown {
        const obj: any = {};
        message.bucket !== undefined && (obj.bucket = message.bucket);
        message.id !== undefined && (obj.id = message.id);
        message.configuration !== undefined &&
            (obj.configuration = message.configuration
                ? InventoryConfiguration.toJSON(message.configuration)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateBucketInventoryConfigurationRequest>, I>>(
        object: I,
    ): CreateBucketInventoryConfigurationRequest {
        const message = {
            ...baseCreateBucketInventoryConfigurationRequest,
        } as CreateBucketInventoryConfigurationRequest;
        message.bucket = object.bucket ?? '';
        message.id = object.id ?? '';
        message.configuration =
            object.configuration !== undefined && object.configuration !== null
                ? InventoryConfiguration.fromPartial(object.configuration)
                : undefined;
        return message;
    },
};

const baseCreateBucketInventoryConfigurationMetadata: object = { name: '' };

export const CreateBucketInventoryConfigurationMetadata: {
    encode(message: CreateBucketInventoryConfigurationMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateBucketInventoryConfigurationMetadata;
    fromJSON(object: any): CreateBucketInventoryConfigurationMetadata;
    toJSON(message: CreateBucketInventoryConfigurationMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<CreateBucketInventoryConfigurationMetadata>, I>>(object: I): CreateBucketInventoryConfigurationMetadata;
} = {
    encode(
        message: CreateBucketInventoryConfigurationMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): CreateBucketInventoryConfigurationMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateBucketInventoryConfigurationMetadata,
        } as CreateBucketInventoryConfigurationMetadata;
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

    fromJSON(object: any): CreateBucketInventoryConfigurationMetadata {
        const message = {
            ...baseCreateBucketInventoryConfigurationMetadata,
        } as CreateBucketInventoryConfigurationMetadata;
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        return message;
    },

    toJSON(message: CreateBucketInventoryConfigurationMetadata): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateBucketInventoryConfigurationMetadata>, I>>(
        object: I,
    ): CreateBucketInventoryConfigurationMetadata {
        const message = {
            ...baseCreateBucketInventoryConfigurationMetadata,
        } as CreateBucketInventoryConfigurationMetadata;
        message.name = object.name ?? '';
        return message;
    },
};

const baseGetBucketInventoryConfigurationRequest: object = { bucket: '', id: '' };

export const GetBucketInventoryConfigurationRequest: {
    encode(message: GetBucketInventoryConfigurationRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetBucketInventoryConfigurationRequest;
    fromJSON(object: any): GetBucketInventoryConfigurationRequest;
    toJSON(message: GetBucketInventoryConfigurationRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<GetBucketInventoryConfigurationRequest>, I>>(object: I): GetBucketInventoryConfigurationRequest;
} = {
    encode(
        message: GetBucketInventoryConfigurationRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.bucket !== '') {
            writer.uint32(10).string(message.bucket);
        }
        if (message.id !== '') {
            writer.uint32(18).string(message.id);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): GetBucketInventoryConfigurationRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetBucketInventoryConfigurationRequest,
        } as GetBucketInventoryConfigurationRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bucket = reader.string();
                    break;
                case 2:
                    message.id = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetBucketInventoryConfigurationRequest {
        const message = {
            ...baseGetBucketInventoryConfigurationRequest,
        } as GetBucketInventoryConfigurationRequest;
        message.bucket =
            object.bucket !== undefined && object.bucket !== null ? String(object.bucket) : '';
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        return message;
    },

    toJSON(message: GetBucketInventoryConfigurationRequest): unknown {
        const obj: any = {};
        message.bucket !== undefined && (obj.bucket = message.bucket);
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetBucketInventoryConfigurationRequest>, I>>(
        object: I,
    ): GetBucketInventoryConfigurationRequest {
        const message = {
            ...baseGetBucketInventoryConfigurationRequest,
        } as GetBucketInventoryConfigurationRequest;
        message.bucket = object.bucket ?? '';
        message.id = object.id ?? '';
        return message;
    },
};

const baseDeleteBucketInventoryConfigurationRequest: object = { bucket: '', id: '' };

export const DeleteBucketInventoryConfigurationRequest: {
    encode(message: DeleteBucketInventoryConfigurationRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteBucketInventoryConfigurationRequest;
    fromJSON(object: any): DeleteBucketInventoryConfigurationRequest;
    toJSON(message: DeleteBucketInventoryConfigurationRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<DeleteBucketInventoryConfigurationRequest>, I>>(object: I): DeleteBucketInventoryConfigurationRequest;
} = {
    encode(
        message: DeleteBucketInventoryConfigurationRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.bucket !== '') {
            writer.uint32(10).string(message.bucket);
        }
        if (message.id !== '') {
            writer.uint32(18).string(message.id);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): DeleteBucketInventoryConfigurationRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteBucketInventoryConfigurationRequest,
        } as DeleteBucketInventoryConfigurationRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bucket = reader.string();
                    break;
                case 2:
                    message.id = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteBucketInventoryConfigurationRequest {
        const message = {
            ...baseDeleteBucketInventoryConfigurationRequest,
        } as DeleteBucketInventoryConfigurationRequest;
        message.bucket =
            object.bucket !== undefined && object.bucket !== null ? String(object.bucket) : '';
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        return message;
    },

    toJSON(message: DeleteBucketInventoryConfigurationRequest): unknown {
        const obj: any = {};
        message.bucket !== undefined && (obj.bucket = message.bucket);
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteBucketInventoryConfigurationRequest>, I>>(
        object: I,
    ): DeleteBucketInventoryConfigurationRequest {
        const message = {
            ...baseDeleteBucketInventoryConfigurationRequest,
        } as DeleteBucketInventoryConfigurationRequest;
        message.bucket = object.bucket ?? '';
        message.id = object.id ?? '';
        return message;
    },
};

const baseDeleteBucketInventoryConfigurationMetadata: object = { name: '' };

export const DeleteBucketInventoryConfigurationMetadata: {
    encode(message: DeleteBucketInventoryConfigurationMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteBucketInventoryConfigurationMetadata;
    fromJSON(object: any): DeleteBucketInventoryConfigurationMetadata;
    toJSON(message: DeleteBucketInventoryConfigurationMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<DeleteBucketInventoryConfigurationMetadata>, I>>(object: I): DeleteBucketInventoryConfigurationMetadata;
} = {
    encode(
        message: DeleteBucketInventoryConfigurationMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): DeleteBucketInventoryConfigurationMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteBucketInventoryConfigurationMetadata,
        } as DeleteBucketInventoryConfigurationMetadata;
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

    fromJSON(object: any): DeleteBucketInventoryConfigurationMetadata {
        const message = {
            ...baseDeleteBucketInventoryConfigurationMetadata,
        } as DeleteBucketInventoryConfigurationMetadata;
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        return message;
    },

    toJSON(message: DeleteBucketInventoryConfigurationMetadata): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteBucketInventoryConfigurationMetadata>, I>>(
        object: I,
    ): DeleteBucketInventoryConfigurationMetadata {
        const message = {
            ...baseDeleteBucketInventoryConfigurationMetadata,
        } as DeleteBucketInventoryConfigurationMetadata;
        message.name = object.name ?? '';
        return message;
    },
};

const baseListBucketInventoryConfigurationsRequest: object = { bucket: '', pageToken: '' };

export const ListBucketInventoryConfigurationsRequest: {
    encode(message: ListBucketInventoryConfigurationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListBucketInventoryConfigurationsRequest;
    fromJSON(object: any): ListBucketInventoryConfigurationsRequest;
    toJSON(message: ListBucketInventoryConfigurationsRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<ListBucketInventoryConfigurationsRequest>, I>>(object: I): ListBucketInventoryConfigurationsRequest;
} = {
    encode(
        message: ListBucketInventoryConfigurationsRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.bucket !== '') {
            writer.uint32(10).string(message.bucket);
        }
        if (message.pageToken !== '') {
            writer.uint32(18).string(message.pageToken);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): ListBucketInventoryConfigurationsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListBucketInventoryConfigurationsRequest,
        } as ListBucketInventoryConfigurationsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bucket = reader.string();
                    break;
                case 2:
                    message.pageToken = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListBucketInventoryConfigurationsRequest {
        const message = {
            ...baseListBucketInventoryConfigurationsRequest,
        } as ListBucketInventoryConfigurationsRequest;
        message.bucket =
            object.bucket !== undefined && object.bucket !== null ? String(object.bucket) : '';
        message.pageToken =
            object.pageToken !== undefined && object.pageToken !== null
                ? String(object.pageToken)
                : '';
        return message;
    },

    toJSON(message: ListBucketInventoryConfigurationsRequest): unknown {
        const obj: any = {};
        message.bucket !== undefined && (obj.bucket = message.bucket);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListBucketInventoryConfigurationsRequest>, I>>(
        object: I,
    ): ListBucketInventoryConfigurationsRequest {
        const message = {
            ...baseListBucketInventoryConfigurationsRequest,
        } as ListBucketInventoryConfigurationsRequest;
        message.bucket = object.bucket ?? '';
        message.pageToken = object.pageToken ?? '';
        return message;
    },
};

const baseListBucketInventoryConfigurationsResponse: object = { nextPageToken: '' };

export const ListBucketInventoryConfigurationsResponse: {
    encode(message: ListBucketInventoryConfigurationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListBucketInventoryConfigurationsResponse;
    fromJSON(object: any): ListBucketInventoryConfigurationsResponse;
    toJSON(message: ListBucketInventoryConfigurationsResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<ListBucketInventoryConfigurationsResponse>, I>>(object: I): ListBucketInventoryConfigurationsResponse;
} = {
    encode(
        message: ListBucketInventoryConfigurationsResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.configurations) {
            InventoryConfiguration.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): ListBucketInventoryConfigurationsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListBucketInventoryConfigurationsResponse,
        } as ListBucketInventoryConfigurationsResponse;
        message.configurations = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.configurations.push(
                        InventoryConfiguration.decode(reader, reader.uint32()),
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

    fromJSON(object: any): ListBucketInventoryConfigurationsResponse {
        const message = {
            ...baseListBucketInventoryConfigurationsResponse,
        } as ListBucketInventoryConfigurationsResponse;
        message.configurations = (object.configurations ?? []).map((e: any) =>
            InventoryConfiguration.fromJSON(e),
        );
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListBucketInventoryConfigurationsResponse): unknown {
        const obj: any = {};
        if (message.configurations) {
            obj.configurations = message.configurations.map((e) =>
                e ? InventoryConfiguration.toJSON(e) : undefined,
            );
        } else {
            obj.configurations = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListBucketInventoryConfigurationsResponse>, I>>(
        object: I,
    ): ListBucketInventoryConfigurationsResponse {
        const message = {
            ...baseListBucketInventoryConfigurationsResponse,
        } as ListBucketInventoryConfigurationsResponse;
        message.configurations =
            object.configurations?.map((e) => InventoryConfiguration.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

/** A set of methods for managing buckets. */
export const BucketServiceService = {
    /**
     * Retrieves the list of buckets in the specified folder.
     * The following fields will not be returned for buckets in the list: [Bucket.policy], [Bucket.acl], [Bucket.cors],
     * [Bucket.website_settings], [Bucket.lifecycle_rules], [Bucket.tags].
     */
    list: {
        path: '/yandex.cloud.storage.v1.BucketService/List',
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
     * To get the list of all available buckets, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.storage.v1.BucketService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetBucketRequest) =>
            Buffer.from(GetBucketRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetBucketRequest.decode(value),
        responseSerialize: (value: Bucket) => Buffer.from(Bucket.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Bucket.decode(value),
    },
    /** Creates a bucket in the specified folder. */
    create: {
        path: '/yandex.cloud.storage.v1.BucketService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateBucketRequest) =>
            Buffer.from(CreateBucketRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => CreateBucketRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /**
     * Updates the specified bucket.
     * In most cases, `storage.editor` role (see [documentation](/docs/storage/security/#storage-editor)) should be enough
     * to update a bucket, subject to its [policy](/docs/storage/concepts/policy).
     */
    update: {
        path: '/yandex.cloud.storage.v1.BucketService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateBucketRequest) =>
            Buffer.from(UpdateBucketRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpdateBucketRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Deletes the specified bucket. */
    delete: {
        path: '/yandex.cloud.storage.v1.BucketService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteBucketRequest) =>
            Buffer.from(DeleteBucketRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => DeleteBucketRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Returns the statistics for the specified bucket. */
    getStats: {
        path: '/yandex.cloud.storage.v1.BucketService/GetStats',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetBucketStatsRequest) =>
            Buffer.from(GetBucketStatsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetBucketStatsRequest.decode(value),
        responseSerialize: (value: BucketStats) => Buffer.from(BucketStats.encode(value).finish()),
        responseDeserialize: (value: Buffer) => BucketStats.decode(value),
    },
    /** Returns the HTTPS configuration for the specified bucket. */
    getHTTPSConfig: {
        path: '/yandex.cloud.storage.v1.BucketService/GetHTTPSConfig',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetBucketHTTPSConfigRequest) =>
            Buffer.from(GetBucketHTTPSConfigRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetBucketHTTPSConfigRequest.decode(value),
        responseSerialize: (value: HTTPSConfig) => Buffer.from(HTTPSConfig.encode(value).finish()),
        responseDeserialize: (value: Buffer) => HTTPSConfig.decode(value),
    },
    /**
     * Updates the HTTPS configuration for the specified bucket.
     * The updated configuration could take up to 30 minutes to apply to the bucket.
     */
    setHTTPSConfig: {
        path: '/yandex.cloud.storage.v1.BucketService/SetHTTPSConfig',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: SetBucketHTTPSConfigRequest) =>
            Buffer.from(SetBucketHTTPSConfigRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => SetBucketHTTPSConfigRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /**
     * Deletes the HTTPS configuration for the specified bucket.
     * (-- api-linter: yc::1705::http-method-mapping=disabled
     * for compatibility with old format --)
     */
    deleteHTTPSConfig: {
        path: '/yandex.cloud.storage.v1.BucketService/DeleteHTTPSConfig',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteBucketHTTPSConfigRequest) =>
            Buffer.from(DeleteBucketHTTPSConfigRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => DeleteBucketHTTPSConfigRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Sets access bindings for the specified bucket. */
    setAccessBindings: {
        path: '/yandex.cloud.storage.v1.BucketService/SetAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: SetAccessBindingsRequest) =>
            Buffer.from(SetAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => SetAccessBindingsRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /**
     * Updates access bindings for the specified bucket.
     * (-- api-linter: yc::1705::http-method-mapping=disabled
     * for compatibility with old format --)
     */
    updateAccessBindings: {
        path: '/yandex.cloud.storage.v1.BucketService/UpdateAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateAccessBindingsRequest) =>
            Buffer.from(UpdateAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpdateAccessBindingsRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Lists access bindings for the specified bucket. */
    listAccessBindings: {
        path: '/yandex.cloud.storage.v1.BucketService/ListAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListAccessBindingsRequest) =>
            Buffer.from(ListAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListAccessBindingsRequest.decode(value),
        responseSerialize: (value: ListAccessBindingsResponse) =>
            Buffer.from(ListAccessBindingsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListAccessBindingsResponse.decode(value),
    },
    /** Create/Update an inventory configuration with the corresponding ID */
    createInventoryConfiguration: {
        path: '/yandex.cloud.storage.v1.BucketService/CreateInventoryConfiguration',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateBucketInventoryConfigurationRequest) =>
            Buffer.from(CreateBucketInventoryConfigurationRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            CreateBucketInventoryConfigurationRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Get an inventory configuration with the corresponding ID */
    getInventoryConfiguration: {
        path: '/yandex.cloud.storage.v1.BucketService/GetInventoryConfiguration',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetBucketInventoryConfigurationRequest) =>
            Buffer.from(GetBucketInventoryConfigurationRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetBucketInventoryConfigurationRequest.decode(value),
        responseSerialize: (value: InventoryConfiguration) =>
            Buffer.from(InventoryConfiguration.encode(value).finish()),
        responseDeserialize: (value: Buffer) => InventoryConfiguration.decode(value),
    },
    /** Delete an inventory configuration with the corresponding ID */
    deleteInventoryConfiguration: {
        path: '/yandex.cloud.storage.v1.BucketService/DeleteInventoryConfiguration',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteBucketInventoryConfigurationRequest) =>
            Buffer.from(DeleteBucketInventoryConfigurationRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            DeleteBucketInventoryConfigurationRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Listing inventory configurations */
    listInventoryConfigurations: {
        path: '/yandex.cloud.storage.v1.BucketService/ListInventoryConfigurations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListBucketInventoryConfigurationsRequest) =>
            Buffer.from(ListBucketInventoryConfigurationsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            ListBucketInventoryConfigurationsRequest.decode(value),
        responseSerialize: (value: ListBucketInventoryConfigurationsResponse) =>
            Buffer.from(ListBucketInventoryConfigurationsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            ListBucketInventoryConfigurationsResponse.decode(value),
    },
} as const;

export interface BucketServiceServer extends UntypedServiceImplementation {
    /**
     * Retrieves the list of buckets in the specified folder.
     * The following fields will not be returned for buckets in the list: [Bucket.policy], [Bucket.acl], [Bucket.cors],
     * [Bucket.website_settings], [Bucket.lifecycle_rules], [Bucket.tags].
     */
    list: handleUnaryCall<ListBucketsRequest, ListBucketsResponse>;
    /**
     * Returns the specified bucket.
     * To get the list of all available buckets, make a [List] request.
     */
    get: handleUnaryCall<GetBucketRequest, Bucket>;
    /** Creates a bucket in the specified folder. */
    create: handleUnaryCall<CreateBucketRequest, Operation>;
    /**
     * Updates the specified bucket.
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
     * The updated configuration could take up to 30 minutes to apply to the bucket.
     */
    setHTTPSConfig: handleUnaryCall<SetBucketHTTPSConfigRequest, Operation>;
    /**
     * Deletes the HTTPS configuration for the specified bucket.
     * (-- api-linter: yc::1705::http-method-mapping=disabled
     * for compatibility with old format --)
     */
    deleteHTTPSConfig: handleUnaryCall<DeleteBucketHTTPSConfigRequest, Operation>;
    /** Sets access bindings for the specified bucket. */
    setAccessBindings: handleUnaryCall<SetAccessBindingsRequest, Operation>;
    /**
     * Updates access bindings for the specified bucket.
     * (-- api-linter: yc::1705::http-method-mapping=disabled
     * for compatibility with old format --)
     */
    updateAccessBindings: handleUnaryCall<UpdateAccessBindingsRequest, Operation>;
    /** Lists access bindings for the specified bucket. */
    listAccessBindings: handleUnaryCall<ListAccessBindingsRequest, ListAccessBindingsResponse>;
    /** Create/Update an inventory configuration with the corresponding ID */
    createInventoryConfiguration: handleUnaryCall<
        CreateBucketInventoryConfigurationRequest,
        Operation
    >;
    /** Get an inventory configuration with the corresponding ID */
    getInventoryConfiguration: handleUnaryCall<
        GetBucketInventoryConfigurationRequest,
        InventoryConfiguration
    >;
    /** Delete an inventory configuration with the corresponding ID */
    deleteInventoryConfiguration: handleUnaryCall<
        DeleteBucketInventoryConfigurationRequest,
        Operation
    >;
    /** Listing inventory configurations */
    listInventoryConfigurations: handleUnaryCall<
        ListBucketInventoryConfigurationsRequest,
        ListBucketInventoryConfigurationsResponse
    >;
}

export interface BucketServiceClient extends Client {
    /**
     * Retrieves the list of buckets in the specified folder.
     * The following fields will not be returned for buckets in the list: [Bucket.policy], [Bucket.acl], [Bucket.cors],
     * [Bucket.website_settings], [Bucket.lifecycle_rules], [Bucket.tags].
     */
    list(
        request: ListBucketsRequest,
        callback: (error: ServiceError | null, response: ListBucketsResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListBucketsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListBucketsResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListBucketsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListBucketsResponse) => void,
    ): ClientUnaryCall;
    /**
     * Returns the specified bucket.
     * To get the list of all available buckets, make a [List] request.
     */
    get(
        request: GetBucketRequest,
        callback: (error: ServiceError | null, response: Bucket) => void,
    ): ClientUnaryCall;
    get(
        request: GetBucketRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Bucket) => void,
    ): ClientUnaryCall;
    get(
        request: GetBucketRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Bucket) => void,
    ): ClientUnaryCall;
    /** Creates a bucket in the specified folder. */
    create(
        request: CreateBucketRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateBucketRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateBucketRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /**
     * Updates the specified bucket.
     * In most cases, `storage.editor` role (see [documentation](/docs/storage/security/#storage-editor)) should be enough
     * to update a bucket, subject to its [policy](/docs/storage/concepts/policy).
     */
    update(
        request: UpdateBucketRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateBucketRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateBucketRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Deletes the specified bucket. */
    delete(
        request: DeleteBucketRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteBucketRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteBucketRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Returns the statistics for the specified bucket. */
    getStats(
        request: GetBucketStatsRequest,
        callback: (error: ServiceError | null, response: BucketStats) => void,
    ): ClientUnaryCall;
    getStats(
        request: GetBucketStatsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: BucketStats) => void,
    ): ClientUnaryCall;
    getStats(
        request: GetBucketStatsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: BucketStats) => void,
    ): ClientUnaryCall;
    /** Returns the HTTPS configuration for the specified bucket. */
    getHTTPSConfig(
        request: GetBucketHTTPSConfigRequest,
        callback: (error: ServiceError | null, response: HTTPSConfig) => void,
    ): ClientUnaryCall;
    getHTTPSConfig(
        request: GetBucketHTTPSConfigRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: HTTPSConfig) => void,
    ): ClientUnaryCall;
    getHTTPSConfig(
        request: GetBucketHTTPSConfigRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: HTTPSConfig) => void,
    ): ClientUnaryCall;
    /**
     * Updates the HTTPS configuration for the specified bucket.
     * The updated configuration could take up to 30 minutes to apply to the bucket.
     */
    setHTTPSConfig(
        request: SetBucketHTTPSConfigRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    setHTTPSConfig(
        request: SetBucketHTTPSConfigRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    setHTTPSConfig(
        request: SetBucketHTTPSConfigRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /**
     * Deletes the HTTPS configuration for the specified bucket.
     * (-- api-linter: yc::1705::http-method-mapping=disabled
     * for compatibility with old format --)
     */
    deleteHTTPSConfig(
        request: DeleteBucketHTTPSConfigRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    deleteHTTPSConfig(
        request: DeleteBucketHTTPSConfigRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    deleteHTTPSConfig(
        request: DeleteBucketHTTPSConfigRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Sets access bindings for the specified bucket. */
    setAccessBindings(
        request: SetAccessBindingsRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    setAccessBindings(
        request: SetAccessBindingsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    setAccessBindings(
        request: SetAccessBindingsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /**
     * Updates access bindings for the specified bucket.
     * (-- api-linter: yc::1705::http-method-mapping=disabled
     * for compatibility with old format --)
     */
    updateAccessBindings(
        request: UpdateAccessBindingsRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    updateAccessBindings(
        request: UpdateAccessBindingsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    updateAccessBindings(
        request: UpdateAccessBindingsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Lists access bindings for the specified bucket. */
    listAccessBindings(
        request: ListAccessBindingsRequest,
        callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void,
    ): ClientUnaryCall;
    listAccessBindings(
        request: ListAccessBindingsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void,
    ): ClientUnaryCall;
    listAccessBindings(
        request: ListAccessBindingsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void,
    ): ClientUnaryCall;
    /** Create/Update an inventory configuration with the corresponding ID */
    createInventoryConfiguration(
        request: CreateBucketInventoryConfigurationRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    createInventoryConfiguration(
        request: CreateBucketInventoryConfigurationRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    createInventoryConfiguration(
        request: CreateBucketInventoryConfigurationRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Get an inventory configuration with the corresponding ID */
    getInventoryConfiguration(
        request: GetBucketInventoryConfigurationRequest,
        callback: (error: ServiceError | null, response: InventoryConfiguration) => void,
    ): ClientUnaryCall;
    getInventoryConfiguration(
        request: GetBucketInventoryConfigurationRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: InventoryConfiguration) => void,
    ): ClientUnaryCall;
    getInventoryConfiguration(
        request: GetBucketInventoryConfigurationRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: InventoryConfiguration) => void,
    ): ClientUnaryCall;
    /** Delete an inventory configuration with the corresponding ID */
    deleteInventoryConfiguration(
        request: DeleteBucketInventoryConfigurationRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    deleteInventoryConfiguration(
        request: DeleteBucketInventoryConfigurationRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    deleteInventoryConfiguration(
        request: DeleteBucketInventoryConfigurationRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Listing inventory configurations */
    listInventoryConfigurations(
        request: ListBucketInventoryConfigurationsRequest,
        callback: (
            error: ServiceError | null,
            response: ListBucketInventoryConfigurationsResponse,
        ) => void,
    ): ClientUnaryCall;
    listInventoryConfigurations(
        request: ListBucketInventoryConfigurationsRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListBucketInventoryConfigurationsResponse,
        ) => void,
    ): ClientUnaryCall;
    listInventoryConfigurations(
        request: ListBucketInventoryConfigurationsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListBucketInventoryConfigurationsResponse,
        ) => void,
    ): ClientUnaryCall;
}

export const BucketServiceClient = makeGenericClientConstructor(
    BucketServiceService,
    'yandex.cloud.storage.v1.BucketService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): BucketServiceClient;
    service: typeof BucketServiceService;
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
    if (typeof globalThis !== 'undefined') return globalThis;
    if (typeof self !== 'undefined') return self;
    if (typeof window !== 'undefined') return window;
    if (typeof global !== 'undefined') return global;
    throw 'Unable to locate global object';
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin
    ? T
    : T extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T extends ReadonlyArray<infer U>
    ? ReadonlyArray<DeepPartial<U>>
    : T extends {}
    ? { [K in keyof T]?: DeepPartial<T[K]> }
    : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
    ? P
    : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;

function longToNumber(long: Long): number {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER');
    }
    return long.toNumber();
}

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
