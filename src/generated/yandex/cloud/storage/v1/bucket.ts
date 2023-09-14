/* eslint-disable */
import { messageTypeRegistry } from "../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../../google/protobuf/timestamp";
import { Struct } from "../../../../google/protobuf/struct";
import {
  BoolValue,
  Int64Value,
  StringValue,
} from "../../../../google/protobuf/wrappers";

export const protobufPackage = "yandex.cloud.storage.v1";

export enum Versioning {
  VERSIONING_UNSPECIFIED = 0,
  /**
   * VERSIONING_DISABLED - The bucket is unversioned, i.e. versioning has never been enabled for the bucket, including at its creation.
   * Objects that are stored in the bucket have a version ID of `null`.
   *
   * To enable versioning, change status to `VERSIONING_ENABLED` via a [BucketService.Update] request. Note that this
   * action is irreversible, and a bucket with versioning enabled can never return to `VERSIONING_DISABLED` state.
   */
  VERSIONING_DISABLED = 1,
  /**
   * VERSIONING_ENABLED - Bucket versioning is enabled, i.e. all new objects are versioned and given a unique version ID, and objects that
   * already existed at the time versioning was enabled will be versioned and given a unique version ID when modified
   * by future requests.
   *
   * To suspend versioning, change status to `VERSIONING_SUSPENDED` via a [BucketService.Update] request. You cannot
   * disable versioning altogether for a bucket that already had it enabled; objects that had version IDs will keep
   * them.
   */
  VERSIONING_ENABLED = 2,
  /**
   * VERSIONING_SUSPENDED - Bucket versioning is suspended, i.e. new objects are not versioned, but objects that already existed at the time
   * versioning was suspended are still versioned and keep their version IDs.
   *
   * To resume versioning, change status to `VERSIONING_ENABLED` via a [BucketService.Update] request.
   */
  VERSIONING_SUSPENDED = 3,
  UNRECOGNIZED = -1,
}

export function versioningFromJSON(object: any): Versioning {
  switch (object) {
    case 0:
    case "VERSIONING_UNSPECIFIED":
      return Versioning.VERSIONING_UNSPECIFIED;
    case 1:
    case "VERSIONING_DISABLED":
      return Versioning.VERSIONING_DISABLED;
    case 2:
    case "VERSIONING_ENABLED":
      return Versioning.VERSIONING_ENABLED;
    case 3:
    case "VERSIONING_SUSPENDED":
      return Versioning.VERSIONING_SUSPENDED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Versioning.UNRECOGNIZED;
  }
}

export function versioningToJSON(object: Versioning): string {
  switch (object) {
    case Versioning.VERSIONING_UNSPECIFIED:
      return "VERSIONING_UNSPECIFIED";
    case Versioning.VERSIONING_DISABLED:
      return "VERSIONING_DISABLED";
    case Versioning.VERSIONING_ENABLED:
      return "VERSIONING_ENABLED";
    case Versioning.VERSIONING_SUSPENDED:
      return "VERSIONING_SUSPENDED";
    default:
      return "UNKNOWN";
  }
}

/**
 * A bucket resource.
 * For details about the concept, see [documentation](/docs/storage/concepts/bucket).
 */
export interface Bucket {
  $type: "yandex.cloud.storage.v1.Bucket";
  /** ID of the bucket. Always equal to [name], which has priority. */
  id: string;
  /**
   * Name of the bucket.
   *
   * The name is unique within the platform. For naming limitations and rules, see
   * [documentation](/docs/storage/concepts/bucket#naming).
   */
  name: string;
  /** ID of the folder that the bucket belongs to. */
  folderId: string;
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
   * Bucket versioning status.
   * For details, see [documentation](/docs/storage/concepts/versioning).
   */
  versioning: Versioning;
  /**
   * Maximum size of the bucket, in bytes.
   * For details, see [documentation](/docs/storage/operations/buckets/limit-max-volume).
   */
  maxSize: number;
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
  /** Creation timestamp. */
  createdAt?: Date;
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
   * List of object lifecycle rules for the bucket.
   * For details, see [documentation](/docs/storage/concepts/lifecycles).
   */
  lifecycleRules: LifecycleRule[];
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

export interface Tag {
  $type: "yandex.cloud.storage.v1.Tag";
  /** Key of the bucket tag. */
  key: string;
  /** Value of the bucket tag. */
  value: string;
}

export interface ACL {
  $type: "yandex.cloud.storage.v1.ACL";
  /** List of permissions granted and the grantees. */
  grants: ACL_Grant[];
}

/** A grant resource, used to specify the permission granted and the grantee. */
export interface ACL_Grant {
  $type: "yandex.cloud.storage.v1.ACL.Grant";
  /** Permission granted by the grant. */
  permission: ACL_Grant_Permission;
  /** The grantee type for the grant. */
  grantType: ACL_Grant_GrantType;
  /** ID of the account who is a grantee. Required when the [grant_type] is `GRANT_TYPE_ACCOUNT`. */
  granteeId: string;
}

export enum ACL_Grant_Permission {
  PERMISSION_UNSPECIFIED = 0,
  /**
   * PERMISSION_FULL_CONTROL - Allows grantee the `PERMISSION_WRITE`, `PERMISSION_WRITE_ACP`, `PERMISSION_READ`, and `PERMISSION_READ_ACP`
   * on the bucket.
   *
   * Maps to `x-amz-grant-full-control` header for [bucketPutAcl](/docs/storage/s3/api-ref/acl/bucketput) method of
   * Amazon S3-compatible HTTP API.
   */
  PERMISSION_FULL_CONTROL = 1,
  /**
   * PERMISSION_WRITE - Allows grantee to create new objects in the bucket. For the bucket and object owners of existing objects, also
   * allows deletions and overwrites of those objects.
   *
   * Maps to `x-amz-grant-write` header for [bucketPutAcl](/docs/storage/s3/api-ref/acl/bucketput) method of Amazon
   * S3-compatible HTTP API.
   */
  PERMISSION_WRITE = 2,
  /**
   * PERMISSION_WRITE_ACP - Allows grantee to write the ACL for the bucket.
   *
   * Maps to `x-amz-grant-write-acp` header for [bucketPutAcl](/docs/storage/s3/api-ref/acl/bucketput) method of
   * Amazon S3-compatible HTTP API.
   */
  PERMISSION_WRITE_ACP = 3,
  /**
   * PERMISSION_READ - Allows grantee to list the objects in the bucket.
   *
   * Maps to `x-amz-grant-read` header for [bucketPutAcl](/docs/storage/s3/api-ref/acl/bucketput) method of Amazon
   * S3-compatible HTTP API.
   */
  PERMISSION_READ = 4,
  /**
   * PERMISSION_READ_ACP - Allows grantee to read the bucket ACL
   *
   * Maps to `x-amz-grant-read-acp` header for [bucketPutAcl](/docs/storage/s3/api-ref/acl/bucketput) method of
   * Amazon S3-compatible HTTP API.
   */
  PERMISSION_READ_ACP = 5,
  UNRECOGNIZED = -1,
}

export function aCL_Grant_PermissionFromJSON(
  object: any
): ACL_Grant_Permission {
  switch (object) {
    case 0:
    case "PERMISSION_UNSPECIFIED":
      return ACL_Grant_Permission.PERMISSION_UNSPECIFIED;
    case 1:
    case "PERMISSION_FULL_CONTROL":
      return ACL_Grant_Permission.PERMISSION_FULL_CONTROL;
    case 2:
    case "PERMISSION_WRITE":
      return ACL_Grant_Permission.PERMISSION_WRITE;
    case 3:
    case "PERMISSION_WRITE_ACP":
      return ACL_Grant_Permission.PERMISSION_WRITE_ACP;
    case 4:
    case "PERMISSION_READ":
      return ACL_Grant_Permission.PERMISSION_READ;
    case 5:
    case "PERMISSION_READ_ACP":
      return ACL_Grant_Permission.PERMISSION_READ_ACP;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ACL_Grant_Permission.UNRECOGNIZED;
  }
}

export function aCL_Grant_PermissionToJSON(
  object: ACL_Grant_Permission
): string {
  switch (object) {
    case ACL_Grant_Permission.PERMISSION_UNSPECIFIED:
      return "PERMISSION_UNSPECIFIED";
    case ACL_Grant_Permission.PERMISSION_FULL_CONTROL:
      return "PERMISSION_FULL_CONTROL";
    case ACL_Grant_Permission.PERMISSION_WRITE:
      return "PERMISSION_WRITE";
    case ACL_Grant_Permission.PERMISSION_WRITE_ACP:
      return "PERMISSION_WRITE_ACP";
    case ACL_Grant_Permission.PERMISSION_READ:
      return "PERMISSION_READ";
    case ACL_Grant_Permission.PERMISSION_READ_ACP:
      return "PERMISSION_READ_ACP";
    default:
      return "UNKNOWN";
  }
}

export enum ACL_Grant_GrantType {
  GRANT_TYPE_UNSPECIFIED = 0,
  /**
   * GRANT_TYPE_ACCOUNT - A grantee is an [account on the platform](/docs/iam/concepts/#accounts).
   *
   * For this grantee type, you need to specify the user ID in [Bucket.acl.grants.grantee_id] field. To get user ID, see
   * [instruction](/docs/iam/operations/users/get).
   *
   * Maps to using `id="*"` value for `x-amz-grant-*` header ([bucketPutAcl](/docs/storage/s3/api-ref/acl/bucketput)
   * method of Amazon S3-compatible HTTP API).
   */
  GRANT_TYPE_ACCOUNT = 1,
  /**
   * GRANT_TYPE_ALL_AUTHENTICATED_USERS - Grantees are all authenticated users, both from your clouds and other users' clouds. Access
   * permission to this group allows any account on the platform to access the resource via a signed (authenticated)
   * request.
   *
   * Maps to using `uri="http://acs.amazonaws.com/groups/global/AuthenticatedUsers"` value for `x-amz-grant-*`
   * header ([bucketPutAcl](/docs/storage/s3/api-ref/acl/bucketput) method of Amazon S3-compatible HTTP API).
   */
  GRANT_TYPE_ALL_AUTHENTICATED_USERS = 2,
  /**
   * GRANT_TYPE_ALL_USERS - Grantees are all internet users. Access permission to this group allows anyone in the world access to the
   * resource via signed (authenticated) or unsigned (anonymous) requests.
   *
   * Maps to using `uri="http://acs.amazonaws.com/groups/global/AllUsers"` value for `x-amz-grant-*` header
   * ([bucketPutAcl](/docs/storage/s3/api-ref/acl/bucketput) method of Amazon S3-compatible HTTP API).
   */
  GRANT_TYPE_ALL_USERS = 3,
  UNRECOGNIZED = -1,
}

export function aCL_Grant_GrantTypeFromJSON(object: any): ACL_Grant_GrantType {
  switch (object) {
    case 0:
    case "GRANT_TYPE_UNSPECIFIED":
      return ACL_Grant_GrantType.GRANT_TYPE_UNSPECIFIED;
    case 1:
    case "GRANT_TYPE_ACCOUNT":
      return ACL_Grant_GrantType.GRANT_TYPE_ACCOUNT;
    case 2:
    case "GRANT_TYPE_ALL_AUTHENTICATED_USERS":
      return ACL_Grant_GrantType.GRANT_TYPE_ALL_AUTHENTICATED_USERS;
    case 3:
    case "GRANT_TYPE_ALL_USERS":
      return ACL_Grant_GrantType.GRANT_TYPE_ALL_USERS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ACL_Grant_GrantType.UNRECOGNIZED;
  }
}

export function aCL_Grant_GrantTypeToJSON(object: ACL_Grant_GrantType): string {
  switch (object) {
    case ACL_Grant_GrantType.GRANT_TYPE_UNSPECIFIED:
      return "GRANT_TYPE_UNSPECIFIED";
    case ACL_Grant_GrantType.GRANT_TYPE_ACCOUNT:
      return "GRANT_TYPE_ACCOUNT";
    case ACL_Grant_GrantType.GRANT_TYPE_ALL_AUTHENTICATED_USERS:
      return "GRANT_TYPE_ALL_AUTHENTICATED_USERS";
    case ACL_Grant_GrantType.GRANT_TYPE_ALL_USERS:
      return "GRANT_TYPE_ALL_USERS";
    default:
      return "UNKNOWN";
  }
}

export interface AnonymousAccessFlags {
  $type: "yandex.cloud.storage.v1.AnonymousAccessFlags";
  /** Specifies whether public (anonymous) access to read objects in the bucket is enabled. */
  read?: boolean;
  /** Specifies whether public (anonymous) access to the list of objects in the bucket is enabled. */
  list?: boolean;
  /**
   * Specifies whether public (anonymous) access to read [CORS](/docs/storage/concepts/cors),
   * [static website hosting](/docs/storage/concepts/hosting), and
   * [object lifecycles](/docs/storage/concepts/lifecycles) settings of the bucket is enabled.
   */
  configRead?: boolean;
}

/**
 * A CORS rule resource.
 * For details about the concept, see [documentation](/docs/storage/concepts/cors).
 */
export interface CorsRule {
  $type: "yandex.cloud.storage.v1.CorsRule";
  /** ID of the CORS rule. */
  id: string;
  /**
   * List of HTTP methods allowed by the CORS rule.
   *
   * When a client sends a CORS-preflight `options` request with the `Access-Control-Request-Method` header (see
   * [S3-compatible API reference](/docs/storage/s3/api-ref/object/options)), the specified method is checked against
   * the list of the allowed methods. If there is a match, all the allowed methods are listed in the
   * `Access-Control-Allow-Methods` header of the response.
   */
  allowedMethods: CorsRule_Method[];
  /**
   * List of HTTP headers allowed by the CORS rule.
   *
   * When a client sends a CORS-preflight `options` request with the `Access-Control-Request-Headers` header (see
   * [S3-compatible API reference](/docs/storage/s3/api-ref/object/options)), the specified headers are checked against
   * the list of the allowed headers. If there is a match, the specified headers that are allowed are listed in the
   * `Access-Control-Allow-Headers` header of the response.
   *
   * Each string in the list can contain at most one `*` wildcard character that matches 0 or more characters.
   * For example, `x-amz-*` value will allow all Amazon S3-compatible headers.
   */
  allowedHeaders: string[];
  /**
   * List of request origins allowed by the CORS rule.
   *
   * Each string in the list can contain at most one `*` wildcard character that matches 0 or more characters.
   * For example, `http://*.example.com` value will allow requests originating from all subdomains of `example.com`.
   */
  allowedOrigins: string[];
  /** List of headers contained in responses to CORS requests that can be accessed by applications. */
  exposeHeaders: string[];
  /**
   * Time in seconds that a client can cache the response to a CORS-preflight request as identified by the
   * object requested, the HTTP method, and the origin.
   */
  maxAgeSeconds?: number;
}

/**
 * List of HTTP methods that are allowed by the CORS rule.
 *
 * When a client sends a CORS-preflight `options` request with the `Access-Control-Request-Method` header (see
 * S3-compatible API reference](/docs/storage/s3/api-ref/object/options)), the specified method is checked against the
 * list of the allowed methods. If there is a match, all the allowed methods are listed in the
 * `Access-Control-Allow-Methods` header of the response.
 */
export enum CorsRule_Method {
  METHOD_UNSPECIFIED = 0,
  /** METHOD_GET - HTTP `GET` method. */
  METHOD_GET = 1,
  /** METHOD_HEAD - HTTP `HEAD` method. */
  METHOD_HEAD = 2,
  /** METHOD_POST - HTTP `POST` method. */
  METHOD_POST = 3,
  /** METHOD_PUT - HTTP `PUT` method. */
  METHOD_PUT = 4,
  /** METHOD_DELETE - HTTP `DELETE` method. */
  METHOD_DELETE = 5,
  UNRECOGNIZED = -1,
}

export function corsRule_MethodFromJSON(object: any): CorsRule_Method {
  switch (object) {
    case 0:
    case "METHOD_UNSPECIFIED":
      return CorsRule_Method.METHOD_UNSPECIFIED;
    case 1:
    case "METHOD_GET":
      return CorsRule_Method.METHOD_GET;
    case 2:
    case "METHOD_HEAD":
      return CorsRule_Method.METHOD_HEAD;
    case 3:
    case "METHOD_POST":
      return CorsRule_Method.METHOD_POST;
    case 4:
    case "METHOD_PUT":
      return CorsRule_Method.METHOD_PUT;
    case 5:
    case "METHOD_DELETE":
      return CorsRule_Method.METHOD_DELETE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CorsRule_Method.UNRECOGNIZED;
  }
}

export function corsRule_MethodToJSON(object: CorsRule_Method): string {
  switch (object) {
    case CorsRule_Method.METHOD_UNSPECIFIED:
      return "METHOD_UNSPECIFIED";
    case CorsRule_Method.METHOD_GET:
      return "METHOD_GET";
    case CorsRule_Method.METHOD_HEAD:
      return "METHOD_HEAD";
    case CorsRule_Method.METHOD_POST:
      return "METHOD_POST";
    case CorsRule_Method.METHOD_PUT:
      return "METHOD_PUT";
    case CorsRule_Method.METHOD_DELETE:
      return "METHOD_DELETE";
    default:
      return "UNKNOWN";
  }
}

export interface WebsiteSettings {
  $type: "yandex.cloud.storage.v1.WebsiteSettings";
  /**
   * Key of the index page object that is returned when a response is made to the root of the website.
   *
   * Either [index] or [redirect_all_requests] must be specified in order for the bucket to host a static website.
   *
   * If specified, the index page object must be located in the root of the bucket.
   */
  index: string;
  /** Key of the error page object that is returned when an error occurs. */
  error: string;
  /**
   * Configuration for redirecting all requests sent to the website.
   *
   * Either [redirect_all_requests] or [index] must be specified in order for the bucket to host a static website.
   * If [redirect_all_requests] is specified, it must be the only field in [Bucket.website_settings].
   */
  redirectAllRequests?: WebsiteSettings_Scheme;
  /** List of redirect rules. */
  routingRules: WebsiteSettings_RoutingRule[];
}

export enum WebsiteSettings_Protocol {
  PROTOCOL_UNSPECIFIED = 0,
  /** PROTOCOL_HTTP - `http` scheme. */
  PROTOCOL_HTTP = 1,
  /** PROTOCOL_HTTPS - `https` scheme. */
  PROTOCOL_HTTPS = 2,
  UNRECOGNIZED = -1,
}

export function websiteSettings_ProtocolFromJSON(
  object: any
): WebsiteSettings_Protocol {
  switch (object) {
    case 0:
    case "PROTOCOL_UNSPECIFIED":
      return WebsiteSettings_Protocol.PROTOCOL_UNSPECIFIED;
    case 1:
    case "PROTOCOL_HTTP":
      return WebsiteSettings_Protocol.PROTOCOL_HTTP;
    case 2:
    case "PROTOCOL_HTTPS":
      return WebsiteSettings_Protocol.PROTOCOL_HTTPS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return WebsiteSettings_Protocol.UNRECOGNIZED;
  }
}

export function websiteSettings_ProtocolToJSON(
  object: WebsiteSettings_Protocol
): string {
  switch (object) {
    case WebsiteSettings_Protocol.PROTOCOL_UNSPECIFIED:
      return "PROTOCOL_UNSPECIFIED";
    case WebsiteSettings_Protocol.PROTOCOL_HTTP:
      return "PROTOCOL_HTTP";
    case WebsiteSettings_Protocol.PROTOCOL_HTTPS:
      return "PROTOCOL_HTTPS";
    default:
      return "UNKNOWN";
  }
}

/** A configuration resource for redirecting all requests sent to the website. */
export interface WebsiteSettings_Scheme {
  $type: "yandex.cloud.storage.v1.WebsiteSettings.Scheme";
  /** Scheme of the redirect URI. */
  protocol: WebsiteSettings_Protocol;
  /** Hostname of the redirect URI. */
  hostname: string;
}

export interface WebsiteSettings_Condition {
  $type: "yandex.cloud.storage.v1.WebsiteSettings.Condition";
  /** HTTP status code (number only) that must match for the redirect to apply. */
  httpErrorCodeReturnedEquals: string;
  /** Prefix of the object key from which requests are redirected. */
  keyPrefixEquals: string;
}

export interface WebsiteSettings_Redirect {
  $type: "yandex.cloud.storage.v1.WebsiteSettings.Redirect";
  /** Hostname of the redirect URI. */
  hostname: string;
  /**
   * HTTP status code of the redirect response.
   *
   * Default value: `"301"`.
   */
  httpRedirectCode: string;
  /** Scheme of the redirect URI. */
  protocol: WebsiteSettings_Protocol;
  /**
   * Substitution for the prefix of the object key specified in [Condition.key_prefix_equals].
   *
   * At most one of [replace_key_prefix_with] and [replace_key_with] can be specified.
   */
  replaceKeyPrefixWith: string;
  /**
   * New object key.
   *
   * At most one of [replace_key_with] and [replace_key_prefix_with] can be specified.
   */
  replaceKeyWith: string;
}

/** List of redirect rules. */
export interface WebsiteSettings_RoutingRule {
  $type: "yandex.cloud.storage.v1.WebsiteSettings.RoutingRule";
  /** Redirect condition. */
  condition?: WebsiteSettings_Condition;
  /** Redirect instructions. */
  redirect?: WebsiteSettings_Redirect;
}

/**
 * An object lifecycle rule resource for the bucket.
 * For details about the concept, see [documentation](/docs/storage/concepts/lifecycles).
 */
export interface LifecycleRule {
  $type: "yandex.cloud.storage.v1.LifecycleRule";
  /** ID of the rule. Provided by the client or generated at creation time. */
  id?: string;
  /** Indicates whether the rule is in effect. */
  enabled: boolean;
  /**
   * Filter that identifies the objects to which the rule applies.
   *
   * If not specified, the rule applies to all objects in the bucket.
   */
  filter?: LifecycleRule_RuleFilter;
  /**
   * Expiration rule.
   *
   * The expiration of an object is described as follows.
   *
   * For the unversioned bucket ([Bucket.versioning] is `VERSIONING_DISABLED`), the object is deleted and cannot be
   * recovered.
   *
   * For the bucket with versioning enabled ([Bucket.versioning] is `VERSIONING_ENABLED`), the current version of the
   * object (if it exists and is not a delete marker) is retained as a non-current version, and a delete marker becomes
   * the current version of the object.
   *
   * For the bucket with versioning suspended ([Bucket.versioning] is `VERSIONING_SUSPENDED`), the current version of
   * the object is retained as a non-current version if it is not a delete marker, or is removed otherwise, and a
   * delete marker becomes the current version of the object.
   */
  expiration?: LifecycleRule_Expiration;
  /**
   * List of transition rules.
   *
   * The transition of an object is described as follows.
   *
   * For the unversioned bucket ([Bucket.versioning] is `VERSIONING_DISABLED`), the object is transitioned to the
   * specified storage class.
   *
   * For the bucket with versioning enabled ([Bucket.versioning] is `VERSIONING_ENABLED`) or suspended
   * (`VERSIONING_SUSPENDED`), the current version of the object is transitioned to the specified storage class.
   */
  transitions: LifecycleRule_Transition[];
  /** Configuration for aborting incomplete [multipart uploads](/docs/storage/concepts/multipart). */
  abortIncompleteMultipartUpload?: LifecycleRule_AfterDays;
  /**
   * Expiration rule for non-current versions of objects in a bucket with versioning enabled ([Bucket.versioning] is
   * `VERSIONING_ENABLED`) or suspended (`VERSIONING_SUSPENDED`).
   *
   * At expiration, the non-current version of the object is deleted and cannot be recovered.
   */
  noncurrentExpiration?: LifecycleRule_NoncurrentExpiration;
  /**
   * List of transition rules for non-current versions of objects in a bucket with versioning enabled
   * ([Bucket.versioning] is `VERSIONING_ENABLED`) or suspended (`VERSIONING_SUSPENDED`).
   *
   * At transition, the non-current version of the object is transitioned to the specified storage class.
   */
  noncurrentTransitions: LifecycleRule_NoncurrentTransition[];
}

export interface LifecycleRule_AfterDays {
  $type: "yandex.cloud.storage.v1.LifecycleRule.AfterDays";
  /**
   * Time period, in number of days from the start of the multipart upload, after which the incomplete upload is
   * aborted.
   */
  daysAfterExpiration?: number;
}

export interface LifecycleRule_NoncurrentExpiration {
  $type: "yandex.cloud.storage.v1.LifecycleRule.NoncurrentExpiration";
  /**
   * Time period, in number of days since the version of an object was classified as non-current, after which the
   * version expires.
   */
  noncurrentDays?: number;
}

/**
 * List of transition rules for non-current versions of objects in a bucket with versioning enabled
 * ([Bucket.versioning] is `VERSIONING_ENABLED`) or suspended (`VERSIONING_SUSPENDED`).
 *
 * At transition, the non-current version of the object is transitioned to the specified storage class.
 */
export interface LifecycleRule_NoncurrentTransition {
  $type: "yandex.cloud.storage.v1.LifecycleRule.NoncurrentTransition";
  /**
   * Time period, in number of days since the version of an object was classified as non-current, after which the
   * version is transitioned.
   */
  noncurrentDays?: number;
  /**
   * Storage class to which a non-current version of an object is transitioned from standard storage.
   *
   * The only supported class is cold storage (`COLD`, `STANDARD_IA`, `NEARLINE` all synonyms). Transitions from cold
   * to standard storage and transitions to or from ice storage are not allowed.
   */
  storageClass: string;
}

/**
 * List of transition rules.
 *
 * The transition of an object is described as follows.
 *
 * For the unversioned bucket ([Bucket.versioning] is `VERSIONING_DISABLED`), the object is transitioned to the
 * specified storage class.
 *
 * For the bucket with versioning enabled ([Bucket.versioning] is `VERSIONING_ENABLED`) or suspended
 * (`VERSIONING_SUSPENDED`), the current version of the object is transitioned to the specified storage class.
 */
export interface LifecycleRule_Transition {
  $type: "yandex.cloud.storage.v1.LifecycleRule.Transition";
  /**
   * Specific date of object transition.
   *
   * The rule continues to apply even after the date has passed, i.e. any new objects created in the bucket are
   * transitioned immediately.
   *
   * At most one of [date] and [days] fields can be specified.
   */
  date?: Date;
  /**
   * Time period, in number of days from the creation or modification of the object, after which an object is
   * transitioned.
   *
   * At most one of [days] and [date] fields can be specified.
   */
  days?: number;
  /**
   * Storage class to which an object is transitioned from standard storage.
   *
   * The only supported class is cold storage (`COLD`, `STANDARD_IA`, `NEARLINE` all synonyms). Transitions from cold
   * to standard storage and transitions to or from ice storage are not allowed.
   */
  storageClass: string;
}

export interface LifecycleRule_Expiration {
  $type: "yandex.cloud.storage.v1.LifecycleRule.Expiration";
  /**
   * Specific date of object expiration.
   *
   * The rule continues to apply even after the date has passed, i.e. any new objects created in the bucket expire
   * immediately.
   *
   * Exactly one of [date], [days], and [expired_object_delete_marker] fields can be specified.
   */
  date?: Date;
  /**
   * Time period, in number of days from the creation or modification of the object, after which an object expires.
   *
   * Exactly one of [days], [date], and [expired_object_delete_marker] fields can be specified.
   */
  days?: number;
  /**
   * Indicates whether a delete marker of an object with no non-current versions (referred to as an expired object
   * delete marker) is removed at the object's expiration.
   *
   * Exactly one of [expired_object_delete_marker], [date], and [days] fields can be specified.
   */
  expiredObjectDeleteMarker?: boolean;
}

export interface LifecycleRule_RuleFilter {
  $type: "yandex.cloud.storage.v1.LifecycleRule.RuleFilter";
  /** Key prefix that the object must have in order for the rule to apply. */
  prefix: string;
  /** Size that the object must be greater. */
  objectSizeGreaterThan?: number;
  /** Size that the object must be less t. */
  objectSizeLessThan?: number;
}

export interface Counters {
  $type: "yandex.cloud.storage.v1.Counters";
  /** Total size of objects uploaded in single operation, in bytes. */
  simpleObjectSize: number;
  /** Number of objects uploaded in single operation. */
  simpleObjectCount: number;
  /** Total size of uploaded parts in incomplete multipart uploads, in bytes. */
  objectsPartsSize: number;
  /** Number of uploaded parts in incomplete multipart uploads. */
  objectsPartsCount: number;
  /** Total size of objects uploaded in multiple parts, in bytes. */
  multipartObjectsSize: number;
  /** Number of objects uploaded in multiple parts. */
  multipartObjectsCount: number;
  /** Number of incomplete multipart uploads. */
  activeMultipartCount: number;
}

/** A resource for size of available space in a bucket for a storage class. */
export interface OptionalSizeByClass {
  $type: "yandex.cloud.storage.v1.OptionalSizeByClass";
  /**
   * Storage class. Supported classes are standard storage (`STANDARD`), cold storage (`COLD`, `STANDARD_IA`, `NEARLINE`
   * all synonyms), and ice storage (`ICE` and `GLACIER` are synonyms).
   * For details, see [documentation](/docs/storage/concepts/storage-class).
   */
  storageClass: string;
  /** Size of available space in the bucket for the storage class. */
  classSize?: number;
}

/** A resource for size of used space in a bucket for a storage class. */
export interface SizeByClass {
  $type: "yandex.cloud.storage.v1.SizeByClass";
  /**
   * Storage class. Supported classes are standard storage (`STANDARD`), cold storage (`COLD`, `STANDARD_IA`, `NEARLINE`
   * all synonyms), and ice storage (`ICE` and `GLACIER` are synonyms).
   * For details, see [documentation](/docs/storage/concepts/storage-class).
   */
  storageClass: string;
  /** Size of used space in the bucket for the storage class. */
  classSize: number;
}

/** A resource for object-related statistics for a storage class by type of upload (simple vs. multipart). */
export interface CountersByClass {
  $type: "yandex.cloud.storage.v1.CountersByClass";
  /**
   * Storage class. Supported classes are standard storage (`STANDARD`), cold storage (`COLD`, `STANDARD_IA`, `NEARLINE`
   * all synonyms), and ice storage (`ice` and `GLACIER` are synonyms).
   * For details, see [documentation](/docs/storage/concepts/storage-class).
   */
  storageClass: string;
  /** Object-related statistics for the storage class by type of upload. */
  counters?: Counters;
}

/** A bucket statistics resource. */
export interface BucketStats {
  $type: "yandex.cloud.storage.v1.BucketStats";
  /** Name of the bucket. */
  name: string;
  /** Maximum size of the bucket, in bytes. */
  maxSize?: number;
  /** Size of used space in the bucket, in bytes. */
  usedSize: number;
  /** Size of available space in the bucket by storage class, in bytes. */
  storageClassMaxSizes: OptionalSizeByClass[];
  /** Size of used space in the bucket by storage class, in bytes. */
  storageClassUsedSizes: SizeByClass[];
  /** Object-related statistics by storage class and type of upload (simple vs. multipart), in bytes. */
  storageClassCounters: CountersByClass[];
  /**
   * Default storage class for objects in the bucket. Supported classes are standard storage (`STANDARD`), cold storage
   * (`COLD`, `STANDARD_IA`, `NEARLINE` all synonyms), and ice storage (`ICE` and `GLACIER` are synonyms).
   * For details, see [documentation](/docs/storage/concepts/storage-class).
   */
  defaultStorageClass?: string;
  /**
   * Flags for configuring public (anonymous) access to the bucket's content and settings.
   * For details, see [documentation](/docs/storage/concepts/bucket#bucket-access).
   */
  anonymousAccessFlags?: AnonymousAccessFlags;
  /** Bucket creation timestamp. */
  createdAt?: Date;
  /** Bucket latest update timestamp. */
  updatedAt?: Date;
}

/** A resource for HTTPS configuration of a bucket. */
export interface HTTPSConfig {
  $type: "yandex.cloud.storage.v1.HTTPSConfig";
  /** Name of the bucket. */
  name: string;
  /** Type of TLS certificate source. */
  sourceType: HTTPSConfig_SourceType;
  /** Issuer of the TLS certificate. */
  issuer?: string;
  /** Subject of the TLS certificate. */
  subject?: string;
  /** List of DNS names of the TLS certificate (Subject Alternative Name field). */
  dnsNames: string[];
  /** Start of the TLS certificate validity period (Not Before field). */
  notBefore?: Date;
  /** End of the TLS certificate validity period (Not After field) */
  notAfter?: Date;
  /**
   * ID of the TLS certificate in Certificate Manager.
   *
   * To get information about the certificate from Certificate Manager, make a
   * [yandex.cloud.certificatemanager.v1.CertificateService.Get] request.
   */
  certificateId: string;
}

/** A resource for type of TLS certificate source. */
export enum HTTPSConfig_SourceType {
  SOURCE_TYPE_UNSPECIFIED = 0,
  /** SOURCE_TYPE_SELF_MANAGED - Your certificate, uploaded directly. */
  SOURCE_TYPE_SELF_MANAGED = 1,
  /** SOURCE_TYPE_MANAGED_BY_CERTIFICATE_MANAGER - Certificate managed by Certificate Manager. */
  SOURCE_TYPE_MANAGED_BY_CERTIFICATE_MANAGER = 2,
  UNRECOGNIZED = -1,
}

export function hTTPSConfig_SourceTypeFromJSON(
  object: any
): HTTPSConfig_SourceType {
  switch (object) {
    case 0:
    case "SOURCE_TYPE_UNSPECIFIED":
      return HTTPSConfig_SourceType.SOURCE_TYPE_UNSPECIFIED;
    case 1:
    case "SOURCE_TYPE_SELF_MANAGED":
      return HTTPSConfig_SourceType.SOURCE_TYPE_SELF_MANAGED;
    case 2:
    case "SOURCE_TYPE_MANAGED_BY_CERTIFICATE_MANAGER":
      return HTTPSConfig_SourceType.SOURCE_TYPE_MANAGED_BY_CERTIFICATE_MANAGER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return HTTPSConfig_SourceType.UNRECOGNIZED;
  }
}

export function hTTPSConfig_SourceTypeToJSON(
  object: HTTPSConfig_SourceType
): string {
  switch (object) {
    case HTTPSConfig_SourceType.SOURCE_TYPE_UNSPECIFIED:
      return "SOURCE_TYPE_UNSPECIFIED";
    case HTTPSConfig_SourceType.SOURCE_TYPE_SELF_MANAGED:
      return "SOURCE_TYPE_SELF_MANAGED";
    case HTTPSConfig_SourceType.SOURCE_TYPE_MANAGED_BY_CERTIFICATE_MANAGER:
      return "SOURCE_TYPE_MANAGED_BY_CERTIFICATE_MANAGER";
    default:
      return "UNKNOWN";
  }
}

/**
 * A resource for Object Lock configuration of a bucket.
 * For details about the concept, see [documentation](/docs/storage/concepts/object-lock).
 */
export interface ObjectLock {
  $type: "yandex.cloud.storage.v1.ObjectLock";
  status: ObjectLock_ObjectLockStatus;
  defaultRetention?: ObjectLock_DefaultRetention;
}

/** Activity status of the object lock settings on the bucket */
export enum ObjectLock_ObjectLockStatus {
  OBJECT_LOCK_STATUS_UNSPECIFIED = 0,
  OBJECT_LOCK_STATUS_DISABLED = 1,
  OBJECT_LOCK_STATUS_ENABLED = 2,
  UNRECOGNIZED = -1,
}

export function objectLock_ObjectLockStatusFromJSON(
  object: any
): ObjectLock_ObjectLockStatus {
  switch (object) {
    case 0:
    case "OBJECT_LOCK_STATUS_UNSPECIFIED":
      return ObjectLock_ObjectLockStatus.OBJECT_LOCK_STATUS_UNSPECIFIED;
    case 1:
    case "OBJECT_LOCK_STATUS_DISABLED":
      return ObjectLock_ObjectLockStatus.OBJECT_LOCK_STATUS_DISABLED;
    case 2:
    case "OBJECT_LOCK_STATUS_ENABLED":
      return ObjectLock_ObjectLockStatus.OBJECT_LOCK_STATUS_ENABLED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ObjectLock_ObjectLockStatus.UNRECOGNIZED;
  }
}

export function objectLock_ObjectLockStatusToJSON(
  object: ObjectLock_ObjectLockStatus
): string {
  switch (object) {
    case ObjectLock_ObjectLockStatus.OBJECT_LOCK_STATUS_UNSPECIFIED:
      return "OBJECT_LOCK_STATUS_UNSPECIFIED";
    case ObjectLock_ObjectLockStatus.OBJECT_LOCK_STATUS_DISABLED:
      return "OBJECT_LOCK_STATUS_DISABLED";
    case ObjectLock_ObjectLockStatus.OBJECT_LOCK_STATUS_ENABLED:
      return "OBJECT_LOCK_STATUS_ENABLED";
    default:
      return "UNKNOWN";
  }
}

/** Default lock configuration for added objects */
export interface ObjectLock_DefaultRetention {
  $type: "yandex.cloud.storage.v1.ObjectLock.DefaultRetention";
  mode: ObjectLock_DefaultRetention_Mode;
  /** Number of days for locking */
  days: number | undefined;
  /** Number of years for locking */
  years: number | undefined;
}

/** Lock type */
export enum ObjectLock_DefaultRetention_Mode {
  MODE_UNSPECIFIED = 0,
  MODE_GOVERNANCE = 1,
  MODE_COMPLIANCE = 2,
  UNRECOGNIZED = -1,
}

export function objectLock_DefaultRetention_ModeFromJSON(
  object: any
): ObjectLock_DefaultRetention_Mode {
  switch (object) {
    case 0:
    case "MODE_UNSPECIFIED":
      return ObjectLock_DefaultRetention_Mode.MODE_UNSPECIFIED;
    case 1:
    case "MODE_GOVERNANCE":
      return ObjectLock_DefaultRetention_Mode.MODE_GOVERNANCE;
    case 2:
    case "MODE_COMPLIANCE":
      return ObjectLock_DefaultRetention_Mode.MODE_COMPLIANCE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ObjectLock_DefaultRetention_Mode.UNRECOGNIZED;
  }
}

export function objectLock_DefaultRetention_ModeToJSON(
  object: ObjectLock_DefaultRetention_Mode
): string {
  switch (object) {
    case ObjectLock_DefaultRetention_Mode.MODE_UNSPECIFIED:
      return "MODE_UNSPECIFIED";
    case ObjectLock_DefaultRetention_Mode.MODE_GOVERNANCE:
      return "MODE_GOVERNANCE";
    case ObjectLock_DefaultRetention_Mode.MODE_COMPLIANCE:
      return "MODE_COMPLIANCE";
    default:
      return "UNKNOWN";
  }
}

export interface Encryption {
  $type: "yandex.cloud.storage.v1.Encryption";
  rules: Encryption_EncryptionRule[];
}

export interface Encryption_EncryptionRule {
  $type: "yandex.cloud.storage.v1.Encryption.EncryptionRule";
  kmsMasterKeyId: string;
  sseAlgorithm: string;
}

const baseBucket: object = {
  $type: "yandex.cloud.storage.v1.Bucket",
  id: "",
  name: "",
  folderId: "",
  defaultStorageClass: "",
  versioning: 0,
  maxSize: 0,
};

export const Bucket = {
  $type: "yandex.cloud.storage.v1.Bucket" as const,

  encode(
    message: Bucket,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.folderId !== "") {
      writer.uint32(26).string(message.folderId);
    }
    if (message.anonymousAccessFlags !== undefined) {
      AnonymousAccessFlags.encode(
        message.anonymousAccessFlags,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.defaultStorageClass !== "") {
      writer.uint32(42).string(message.defaultStorageClass);
    }
    if (message.versioning !== 0) {
      writer.uint32(48).int32(message.versioning);
    }
    if (message.maxSize !== 0) {
      writer.uint32(56).int64(message.maxSize);
    }
    if (message.policy !== undefined) {
      Struct.encode(
        Struct.wrap(message.policy),
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.acl !== undefined) {
      ACL.encode(message.acl, writer.uint32(74).fork()).ldelim();
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.createdAt),
        writer.uint32(82).fork()
      ).ldelim();
    }
    for (const v of message.cors) {
      CorsRule.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    if (message.websiteSettings !== undefined) {
      WebsiteSettings.encode(
        message.websiteSettings,
        writer.uint32(98).fork()
      ).ldelim();
    }
    for (const v of message.lifecycleRules) {
      LifecycleRule.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    for (const v of message.tags) {
      Tag.encode(v!, writer.uint32(114).fork()).ldelim();
    }
    if (message.objectLock !== undefined) {
      ObjectLock.encode(message.objectLock, writer.uint32(122).fork()).ldelim();
    }
    if (message.encryption !== undefined) {
      Encryption.encode(message.encryption, writer.uint32(130).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Bucket {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBucket } as Bucket;
    message.cors = [];
    message.lifecycleRules = [];
    message.tags = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.folderId = reader.string();
          break;
        case 4:
          message.anonymousAccessFlags = AnonymousAccessFlags.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.defaultStorageClass = reader.string();
          break;
        case 6:
          message.versioning = reader.int32() as any;
          break;
        case 7:
          message.maxSize = longToNumber(reader.int64() as Long);
          break;
        case 8:
          message.policy = Struct.unwrap(
            Struct.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.acl = ACL.decode(reader, reader.uint32());
          break;
        case 10:
          message.createdAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 11:
          message.cors.push(CorsRule.decode(reader, reader.uint32()));
          break;
        case 12:
          message.websiteSettings = WebsiteSettings.decode(
            reader,
            reader.uint32()
          );
          break;
        case 13:
          message.lifecycleRules.push(
            LifecycleRule.decode(reader, reader.uint32())
          );
          break;
        case 14:
          message.tags.push(Tag.decode(reader, reader.uint32()));
          break;
        case 15:
          message.objectLock = ObjectLock.decode(reader, reader.uint32());
          break;
        case 16:
          message.encryption = Encryption.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Bucket {
    const message = { ...baseBucket } as Bucket;
    message.id =
      object.id !== undefined && object.id !== null ? String(object.id) : "";
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.folderId =
      object.folderId !== undefined && object.folderId !== null
        ? String(object.folderId)
        : "";
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
    message.versioning =
      object.versioning !== undefined && object.versioning !== null
        ? versioningFromJSON(object.versioning)
        : 0;
    message.maxSize =
      object.maxSize !== undefined && object.maxSize !== null
        ? Number(object.maxSize)
        : 0;
    message.policy =
      typeof object.policy === "object" ? object.policy : undefined;
    message.acl =
      object.acl !== undefined && object.acl !== null
        ? ACL.fromJSON(object.acl)
        : undefined;
    message.createdAt =
      object.createdAt !== undefined && object.createdAt !== null
        ? fromJsonTimestamp(object.createdAt)
        : undefined;
    message.cors = (object.cors ?? []).map((e: any) => CorsRule.fromJSON(e));
    message.websiteSettings =
      object.websiteSettings !== undefined && object.websiteSettings !== null
        ? WebsiteSettings.fromJSON(object.websiteSettings)
        : undefined;
    message.lifecycleRules = (object.lifecycleRules ?? []).map((e: any) =>
      LifecycleRule.fromJSON(e)
    );
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

  toJSON(message: Bucket): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.folderId !== undefined && (obj.folderId = message.folderId);
    message.anonymousAccessFlags !== undefined &&
      (obj.anonymousAccessFlags = message.anonymousAccessFlags
        ? AnonymousAccessFlags.toJSON(message.anonymousAccessFlags)
        : undefined);
    message.defaultStorageClass !== undefined &&
      (obj.defaultStorageClass = message.defaultStorageClass);
    message.versioning !== undefined &&
      (obj.versioning = versioningToJSON(message.versioning));
    message.maxSize !== undefined &&
      (obj.maxSize = Math.round(message.maxSize));
    message.policy !== undefined && (obj.policy = message.policy);
    message.acl !== undefined &&
      (obj.acl = message.acl ? ACL.toJSON(message.acl) : undefined);
    message.createdAt !== undefined &&
      (obj.createdAt = message.createdAt.toISOString());
    if (message.cors) {
      obj.cors = message.cors.map((e) => (e ? CorsRule.toJSON(e) : undefined));
    } else {
      obj.cors = [];
    }
    message.websiteSettings !== undefined &&
      (obj.websiteSettings = message.websiteSettings
        ? WebsiteSettings.toJSON(message.websiteSettings)
        : undefined);
    if (message.lifecycleRules) {
      obj.lifecycleRules = message.lifecycleRules.map((e) =>
        e ? LifecycleRule.toJSON(e) : undefined
      );
    } else {
      obj.lifecycleRules = [];
    }
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

  fromPartial<I extends Exact<DeepPartial<Bucket>, I>>(object: I): Bucket {
    const message = { ...baseBucket } as Bucket;
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.folderId = object.folderId ?? "";
    message.anonymousAccessFlags =
      object.anonymousAccessFlags !== undefined &&
      object.anonymousAccessFlags !== null
        ? AnonymousAccessFlags.fromPartial(object.anonymousAccessFlags)
        : undefined;
    message.defaultStorageClass = object.defaultStorageClass ?? "";
    message.versioning = object.versioning ?? 0;
    message.maxSize = object.maxSize ?? 0;
    message.policy = object.policy ?? undefined;
    message.acl =
      object.acl !== undefined && object.acl !== null
        ? ACL.fromPartial(object.acl)
        : undefined;
    message.createdAt = object.createdAt ?? undefined;
    message.cors = object.cors?.map((e) => CorsRule.fromPartial(e)) || [];
    message.websiteSettings =
      object.websiteSettings !== undefined && object.websiteSettings !== null
        ? WebsiteSettings.fromPartial(object.websiteSettings)
        : undefined;
    message.lifecycleRules =
      object.lifecycleRules?.map((e) => LifecycleRule.fromPartial(e)) || [];
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

messageTypeRegistry.set(Bucket.$type, Bucket);

const baseTag: object = {
  $type: "yandex.cloud.storage.v1.Tag",
  key: "",
  value: "",
};

export const Tag = {
  $type: "yandex.cloud.storage.v1.Tag" as const,

  encode(message: Tag, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Tag {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTag } as Tag;
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

  fromJSON(object: any): Tag {
    const message = { ...baseTag } as Tag;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: Tag): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Tag>, I>>(object: I): Tag {
    const message = { ...baseTag } as Tag;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(Tag.$type, Tag);

const baseACL: object = { $type: "yandex.cloud.storage.v1.ACL" };

export const ACL = {
  $type: "yandex.cloud.storage.v1.ACL" as const,

  encode(message: ACL, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.grants) {
      ACL_Grant.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ACL {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseACL } as ACL;
    message.grants = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.grants.push(ACL_Grant.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ACL {
    const message = { ...baseACL } as ACL;
    message.grants = (object.grants ?? []).map((e: any) =>
      ACL_Grant.fromJSON(e)
    );
    return message;
  },

  toJSON(message: ACL): unknown {
    const obj: any = {};
    if (message.grants) {
      obj.grants = message.grants.map((e) =>
        e ? ACL_Grant.toJSON(e) : undefined
      );
    } else {
      obj.grants = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ACL>, I>>(object: I): ACL {
    const message = { ...baseACL } as ACL;
    message.grants = object.grants?.map((e) => ACL_Grant.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(ACL.$type, ACL);

const baseACL_Grant: object = {
  $type: "yandex.cloud.storage.v1.ACL.Grant",
  permission: 0,
  grantType: 0,
  granteeId: "",
};

export const ACL_Grant = {
  $type: "yandex.cloud.storage.v1.ACL.Grant" as const,

  encode(
    message: ACL_Grant,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.permission !== 0) {
      writer.uint32(8).int32(message.permission);
    }
    if (message.grantType !== 0) {
      writer.uint32(16).int32(message.grantType);
    }
    if (message.granteeId !== "") {
      writer.uint32(26).string(message.granteeId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ACL_Grant {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseACL_Grant } as ACL_Grant;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.permission = reader.int32() as any;
          break;
        case 2:
          message.grantType = reader.int32() as any;
          break;
        case 3:
          message.granteeId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ACL_Grant {
    const message = { ...baseACL_Grant } as ACL_Grant;
    message.permission =
      object.permission !== undefined && object.permission !== null
        ? aCL_Grant_PermissionFromJSON(object.permission)
        : 0;
    message.grantType =
      object.grantType !== undefined && object.grantType !== null
        ? aCL_Grant_GrantTypeFromJSON(object.grantType)
        : 0;
    message.granteeId =
      object.granteeId !== undefined && object.granteeId !== null
        ? String(object.granteeId)
        : "";
    return message;
  },

  toJSON(message: ACL_Grant): unknown {
    const obj: any = {};
    message.permission !== undefined &&
      (obj.permission = aCL_Grant_PermissionToJSON(message.permission));
    message.grantType !== undefined &&
      (obj.grantType = aCL_Grant_GrantTypeToJSON(message.grantType));
    message.granteeId !== undefined && (obj.granteeId = message.granteeId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ACL_Grant>, I>>(
    object: I
  ): ACL_Grant {
    const message = { ...baseACL_Grant } as ACL_Grant;
    message.permission = object.permission ?? 0;
    message.grantType = object.grantType ?? 0;
    message.granteeId = object.granteeId ?? "";
    return message;
  },
};

messageTypeRegistry.set(ACL_Grant.$type, ACL_Grant);

const baseAnonymousAccessFlags: object = {
  $type: "yandex.cloud.storage.v1.AnonymousAccessFlags",
};

export const AnonymousAccessFlags = {
  $type: "yandex.cloud.storage.v1.AnonymousAccessFlags" as const,

  encode(
    message: AnonymousAccessFlags,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.read !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.read! },
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.list !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.list! },
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.configRead !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.configRead! },
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AnonymousAccessFlags {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAnonymousAccessFlags } as AnonymousAccessFlags;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.read = BoolValue.decode(reader, reader.uint32()).value;
          break;
        case 2:
          message.list = BoolValue.decode(reader, reader.uint32()).value;
          break;
        case 3:
          message.configRead = BoolValue.decode(reader, reader.uint32()).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AnonymousAccessFlags {
    const message = { ...baseAnonymousAccessFlags } as AnonymousAccessFlags;
    message.read =
      object.read !== undefined && object.read !== null
        ? Boolean(object.read)
        : undefined;
    message.list =
      object.list !== undefined && object.list !== null
        ? Boolean(object.list)
        : undefined;
    message.configRead =
      object.configRead !== undefined && object.configRead !== null
        ? Boolean(object.configRead)
        : undefined;
    return message;
  },

  toJSON(message: AnonymousAccessFlags): unknown {
    const obj: any = {};
    message.read !== undefined && (obj.read = message.read);
    message.list !== undefined && (obj.list = message.list);
    message.configRead !== undefined && (obj.configRead = message.configRead);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AnonymousAccessFlags>, I>>(
    object: I
  ): AnonymousAccessFlags {
    const message = { ...baseAnonymousAccessFlags } as AnonymousAccessFlags;
    message.read = object.read ?? undefined;
    message.list = object.list ?? undefined;
    message.configRead = object.configRead ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(AnonymousAccessFlags.$type, AnonymousAccessFlags);

const baseCorsRule: object = {
  $type: "yandex.cloud.storage.v1.CorsRule",
  id: "",
  allowedMethods: 0,
  allowedHeaders: "",
  allowedOrigins: "",
  exposeHeaders: "",
};

export const CorsRule = {
  $type: "yandex.cloud.storage.v1.CorsRule" as const,

  encode(
    message: CorsRule,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    writer.uint32(18).fork();
    for (const v of message.allowedMethods) {
      writer.int32(v);
    }
    writer.ldelim();
    for (const v of message.allowedHeaders) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.allowedOrigins) {
      writer.uint32(34).string(v!);
    }
    for (const v of message.exposeHeaders) {
      writer.uint32(42).string(v!);
    }
    if (message.maxAgeSeconds !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxAgeSeconds! },
        writer.uint32(50).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CorsRule {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCorsRule } as CorsRule;
    message.allowedMethods = [];
    message.allowedHeaders = [];
    message.allowedOrigins = [];
    message.exposeHeaders = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.allowedMethods.push(reader.int32() as any);
            }
          } else {
            message.allowedMethods.push(reader.int32() as any);
          }
          break;
        case 3:
          message.allowedHeaders.push(reader.string());
          break;
        case 4:
          message.allowedOrigins.push(reader.string());
          break;
        case 5:
          message.exposeHeaders.push(reader.string());
          break;
        case 6:
          message.maxAgeSeconds = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CorsRule {
    const message = { ...baseCorsRule } as CorsRule;
    message.id =
      object.id !== undefined && object.id !== null ? String(object.id) : "";
    message.allowedMethods = (object.allowedMethods ?? []).map((e: any) =>
      corsRule_MethodFromJSON(e)
    );
    message.allowedHeaders = (object.allowedHeaders ?? []).map((e: any) =>
      String(e)
    );
    message.allowedOrigins = (object.allowedOrigins ?? []).map((e: any) =>
      String(e)
    );
    message.exposeHeaders = (object.exposeHeaders ?? []).map((e: any) =>
      String(e)
    );
    message.maxAgeSeconds =
      object.maxAgeSeconds !== undefined && object.maxAgeSeconds !== null
        ? Number(object.maxAgeSeconds)
        : undefined;
    return message;
  },

  toJSON(message: CorsRule): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    if (message.allowedMethods) {
      obj.allowedMethods = message.allowedMethods.map((e) =>
        corsRule_MethodToJSON(e)
      );
    } else {
      obj.allowedMethods = [];
    }
    if (message.allowedHeaders) {
      obj.allowedHeaders = message.allowedHeaders.map((e) => e);
    } else {
      obj.allowedHeaders = [];
    }
    if (message.allowedOrigins) {
      obj.allowedOrigins = message.allowedOrigins.map((e) => e);
    } else {
      obj.allowedOrigins = [];
    }
    if (message.exposeHeaders) {
      obj.exposeHeaders = message.exposeHeaders.map((e) => e);
    } else {
      obj.exposeHeaders = [];
    }
    message.maxAgeSeconds !== undefined &&
      (obj.maxAgeSeconds = message.maxAgeSeconds);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CorsRule>, I>>(object: I): CorsRule {
    const message = { ...baseCorsRule } as CorsRule;
    message.id = object.id ?? "";
    message.allowedMethods = object.allowedMethods?.map((e) => e) || [];
    message.allowedHeaders = object.allowedHeaders?.map((e) => e) || [];
    message.allowedOrigins = object.allowedOrigins?.map((e) => e) || [];
    message.exposeHeaders = object.exposeHeaders?.map((e) => e) || [];
    message.maxAgeSeconds = object.maxAgeSeconds ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(CorsRule.$type, CorsRule);

const baseWebsiteSettings: object = {
  $type: "yandex.cloud.storage.v1.WebsiteSettings",
  index: "",
  error: "",
};

export const WebsiteSettings = {
  $type: "yandex.cloud.storage.v1.WebsiteSettings" as const,

  encode(
    message: WebsiteSettings,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.error !== "") {
      writer.uint32(18).string(message.error);
    }
    if (message.redirectAllRequests !== undefined) {
      WebsiteSettings_Scheme.encode(
        message.redirectAllRequests,
        writer.uint32(26).fork()
      ).ldelim();
    }
    for (const v of message.routingRules) {
      WebsiteSettings_RoutingRule.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WebsiteSettings {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseWebsiteSettings } as WebsiteSettings;
    message.routingRules = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 2:
          message.error = reader.string();
          break;
        case 3:
          message.redirectAllRequests = WebsiteSettings_Scheme.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.routingRules.push(
            WebsiteSettings_RoutingRule.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WebsiteSettings {
    const message = { ...baseWebsiteSettings } as WebsiteSettings;
    message.index =
      object.index !== undefined && object.index !== null
        ? String(object.index)
        : "";
    message.error =
      object.error !== undefined && object.error !== null
        ? String(object.error)
        : "";
    message.redirectAllRequests =
      object.redirectAllRequests !== undefined &&
      object.redirectAllRequests !== null
        ? WebsiteSettings_Scheme.fromJSON(object.redirectAllRequests)
        : undefined;
    message.routingRules = (object.routingRules ?? []).map((e: any) =>
      WebsiteSettings_RoutingRule.fromJSON(e)
    );
    return message;
  },

  toJSON(message: WebsiteSettings): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.error !== undefined && (obj.error = message.error);
    message.redirectAllRequests !== undefined &&
      (obj.redirectAllRequests = message.redirectAllRequests
        ? WebsiteSettings_Scheme.toJSON(message.redirectAllRequests)
        : undefined);
    if (message.routingRules) {
      obj.routingRules = message.routingRules.map((e) =>
        e ? WebsiteSettings_RoutingRule.toJSON(e) : undefined
      );
    } else {
      obj.routingRules = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<WebsiteSettings>, I>>(
    object: I
  ): WebsiteSettings {
    const message = { ...baseWebsiteSettings } as WebsiteSettings;
    message.index = object.index ?? "";
    message.error = object.error ?? "";
    message.redirectAllRequests =
      object.redirectAllRequests !== undefined &&
      object.redirectAllRequests !== null
        ? WebsiteSettings_Scheme.fromPartial(object.redirectAllRequests)
        : undefined;
    message.routingRules =
      object.routingRules?.map((e) =>
        WebsiteSettings_RoutingRule.fromPartial(e)
      ) || [];
    return message;
  },
};

messageTypeRegistry.set(WebsiteSettings.$type, WebsiteSettings);

const baseWebsiteSettings_Scheme: object = {
  $type: "yandex.cloud.storage.v1.WebsiteSettings.Scheme",
  protocol: 0,
  hostname: "",
};

export const WebsiteSettings_Scheme = {
  $type: "yandex.cloud.storage.v1.WebsiteSettings.Scheme" as const,

  encode(
    message: WebsiteSettings_Scheme,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.protocol !== 0) {
      writer.uint32(8).int32(message.protocol);
    }
    if (message.hostname !== "") {
      writer.uint32(18).string(message.hostname);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): WebsiteSettings_Scheme {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseWebsiteSettings_Scheme } as WebsiteSettings_Scheme;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.protocol = reader.int32() as any;
          break;
        case 2:
          message.hostname = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WebsiteSettings_Scheme {
    const message = { ...baseWebsiteSettings_Scheme } as WebsiteSettings_Scheme;
    message.protocol =
      object.protocol !== undefined && object.protocol !== null
        ? websiteSettings_ProtocolFromJSON(object.protocol)
        : 0;
    message.hostname =
      object.hostname !== undefined && object.hostname !== null
        ? String(object.hostname)
        : "";
    return message;
  },

  toJSON(message: WebsiteSettings_Scheme): unknown {
    const obj: any = {};
    message.protocol !== undefined &&
      (obj.protocol = websiteSettings_ProtocolToJSON(message.protocol));
    message.hostname !== undefined && (obj.hostname = message.hostname);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<WebsiteSettings_Scheme>, I>>(
    object: I
  ): WebsiteSettings_Scheme {
    const message = { ...baseWebsiteSettings_Scheme } as WebsiteSettings_Scheme;
    message.protocol = object.protocol ?? 0;
    message.hostname = object.hostname ?? "";
    return message;
  },
};

messageTypeRegistry.set(WebsiteSettings_Scheme.$type, WebsiteSettings_Scheme);

const baseWebsiteSettings_Condition: object = {
  $type: "yandex.cloud.storage.v1.WebsiteSettings.Condition",
  httpErrorCodeReturnedEquals: "",
  keyPrefixEquals: "",
};

export const WebsiteSettings_Condition = {
  $type: "yandex.cloud.storage.v1.WebsiteSettings.Condition" as const,

  encode(
    message: WebsiteSettings_Condition,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.httpErrorCodeReturnedEquals !== "") {
      writer.uint32(10).string(message.httpErrorCodeReturnedEquals);
    }
    if (message.keyPrefixEquals !== "") {
      writer.uint32(18).string(message.keyPrefixEquals);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): WebsiteSettings_Condition {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseWebsiteSettings_Condition,
    } as WebsiteSettings_Condition;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.httpErrorCodeReturnedEquals = reader.string();
          break;
        case 2:
          message.keyPrefixEquals = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WebsiteSettings_Condition {
    const message = {
      ...baseWebsiteSettings_Condition,
    } as WebsiteSettings_Condition;
    message.httpErrorCodeReturnedEquals =
      object.httpErrorCodeReturnedEquals !== undefined &&
      object.httpErrorCodeReturnedEquals !== null
        ? String(object.httpErrorCodeReturnedEquals)
        : "";
    message.keyPrefixEquals =
      object.keyPrefixEquals !== undefined && object.keyPrefixEquals !== null
        ? String(object.keyPrefixEquals)
        : "";
    return message;
  },

  toJSON(message: WebsiteSettings_Condition): unknown {
    const obj: any = {};
    message.httpErrorCodeReturnedEquals !== undefined &&
      (obj.httpErrorCodeReturnedEquals = message.httpErrorCodeReturnedEquals);
    message.keyPrefixEquals !== undefined &&
      (obj.keyPrefixEquals = message.keyPrefixEquals);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<WebsiteSettings_Condition>, I>>(
    object: I
  ): WebsiteSettings_Condition {
    const message = {
      ...baseWebsiteSettings_Condition,
    } as WebsiteSettings_Condition;
    message.httpErrorCodeReturnedEquals =
      object.httpErrorCodeReturnedEquals ?? "";
    message.keyPrefixEquals = object.keyPrefixEquals ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  WebsiteSettings_Condition.$type,
  WebsiteSettings_Condition
);

const baseWebsiteSettings_Redirect: object = {
  $type: "yandex.cloud.storage.v1.WebsiteSettings.Redirect",
  hostname: "",
  httpRedirectCode: "",
  protocol: 0,
  replaceKeyPrefixWith: "",
  replaceKeyWith: "",
};

export const WebsiteSettings_Redirect = {
  $type: "yandex.cloud.storage.v1.WebsiteSettings.Redirect" as const,

  encode(
    message: WebsiteSettings_Redirect,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.hostname !== "") {
      writer.uint32(10).string(message.hostname);
    }
    if (message.httpRedirectCode !== "") {
      writer.uint32(18).string(message.httpRedirectCode);
    }
    if (message.protocol !== 0) {
      writer.uint32(24).int32(message.protocol);
    }
    if (message.replaceKeyPrefixWith !== "") {
      writer.uint32(34).string(message.replaceKeyPrefixWith);
    }
    if (message.replaceKeyWith !== "") {
      writer.uint32(42).string(message.replaceKeyWith);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): WebsiteSettings_Redirect {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseWebsiteSettings_Redirect,
    } as WebsiteSettings_Redirect;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hostname = reader.string();
          break;
        case 2:
          message.httpRedirectCode = reader.string();
          break;
        case 3:
          message.protocol = reader.int32() as any;
          break;
        case 4:
          message.replaceKeyPrefixWith = reader.string();
          break;
        case 5:
          message.replaceKeyWith = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WebsiteSettings_Redirect {
    const message = {
      ...baseWebsiteSettings_Redirect,
    } as WebsiteSettings_Redirect;
    message.hostname =
      object.hostname !== undefined && object.hostname !== null
        ? String(object.hostname)
        : "";
    message.httpRedirectCode =
      object.httpRedirectCode !== undefined && object.httpRedirectCode !== null
        ? String(object.httpRedirectCode)
        : "";
    message.protocol =
      object.protocol !== undefined && object.protocol !== null
        ? websiteSettings_ProtocolFromJSON(object.protocol)
        : 0;
    message.replaceKeyPrefixWith =
      object.replaceKeyPrefixWith !== undefined &&
      object.replaceKeyPrefixWith !== null
        ? String(object.replaceKeyPrefixWith)
        : "";
    message.replaceKeyWith =
      object.replaceKeyWith !== undefined && object.replaceKeyWith !== null
        ? String(object.replaceKeyWith)
        : "";
    return message;
  },

  toJSON(message: WebsiteSettings_Redirect): unknown {
    const obj: any = {};
    message.hostname !== undefined && (obj.hostname = message.hostname);
    message.httpRedirectCode !== undefined &&
      (obj.httpRedirectCode = message.httpRedirectCode);
    message.protocol !== undefined &&
      (obj.protocol = websiteSettings_ProtocolToJSON(message.protocol));
    message.replaceKeyPrefixWith !== undefined &&
      (obj.replaceKeyPrefixWith = message.replaceKeyPrefixWith);
    message.replaceKeyWith !== undefined &&
      (obj.replaceKeyWith = message.replaceKeyWith);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<WebsiteSettings_Redirect>, I>>(
    object: I
  ): WebsiteSettings_Redirect {
    const message = {
      ...baseWebsiteSettings_Redirect,
    } as WebsiteSettings_Redirect;
    message.hostname = object.hostname ?? "";
    message.httpRedirectCode = object.httpRedirectCode ?? "";
    message.protocol = object.protocol ?? 0;
    message.replaceKeyPrefixWith = object.replaceKeyPrefixWith ?? "";
    message.replaceKeyWith = object.replaceKeyWith ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  WebsiteSettings_Redirect.$type,
  WebsiteSettings_Redirect
);

const baseWebsiteSettings_RoutingRule: object = {
  $type: "yandex.cloud.storage.v1.WebsiteSettings.RoutingRule",
};

export const WebsiteSettings_RoutingRule = {
  $type: "yandex.cloud.storage.v1.WebsiteSettings.RoutingRule" as const,

  encode(
    message: WebsiteSettings_RoutingRule,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.condition !== undefined) {
      WebsiteSettings_Condition.encode(
        message.condition,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.redirect !== undefined) {
      WebsiteSettings_Redirect.encode(
        message.redirect,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): WebsiteSettings_RoutingRule {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseWebsiteSettings_RoutingRule,
    } as WebsiteSettings_RoutingRule;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.condition = WebsiteSettings_Condition.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.redirect = WebsiteSettings_Redirect.decode(
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

  fromJSON(object: any): WebsiteSettings_RoutingRule {
    const message = {
      ...baseWebsiteSettings_RoutingRule,
    } as WebsiteSettings_RoutingRule;
    message.condition =
      object.condition !== undefined && object.condition !== null
        ? WebsiteSettings_Condition.fromJSON(object.condition)
        : undefined;
    message.redirect =
      object.redirect !== undefined && object.redirect !== null
        ? WebsiteSettings_Redirect.fromJSON(object.redirect)
        : undefined;
    return message;
  },

  toJSON(message: WebsiteSettings_RoutingRule): unknown {
    const obj: any = {};
    message.condition !== undefined &&
      (obj.condition = message.condition
        ? WebsiteSettings_Condition.toJSON(message.condition)
        : undefined);
    message.redirect !== undefined &&
      (obj.redirect = message.redirect
        ? WebsiteSettings_Redirect.toJSON(message.redirect)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<WebsiteSettings_RoutingRule>, I>>(
    object: I
  ): WebsiteSettings_RoutingRule {
    const message = {
      ...baseWebsiteSettings_RoutingRule,
    } as WebsiteSettings_RoutingRule;
    message.condition =
      object.condition !== undefined && object.condition !== null
        ? WebsiteSettings_Condition.fromPartial(object.condition)
        : undefined;
    message.redirect =
      object.redirect !== undefined && object.redirect !== null
        ? WebsiteSettings_Redirect.fromPartial(object.redirect)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  WebsiteSettings_RoutingRule.$type,
  WebsiteSettings_RoutingRule
);

const baseLifecycleRule: object = {
  $type: "yandex.cloud.storage.v1.LifecycleRule",
  enabled: false,
};

export const LifecycleRule = {
  $type: "yandex.cloud.storage.v1.LifecycleRule" as const,

  encode(
    message: LifecycleRule,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== undefined) {
      StringValue.encode(
        { $type: "google.protobuf.StringValue", value: message.id! },
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.enabled === true) {
      writer.uint32(16).bool(message.enabled);
    }
    if (message.filter !== undefined) {
      LifecycleRule_RuleFilter.encode(
        message.filter,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.expiration !== undefined) {
      LifecycleRule_Expiration.encode(
        message.expiration,
        writer.uint32(34).fork()
      ).ldelim();
    }
    for (const v of message.transitions) {
      LifecycleRule_Transition.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.abortIncompleteMultipartUpload !== undefined) {
      LifecycleRule_AfterDays.encode(
        message.abortIncompleteMultipartUpload,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.noncurrentExpiration !== undefined) {
      LifecycleRule_NoncurrentExpiration.encode(
        message.noncurrentExpiration,
        writer.uint32(58).fork()
      ).ldelim();
    }
    for (const v of message.noncurrentTransitions) {
      LifecycleRule_NoncurrentTransition.encode(
        v!,
        writer.uint32(66).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LifecycleRule {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseLifecycleRule } as LifecycleRule;
    message.transitions = [];
    message.noncurrentTransitions = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = StringValue.decode(reader, reader.uint32()).value;
          break;
        case 2:
          message.enabled = reader.bool();
          break;
        case 3:
          message.filter = LifecycleRule_RuleFilter.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.expiration = LifecycleRule_Expiration.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.transitions.push(
            LifecycleRule_Transition.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.abortIncompleteMultipartUpload =
            LifecycleRule_AfterDays.decode(reader, reader.uint32());
          break;
        case 7:
          message.noncurrentExpiration =
            LifecycleRule_NoncurrentExpiration.decode(reader, reader.uint32());
          break;
        case 8:
          message.noncurrentTransitions.push(
            LifecycleRule_NoncurrentTransition.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LifecycleRule {
    const message = { ...baseLifecycleRule } as LifecycleRule;
    message.id =
      object.id !== undefined && object.id !== null
        ? String(object.id)
        : undefined;
    message.enabled =
      object.enabled !== undefined && object.enabled !== null
        ? Boolean(object.enabled)
        : false;
    message.filter =
      object.filter !== undefined && object.filter !== null
        ? LifecycleRule_RuleFilter.fromJSON(object.filter)
        : undefined;
    message.expiration =
      object.expiration !== undefined && object.expiration !== null
        ? LifecycleRule_Expiration.fromJSON(object.expiration)
        : undefined;
    message.transitions = (object.transitions ?? []).map((e: any) =>
      LifecycleRule_Transition.fromJSON(e)
    );
    message.abortIncompleteMultipartUpload =
      object.abortIncompleteMultipartUpload !== undefined &&
      object.abortIncompleteMultipartUpload !== null
        ? LifecycleRule_AfterDays.fromJSON(
            object.abortIncompleteMultipartUpload
          )
        : undefined;
    message.noncurrentExpiration =
      object.noncurrentExpiration !== undefined &&
      object.noncurrentExpiration !== null
        ? LifecycleRule_NoncurrentExpiration.fromJSON(
            object.noncurrentExpiration
          )
        : undefined;
    message.noncurrentTransitions = (object.noncurrentTransitions ?? []).map(
      (e: any) => LifecycleRule_NoncurrentTransition.fromJSON(e)
    );
    return message;
  },

  toJSON(message: LifecycleRule): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.enabled !== undefined && (obj.enabled = message.enabled);
    message.filter !== undefined &&
      (obj.filter = message.filter
        ? LifecycleRule_RuleFilter.toJSON(message.filter)
        : undefined);
    message.expiration !== undefined &&
      (obj.expiration = message.expiration
        ? LifecycleRule_Expiration.toJSON(message.expiration)
        : undefined);
    if (message.transitions) {
      obj.transitions = message.transitions.map((e) =>
        e ? LifecycleRule_Transition.toJSON(e) : undefined
      );
    } else {
      obj.transitions = [];
    }
    message.abortIncompleteMultipartUpload !== undefined &&
      (obj.abortIncompleteMultipartUpload =
        message.abortIncompleteMultipartUpload
          ? LifecycleRule_AfterDays.toJSON(
              message.abortIncompleteMultipartUpload
            )
          : undefined);
    message.noncurrentExpiration !== undefined &&
      (obj.noncurrentExpiration = message.noncurrentExpiration
        ? LifecycleRule_NoncurrentExpiration.toJSON(
            message.noncurrentExpiration
          )
        : undefined);
    if (message.noncurrentTransitions) {
      obj.noncurrentTransitions = message.noncurrentTransitions.map((e) =>
        e ? LifecycleRule_NoncurrentTransition.toJSON(e) : undefined
      );
    } else {
      obj.noncurrentTransitions = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LifecycleRule>, I>>(
    object: I
  ): LifecycleRule {
    const message = { ...baseLifecycleRule } as LifecycleRule;
    message.id = object.id ?? undefined;
    message.enabled = object.enabled ?? false;
    message.filter =
      object.filter !== undefined && object.filter !== null
        ? LifecycleRule_RuleFilter.fromPartial(object.filter)
        : undefined;
    message.expiration =
      object.expiration !== undefined && object.expiration !== null
        ? LifecycleRule_Expiration.fromPartial(object.expiration)
        : undefined;
    message.transitions =
      object.transitions?.map((e) => LifecycleRule_Transition.fromPartial(e)) ||
      [];
    message.abortIncompleteMultipartUpload =
      object.abortIncompleteMultipartUpload !== undefined &&
      object.abortIncompleteMultipartUpload !== null
        ? LifecycleRule_AfterDays.fromPartial(
            object.abortIncompleteMultipartUpload
          )
        : undefined;
    message.noncurrentExpiration =
      object.noncurrentExpiration !== undefined &&
      object.noncurrentExpiration !== null
        ? LifecycleRule_NoncurrentExpiration.fromPartial(
            object.noncurrentExpiration
          )
        : undefined;
    message.noncurrentTransitions =
      object.noncurrentTransitions?.map((e) =>
        LifecycleRule_NoncurrentTransition.fromPartial(e)
      ) || [];
    return message;
  },
};

messageTypeRegistry.set(LifecycleRule.$type, LifecycleRule);

const baseLifecycleRule_AfterDays: object = {
  $type: "yandex.cloud.storage.v1.LifecycleRule.AfterDays",
};

export const LifecycleRule_AfterDays = {
  $type: "yandex.cloud.storage.v1.LifecycleRule.AfterDays" as const,

  encode(
    message: LifecycleRule_AfterDays,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.daysAfterExpiration !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.daysAfterExpiration!,
        },
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): LifecycleRule_AfterDays {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseLifecycleRule_AfterDays,
    } as LifecycleRule_AfterDays;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.daysAfterExpiration = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LifecycleRule_AfterDays {
    const message = {
      ...baseLifecycleRule_AfterDays,
    } as LifecycleRule_AfterDays;
    message.daysAfterExpiration =
      object.daysAfterExpiration !== undefined &&
      object.daysAfterExpiration !== null
        ? Number(object.daysAfterExpiration)
        : undefined;
    return message;
  },

  toJSON(message: LifecycleRule_AfterDays): unknown {
    const obj: any = {};
    message.daysAfterExpiration !== undefined &&
      (obj.daysAfterExpiration = message.daysAfterExpiration);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LifecycleRule_AfterDays>, I>>(
    object: I
  ): LifecycleRule_AfterDays {
    const message = {
      ...baseLifecycleRule_AfterDays,
    } as LifecycleRule_AfterDays;
    message.daysAfterExpiration = object.daysAfterExpiration ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(LifecycleRule_AfterDays.$type, LifecycleRule_AfterDays);

const baseLifecycleRule_NoncurrentExpiration: object = {
  $type: "yandex.cloud.storage.v1.LifecycleRule.NoncurrentExpiration",
};

export const LifecycleRule_NoncurrentExpiration = {
  $type: "yandex.cloud.storage.v1.LifecycleRule.NoncurrentExpiration" as const,

  encode(
    message: LifecycleRule_NoncurrentExpiration,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.noncurrentDays !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.noncurrentDays! },
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): LifecycleRule_NoncurrentExpiration {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseLifecycleRule_NoncurrentExpiration,
    } as LifecycleRule_NoncurrentExpiration;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.noncurrentDays = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LifecycleRule_NoncurrentExpiration {
    const message = {
      ...baseLifecycleRule_NoncurrentExpiration,
    } as LifecycleRule_NoncurrentExpiration;
    message.noncurrentDays =
      object.noncurrentDays !== undefined && object.noncurrentDays !== null
        ? Number(object.noncurrentDays)
        : undefined;
    return message;
  },

  toJSON(message: LifecycleRule_NoncurrentExpiration): unknown {
    const obj: any = {};
    message.noncurrentDays !== undefined &&
      (obj.noncurrentDays = message.noncurrentDays);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<LifecycleRule_NoncurrentExpiration>, I>
  >(object: I): LifecycleRule_NoncurrentExpiration {
    const message = {
      ...baseLifecycleRule_NoncurrentExpiration,
    } as LifecycleRule_NoncurrentExpiration;
    message.noncurrentDays = object.noncurrentDays ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(
  LifecycleRule_NoncurrentExpiration.$type,
  LifecycleRule_NoncurrentExpiration
);

const baseLifecycleRule_NoncurrentTransition: object = {
  $type: "yandex.cloud.storage.v1.LifecycleRule.NoncurrentTransition",
  storageClass: "",
};

export const LifecycleRule_NoncurrentTransition = {
  $type: "yandex.cloud.storage.v1.LifecycleRule.NoncurrentTransition" as const,

  encode(
    message: LifecycleRule_NoncurrentTransition,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.noncurrentDays !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.noncurrentDays! },
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.storageClass !== "") {
      writer.uint32(18).string(message.storageClass);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): LifecycleRule_NoncurrentTransition {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseLifecycleRule_NoncurrentTransition,
    } as LifecycleRule_NoncurrentTransition;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.noncurrentDays = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 2:
          message.storageClass = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LifecycleRule_NoncurrentTransition {
    const message = {
      ...baseLifecycleRule_NoncurrentTransition,
    } as LifecycleRule_NoncurrentTransition;
    message.noncurrentDays =
      object.noncurrentDays !== undefined && object.noncurrentDays !== null
        ? Number(object.noncurrentDays)
        : undefined;
    message.storageClass =
      object.storageClass !== undefined && object.storageClass !== null
        ? String(object.storageClass)
        : "";
    return message;
  },

  toJSON(message: LifecycleRule_NoncurrentTransition): unknown {
    const obj: any = {};
    message.noncurrentDays !== undefined &&
      (obj.noncurrentDays = message.noncurrentDays);
    message.storageClass !== undefined &&
      (obj.storageClass = message.storageClass);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<LifecycleRule_NoncurrentTransition>, I>
  >(object: I): LifecycleRule_NoncurrentTransition {
    const message = {
      ...baseLifecycleRule_NoncurrentTransition,
    } as LifecycleRule_NoncurrentTransition;
    message.noncurrentDays = object.noncurrentDays ?? undefined;
    message.storageClass = object.storageClass ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  LifecycleRule_NoncurrentTransition.$type,
  LifecycleRule_NoncurrentTransition
);

const baseLifecycleRule_Transition: object = {
  $type: "yandex.cloud.storage.v1.LifecycleRule.Transition",
  storageClass: "",
};

export const LifecycleRule_Transition = {
  $type: "yandex.cloud.storage.v1.LifecycleRule.Transition" as const,

  encode(
    message: LifecycleRule_Transition,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.date !== undefined) {
      Timestamp.encode(
        toTimestamp(message.date),
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.days !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.days! },
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.storageClass !== "") {
      writer.uint32(34).string(message.storageClass);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): LifecycleRule_Transition {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseLifecycleRule_Transition,
    } as LifecycleRule_Transition;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.date = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.days = Int64Value.decode(reader, reader.uint32()).value;
          break;
        case 4:
          message.storageClass = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LifecycleRule_Transition {
    const message = {
      ...baseLifecycleRule_Transition,
    } as LifecycleRule_Transition;
    message.date =
      object.date !== undefined && object.date !== null
        ? fromJsonTimestamp(object.date)
        : undefined;
    message.days =
      object.days !== undefined && object.days !== null
        ? Number(object.days)
        : undefined;
    message.storageClass =
      object.storageClass !== undefined && object.storageClass !== null
        ? String(object.storageClass)
        : "";
    return message;
  },

  toJSON(message: LifecycleRule_Transition): unknown {
    const obj: any = {};
    message.date !== undefined && (obj.date = message.date.toISOString());
    message.days !== undefined && (obj.days = message.days);
    message.storageClass !== undefined &&
      (obj.storageClass = message.storageClass);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LifecycleRule_Transition>, I>>(
    object: I
  ): LifecycleRule_Transition {
    const message = {
      ...baseLifecycleRule_Transition,
    } as LifecycleRule_Transition;
    message.date = object.date ?? undefined;
    message.days = object.days ?? undefined;
    message.storageClass = object.storageClass ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  LifecycleRule_Transition.$type,
  LifecycleRule_Transition
);

const baseLifecycleRule_Expiration: object = {
  $type: "yandex.cloud.storage.v1.LifecycleRule.Expiration",
};

export const LifecycleRule_Expiration = {
  $type: "yandex.cloud.storage.v1.LifecycleRule.Expiration" as const,

  encode(
    message: LifecycleRule_Expiration,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.date !== undefined) {
      Timestamp.encode(
        toTimestamp(message.date),
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.days !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.days! },
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.expiredObjectDeleteMarker !== undefined) {
      BoolValue.encode(
        {
          $type: "google.protobuf.BoolValue",
          value: message.expiredObjectDeleteMarker!,
        },
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): LifecycleRule_Expiration {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseLifecycleRule_Expiration,
    } as LifecycleRule_Expiration;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.date = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.days = Int64Value.decode(reader, reader.uint32()).value;
          break;
        case 3:
          message.expiredObjectDeleteMarker = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LifecycleRule_Expiration {
    const message = {
      ...baseLifecycleRule_Expiration,
    } as LifecycleRule_Expiration;
    message.date =
      object.date !== undefined && object.date !== null
        ? fromJsonTimestamp(object.date)
        : undefined;
    message.days =
      object.days !== undefined && object.days !== null
        ? Number(object.days)
        : undefined;
    message.expiredObjectDeleteMarker =
      object.expiredObjectDeleteMarker !== undefined &&
      object.expiredObjectDeleteMarker !== null
        ? Boolean(object.expiredObjectDeleteMarker)
        : undefined;
    return message;
  },

  toJSON(message: LifecycleRule_Expiration): unknown {
    const obj: any = {};
    message.date !== undefined && (obj.date = message.date.toISOString());
    message.days !== undefined && (obj.days = message.days);
    message.expiredObjectDeleteMarker !== undefined &&
      (obj.expiredObjectDeleteMarker = message.expiredObjectDeleteMarker);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LifecycleRule_Expiration>, I>>(
    object: I
  ): LifecycleRule_Expiration {
    const message = {
      ...baseLifecycleRule_Expiration,
    } as LifecycleRule_Expiration;
    message.date = object.date ?? undefined;
    message.days = object.days ?? undefined;
    message.expiredObjectDeleteMarker =
      object.expiredObjectDeleteMarker ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(
  LifecycleRule_Expiration.$type,
  LifecycleRule_Expiration
);

const baseLifecycleRule_RuleFilter: object = {
  $type: "yandex.cloud.storage.v1.LifecycleRule.RuleFilter",
  prefix: "",
};

export const LifecycleRule_RuleFilter = {
  $type: "yandex.cloud.storage.v1.LifecycleRule.RuleFilter" as const,

  encode(
    message: LifecycleRule_RuleFilter,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.prefix !== "") {
      writer.uint32(10).string(message.prefix);
    }
    if (message.objectSizeGreaterThan !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.objectSizeGreaterThan!,
        },
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.objectSizeLessThan !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.objectSizeLessThan!,
        },
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): LifecycleRule_RuleFilter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseLifecycleRule_RuleFilter,
    } as LifecycleRule_RuleFilter;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.prefix = reader.string();
          break;
        case 2:
          message.objectSizeGreaterThan = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 3:
          message.objectSizeLessThan = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LifecycleRule_RuleFilter {
    const message = {
      ...baseLifecycleRule_RuleFilter,
    } as LifecycleRule_RuleFilter;
    message.prefix =
      object.prefix !== undefined && object.prefix !== null
        ? String(object.prefix)
        : "";
    message.objectSizeGreaterThan =
      object.objectSizeGreaterThan !== undefined &&
      object.objectSizeGreaterThan !== null
        ? Number(object.objectSizeGreaterThan)
        : undefined;
    message.objectSizeLessThan =
      object.objectSizeLessThan !== undefined &&
      object.objectSizeLessThan !== null
        ? Number(object.objectSizeLessThan)
        : undefined;
    return message;
  },

  toJSON(message: LifecycleRule_RuleFilter): unknown {
    const obj: any = {};
    message.prefix !== undefined && (obj.prefix = message.prefix);
    message.objectSizeGreaterThan !== undefined &&
      (obj.objectSizeGreaterThan = message.objectSizeGreaterThan);
    message.objectSizeLessThan !== undefined &&
      (obj.objectSizeLessThan = message.objectSizeLessThan);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LifecycleRule_RuleFilter>, I>>(
    object: I
  ): LifecycleRule_RuleFilter {
    const message = {
      ...baseLifecycleRule_RuleFilter,
    } as LifecycleRule_RuleFilter;
    message.prefix = object.prefix ?? "";
    message.objectSizeGreaterThan = object.objectSizeGreaterThan ?? undefined;
    message.objectSizeLessThan = object.objectSizeLessThan ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(
  LifecycleRule_RuleFilter.$type,
  LifecycleRule_RuleFilter
);

const baseCounters: object = {
  $type: "yandex.cloud.storage.v1.Counters",
  simpleObjectSize: 0,
  simpleObjectCount: 0,
  objectsPartsSize: 0,
  objectsPartsCount: 0,
  multipartObjectsSize: 0,
  multipartObjectsCount: 0,
  activeMultipartCount: 0,
};

export const Counters = {
  $type: "yandex.cloud.storage.v1.Counters" as const,

  encode(
    message: Counters,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.simpleObjectSize !== 0) {
      writer.uint32(8).int64(message.simpleObjectSize);
    }
    if (message.simpleObjectCount !== 0) {
      writer.uint32(16).int64(message.simpleObjectCount);
    }
    if (message.objectsPartsSize !== 0) {
      writer.uint32(24).int64(message.objectsPartsSize);
    }
    if (message.objectsPartsCount !== 0) {
      writer.uint32(32).int64(message.objectsPartsCount);
    }
    if (message.multipartObjectsSize !== 0) {
      writer.uint32(40).int64(message.multipartObjectsSize);
    }
    if (message.multipartObjectsCount !== 0) {
      writer.uint32(48).int64(message.multipartObjectsCount);
    }
    if (message.activeMultipartCount !== 0) {
      writer.uint32(56).int64(message.activeMultipartCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Counters {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCounters } as Counters;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.simpleObjectSize = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.simpleObjectCount = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.objectsPartsSize = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.objectsPartsCount = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.multipartObjectsSize = longToNumber(reader.int64() as Long);
          break;
        case 6:
          message.multipartObjectsCount = longToNumber(reader.int64() as Long);
          break;
        case 7:
          message.activeMultipartCount = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Counters {
    const message = { ...baseCounters } as Counters;
    message.simpleObjectSize =
      object.simpleObjectSize !== undefined && object.simpleObjectSize !== null
        ? Number(object.simpleObjectSize)
        : 0;
    message.simpleObjectCount =
      object.simpleObjectCount !== undefined &&
      object.simpleObjectCount !== null
        ? Number(object.simpleObjectCount)
        : 0;
    message.objectsPartsSize =
      object.objectsPartsSize !== undefined && object.objectsPartsSize !== null
        ? Number(object.objectsPartsSize)
        : 0;
    message.objectsPartsCount =
      object.objectsPartsCount !== undefined &&
      object.objectsPartsCount !== null
        ? Number(object.objectsPartsCount)
        : 0;
    message.multipartObjectsSize =
      object.multipartObjectsSize !== undefined &&
      object.multipartObjectsSize !== null
        ? Number(object.multipartObjectsSize)
        : 0;
    message.multipartObjectsCount =
      object.multipartObjectsCount !== undefined &&
      object.multipartObjectsCount !== null
        ? Number(object.multipartObjectsCount)
        : 0;
    message.activeMultipartCount =
      object.activeMultipartCount !== undefined &&
      object.activeMultipartCount !== null
        ? Number(object.activeMultipartCount)
        : 0;
    return message;
  },

  toJSON(message: Counters): unknown {
    const obj: any = {};
    message.simpleObjectSize !== undefined &&
      (obj.simpleObjectSize = Math.round(message.simpleObjectSize));
    message.simpleObjectCount !== undefined &&
      (obj.simpleObjectCount = Math.round(message.simpleObjectCount));
    message.objectsPartsSize !== undefined &&
      (obj.objectsPartsSize = Math.round(message.objectsPartsSize));
    message.objectsPartsCount !== undefined &&
      (obj.objectsPartsCount = Math.round(message.objectsPartsCount));
    message.multipartObjectsSize !== undefined &&
      (obj.multipartObjectsSize = Math.round(message.multipartObjectsSize));
    message.multipartObjectsCount !== undefined &&
      (obj.multipartObjectsCount = Math.round(message.multipartObjectsCount));
    message.activeMultipartCount !== undefined &&
      (obj.activeMultipartCount = Math.round(message.activeMultipartCount));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Counters>, I>>(object: I): Counters {
    const message = { ...baseCounters } as Counters;
    message.simpleObjectSize = object.simpleObjectSize ?? 0;
    message.simpleObjectCount = object.simpleObjectCount ?? 0;
    message.objectsPartsSize = object.objectsPartsSize ?? 0;
    message.objectsPartsCount = object.objectsPartsCount ?? 0;
    message.multipartObjectsSize = object.multipartObjectsSize ?? 0;
    message.multipartObjectsCount = object.multipartObjectsCount ?? 0;
    message.activeMultipartCount = object.activeMultipartCount ?? 0;
    return message;
  },
};

messageTypeRegistry.set(Counters.$type, Counters);

const baseOptionalSizeByClass: object = {
  $type: "yandex.cloud.storage.v1.OptionalSizeByClass",
  storageClass: "",
};

export const OptionalSizeByClass = {
  $type: "yandex.cloud.storage.v1.OptionalSizeByClass" as const,

  encode(
    message: OptionalSizeByClass,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.storageClass !== "") {
      writer.uint32(10).string(message.storageClass);
    }
    if (message.classSize !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.classSize! },
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OptionalSizeByClass {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOptionalSizeByClass } as OptionalSizeByClass;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.storageClass = reader.string();
          break;
        case 2:
          message.classSize = Int64Value.decode(reader, reader.uint32()).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OptionalSizeByClass {
    const message = { ...baseOptionalSizeByClass } as OptionalSizeByClass;
    message.storageClass =
      object.storageClass !== undefined && object.storageClass !== null
        ? String(object.storageClass)
        : "";
    message.classSize =
      object.classSize !== undefined && object.classSize !== null
        ? Number(object.classSize)
        : undefined;
    return message;
  },

  toJSON(message: OptionalSizeByClass): unknown {
    const obj: any = {};
    message.storageClass !== undefined &&
      (obj.storageClass = message.storageClass);
    message.classSize !== undefined && (obj.classSize = message.classSize);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OptionalSizeByClass>, I>>(
    object: I
  ): OptionalSizeByClass {
    const message = { ...baseOptionalSizeByClass } as OptionalSizeByClass;
    message.storageClass = object.storageClass ?? "";
    message.classSize = object.classSize ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(OptionalSizeByClass.$type, OptionalSizeByClass);

const baseSizeByClass: object = {
  $type: "yandex.cloud.storage.v1.SizeByClass",
  storageClass: "",
  classSize: 0,
};

export const SizeByClass = {
  $type: "yandex.cloud.storage.v1.SizeByClass" as const,

  encode(
    message: SizeByClass,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.storageClass !== "") {
      writer.uint32(10).string(message.storageClass);
    }
    if (message.classSize !== 0) {
      writer.uint32(16).int64(message.classSize);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SizeByClass {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSizeByClass } as SizeByClass;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.storageClass = reader.string();
          break;
        case 2:
          message.classSize = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SizeByClass {
    const message = { ...baseSizeByClass } as SizeByClass;
    message.storageClass =
      object.storageClass !== undefined && object.storageClass !== null
        ? String(object.storageClass)
        : "";
    message.classSize =
      object.classSize !== undefined && object.classSize !== null
        ? Number(object.classSize)
        : 0;
    return message;
  },

  toJSON(message: SizeByClass): unknown {
    const obj: any = {};
    message.storageClass !== undefined &&
      (obj.storageClass = message.storageClass);
    message.classSize !== undefined &&
      (obj.classSize = Math.round(message.classSize));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SizeByClass>, I>>(
    object: I
  ): SizeByClass {
    const message = { ...baseSizeByClass } as SizeByClass;
    message.storageClass = object.storageClass ?? "";
    message.classSize = object.classSize ?? 0;
    return message;
  },
};

messageTypeRegistry.set(SizeByClass.$type, SizeByClass);

const baseCountersByClass: object = {
  $type: "yandex.cloud.storage.v1.CountersByClass",
  storageClass: "",
};

export const CountersByClass = {
  $type: "yandex.cloud.storage.v1.CountersByClass" as const,

  encode(
    message: CountersByClass,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.storageClass !== "") {
      writer.uint32(10).string(message.storageClass);
    }
    if (message.counters !== undefined) {
      Counters.encode(message.counters, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CountersByClass {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCountersByClass } as CountersByClass;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.storageClass = reader.string();
          break;
        case 2:
          message.counters = Counters.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CountersByClass {
    const message = { ...baseCountersByClass } as CountersByClass;
    message.storageClass =
      object.storageClass !== undefined && object.storageClass !== null
        ? String(object.storageClass)
        : "";
    message.counters =
      object.counters !== undefined && object.counters !== null
        ? Counters.fromJSON(object.counters)
        : undefined;
    return message;
  },

  toJSON(message: CountersByClass): unknown {
    const obj: any = {};
    message.storageClass !== undefined &&
      (obj.storageClass = message.storageClass);
    message.counters !== undefined &&
      (obj.counters = message.counters
        ? Counters.toJSON(message.counters)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CountersByClass>, I>>(
    object: I
  ): CountersByClass {
    const message = { ...baseCountersByClass } as CountersByClass;
    message.storageClass = object.storageClass ?? "";
    message.counters =
      object.counters !== undefined && object.counters !== null
        ? Counters.fromPartial(object.counters)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(CountersByClass.$type, CountersByClass);

const baseBucketStats: object = {
  $type: "yandex.cloud.storage.v1.BucketStats",
  name: "",
  usedSize: 0,
};

export const BucketStats = {
  $type: "yandex.cloud.storage.v1.BucketStats" as const,

  encode(
    message: BucketStats,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.maxSize !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxSize! },
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.usedSize !== 0) {
      writer.uint32(24).int64(message.usedSize);
    }
    for (const v of message.storageClassMaxSizes) {
      OptionalSizeByClass.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.storageClassUsedSizes) {
      SizeByClass.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.storageClassCounters) {
      CountersByClass.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.defaultStorageClass !== undefined) {
      StringValue.encode(
        {
          $type: "google.protobuf.StringValue",
          value: message.defaultStorageClass!,
        },
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.anonymousAccessFlags !== undefined) {
      AnonymousAccessFlags.encode(
        message.anonymousAccessFlags,
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.createdAt),
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.updatedAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.updatedAt),
        writer.uint32(82).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BucketStats {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBucketStats } as BucketStats;
    message.storageClassMaxSizes = [];
    message.storageClassUsedSizes = [];
    message.storageClassCounters = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.maxSize = Int64Value.decode(reader, reader.uint32()).value;
          break;
        case 3:
          message.usedSize = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.storageClassMaxSizes.push(
            OptionalSizeByClass.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.storageClassUsedSizes.push(
            SizeByClass.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.storageClassCounters.push(
            CountersByClass.decode(reader, reader.uint32())
          );
          break;
        case 7:
          message.defaultStorageClass = StringValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 8:
          message.anonymousAccessFlags = AnonymousAccessFlags.decode(
            reader,
            reader.uint32()
          );
          break;
        case 9:
          message.createdAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 10:
          message.updatedAt = fromTimestamp(
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

  fromJSON(object: any): BucketStats {
    const message = { ...baseBucketStats } as BucketStats;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.maxSize =
      object.maxSize !== undefined && object.maxSize !== null
        ? Number(object.maxSize)
        : undefined;
    message.usedSize =
      object.usedSize !== undefined && object.usedSize !== null
        ? Number(object.usedSize)
        : 0;
    message.storageClassMaxSizes = (object.storageClassMaxSizes ?? []).map(
      (e: any) => OptionalSizeByClass.fromJSON(e)
    );
    message.storageClassUsedSizes = (object.storageClassUsedSizes ?? []).map(
      (e: any) => SizeByClass.fromJSON(e)
    );
    message.storageClassCounters = (object.storageClassCounters ?? []).map(
      (e: any) => CountersByClass.fromJSON(e)
    );
    message.defaultStorageClass =
      object.defaultStorageClass !== undefined &&
      object.defaultStorageClass !== null
        ? String(object.defaultStorageClass)
        : undefined;
    message.anonymousAccessFlags =
      object.anonymousAccessFlags !== undefined &&
      object.anonymousAccessFlags !== null
        ? AnonymousAccessFlags.fromJSON(object.anonymousAccessFlags)
        : undefined;
    message.createdAt =
      object.createdAt !== undefined && object.createdAt !== null
        ? fromJsonTimestamp(object.createdAt)
        : undefined;
    message.updatedAt =
      object.updatedAt !== undefined && object.updatedAt !== null
        ? fromJsonTimestamp(object.updatedAt)
        : undefined;
    return message;
  },

  toJSON(message: BucketStats): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.maxSize !== undefined && (obj.maxSize = message.maxSize);
    message.usedSize !== undefined &&
      (obj.usedSize = Math.round(message.usedSize));
    if (message.storageClassMaxSizes) {
      obj.storageClassMaxSizes = message.storageClassMaxSizes.map((e) =>
        e ? OptionalSizeByClass.toJSON(e) : undefined
      );
    } else {
      obj.storageClassMaxSizes = [];
    }
    if (message.storageClassUsedSizes) {
      obj.storageClassUsedSizes = message.storageClassUsedSizes.map((e) =>
        e ? SizeByClass.toJSON(e) : undefined
      );
    } else {
      obj.storageClassUsedSizes = [];
    }
    if (message.storageClassCounters) {
      obj.storageClassCounters = message.storageClassCounters.map((e) =>
        e ? CountersByClass.toJSON(e) : undefined
      );
    } else {
      obj.storageClassCounters = [];
    }
    message.defaultStorageClass !== undefined &&
      (obj.defaultStorageClass = message.defaultStorageClass);
    message.anonymousAccessFlags !== undefined &&
      (obj.anonymousAccessFlags = message.anonymousAccessFlags
        ? AnonymousAccessFlags.toJSON(message.anonymousAccessFlags)
        : undefined);
    message.createdAt !== undefined &&
      (obj.createdAt = message.createdAt.toISOString());
    message.updatedAt !== undefined &&
      (obj.updatedAt = message.updatedAt.toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BucketStats>, I>>(
    object: I
  ): BucketStats {
    const message = { ...baseBucketStats } as BucketStats;
    message.name = object.name ?? "";
    message.maxSize = object.maxSize ?? undefined;
    message.usedSize = object.usedSize ?? 0;
    message.storageClassMaxSizes =
      object.storageClassMaxSizes?.map((e) =>
        OptionalSizeByClass.fromPartial(e)
      ) || [];
    message.storageClassUsedSizes =
      object.storageClassUsedSizes?.map((e) => SizeByClass.fromPartial(e)) ||
      [];
    message.storageClassCounters =
      object.storageClassCounters?.map((e) => CountersByClass.fromPartial(e)) ||
      [];
    message.defaultStorageClass = object.defaultStorageClass ?? undefined;
    message.anonymousAccessFlags =
      object.anonymousAccessFlags !== undefined &&
      object.anonymousAccessFlags !== null
        ? AnonymousAccessFlags.fromPartial(object.anonymousAccessFlags)
        : undefined;
    message.createdAt = object.createdAt ?? undefined;
    message.updatedAt = object.updatedAt ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(BucketStats.$type, BucketStats);

const baseHTTPSConfig: object = {
  $type: "yandex.cloud.storage.v1.HTTPSConfig",
  name: "",
  sourceType: 0,
  dnsNames: "",
  certificateId: "",
};

export const HTTPSConfig = {
  $type: "yandex.cloud.storage.v1.HTTPSConfig" as const,

  encode(
    message: HTTPSConfig,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.sourceType !== 0) {
      writer.uint32(16).int32(message.sourceType);
    }
    if (message.issuer !== undefined) {
      StringValue.encode(
        { $type: "google.protobuf.StringValue", value: message.issuer! },
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.subject !== undefined) {
      StringValue.encode(
        { $type: "google.protobuf.StringValue", value: message.subject! },
        writer.uint32(34).fork()
      ).ldelim();
    }
    for (const v of message.dnsNames) {
      writer.uint32(42).string(v!);
    }
    if (message.notBefore !== undefined) {
      Timestamp.encode(
        toTimestamp(message.notBefore),
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.notAfter !== undefined) {
      Timestamp.encode(
        toTimestamp(message.notAfter),
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.certificateId !== "") {
      writer.uint32(66).string(message.certificateId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HTTPSConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseHTTPSConfig } as HTTPSConfig;
    message.dnsNames = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.sourceType = reader.int32() as any;
          break;
        case 3:
          message.issuer = StringValue.decode(reader, reader.uint32()).value;
          break;
        case 4:
          message.subject = StringValue.decode(reader, reader.uint32()).value;
          break;
        case 5:
          message.dnsNames.push(reader.string());
          break;
        case 6:
          message.notBefore = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 7:
          message.notAfter = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 8:
          message.certificateId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): HTTPSConfig {
    const message = { ...baseHTTPSConfig } as HTTPSConfig;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.sourceType =
      object.sourceType !== undefined && object.sourceType !== null
        ? hTTPSConfig_SourceTypeFromJSON(object.sourceType)
        : 0;
    message.issuer =
      object.issuer !== undefined && object.issuer !== null
        ? String(object.issuer)
        : undefined;
    message.subject =
      object.subject !== undefined && object.subject !== null
        ? String(object.subject)
        : undefined;
    message.dnsNames = (object.dnsNames ?? []).map((e: any) => String(e));
    message.notBefore =
      object.notBefore !== undefined && object.notBefore !== null
        ? fromJsonTimestamp(object.notBefore)
        : undefined;
    message.notAfter =
      object.notAfter !== undefined && object.notAfter !== null
        ? fromJsonTimestamp(object.notAfter)
        : undefined;
    message.certificateId =
      object.certificateId !== undefined && object.certificateId !== null
        ? String(object.certificateId)
        : "";
    return message;
  },

  toJSON(message: HTTPSConfig): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.sourceType !== undefined &&
      (obj.sourceType = hTTPSConfig_SourceTypeToJSON(message.sourceType));
    message.issuer !== undefined && (obj.issuer = message.issuer);
    message.subject !== undefined && (obj.subject = message.subject);
    if (message.dnsNames) {
      obj.dnsNames = message.dnsNames.map((e) => e);
    } else {
      obj.dnsNames = [];
    }
    message.notBefore !== undefined &&
      (obj.notBefore = message.notBefore.toISOString());
    message.notAfter !== undefined &&
      (obj.notAfter = message.notAfter.toISOString());
    message.certificateId !== undefined &&
      (obj.certificateId = message.certificateId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<HTTPSConfig>, I>>(
    object: I
  ): HTTPSConfig {
    const message = { ...baseHTTPSConfig } as HTTPSConfig;
    message.name = object.name ?? "";
    message.sourceType = object.sourceType ?? 0;
    message.issuer = object.issuer ?? undefined;
    message.subject = object.subject ?? undefined;
    message.dnsNames = object.dnsNames?.map((e) => e) || [];
    message.notBefore = object.notBefore ?? undefined;
    message.notAfter = object.notAfter ?? undefined;
    message.certificateId = object.certificateId ?? "";
    return message;
  },
};

messageTypeRegistry.set(HTTPSConfig.$type, HTTPSConfig);

const baseObjectLock: object = {
  $type: "yandex.cloud.storage.v1.ObjectLock",
  status: 0,
};

export const ObjectLock = {
  $type: "yandex.cloud.storage.v1.ObjectLock" as const,

  encode(
    message: ObjectLock,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    if (message.defaultRetention !== undefined) {
      ObjectLock_DefaultRetention.encode(
        message.defaultRetention,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ObjectLock {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseObjectLock } as ObjectLock;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.status = reader.int32() as any;
          break;
        case 3:
          message.defaultRetention = ObjectLock_DefaultRetention.decode(
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

  fromJSON(object: any): ObjectLock {
    const message = { ...baseObjectLock } as ObjectLock;
    message.status =
      object.status !== undefined && object.status !== null
        ? objectLock_ObjectLockStatusFromJSON(object.status)
        : 0;
    message.defaultRetention =
      object.defaultRetention !== undefined && object.defaultRetention !== null
        ? ObjectLock_DefaultRetention.fromJSON(object.defaultRetention)
        : undefined;
    return message;
  },

  toJSON(message: ObjectLock): unknown {
    const obj: any = {};
    message.status !== undefined &&
      (obj.status = objectLock_ObjectLockStatusToJSON(message.status));
    message.defaultRetention !== undefined &&
      (obj.defaultRetention = message.defaultRetention
        ? ObjectLock_DefaultRetention.toJSON(message.defaultRetention)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ObjectLock>, I>>(
    object: I
  ): ObjectLock {
    const message = { ...baseObjectLock } as ObjectLock;
    message.status = object.status ?? 0;
    message.defaultRetention =
      object.defaultRetention !== undefined && object.defaultRetention !== null
        ? ObjectLock_DefaultRetention.fromPartial(object.defaultRetention)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(ObjectLock.$type, ObjectLock);

const baseObjectLock_DefaultRetention: object = {
  $type: "yandex.cloud.storage.v1.ObjectLock.DefaultRetention",
  mode: 0,
};

export const ObjectLock_DefaultRetention = {
  $type: "yandex.cloud.storage.v1.ObjectLock.DefaultRetention" as const,

  encode(
    message: ObjectLock_DefaultRetention,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.mode !== 0) {
      writer.uint32(8).int32(message.mode);
    }
    if (message.days !== undefined) {
      writer.uint32(16).int64(message.days);
    }
    if (message.years !== undefined) {
      writer.uint32(24).int64(message.years);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ObjectLock_DefaultRetention {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseObjectLock_DefaultRetention,
    } as ObjectLock_DefaultRetention;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mode = reader.int32() as any;
          break;
        case 2:
          message.days = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.years = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ObjectLock_DefaultRetention {
    const message = {
      ...baseObjectLock_DefaultRetention,
    } as ObjectLock_DefaultRetention;
    message.mode =
      object.mode !== undefined && object.mode !== null
        ? objectLock_DefaultRetention_ModeFromJSON(object.mode)
        : 0;
    message.days =
      object.days !== undefined && object.days !== null
        ? Number(object.days)
        : undefined;
    message.years =
      object.years !== undefined && object.years !== null
        ? Number(object.years)
        : undefined;
    return message;
  },

  toJSON(message: ObjectLock_DefaultRetention): unknown {
    const obj: any = {};
    message.mode !== undefined &&
      (obj.mode = objectLock_DefaultRetention_ModeToJSON(message.mode));
    message.days !== undefined && (obj.days = Math.round(message.days));
    message.years !== undefined && (obj.years = Math.round(message.years));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ObjectLock_DefaultRetention>, I>>(
    object: I
  ): ObjectLock_DefaultRetention {
    const message = {
      ...baseObjectLock_DefaultRetention,
    } as ObjectLock_DefaultRetention;
    message.mode = object.mode ?? 0;
    message.days = object.days ?? undefined;
    message.years = object.years ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(
  ObjectLock_DefaultRetention.$type,
  ObjectLock_DefaultRetention
);

const baseEncryption: object = { $type: "yandex.cloud.storage.v1.Encryption" };

export const Encryption = {
  $type: "yandex.cloud.storage.v1.Encryption" as const,

  encode(
    message: Encryption,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.rules) {
      Encryption_EncryptionRule.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Encryption {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEncryption } as Encryption;
    message.rules = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rules.push(
            Encryption_EncryptionRule.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Encryption {
    const message = { ...baseEncryption } as Encryption;
    message.rules = (object.rules ?? []).map((e: any) =>
      Encryption_EncryptionRule.fromJSON(e)
    );
    return message;
  },

  toJSON(message: Encryption): unknown {
    const obj: any = {};
    if (message.rules) {
      obj.rules = message.rules.map((e) =>
        e ? Encryption_EncryptionRule.toJSON(e) : undefined
      );
    } else {
      obj.rules = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Encryption>, I>>(
    object: I
  ): Encryption {
    const message = { ...baseEncryption } as Encryption;
    message.rules =
      object.rules?.map((e) => Encryption_EncryptionRule.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(Encryption.$type, Encryption);

const baseEncryption_EncryptionRule: object = {
  $type: "yandex.cloud.storage.v1.Encryption.EncryptionRule",
  kmsMasterKeyId: "",
  sseAlgorithm: "",
};

export const Encryption_EncryptionRule = {
  $type: "yandex.cloud.storage.v1.Encryption.EncryptionRule" as const,

  encode(
    message: Encryption_EncryptionRule,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.kmsMasterKeyId !== "") {
      writer.uint32(10).string(message.kmsMasterKeyId);
    }
    if (message.sseAlgorithm !== "") {
      writer.uint32(18).string(message.sseAlgorithm);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Encryption_EncryptionRule {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseEncryption_EncryptionRule,
    } as Encryption_EncryptionRule;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.kmsMasterKeyId = reader.string();
          break;
        case 2:
          message.sseAlgorithm = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Encryption_EncryptionRule {
    const message = {
      ...baseEncryption_EncryptionRule,
    } as Encryption_EncryptionRule;
    message.kmsMasterKeyId =
      object.kmsMasterKeyId !== undefined && object.kmsMasterKeyId !== null
        ? String(object.kmsMasterKeyId)
        : "";
    message.sseAlgorithm =
      object.sseAlgorithm !== undefined && object.sseAlgorithm !== null
        ? String(object.sseAlgorithm)
        : "";
    return message;
  },

  toJSON(message: Encryption_EncryptionRule): unknown {
    const obj: any = {};
    message.kmsMasterKeyId !== undefined &&
      (obj.kmsMasterKeyId = message.kmsMasterKeyId);
    message.sseAlgorithm !== undefined &&
      (obj.sseAlgorithm = message.sseAlgorithm);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Encryption_EncryptionRule>, I>>(
    object: I
  ): Encryption_EncryptionRule {
    const message = {
      ...baseEncryption_EncryptionRule,
    } as Encryption_EncryptionRule;
    message.kmsMasterKeyId = object.kmsMasterKeyId ?? "";
    message.sseAlgorithm = object.sseAlgorithm ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  Encryption_EncryptionRule.$type,
  Encryption_EncryptionRule
);

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
