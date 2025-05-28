/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Timestamp } from '../../../../google/protobuf/timestamp';

export const protobufPackage = 'yandex.cloud.cdn.v1';

/**
 * This option defines the protocol that will be used by CDN servers to request
 * content from an origin source. If not specified, we will use HTTP to connect
 * to an origin server.
 */
export enum OriginProtocol {
    ORIGIN_PROTOCOL_UNSPECIFIED = 0,
    /** HTTP - CDN servers will connect to your origin via HTTP. */
    HTTP = 1,
    /** HTTPS - CDN servers will connect to your origin via HTTPS. */
    HTTPS = 2,
    /**
     * MATCH - Connection protocol will be chosen automatically (content on the
     * origin source should be available for the CDN both through HTTP and HTTPS).
     */
    MATCH = 3,
    UNRECOGNIZED = -1,
}

export function originProtocolFromJSON(object: any): OriginProtocol {
    switch (object) {
        case 0:
        case 'ORIGIN_PROTOCOL_UNSPECIFIED':
            return OriginProtocol.ORIGIN_PROTOCOL_UNSPECIFIED;
        case 1:
        case 'HTTP':
            return OriginProtocol.HTTP;
        case 2:
        case 'HTTPS':
            return OriginProtocol.HTTPS;
        case 3:
        case 'MATCH':
            return OriginProtocol.MATCH;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return OriginProtocol.UNRECOGNIZED;
    }
}

export function originProtocolToJSON(object: OriginProtocol): string {
    switch (object) {
        case OriginProtocol.ORIGIN_PROTOCOL_UNSPECIFIED:
            return 'ORIGIN_PROTOCOL_UNSPECIFIED';
        case OriginProtocol.HTTP:
            return 'HTTP';
        case OriginProtocol.HTTPS:
            return 'HTTPS';
        case OriginProtocol.MATCH:
            return 'MATCH';
        default:
            return 'UNKNOWN';
    }
}

/** RewriteFlag defines flag for the Rewrite option. */
export enum RewriteFlag {
    REWRITE_FLAG_UNSPECIFIED = 0,
    /**
     * LAST - Stops processing of the current set of ngx_http_rewrite_module directives and
     * starts a search for a new location matching changed URI.
     */
    LAST = 1,
    /** BREAK - Stops processing of the current set of the Rewrite option. */
    BREAK = 2,
    /**
     * REDIRECT - Returns a temporary redirect with the 302 code; It is used when a replacement string does not start
     * with "http://", "https://", or "$scheme".
     */
    REDIRECT = 3,
    /** PERMANENT - Returns a permanent redirect with the 301 code. */
    PERMANENT = 4,
    UNRECOGNIZED = -1,
}

export function rewriteFlagFromJSON(object: any): RewriteFlag {
    switch (object) {
        case 0:
        case 'REWRITE_FLAG_UNSPECIFIED':
            return RewriteFlag.REWRITE_FLAG_UNSPECIFIED;
        case 1:
        case 'LAST':
            return RewriteFlag.LAST;
        case 2:
        case 'BREAK':
            return RewriteFlag.BREAK;
        case 3:
        case 'REDIRECT':
            return RewriteFlag.REDIRECT;
        case 4:
        case 'PERMANENT':
            return RewriteFlag.PERMANENT;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return RewriteFlag.UNRECOGNIZED;
    }
}

export function rewriteFlagToJSON(object: RewriteFlag): string {
    switch (object) {
        case RewriteFlag.REWRITE_FLAG_UNSPECIFIED:
            return 'REWRITE_FLAG_UNSPECIFIED';
        case RewriteFlag.LAST:
            return 'LAST';
        case RewriteFlag.BREAK:
            return 'BREAK';
        case RewriteFlag.REDIRECT:
            return 'REDIRECT';
        case RewriteFlag.PERMANENT:
            return 'PERMANENT';
        default:
            return 'UNKNOWN';
    }
}

/** SecureKeyURLType defines type of the URL signing. */
export enum SecureKeyURLType {
    SECURE_KEY_URL_TYPE_UNSPECIFIED = 0,
    /** ENABLE_IP_SIGNING - Use scpecific IP address in URL signing. URL will be availible only for this IP. */
    ENABLE_IP_SIGNING = 1,
    /** DISABLE_IP_SIGNING - Sign URL without using IP address. URL will be available for all IP addresses. */
    DISABLE_IP_SIGNING = 2,
    UNRECOGNIZED = -1,
}

export function secureKeyURLTypeFromJSON(object: any): SecureKeyURLType {
    switch (object) {
        case 0:
        case 'SECURE_KEY_URL_TYPE_UNSPECIFIED':
            return SecureKeyURLType.SECURE_KEY_URL_TYPE_UNSPECIFIED;
        case 1:
        case 'ENABLE_IP_SIGNING':
            return SecureKeyURLType.ENABLE_IP_SIGNING;
        case 2:
        case 'DISABLE_IP_SIGNING':
            return SecureKeyURLType.DISABLE_IP_SIGNING;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return SecureKeyURLType.UNRECOGNIZED;
    }
}

export function secureKeyURLTypeToJSON(object: SecureKeyURLType): string {
    switch (object) {
        case SecureKeyURLType.SECURE_KEY_URL_TYPE_UNSPECIFIED:
            return 'SECURE_KEY_URL_TYPE_UNSPECIFIED';
        case SecureKeyURLType.ENABLE_IP_SIGNING:
            return 'ENABLE_IP_SIGNING';
        case SecureKeyURLType.DISABLE_IP_SIGNING:
            return 'DISABLE_IP_SIGNING';
        default:
            return 'UNKNOWN';
    }
}

/** PolicyType defines type of the policy in IP address acl rules. */
export enum PolicyType {
    POLICY_TYPE_UNSPECIFIED = 0,
    /** POLICY_TYPE_ALLOW - Allow access to all IP addresses except the ones specified in the excepted_values field. */
    POLICY_TYPE_ALLOW = 1,
    /** POLICY_TYPE_DENY - Block access to all IP addresses except the ones specified in the excepted_values field. */
    POLICY_TYPE_DENY = 2,
    UNRECOGNIZED = -1,
}

export function policyTypeFromJSON(object: any): PolicyType {
    switch (object) {
        case 0:
        case 'POLICY_TYPE_UNSPECIFIED':
            return PolicyType.POLICY_TYPE_UNSPECIFIED;
        case 1:
        case 'POLICY_TYPE_ALLOW':
            return PolicyType.POLICY_TYPE_ALLOW;
        case 2:
        case 'POLICY_TYPE_DENY':
            return PolicyType.POLICY_TYPE_DENY;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return PolicyType.UNRECOGNIZED;
    }
}

export function policyTypeToJSON(object: PolicyType): string {
    switch (object) {
        case PolicyType.POLICY_TYPE_UNSPECIFIED:
            return 'POLICY_TYPE_UNSPECIFIED';
        case PolicyType.POLICY_TYPE_ALLOW:
            return 'POLICY_TYPE_ALLOW';
        case PolicyType.POLICY_TYPE_DENY:
            return 'POLICY_TYPE_DENY';
        default:
            return 'UNKNOWN';
    }
}

/** A certificate type parameters. */
export enum SSLCertificateType {
    /** SSL_CERTIFICATE_TYPE_UNSPECIFIED - SSL certificate is unspecified. */
    SSL_CERTIFICATE_TYPE_UNSPECIFIED = 0,
    /** DONT_USE - No SSL certificate is added, the requests are sent via HTTP. */
    DONT_USE = 1,
    /**
     * LETS_ENCRYPT_GCORE - The option is deprecated. Works only if you have already pointed your domain name to the protected IP address in your DNS.
     *
     * @deprecated
     */
    LETS_ENCRYPT_GCORE = 2,
    /** CM - Add your SSL certificate by uploading the certificate in PEM format and your private key. */
    CM = 3,
    UNRECOGNIZED = -1,
}

export function sSLCertificateTypeFromJSON(object: any): SSLCertificateType {
    switch (object) {
        case 0:
        case 'SSL_CERTIFICATE_TYPE_UNSPECIFIED':
            return SSLCertificateType.SSL_CERTIFICATE_TYPE_UNSPECIFIED;
        case 1:
        case 'DONT_USE':
            return SSLCertificateType.DONT_USE;
        case 2:
        case 'LETS_ENCRYPT_GCORE':
            return SSLCertificateType.LETS_ENCRYPT_GCORE;
        case 3:
        case 'CM':
            return SSLCertificateType.CM;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return SSLCertificateType.UNRECOGNIZED;
    }
}

export function sSLCertificateTypeToJSON(object: SSLCertificateType): string {
    switch (object) {
        case SSLCertificateType.SSL_CERTIFICATE_TYPE_UNSPECIFIED:
            return 'SSL_CERTIFICATE_TYPE_UNSPECIFIED';
        case SSLCertificateType.DONT_USE:
            return 'DONT_USE';
        case SSLCertificateType.LETS_ENCRYPT_GCORE:
            return 'LETS_ENCRYPT_GCORE';
        case SSLCertificateType.CM:
            return 'CM';
        default:
            return 'UNKNOWN';
    }
}

/** A certificate status parameters. */
export enum SSLCertificateStatus {
    /** SSL_CERTIFICATE_STATUS_UNSPECIFIED - SSL certificate is unspecified. */
    SSL_CERTIFICATE_STATUS_UNSPECIFIED = 0,
    /** READY - SSL certificate is ready to use. */
    READY = 1,
    /**
     * CREATING - The option is deprecated. SSL certificate is creating.
     *
     * @deprecated
     */
    CREATING = 2,
    UNRECOGNIZED = -1,
}

export function sSLCertificateStatusFromJSON(object: any): SSLCertificateStatus {
    switch (object) {
        case 0:
        case 'SSL_CERTIFICATE_STATUS_UNSPECIFIED':
            return SSLCertificateStatus.SSL_CERTIFICATE_STATUS_UNSPECIFIED;
        case 1:
        case 'READY':
            return SSLCertificateStatus.READY;
        case 2:
        case 'CREATING':
            return SSLCertificateStatus.CREATING;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return SSLCertificateStatus.UNRECOGNIZED;
    }
}

export function sSLCertificateStatusToJSON(object: SSLCertificateStatus): string {
    switch (object) {
        case SSLCertificateStatus.SSL_CERTIFICATE_STATUS_UNSPECIFIED:
            return 'SSL_CERTIFICATE_STATUS_UNSPECIFIED';
        case SSLCertificateStatus.READY:
            return 'READY';
        case SSLCertificateStatus.CREATING:
            return 'CREATING';
        default:
            return 'UNKNOWN';
    }
}

/** List of secondary (alternative) CNAMEs. */
export interface SecondaryHostnames {
    /** List of secondary hostname values. */
    values: string[];
}

/** A CDN resource - representation of providers resource. */
export interface Resource {
    /** ID of the resource. */
    id: string;
    /** Folder id. */
    folderId: string;
    /** CDN endpoint CNAME, must be unique among resources. */
    cname: string;
    /** Creation timestamp. */
    createdAt?: Date;
    /** Update timestamp. */
    updatedAt?: Date;
    /**
     * Flag to create Resource either in active or disabled state.
     * True - the content from CDN is available to clients.
     * False - the content from CDN isn't available to clients.
     */
    active: boolean;
    /** Resource settings and options to tune CDN edge behavior. */
    options?: ResourceOptions;
    /** List of secondary hostname strings. */
    secondaryHostnames: string[];
    /** ID of the origin group. */
    originGroupId: number;
    /** Name of the origin group. */
    originGroupName: string;
    /** Specify the protocol schema to be used in communication with origin. */
    originProtocol: OriginProtocol;
    /** SSL certificate options. */
    sslCertificate?: SSLCertificate;
    /** Labels of the resource. */
    labels: { [key: string]: string };
}

export interface Resource_LabelsEntry {
    key: string;
    value: string;
}

/** A major set of various resource options. */
export interface ResourceOptions {
    /** Set up a cache status. */
    disableCache?: ResourceOptions_BoolOption;
    /** Set up [EdgeCacheSettings]. */
    edgeCacheSettings?: ResourceOptions_EdgeCacheSettings;
    /**
     * Using [Int64Option]. Set up a cache period for the end-users browser.
     * Content will be cached due to origin settings.
     * If there are no cache settings on your origin, the content will not be cached.
     * The list of HTTP response codes that can be cached in browsers: 200, 201, 204, 206, 301, 302, 303, 304, 307, 308.
     * Other response codes will not be cached.
     * The default value is 4 days.
     */
    browserCacheSettings?: ResourceOptions_Int64Option;
    /** List HTTP headers that must be included in responses to clients. */
    cacheHttpHeaders?: ResourceOptions_StringsListOption;
    /** Set up [QueryParamsOptions]. */
    queryParamsOptions?: ResourceOptions_QueryParamsOptions;
    /**
     * Files larger than 10 MB will be requested and cached in parts (no larger than 10 MB each part). It reduces time to first byte.
     *
     * The origin must support HTTP Range requests.
     *
     * By default the option is disabled.
     */
    slice?: ResourceOptions_BoolOption;
    /** Set up compression variant. */
    compressionOptions?: ResourceOptions_CompressionOptions;
    /** Set up redirects. */
    redirectOptions?: ResourceOptions_RedirectOptions;
    /** Set up host parameters. */
    hostOptions?: ResourceOptions_HostOptions;
    /** Set up static headers that CDN servers send in responses to clients. */
    staticHeaders?: ResourceOptions_StringsMapOption;
    /**
     * Parameter that lets browsers get access to selected resources from a domain
     * different to a domain from which the request is received.
     * [Read more](/docs/cdn/concepts/cors).
     */
    cors?: ResourceOptions_StringsListOption;
    /**
     * List of errors which instruct CDN servers to serve stale content to clients.
     *
     * Possible values: `error`, `http_403`, `http_404`, `http_429`, `http_500`, `http_502`, `http_503`, `http_504`, `invalid_header`, `timeout`, `updating`.
     */
    stale?: ResourceOptions_StringsListOption;
    /**
     * HTTP methods for your CDN content. By default the following methods
     * are allowed: GET, HEAD, POST, PUT, PATCH, DELETE, OPTIONS.
     * In case some methods are not allowed to the user, they will get the 405
     * (Method Not Allowed) response. If the method is not supported,
     * the user gets the 501 (Not Implemented) response.
     */
    allowedHttpMethods?: ResourceOptions_StringsListOption;
    /** Allows caching for GET, HEAD and POST requests. */
    proxyCacheMethodsSet?: ResourceOptions_BoolOption;
    /** Disabling proxy force ranges. */
    disableProxyForceRanges?: ResourceOptions_BoolOption;
    /**
     * Set up custom headers that CDN servers send in requests to origins.
     * The Header name field can contain letters (A-Z, a-z), numbers (0-9), dashes (-) and underscores (_).
     * The Value field can contain letters (A-Z, a-z), numbers (0-9), dashes (-),
     * underscores (_), slashes (/), colons (:), equal (=), dots (.), and spaces.
     */
    staticRequestHeaders?: ResourceOptions_StringsMapOption;
    /**
     * Wildcard additional CNAME.
     * If a resource has a wildcard additional CNAME, you can use your own certificate for content delivery via HTTPS. Read-only.
     */
    customServerName?: ResourceOptions_StringOption;
    /** Using [BoolOption] for ignoring cookie. */
    ignoreCookie?: ResourceOptions_BoolOption;
    /** Changing or redirecting query paths. */
    rewrite?: ResourceOptions_RewriteOption;
    /** Secure token to protect contect and limit access by IP addresses and time limits. */
    secureKey?: ResourceOptions_SecureKeyOption;
    /**
     * Manage the state of the IP access policy option.
     * The option controls access to content from the specified IP addresses.
     */
    ipAddressAcl?: ResourceOptions_IPAddressACLOption;
}

/** Set up bool values. */
export interface ResourceOptions_BoolOption {
    /**
     * True - the option is enabled and its [value] is applied to the resource.
     * False - the option is disabled and its default value is used for the resource.
     */
    enabled: boolean;
    /** Value of the option. */
    value: boolean;
}

/** A set of the string parameters. */
export interface ResourceOptions_StringOption {
    /**
     * True - the option is enabled and its [value] is applied to the resource.
     * False - the option is disabled and its default value is used for the resource.
     */
    enabled: boolean;
    /** Value of the option. */
    value: string;
}

/** A set of the numeric parameters. */
export interface ResourceOptions_Int64Option {
    /**
     * True - the option is enabled and its [value] is applied to the resource.
     * False - the option is disabled and its default value is used for the resource.
     */
    enabled: boolean;
    /** Value of the option. */
    value: number;
}

/** A set of the string list parameters. */
export interface ResourceOptions_StringsListOption {
    /**
     * True - the option is enabled and its [value] is applied to the resource.
     * False - the option is disabled and its default value is used for the resource.
     */
    enabled: boolean;
    /** Value of the option. */
    value: string[];
}

/** A set of the strings map parameters. */
export interface ResourceOptions_StringsMapOption {
    /**
     * True - the option is enabled and its [value] is applied to the resource.
     * False - the option is disabled and its default value is used for the resource.
     */
    enabled: boolean;
    /** Value of the option. */
    value: { [key: string]: string };
}

export interface ResourceOptions_StringsMapOption_ValueEntry {
    key: string;
    value: string;
}

/** A set of the caching response time parameters. */
export interface ResourceOptions_CachingTimes {
    /**
     * Caching time for a response with codes 200, 206, 301, 302.
     * Responses with codes 4xx, 5xx will not be cached. Use `0s` disable to caching.
     * Use [custom_values] field to specify a custom caching time for a response with specific codes.
     */
    simpleValue: number;
    /**
     * Caching time for a response with specific codes. These settings have a higher priority than the value field.
     * Response code (`304`, `404` for example). Use `any` to specify caching time for all response codes.
     * Caching time in seconds (`0s`, `600s` for example). Use `0s` to disable caching for a specific response code.
     */
    customValues: { [key: string]: number };
}

export interface ResourceOptions_CachingTimes_CustomValuesEntry {
    key: string;
    value: number;
}

/** A set of the edge cache parameters. */
export interface ResourceOptions_EdgeCacheSettings {
    /**
     * True - the option is enabled and its `values_variant` is applied to the resource.
     * False - the option is disabled and its default value is used for the resource.
     */
    enabled: boolean;
    /** Value of the option. */
    value?: ResourceOptions_CachingTimes | undefined;
    /**
     * Content will be cached according to origin cache settings.
     * The value applies for a response with codes 200, 201, 204, 206, 301, 302, 303, 304, 307, 308
     * if an origin server does not have caching HTTP headers.
     * Responses with other codes will not be cached.
     */
    defaultValue: number | undefined;
}

/** A set of the string variable map parameters. */
export interface ResourceOptions_StringVariableMapOption {
    /**
     * True - the option is enabled and its [value] is applied to the resource.
     * False - the option is disabled and its default value is used for the resource.
     */
    enabled: boolean;
    /** Value of the option. */
    value: { [key: string]: ResourceOptions_StringVariableMapOption_OneofString };
}

export interface ResourceOptions_StringVariableMapOption_OneofString {
    /** Using [StringOption] to set value. */
    value?: ResourceOptions_StringOption | undefined;
    /** Using [StringsListOption] to set values. */
    values?: ResourceOptions_StringsListOption | undefined;
}

export interface ResourceOptions_StringVariableMapOption_ValueEntry {
    key: string;
    value?: ResourceOptions_StringVariableMapOption_OneofString;
}

/** A set of the query parameters. */
export interface ResourceOptions_QueryParamsOptions {
    /** Using [BoolOption]. Selected by default. Files with different query parameters are cached as objects with the same key regardless of the parameter value. */
    ignoreQueryString?: ResourceOptions_BoolOption | undefined;
    /**
     * Ignore All Except.
     * Files with the specified query parameters are cached as objects with different keys,
     * files with other parameters are cached as objects with the same key.
     */
    queryParamsWhitelist?: ResourceOptions_StringsListOption | undefined;
    /**
     * Ignore only. Files with the specified query parameters are cached as objects with the same key,
     * files with other parameters are cached as objects with different keys.
     */
    queryParamsBlacklist?: ResourceOptions_StringsListOption | undefined;
}

/** A set of the redirect parameters. */
export interface ResourceOptions_RedirectOptions {
    /** Using [BoolOption]. Set up a redirect from HTTPS to HTTP. */
    redirectHttpToHttps?: ResourceOptions_BoolOption | undefined;
    /** Using [BoolOption]. Set up a redirect from HTTP to HTTPS. */
    redirectHttpsToHttp?: ResourceOptions_BoolOption | undefined;
}

/** A set of the host parameters. */
export interface ResourceOptions_HostOptions {
    /**
     * Custom value for the Host header.
     *
     * Your server must be able to process requests with the chosen header.
     *
     * Default value (if [StringOption.enabled] is `false`) is [Resource.cname].
     */
    host?: ResourceOptions_StringOption | undefined;
    /**
     * Using [BoolOption]. Choose the Forward Host header option if is important to send in the request to the Origin
     * the same Host header as was sent in the request to CDN server.
     */
    forwardHostHeader?: ResourceOptions_BoolOption | undefined;
}

/** A set of the compression variant parameters. */
export interface ResourceOptions_CompressionOptions {
    /**
     * The Fetch compressed option helps you to reduce
     * the bandwidth between origin and CDN servers.
     * Also, content delivery speed becomes higher because of reducing the time
     * for compressing files in a CDN.
     */
    fetchCompressed?: ResourceOptions_BoolOption | undefined;
    /** Using [BoolOption]. GZip compression at CDN servers reduces file size by 70% and can be as high as 90%. */
    gzipOn?: ResourceOptions_BoolOption | undefined;
    /**
     * The option allows to compress content with brotli on the CDN's end.
     *
     * Compression is performed on the Origin Shielding. If a pre-cache server doesn't active for a resource, compression does not occur even if the option is enabled.
     *
     * Specify the content-type for each type of content you wish to have compressed. CDN servers will request only uncompressed content from the origin.
     */
    brotliCompression?: ResourceOptions_StringsListOption | undefined;
}

/** An option for changing or redirecting query paths. */
export interface ResourceOptions_RewriteOption {
    /**
     * True - the option is enabled and its [flag] is applied to the resource.
     * False - the option is disabled and its default value of the [flag] is used for the resource.
     */
    enabled: boolean;
    /**
     * Pattern for rewrite.
     *
     * The value must have the following format: `<source path> <destination path>`, where both paths are regular expressions which use at least one group. E.g., `/foo/(.*) /bar/$1`.
     */
    body: string;
    /**
     * Break flag is applied to the option by default.
     * It is not shown in the field.
     */
    flag: RewriteFlag;
}

export interface ResourceOptions_SecureKeyOption {
    /**
     * True - the option is enabled and its [flag] is applied to the resource.
     * False - the option is disabled and its default value of the [flag] is used for the resource.
     */
    enabled: boolean;
    /** The key for the URL signing. */
    key: string;
    /** The type of the URL signing. The URL could be available for all IP addresses or for the only one IP. */
    type: SecureKeyURLType;
}

export interface ResourceOptions_IPAddressACLOption {
    /**
     * True - the option is enabled and its [flag] is applied to the resource.
     * False - the option is disabled and its default value of the [flag] is used for the resource.
     */
    enabled: boolean;
    /** The policy type. One of allow or deny value. */
    policyType: PolicyType;
    /** The list of IP addresses to be allowed or denied. */
    exceptedValues: string[];
}

/** A set of the personal SSL certificate parameters. */
export interface SSLTargetCertificate {
    /** Type of the certificate. */
    type: SSLCertificateType;
    /** Certificate data. */
    data?: SSLCertificateData;
}

/** A SSL certificate parameters. */
export interface SSLCertificate {
    /** Type of the certificate. */
    type: SSLCertificateType;
    /** Active status. */
    status: SSLCertificateStatus;
    /** Certificate data. */
    data?: SSLCertificateData;
}

/** A certificate data parameters. */
export interface SSLCertificateData {
    /**
     * Custom (add your SSL certificate by uploading the certificate
     * in PEM format and your private key).
     */
    cm?: SSLCertificateCMData | undefined;
}

/** A certificate data custom parameters. */
export interface SSLCertificateCMData {
    /** ID of the custom certificate. */
    id: string;
}

const baseSecondaryHostnames: object = { values: '' };

export const SecondaryHostnames = {
    encode(message: SecondaryHostnames, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.values) {
            writer.uint32(10).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SecondaryHostnames {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSecondaryHostnames } as SecondaryHostnames;
        message.values = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.values.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): SecondaryHostnames {
        const message = { ...baseSecondaryHostnames } as SecondaryHostnames;
        message.values = (object.values ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: SecondaryHostnames): unknown {
        const obj: any = {};
        if (message.values) {
            obj.values = message.values.map((e) => e);
        } else {
            obj.values = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SecondaryHostnames>, I>>(
        object: I,
    ): SecondaryHostnames {
        const message = { ...baseSecondaryHostnames } as SecondaryHostnames;
        message.values = object.values?.map((e) => e) || [];
        return message;
    },
};

const baseResource: object = {
    id: '',
    folderId: '',
    cname: '',
    active: false,
    secondaryHostnames: '',
    originGroupId: 0,
    originGroupName: '',
    originProtocol: 0,
};

export const Resource = {
    encode(message: Resource, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.folderId !== '') {
            writer.uint32(18).string(message.folderId);
        }
        if (message.cname !== '') {
            writer.uint32(26).string(message.cname);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(34).fork()).ldelim();
        }
        if (message.updatedAt !== undefined) {
            Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(42).fork()).ldelim();
        }
        if (message.active === true) {
            writer.uint32(48).bool(message.active);
        }
        if (message.options !== undefined) {
            ResourceOptions.encode(message.options, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.secondaryHostnames) {
            writer.uint32(66).string(v!);
        }
        if (message.originGroupId !== 0) {
            writer.uint32(72).int64(message.originGroupId);
        }
        if (message.originGroupName !== '') {
            writer.uint32(82).string(message.originGroupName);
        }
        if (message.originProtocol !== 0) {
            writer.uint32(88).int32(message.originProtocol);
        }
        if (message.sslCertificate !== undefined) {
            SSLCertificate.encode(message.sslCertificate, writer.uint32(98).fork()).ldelim();
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            Resource_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(106).fork(),
            ).ldelim();
        });
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Resource {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseResource } as Resource;
        message.secondaryHostnames = [];
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.folderId = reader.string();
                    break;
                case 3:
                    message.cname = reader.string();
                    break;
                case 4:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.updatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.active = reader.bool();
                    break;
                case 7:
                    message.options = ResourceOptions.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.secondaryHostnames.push(reader.string());
                    break;
                case 9:
                    message.originGroupId = longToNumber(reader.int64() as Long);
                    break;
                case 10:
                    message.originGroupName = reader.string();
                    break;
                case 11:
                    message.originProtocol = reader.int32() as any;
                    break;
                case 12:
                    message.sslCertificate = SSLCertificate.decode(reader, reader.uint32());
                    break;
                case 13:
                    const entry13 = Resource_LabelsEntry.decode(reader, reader.uint32());
                    if (entry13.value !== undefined) {
                        message.labels[entry13.key] = entry13.value;
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Resource {
        const message = { ...baseResource } as Resource;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : '';
        message.cname =
            object.cname !== undefined && object.cname !== null ? String(object.cname) : '';
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        message.updatedAt =
            object.updatedAt !== undefined && object.updatedAt !== null
                ? fromJsonTimestamp(object.updatedAt)
                : undefined;
        message.active =
            object.active !== undefined && object.active !== null ? Boolean(object.active) : false;
        message.options =
            object.options !== undefined && object.options !== null
                ? ResourceOptions.fromJSON(object.options)
                : undefined;
        message.secondaryHostnames = (object.secondaryHostnames ?? []).map((e: any) => String(e));
        message.originGroupId =
            object.originGroupId !== undefined && object.originGroupId !== null
                ? Number(object.originGroupId)
                : 0;
        message.originGroupName =
            object.originGroupName !== undefined && object.originGroupName !== null
                ? String(object.originGroupName)
                : '';
        message.originProtocol =
            object.originProtocol !== undefined && object.originProtocol !== null
                ? originProtocolFromJSON(object.originProtocol)
                : 0;
        message.sslCertificate =
            object.sslCertificate !== undefined && object.sslCertificate !== null
                ? SSLCertificate.fromJSON(object.sslCertificate)
                : undefined;
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                acc[key] = String(value);
                return acc;
            },
            {},
        );
        return message;
    },

    toJSON(message: Resource): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.cname !== undefined && (obj.cname = message.cname);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt.toISOString());
        message.active !== undefined && (obj.active = message.active);
        message.options !== undefined &&
            (obj.options = message.options ? ResourceOptions.toJSON(message.options) : undefined);
        if (message.secondaryHostnames) {
            obj.secondaryHostnames = message.secondaryHostnames.map((e) => e);
        } else {
            obj.secondaryHostnames = [];
        }
        message.originGroupId !== undefined &&
            (obj.originGroupId = Math.round(message.originGroupId));
        message.originGroupName !== undefined && (obj.originGroupName = message.originGroupName);
        message.originProtocol !== undefined &&
            (obj.originProtocol = originProtocolToJSON(message.originProtocol));
        message.sslCertificate !== undefined &&
            (obj.sslCertificate = message.sslCertificate
                ? SSLCertificate.toJSON(message.sslCertificate)
                : undefined);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Resource>, I>>(object: I): Resource {
        const message = { ...baseResource } as Resource;
        message.id = object.id ?? '';
        message.folderId = object.folderId ?? '';
        message.cname = object.cname ?? '';
        message.createdAt = object.createdAt ?? undefined;
        message.updatedAt = object.updatedAt ?? undefined;
        message.active = object.active ?? false;
        message.options =
            object.options !== undefined && object.options !== null
                ? ResourceOptions.fromPartial(object.options)
                : undefined;
        message.secondaryHostnames = object.secondaryHostnames?.map((e) => e) || [];
        message.originGroupId = object.originGroupId ?? 0;
        message.originGroupName = object.originGroupName ?? '';
        message.originProtocol = object.originProtocol ?? 0;
        message.sslCertificate =
            object.sslCertificate !== undefined && object.sslCertificate !== null
                ? SSLCertificate.fromPartial(object.sslCertificate)
                : undefined;
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                if (value !== undefined) {
                    acc[key] = String(value);
                }
                return acc;
            },
            {},
        );
        return message;
    },
};

const baseResource_LabelsEntry: object = { key: '', value: '' };

export const Resource_LabelsEntry = {
    encode(message: Resource_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Resource_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseResource_LabelsEntry } as Resource_LabelsEntry;
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

    fromJSON(object: any): Resource_LabelsEntry {
        const message = { ...baseResource_LabelsEntry } as Resource_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: Resource_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Resource_LabelsEntry>, I>>(
        object: I,
    ): Resource_LabelsEntry {
        const message = { ...baseResource_LabelsEntry } as Resource_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseResourceOptions: object = {};

export const ResourceOptions = {
    encode(message: ResourceOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.disableCache !== undefined) {
            ResourceOptions_BoolOption.encode(
                message.disableCache,
                writer.uint32(10).fork(),
            ).ldelim();
        }
        if (message.edgeCacheSettings !== undefined) {
            ResourceOptions_EdgeCacheSettings.encode(
                message.edgeCacheSettings,
                writer.uint32(18).fork(),
            ).ldelim();
        }
        if (message.browserCacheSettings !== undefined) {
            ResourceOptions_Int64Option.encode(
                message.browserCacheSettings,
                writer.uint32(26).fork(),
            ).ldelim();
        }
        if (message.cacheHttpHeaders !== undefined) {
            ResourceOptions_StringsListOption.encode(
                message.cacheHttpHeaders,
                writer.uint32(34).fork(),
            ).ldelim();
        }
        if (message.queryParamsOptions !== undefined) {
            ResourceOptions_QueryParamsOptions.encode(
                message.queryParamsOptions,
                writer.uint32(42).fork(),
            ).ldelim();
        }
        if (message.slice !== undefined) {
            ResourceOptions_BoolOption.encode(message.slice, writer.uint32(50).fork()).ldelim();
        }
        if (message.compressionOptions !== undefined) {
            ResourceOptions_CompressionOptions.encode(
                message.compressionOptions,
                writer.uint32(58).fork(),
            ).ldelim();
        }
        if (message.redirectOptions !== undefined) {
            ResourceOptions_RedirectOptions.encode(
                message.redirectOptions,
                writer.uint32(66).fork(),
            ).ldelim();
        }
        if (message.hostOptions !== undefined) {
            ResourceOptions_HostOptions.encode(
                message.hostOptions,
                writer.uint32(74).fork(),
            ).ldelim();
        }
        if (message.staticHeaders !== undefined) {
            ResourceOptions_StringsMapOption.encode(
                message.staticHeaders,
                writer.uint32(82).fork(),
            ).ldelim();
        }
        if (message.cors !== undefined) {
            ResourceOptions_StringsListOption.encode(
                message.cors,
                writer.uint32(90).fork(),
            ).ldelim();
        }
        if (message.stale !== undefined) {
            ResourceOptions_StringsListOption.encode(
                message.stale,
                writer.uint32(98).fork(),
            ).ldelim();
        }
        if (message.allowedHttpMethods !== undefined) {
            ResourceOptions_StringsListOption.encode(
                message.allowedHttpMethods,
                writer.uint32(106).fork(),
            ).ldelim();
        }
        if (message.proxyCacheMethodsSet !== undefined) {
            ResourceOptions_BoolOption.encode(
                message.proxyCacheMethodsSet,
                writer.uint32(114).fork(),
            ).ldelim();
        }
        if (message.disableProxyForceRanges !== undefined) {
            ResourceOptions_BoolOption.encode(
                message.disableProxyForceRanges,
                writer.uint32(122).fork(),
            ).ldelim();
        }
        if (message.staticRequestHeaders !== undefined) {
            ResourceOptions_StringsMapOption.encode(
                message.staticRequestHeaders,
                writer.uint32(130).fork(),
            ).ldelim();
        }
        if (message.customServerName !== undefined) {
            ResourceOptions_StringOption.encode(
                message.customServerName,
                writer.uint32(138).fork(),
            ).ldelim();
        }
        if (message.ignoreCookie !== undefined) {
            ResourceOptions_BoolOption.encode(
                message.ignoreCookie,
                writer.uint32(146).fork(),
            ).ldelim();
        }
        if (message.rewrite !== undefined) {
            ResourceOptions_RewriteOption.encode(
                message.rewrite,
                writer.uint32(154).fork(),
            ).ldelim();
        }
        if (message.secureKey !== undefined) {
            ResourceOptions_SecureKeyOption.encode(
                message.secureKey,
                writer.uint32(162).fork(),
            ).ldelim();
        }
        if (message.ipAddressAcl !== undefined) {
            ResourceOptions_IPAddressACLOption.encode(
                message.ipAddressAcl,
                writer.uint32(170).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ResourceOptions {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseResourceOptions } as ResourceOptions;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.disableCache = ResourceOptions_BoolOption.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 2:
                    message.edgeCacheSettings = ResourceOptions_EdgeCacheSettings.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 3:
                    message.browserCacheSettings = ResourceOptions_Int64Option.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 4:
                    message.cacheHttpHeaders = ResourceOptions_StringsListOption.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 5:
                    message.queryParamsOptions = ResourceOptions_QueryParamsOptions.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 6:
                    message.slice = ResourceOptions_BoolOption.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.compressionOptions = ResourceOptions_CompressionOptions.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 8:
                    message.redirectOptions = ResourceOptions_RedirectOptions.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 9:
                    message.hostOptions = ResourceOptions_HostOptions.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 10:
                    message.staticHeaders = ResourceOptions_StringsMapOption.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 11:
                    message.cors = ResourceOptions_StringsListOption.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 12:
                    message.stale = ResourceOptions_StringsListOption.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 13:
                    message.allowedHttpMethods = ResourceOptions_StringsListOption.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 14:
                    message.proxyCacheMethodsSet = ResourceOptions_BoolOption.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 15:
                    message.disableProxyForceRanges = ResourceOptions_BoolOption.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 16:
                    message.staticRequestHeaders = ResourceOptions_StringsMapOption.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 17:
                    message.customServerName = ResourceOptions_StringOption.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 18:
                    message.ignoreCookie = ResourceOptions_BoolOption.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 19:
                    message.rewrite = ResourceOptions_RewriteOption.decode(reader, reader.uint32());
                    break;
                case 20:
                    message.secureKey = ResourceOptions_SecureKeyOption.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 21:
                    message.ipAddressAcl = ResourceOptions_IPAddressACLOption.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ResourceOptions {
        const message = { ...baseResourceOptions } as ResourceOptions;
        message.disableCache =
            object.disableCache !== undefined && object.disableCache !== null
                ? ResourceOptions_BoolOption.fromJSON(object.disableCache)
                : undefined;
        message.edgeCacheSettings =
            object.edgeCacheSettings !== undefined && object.edgeCacheSettings !== null
                ? ResourceOptions_EdgeCacheSettings.fromJSON(object.edgeCacheSettings)
                : undefined;
        message.browserCacheSettings =
            object.browserCacheSettings !== undefined && object.browserCacheSettings !== null
                ? ResourceOptions_Int64Option.fromJSON(object.browserCacheSettings)
                : undefined;
        message.cacheHttpHeaders =
            object.cacheHttpHeaders !== undefined && object.cacheHttpHeaders !== null
                ? ResourceOptions_StringsListOption.fromJSON(object.cacheHttpHeaders)
                : undefined;
        message.queryParamsOptions =
            object.queryParamsOptions !== undefined && object.queryParamsOptions !== null
                ? ResourceOptions_QueryParamsOptions.fromJSON(object.queryParamsOptions)
                : undefined;
        message.slice =
            object.slice !== undefined && object.slice !== null
                ? ResourceOptions_BoolOption.fromJSON(object.slice)
                : undefined;
        message.compressionOptions =
            object.compressionOptions !== undefined && object.compressionOptions !== null
                ? ResourceOptions_CompressionOptions.fromJSON(object.compressionOptions)
                : undefined;
        message.redirectOptions =
            object.redirectOptions !== undefined && object.redirectOptions !== null
                ? ResourceOptions_RedirectOptions.fromJSON(object.redirectOptions)
                : undefined;
        message.hostOptions =
            object.hostOptions !== undefined && object.hostOptions !== null
                ? ResourceOptions_HostOptions.fromJSON(object.hostOptions)
                : undefined;
        message.staticHeaders =
            object.staticHeaders !== undefined && object.staticHeaders !== null
                ? ResourceOptions_StringsMapOption.fromJSON(object.staticHeaders)
                : undefined;
        message.cors =
            object.cors !== undefined && object.cors !== null
                ? ResourceOptions_StringsListOption.fromJSON(object.cors)
                : undefined;
        message.stale =
            object.stale !== undefined && object.stale !== null
                ? ResourceOptions_StringsListOption.fromJSON(object.stale)
                : undefined;
        message.allowedHttpMethods =
            object.allowedHttpMethods !== undefined && object.allowedHttpMethods !== null
                ? ResourceOptions_StringsListOption.fromJSON(object.allowedHttpMethods)
                : undefined;
        message.proxyCacheMethodsSet =
            object.proxyCacheMethodsSet !== undefined && object.proxyCacheMethodsSet !== null
                ? ResourceOptions_BoolOption.fromJSON(object.proxyCacheMethodsSet)
                : undefined;
        message.disableProxyForceRanges =
            object.disableProxyForceRanges !== undefined && object.disableProxyForceRanges !== null
                ? ResourceOptions_BoolOption.fromJSON(object.disableProxyForceRanges)
                : undefined;
        message.staticRequestHeaders =
            object.staticRequestHeaders !== undefined && object.staticRequestHeaders !== null
                ? ResourceOptions_StringsMapOption.fromJSON(object.staticRequestHeaders)
                : undefined;
        message.customServerName =
            object.customServerName !== undefined && object.customServerName !== null
                ? ResourceOptions_StringOption.fromJSON(object.customServerName)
                : undefined;
        message.ignoreCookie =
            object.ignoreCookie !== undefined && object.ignoreCookie !== null
                ? ResourceOptions_BoolOption.fromJSON(object.ignoreCookie)
                : undefined;
        message.rewrite =
            object.rewrite !== undefined && object.rewrite !== null
                ? ResourceOptions_RewriteOption.fromJSON(object.rewrite)
                : undefined;
        message.secureKey =
            object.secureKey !== undefined && object.secureKey !== null
                ? ResourceOptions_SecureKeyOption.fromJSON(object.secureKey)
                : undefined;
        message.ipAddressAcl =
            object.ipAddressAcl !== undefined && object.ipAddressAcl !== null
                ? ResourceOptions_IPAddressACLOption.fromJSON(object.ipAddressAcl)
                : undefined;
        return message;
    },

    toJSON(message: ResourceOptions): unknown {
        const obj: any = {};
        message.disableCache !== undefined &&
            (obj.disableCache = message.disableCache
                ? ResourceOptions_BoolOption.toJSON(message.disableCache)
                : undefined);
        message.edgeCacheSettings !== undefined &&
            (obj.edgeCacheSettings = message.edgeCacheSettings
                ? ResourceOptions_EdgeCacheSettings.toJSON(message.edgeCacheSettings)
                : undefined);
        message.browserCacheSettings !== undefined &&
            (obj.browserCacheSettings = message.browserCacheSettings
                ? ResourceOptions_Int64Option.toJSON(message.browserCacheSettings)
                : undefined);
        message.cacheHttpHeaders !== undefined &&
            (obj.cacheHttpHeaders = message.cacheHttpHeaders
                ? ResourceOptions_StringsListOption.toJSON(message.cacheHttpHeaders)
                : undefined);
        message.queryParamsOptions !== undefined &&
            (obj.queryParamsOptions = message.queryParamsOptions
                ? ResourceOptions_QueryParamsOptions.toJSON(message.queryParamsOptions)
                : undefined);
        message.slice !== undefined &&
            (obj.slice = message.slice
                ? ResourceOptions_BoolOption.toJSON(message.slice)
                : undefined);
        message.compressionOptions !== undefined &&
            (obj.compressionOptions = message.compressionOptions
                ? ResourceOptions_CompressionOptions.toJSON(message.compressionOptions)
                : undefined);
        message.redirectOptions !== undefined &&
            (obj.redirectOptions = message.redirectOptions
                ? ResourceOptions_RedirectOptions.toJSON(message.redirectOptions)
                : undefined);
        message.hostOptions !== undefined &&
            (obj.hostOptions = message.hostOptions
                ? ResourceOptions_HostOptions.toJSON(message.hostOptions)
                : undefined);
        message.staticHeaders !== undefined &&
            (obj.staticHeaders = message.staticHeaders
                ? ResourceOptions_StringsMapOption.toJSON(message.staticHeaders)
                : undefined);
        message.cors !== undefined &&
            (obj.cors = message.cors
                ? ResourceOptions_StringsListOption.toJSON(message.cors)
                : undefined);
        message.stale !== undefined &&
            (obj.stale = message.stale
                ? ResourceOptions_StringsListOption.toJSON(message.stale)
                : undefined);
        message.allowedHttpMethods !== undefined &&
            (obj.allowedHttpMethods = message.allowedHttpMethods
                ? ResourceOptions_StringsListOption.toJSON(message.allowedHttpMethods)
                : undefined);
        message.proxyCacheMethodsSet !== undefined &&
            (obj.proxyCacheMethodsSet = message.proxyCacheMethodsSet
                ? ResourceOptions_BoolOption.toJSON(message.proxyCacheMethodsSet)
                : undefined);
        message.disableProxyForceRanges !== undefined &&
            (obj.disableProxyForceRanges = message.disableProxyForceRanges
                ? ResourceOptions_BoolOption.toJSON(message.disableProxyForceRanges)
                : undefined);
        message.staticRequestHeaders !== undefined &&
            (obj.staticRequestHeaders = message.staticRequestHeaders
                ? ResourceOptions_StringsMapOption.toJSON(message.staticRequestHeaders)
                : undefined);
        message.customServerName !== undefined &&
            (obj.customServerName = message.customServerName
                ? ResourceOptions_StringOption.toJSON(message.customServerName)
                : undefined);
        message.ignoreCookie !== undefined &&
            (obj.ignoreCookie = message.ignoreCookie
                ? ResourceOptions_BoolOption.toJSON(message.ignoreCookie)
                : undefined);
        message.rewrite !== undefined &&
            (obj.rewrite = message.rewrite
                ? ResourceOptions_RewriteOption.toJSON(message.rewrite)
                : undefined);
        message.secureKey !== undefined &&
            (obj.secureKey = message.secureKey
                ? ResourceOptions_SecureKeyOption.toJSON(message.secureKey)
                : undefined);
        message.ipAddressAcl !== undefined &&
            (obj.ipAddressAcl = message.ipAddressAcl
                ? ResourceOptions_IPAddressACLOption.toJSON(message.ipAddressAcl)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ResourceOptions>, I>>(object: I): ResourceOptions {
        const message = { ...baseResourceOptions } as ResourceOptions;
        message.disableCache =
            object.disableCache !== undefined && object.disableCache !== null
                ? ResourceOptions_BoolOption.fromPartial(object.disableCache)
                : undefined;
        message.edgeCacheSettings =
            object.edgeCacheSettings !== undefined && object.edgeCacheSettings !== null
                ? ResourceOptions_EdgeCacheSettings.fromPartial(object.edgeCacheSettings)
                : undefined;
        message.browserCacheSettings =
            object.browserCacheSettings !== undefined && object.browserCacheSettings !== null
                ? ResourceOptions_Int64Option.fromPartial(object.browserCacheSettings)
                : undefined;
        message.cacheHttpHeaders =
            object.cacheHttpHeaders !== undefined && object.cacheHttpHeaders !== null
                ? ResourceOptions_StringsListOption.fromPartial(object.cacheHttpHeaders)
                : undefined;
        message.queryParamsOptions =
            object.queryParamsOptions !== undefined && object.queryParamsOptions !== null
                ? ResourceOptions_QueryParamsOptions.fromPartial(object.queryParamsOptions)
                : undefined;
        message.slice =
            object.slice !== undefined && object.slice !== null
                ? ResourceOptions_BoolOption.fromPartial(object.slice)
                : undefined;
        message.compressionOptions =
            object.compressionOptions !== undefined && object.compressionOptions !== null
                ? ResourceOptions_CompressionOptions.fromPartial(object.compressionOptions)
                : undefined;
        message.redirectOptions =
            object.redirectOptions !== undefined && object.redirectOptions !== null
                ? ResourceOptions_RedirectOptions.fromPartial(object.redirectOptions)
                : undefined;
        message.hostOptions =
            object.hostOptions !== undefined && object.hostOptions !== null
                ? ResourceOptions_HostOptions.fromPartial(object.hostOptions)
                : undefined;
        message.staticHeaders =
            object.staticHeaders !== undefined && object.staticHeaders !== null
                ? ResourceOptions_StringsMapOption.fromPartial(object.staticHeaders)
                : undefined;
        message.cors =
            object.cors !== undefined && object.cors !== null
                ? ResourceOptions_StringsListOption.fromPartial(object.cors)
                : undefined;
        message.stale =
            object.stale !== undefined && object.stale !== null
                ? ResourceOptions_StringsListOption.fromPartial(object.stale)
                : undefined;
        message.allowedHttpMethods =
            object.allowedHttpMethods !== undefined && object.allowedHttpMethods !== null
                ? ResourceOptions_StringsListOption.fromPartial(object.allowedHttpMethods)
                : undefined;
        message.proxyCacheMethodsSet =
            object.proxyCacheMethodsSet !== undefined && object.proxyCacheMethodsSet !== null
                ? ResourceOptions_BoolOption.fromPartial(object.proxyCacheMethodsSet)
                : undefined;
        message.disableProxyForceRanges =
            object.disableProxyForceRanges !== undefined && object.disableProxyForceRanges !== null
                ? ResourceOptions_BoolOption.fromPartial(object.disableProxyForceRanges)
                : undefined;
        message.staticRequestHeaders =
            object.staticRequestHeaders !== undefined && object.staticRequestHeaders !== null
                ? ResourceOptions_StringsMapOption.fromPartial(object.staticRequestHeaders)
                : undefined;
        message.customServerName =
            object.customServerName !== undefined && object.customServerName !== null
                ? ResourceOptions_StringOption.fromPartial(object.customServerName)
                : undefined;
        message.ignoreCookie =
            object.ignoreCookie !== undefined && object.ignoreCookie !== null
                ? ResourceOptions_BoolOption.fromPartial(object.ignoreCookie)
                : undefined;
        message.rewrite =
            object.rewrite !== undefined && object.rewrite !== null
                ? ResourceOptions_RewriteOption.fromPartial(object.rewrite)
                : undefined;
        message.secureKey =
            object.secureKey !== undefined && object.secureKey !== null
                ? ResourceOptions_SecureKeyOption.fromPartial(object.secureKey)
                : undefined;
        message.ipAddressAcl =
            object.ipAddressAcl !== undefined && object.ipAddressAcl !== null
                ? ResourceOptions_IPAddressACLOption.fromPartial(object.ipAddressAcl)
                : undefined;
        return message;
    },
};

const baseResourceOptions_BoolOption: object = { enabled: false, value: false };

export const ResourceOptions_BoolOption = {
    encode(
        message: ResourceOptions_BoolOption,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.enabled === true) {
            writer.uint32(8).bool(message.enabled);
        }
        if (message.value === true) {
            writer.uint32(16).bool(message.value);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ResourceOptions_BoolOption {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseResourceOptions_BoolOption } as ResourceOptions_BoolOption;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.enabled = reader.bool();
                    break;
                case 2:
                    message.value = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ResourceOptions_BoolOption {
        const message = { ...baseResourceOptions_BoolOption } as ResourceOptions_BoolOption;
        message.enabled =
            object.enabled !== undefined && object.enabled !== null
                ? Boolean(object.enabled)
                : false;
        message.value =
            object.value !== undefined && object.value !== null ? Boolean(object.value) : false;
        return message;
    },

    toJSON(message: ResourceOptions_BoolOption): unknown {
        const obj: any = {};
        message.enabled !== undefined && (obj.enabled = message.enabled);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ResourceOptions_BoolOption>, I>>(
        object: I,
    ): ResourceOptions_BoolOption {
        const message = { ...baseResourceOptions_BoolOption } as ResourceOptions_BoolOption;
        message.enabled = object.enabled ?? false;
        message.value = object.value ?? false;
        return message;
    },
};

const baseResourceOptions_StringOption: object = { enabled: false, value: '' };

export const ResourceOptions_StringOption = {
    encode(
        message: ResourceOptions_StringOption,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.enabled === true) {
            writer.uint32(8).bool(message.enabled);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ResourceOptions_StringOption {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseResourceOptions_StringOption } as ResourceOptions_StringOption;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.enabled = reader.bool();
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

    fromJSON(object: any): ResourceOptions_StringOption {
        const message = { ...baseResourceOptions_StringOption } as ResourceOptions_StringOption;
        message.enabled =
            object.enabled !== undefined && object.enabled !== null
                ? Boolean(object.enabled)
                : false;
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: ResourceOptions_StringOption): unknown {
        const obj: any = {};
        message.enabled !== undefined && (obj.enabled = message.enabled);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ResourceOptions_StringOption>, I>>(
        object: I,
    ): ResourceOptions_StringOption {
        const message = { ...baseResourceOptions_StringOption } as ResourceOptions_StringOption;
        message.enabled = object.enabled ?? false;
        message.value = object.value ?? '';
        return message;
    },
};

const baseResourceOptions_Int64Option: object = { enabled: false, value: 0 };

export const ResourceOptions_Int64Option = {
    encode(
        message: ResourceOptions_Int64Option,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.enabled === true) {
            writer.uint32(8).bool(message.enabled);
        }
        if (message.value !== 0) {
            writer.uint32(16).int64(message.value);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ResourceOptions_Int64Option {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseResourceOptions_Int64Option } as ResourceOptions_Int64Option;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.enabled = reader.bool();
                    break;
                case 2:
                    message.value = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ResourceOptions_Int64Option {
        const message = { ...baseResourceOptions_Int64Option } as ResourceOptions_Int64Option;
        message.enabled =
            object.enabled !== undefined && object.enabled !== null
                ? Boolean(object.enabled)
                : false;
        message.value =
            object.value !== undefined && object.value !== null ? Number(object.value) : 0;
        return message;
    },

    toJSON(message: ResourceOptions_Int64Option): unknown {
        const obj: any = {};
        message.enabled !== undefined && (obj.enabled = message.enabled);
        message.value !== undefined && (obj.value = Math.round(message.value));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ResourceOptions_Int64Option>, I>>(
        object: I,
    ): ResourceOptions_Int64Option {
        const message = { ...baseResourceOptions_Int64Option } as ResourceOptions_Int64Option;
        message.enabled = object.enabled ?? false;
        message.value = object.value ?? 0;
        return message;
    },
};

const baseResourceOptions_StringsListOption: object = { enabled: false, value: '' };

export const ResourceOptions_StringsListOption = {
    encode(
        message: ResourceOptions_StringsListOption,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.enabled === true) {
            writer.uint32(8).bool(message.enabled);
        }
        for (const v of message.value) {
            writer.uint32(18).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ResourceOptions_StringsListOption {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseResourceOptions_StringsListOption,
        } as ResourceOptions_StringsListOption;
        message.value = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.enabled = reader.bool();
                    break;
                case 2:
                    message.value.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ResourceOptions_StringsListOption {
        const message = {
            ...baseResourceOptions_StringsListOption,
        } as ResourceOptions_StringsListOption;
        message.enabled =
            object.enabled !== undefined && object.enabled !== null
                ? Boolean(object.enabled)
                : false;
        message.value = (object.value ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: ResourceOptions_StringsListOption): unknown {
        const obj: any = {};
        message.enabled !== undefined && (obj.enabled = message.enabled);
        if (message.value) {
            obj.value = message.value.map((e) => e);
        } else {
            obj.value = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ResourceOptions_StringsListOption>, I>>(
        object: I,
    ): ResourceOptions_StringsListOption {
        const message = {
            ...baseResourceOptions_StringsListOption,
        } as ResourceOptions_StringsListOption;
        message.enabled = object.enabled ?? false;
        message.value = object.value?.map((e) => e) || [];
        return message;
    },
};

const baseResourceOptions_StringsMapOption: object = { enabled: false };

export const ResourceOptions_StringsMapOption = {
    encode(
        message: ResourceOptions_StringsMapOption,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.enabled === true) {
            writer.uint32(8).bool(message.enabled);
        }
        Object.entries(message.value).forEach(([key, value]) => {
            ResourceOptions_StringsMapOption_ValueEntry.encode(
                { key: key as any, value },
                writer.uint32(18).fork(),
            ).ldelim();
        });
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ResourceOptions_StringsMapOption {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseResourceOptions_StringsMapOption,
        } as ResourceOptions_StringsMapOption;
        message.value = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.enabled = reader.bool();
                    break;
                case 2:
                    const entry2 = ResourceOptions_StringsMapOption_ValueEntry.decode(
                        reader,
                        reader.uint32(),
                    );
                    if (entry2.value !== undefined) {
                        message.value[entry2.key] = entry2.value;
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ResourceOptions_StringsMapOption {
        const message = {
            ...baseResourceOptions_StringsMapOption,
        } as ResourceOptions_StringsMapOption;
        message.enabled =
            object.enabled !== undefined && object.enabled !== null
                ? Boolean(object.enabled)
                : false;
        message.value = Object.entries(object.value ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                acc[key] = String(value);
                return acc;
            },
            {},
        );
        return message;
    },

    toJSON(message: ResourceOptions_StringsMapOption): unknown {
        const obj: any = {};
        message.enabled !== undefined && (obj.enabled = message.enabled);
        obj.value = {};
        if (message.value) {
            Object.entries(message.value).forEach(([k, v]) => {
                obj.value[k] = v;
            });
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ResourceOptions_StringsMapOption>, I>>(
        object: I,
    ): ResourceOptions_StringsMapOption {
        const message = {
            ...baseResourceOptions_StringsMapOption,
        } as ResourceOptions_StringsMapOption;
        message.enabled = object.enabled ?? false;
        message.value = Object.entries(object.value ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                if (value !== undefined) {
                    acc[key] = String(value);
                }
                return acc;
            },
            {},
        );
        return message;
    },
};

const baseResourceOptions_StringsMapOption_ValueEntry: object = { key: '', value: '' };

export const ResourceOptions_StringsMapOption_ValueEntry = {
    encode(
        message: ResourceOptions_StringsMapOption_ValueEntry,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): ResourceOptions_StringsMapOption_ValueEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseResourceOptions_StringsMapOption_ValueEntry,
        } as ResourceOptions_StringsMapOption_ValueEntry;
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

    fromJSON(object: any): ResourceOptions_StringsMapOption_ValueEntry {
        const message = {
            ...baseResourceOptions_StringsMapOption_ValueEntry,
        } as ResourceOptions_StringsMapOption_ValueEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: ResourceOptions_StringsMapOption_ValueEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ResourceOptions_StringsMapOption_ValueEntry>, I>>(
        object: I,
    ): ResourceOptions_StringsMapOption_ValueEntry {
        const message = {
            ...baseResourceOptions_StringsMapOption_ValueEntry,
        } as ResourceOptions_StringsMapOption_ValueEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseResourceOptions_CachingTimes: object = { simpleValue: 0 };

export const ResourceOptions_CachingTimes = {
    encode(
        message: ResourceOptions_CachingTimes,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.simpleValue !== 0) {
            writer.uint32(8).int64(message.simpleValue);
        }
        Object.entries(message.customValues).forEach(([key, value]) => {
            ResourceOptions_CachingTimes_CustomValuesEntry.encode(
                { key: key as any, value },
                writer.uint32(18).fork(),
            ).ldelim();
        });
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ResourceOptions_CachingTimes {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseResourceOptions_CachingTimes } as ResourceOptions_CachingTimes;
        message.customValues = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.simpleValue = longToNumber(reader.int64() as Long);
                    break;
                case 2:
                    const entry2 = ResourceOptions_CachingTimes_CustomValuesEntry.decode(
                        reader,
                        reader.uint32(),
                    );
                    if (entry2.value !== undefined) {
                        message.customValues[entry2.key] = entry2.value;
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ResourceOptions_CachingTimes {
        const message = { ...baseResourceOptions_CachingTimes } as ResourceOptions_CachingTimes;
        message.simpleValue =
            object.simpleValue !== undefined && object.simpleValue !== null
                ? Number(object.simpleValue)
                : 0;
        message.customValues = Object.entries(object.customValues ?? {}).reduce<{
            [key: string]: number;
        }>((acc, [key, value]) => {
            acc[key] = Number(value);
            return acc;
        }, {});
        return message;
    },

    toJSON(message: ResourceOptions_CachingTimes): unknown {
        const obj: any = {};
        message.simpleValue !== undefined && (obj.simpleValue = Math.round(message.simpleValue));
        obj.customValues = {};
        if (message.customValues) {
            Object.entries(message.customValues).forEach(([k, v]) => {
                obj.customValues[k] = Math.round(v);
            });
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ResourceOptions_CachingTimes>, I>>(
        object: I,
    ): ResourceOptions_CachingTimes {
        const message = { ...baseResourceOptions_CachingTimes } as ResourceOptions_CachingTimes;
        message.simpleValue = object.simpleValue ?? 0;
        message.customValues = Object.entries(object.customValues ?? {}).reduce<{
            [key: string]: number;
        }>((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = Number(value);
            }
            return acc;
        }, {});
        return message;
    },
};

const baseResourceOptions_CachingTimes_CustomValuesEntry: object = { key: '', value: 0 };

export const ResourceOptions_CachingTimes_CustomValuesEntry = {
    encode(
        message: ResourceOptions_CachingTimes_CustomValuesEntry,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== 0) {
            writer.uint32(16).int64(message.value);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): ResourceOptions_CachingTimes_CustomValuesEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseResourceOptions_CachingTimes_CustomValuesEntry,
        } as ResourceOptions_CachingTimes_CustomValuesEntry;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ResourceOptions_CachingTimes_CustomValuesEntry {
        const message = {
            ...baseResourceOptions_CachingTimes_CustomValuesEntry,
        } as ResourceOptions_CachingTimes_CustomValuesEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? Number(object.value) : 0;
        return message;
    },

    toJSON(message: ResourceOptions_CachingTimes_CustomValuesEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = Math.round(message.value));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ResourceOptions_CachingTimes_CustomValuesEntry>, I>>(
        object: I,
    ): ResourceOptions_CachingTimes_CustomValuesEntry {
        const message = {
            ...baseResourceOptions_CachingTimes_CustomValuesEntry,
        } as ResourceOptions_CachingTimes_CustomValuesEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? 0;
        return message;
    },
};

const baseResourceOptions_EdgeCacheSettings: object = { enabled: false };

export const ResourceOptions_EdgeCacheSettings = {
    encode(
        message: ResourceOptions_EdgeCacheSettings,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.enabled === true) {
            writer.uint32(8).bool(message.enabled);
        }
        if (message.value !== undefined) {
            ResourceOptions_CachingTimes.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        if (message.defaultValue !== undefined) {
            writer.uint32(24).int64(message.defaultValue);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ResourceOptions_EdgeCacheSettings {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseResourceOptions_EdgeCacheSettings,
        } as ResourceOptions_EdgeCacheSettings;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.enabled = reader.bool();
                    break;
                case 2:
                    message.value = ResourceOptions_CachingTimes.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.defaultValue = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ResourceOptions_EdgeCacheSettings {
        const message = {
            ...baseResourceOptions_EdgeCacheSettings,
        } as ResourceOptions_EdgeCacheSettings;
        message.enabled =
            object.enabled !== undefined && object.enabled !== null
                ? Boolean(object.enabled)
                : false;
        message.value =
            object.value !== undefined && object.value !== null
                ? ResourceOptions_CachingTimes.fromJSON(object.value)
                : undefined;
        message.defaultValue =
            object.defaultValue !== undefined && object.defaultValue !== null
                ? Number(object.defaultValue)
                : undefined;
        return message;
    },

    toJSON(message: ResourceOptions_EdgeCacheSettings): unknown {
        const obj: any = {};
        message.enabled !== undefined && (obj.enabled = message.enabled);
        message.value !== undefined &&
            (obj.value = message.value
                ? ResourceOptions_CachingTimes.toJSON(message.value)
                : undefined);
        message.defaultValue !== undefined && (obj.defaultValue = Math.round(message.defaultValue));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ResourceOptions_EdgeCacheSettings>, I>>(
        object: I,
    ): ResourceOptions_EdgeCacheSettings {
        const message = {
            ...baseResourceOptions_EdgeCacheSettings,
        } as ResourceOptions_EdgeCacheSettings;
        message.enabled = object.enabled ?? false;
        message.value =
            object.value !== undefined && object.value !== null
                ? ResourceOptions_CachingTimes.fromPartial(object.value)
                : undefined;
        message.defaultValue = object.defaultValue ?? undefined;
        return message;
    },
};

const baseResourceOptions_StringVariableMapOption: object = { enabled: false };

export const ResourceOptions_StringVariableMapOption = {
    encode(
        message: ResourceOptions_StringVariableMapOption,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.enabled === true) {
            writer.uint32(8).bool(message.enabled);
        }
        Object.entries(message.value).forEach(([key, value]) => {
            ResourceOptions_StringVariableMapOption_ValueEntry.encode(
                { key: key as any, value },
                writer.uint32(18).fork(),
            ).ldelim();
        });
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): ResourceOptions_StringVariableMapOption {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseResourceOptions_StringVariableMapOption,
        } as ResourceOptions_StringVariableMapOption;
        message.value = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.enabled = reader.bool();
                    break;
                case 2:
                    const entry2 = ResourceOptions_StringVariableMapOption_ValueEntry.decode(
                        reader,
                        reader.uint32(),
                    );
                    if (entry2.value !== undefined) {
                        message.value[entry2.key] = entry2.value;
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ResourceOptions_StringVariableMapOption {
        const message = {
            ...baseResourceOptions_StringVariableMapOption,
        } as ResourceOptions_StringVariableMapOption;
        message.enabled =
            object.enabled !== undefined && object.enabled !== null
                ? Boolean(object.enabled)
                : false;
        message.value = Object.entries(object.value ?? {}).reduce<{
            [key: string]: ResourceOptions_StringVariableMapOption_OneofString;
        }>((acc, [key, value]) => {
            acc[key] = ResourceOptions_StringVariableMapOption_OneofString.fromJSON(value);
            return acc;
        }, {});
        return message;
    },

    toJSON(message: ResourceOptions_StringVariableMapOption): unknown {
        const obj: any = {};
        message.enabled !== undefined && (obj.enabled = message.enabled);
        obj.value = {};
        if (message.value) {
            Object.entries(message.value).forEach(([k, v]) => {
                obj.value[k] = ResourceOptions_StringVariableMapOption_OneofString.toJSON(v);
            });
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ResourceOptions_StringVariableMapOption>, I>>(
        object: I,
    ): ResourceOptions_StringVariableMapOption {
        const message = {
            ...baseResourceOptions_StringVariableMapOption,
        } as ResourceOptions_StringVariableMapOption;
        message.enabled = object.enabled ?? false;
        message.value = Object.entries(object.value ?? {}).reduce<{
            [key: string]: ResourceOptions_StringVariableMapOption_OneofString;
        }>((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = ResourceOptions_StringVariableMapOption_OneofString.fromPartial(value);
            }
            return acc;
        }, {});
        return message;
    },
};

const baseResourceOptions_StringVariableMapOption_OneofString: object = {};

export const ResourceOptions_StringVariableMapOption_OneofString = {
    encode(
        message: ResourceOptions_StringVariableMapOption_OneofString,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.value !== undefined) {
            ResourceOptions_StringOption.encode(message.value, writer.uint32(10).fork()).ldelim();
        }
        if (message.values !== undefined) {
            ResourceOptions_StringsListOption.encode(
                message.values,
                writer.uint32(18).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): ResourceOptions_StringVariableMapOption_OneofString {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseResourceOptions_StringVariableMapOption_OneofString,
        } as ResourceOptions_StringVariableMapOption_OneofString;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.value = ResourceOptions_StringOption.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.values = ResourceOptions_StringsListOption.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ResourceOptions_StringVariableMapOption_OneofString {
        const message = {
            ...baseResourceOptions_StringVariableMapOption_OneofString,
        } as ResourceOptions_StringVariableMapOption_OneofString;
        message.value =
            object.value !== undefined && object.value !== null
                ? ResourceOptions_StringOption.fromJSON(object.value)
                : undefined;
        message.values =
            object.values !== undefined && object.values !== null
                ? ResourceOptions_StringsListOption.fromJSON(object.values)
                : undefined;
        return message;
    },

    toJSON(message: ResourceOptions_StringVariableMapOption_OneofString): unknown {
        const obj: any = {};
        message.value !== undefined &&
            (obj.value = message.value
                ? ResourceOptions_StringOption.toJSON(message.value)
                : undefined);
        message.values !== undefined &&
            (obj.values = message.values
                ? ResourceOptions_StringsListOption.toJSON(message.values)
                : undefined);
        return obj;
    },

    fromPartial<
        I extends Exact<DeepPartial<ResourceOptions_StringVariableMapOption_OneofString>, I>,
    >(object: I): ResourceOptions_StringVariableMapOption_OneofString {
        const message = {
            ...baseResourceOptions_StringVariableMapOption_OneofString,
        } as ResourceOptions_StringVariableMapOption_OneofString;
        message.value =
            object.value !== undefined && object.value !== null
                ? ResourceOptions_StringOption.fromPartial(object.value)
                : undefined;
        message.values =
            object.values !== undefined && object.values !== null
                ? ResourceOptions_StringsListOption.fromPartial(object.values)
                : undefined;
        return message;
    },
};

const baseResourceOptions_StringVariableMapOption_ValueEntry: object = { key: '' };

export const ResourceOptions_StringVariableMapOption_ValueEntry = {
    encode(
        message: ResourceOptions_StringVariableMapOption_ValueEntry,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            ResourceOptions_StringVariableMapOption_OneofString.encode(
                message.value,
                writer.uint32(18).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): ResourceOptions_StringVariableMapOption_ValueEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseResourceOptions_StringVariableMapOption_ValueEntry,
        } as ResourceOptions_StringVariableMapOption_ValueEntry;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = ResourceOptions_StringVariableMapOption_OneofString.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ResourceOptions_StringVariableMapOption_ValueEntry {
        const message = {
            ...baseResourceOptions_StringVariableMapOption_ValueEntry,
        } as ResourceOptions_StringVariableMapOption_ValueEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null
                ? ResourceOptions_StringVariableMapOption_OneofString.fromJSON(object.value)
                : undefined;
        return message;
    },

    toJSON(message: ResourceOptions_StringVariableMapOption_ValueEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined &&
            (obj.value = message.value
                ? ResourceOptions_StringVariableMapOption_OneofString.toJSON(message.value)
                : undefined);
        return obj;
    },

    fromPartial<
        I extends Exact<DeepPartial<ResourceOptions_StringVariableMapOption_ValueEntry>, I>,
    >(object: I): ResourceOptions_StringVariableMapOption_ValueEntry {
        const message = {
            ...baseResourceOptions_StringVariableMapOption_ValueEntry,
        } as ResourceOptions_StringVariableMapOption_ValueEntry;
        message.key = object.key ?? '';
        message.value =
            object.value !== undefined && object.value !== null
                ? ResourceOptions_StringVariableMapOption_OneofString.fromPartial(object.value)
                : undefined;
        return message;
    },
};

const baseResourceOptions_QueryParamsOptions: object = {};

export const ResourceOptions_QueryParamsOptions = {
    encode(
        message: ResourceOptions_QueryParamsOptions,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.ignoreQueryString !== undefined) {
            ResourceOptions_BoolOption.encode(
                message.ignoreQueryString,
                writer.uint32(10).fork(),
            ).ldelim();
        }
        if (message.queryParamsWhitelist !== undefined) {
            ResourceOptions_StringsListOption.encode(
                message.queryParamsWhitelist,
                writer.uint32(18).fork(),
            ).ldelim();
        }
        if (message.queryParamsBlacklist !== undefined) {
            ResourceOptions_StringsListOption.encode(
                message.queryParamsBlacklist,
                writer.uint32(26).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ResourceOptions_QueryParamsOptions {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseResourceOptions_QueryParamsOptions,
        } as ResourceOptions_QueryParamsOptions;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ignoreQueryString = ResourceOptions_BoolOption.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 2:
                    message.queryParamsWhitelist = ResourceOptions_StringsListOption.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 3:
                    message.queryParamsBlacklist = ResourceOptions_StringsListOption.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ResourceOptions_QueryParamsOptions {
        const message = {
            ...baseResourceOptions_QueryParamsOptions,
        } as ResourceOptions_QueryParamsOptions;
        message.ignoreQueryString =
            object.ignoreQueryString !== undefined && object.ignoreQueryString !== null
                ? ResourceOptions_BoolOption.fromJSON(object.ignoreQueryString)
                : undefined;
        message.queryParamsWhitelist =
            object.queryParamsWhitelist !== undefined && object.queryParamsWhitelist !== null
                ? ResourceOptions_StringsListOption.fromJSON(object.queryParamsWhitelist)
                : undefined;
        message.queryParamsBlacklist =
            object.queryParamsBlacklist !== undefined && object.queryParamsBlacklist !== null
                ? ResourceOptions_StringsListOption.fromJSON(object.queryParamsBlacklist)
                : undefined;
        return message;
    },

    toJSON(message: ResourceOptions_QueryParamsOptions): unknown {
        const obj: any = {};
        message.ignoreQueryString !== undefined &&
            (obj.ignoreQueryString = message.ignoreQueryString
                ? ResourceOptions_BoolOption.toJSON(message.ignoreQueryString)
                : undefined);
        message.queryParamsWhitelist !== undefined &&
            (obj.queryParamsWhitelist = message.queryParamsWhitelist
                ? ResourceOptions_StringsListOption.toJSON(message.queryParamsWhitelist)
                : undefined);
        message.queryParamsBlacklist !== undefined &&
            (obj.queryParamsBlacklist = message.queryParamsBlacklist
                ? ResourceOptions_StringsListOption.toJSON(message.queryParamsBlacklist)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ResourceOptions_QueryParamsOptions>, I>>(
        object: I,
    ): ResourceOptions_QueryParamsOptions {
        const message = {
            ...baseResourceOptions_QueryParamsOptions,
        } as ResourceOptions_QueryParamsOptions;
        message.ignoreQueryString =
            object.ignoreQueryString !== undefined && object.ignoreQueryString !== null
                ? ResourceOptions_BoolOption.fromPartial(object.ignoreQueryString)
                : undefined;
        message.queryParamsWhitelist =
            object.queryParamsWhitelist !== undefined && object.queryParamsWhitelist !== null
                ? ResourceOptions_StringsListOption.fromPartial(object.queryParamsWhitelist)
                : undefined;
        message.queryParamsBlacklist =
            object.queryParamsBlacklist !== undefined && object.queryParamsBlacklist !== null
                ? ResourceOptions_StringsListOption.fromPartial(object.queryParamsBlacklist)
                : undefined;
        return message;
    },
};

const baseResourceOptions_RedirectOptions: object = {};

export const ResourceOptions_RedirectOptions = {
    encode(
        message: ResourceOptions_RedirectOptions,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.redirectHttpToHttps !== undefined) {
            ResourceOptions_BoolOption.encode(
                message.redirectHttpToHttps,
                writer.uint32(10).fork(),
            ).ldelim();
        }
        if (message.redirectHttpsToHttp !== undefined) {
            ResourceOptions_BoolOption.encode(
                message.redirectHttpsToHttp,
                writer.uint32(18).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ResourceOptions_RedirectOptions {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseResourceOptions_RedirectOptions,
        } as ResourceOptions_RedirectOptions;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.redirectHttpToHttps = ResourceOptions_BoolOption.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 2:
                    message.redirectHttpsToHttp = ResourceOptions_BoolOption.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ResourceOptions_RedirectOptions {
        const message = {
            ...baseResourceOptions_RedirectOptions,
        } as ResourceOptions_RedirectOptions;
        message.redirectHttpToHttps =
            object.redirectHttpToHttps !== undefined && object.redirectHttpToHttps !== null
                ? ResourceOptions_BoolOption.fromJSON(object.redirectHttpToHttps)
                : undefined;
        message.redirectHttpsToHttp =
            object.redirectHttpsToHttp !== undefined && object.redirectHttpsToHttp !== null
                ? ResourceOptions_BoolOption.fromJSON(object.redirectHttpsToHttp)
                : undefined;
        return message;
    },

    toJSON(message: ResourceOptions_RedirectOptions): unknown {
        const obj: any = {};
        message.redirectHttpToHttps !== undefined &&
            (obj.redirectHttpToHttps = message.redirectHttpToHttps
                ? ResourceOptions_BoolOption.toJSON(message.redirectHttpToHttps)
                : undefined);
        message.redirectHttpsToHttp !== undefined &&
            (obj.redirectHttpsToHttp = message.redirectHttpsToHttp
                ? ResourceOptions_BoolOption.toJSON(message.redirectHttpsToHttp)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ResourceOptions_RedirectOptions>, I>>(
        object: I,
    ): ResourceOptions_RedirectOptions {
        const message = {
            ...baseResourceOptions_RedirectOptions,
        } as ResourceOptions_RedirectOptions;
        message.redirectHttpToHttps =
            object.redirectHttpToHttps !== undefined && object.redirectHttpToHttps !== null
                ? ResourceOptions_BoolOption.fromPartial(object.redirectHttpToHttps)
                : undefined;
        message.redirectHttpsToHttp =
            object.redirectHttpsToHttp !== undefined && object.redirectHttpsToHttp !== null
                ? ResourceOptions_BoolOption.fromPartial(object.redirectHttpsToHttp)
                : undefined;
        return message;
    },
};

const baseResourceOptions_HostOptions: object = {};

export const ResourceOptions_HostOptions = {
    encode(
        message: ResourceOptions_HostOptions,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.host !== undefined) {
            ResourceOptions_StringOption.encode(message.host, writer.uint32(10).fork()).ldelim();
        }
        if (message.forwardHostHeader !== undefined) {
            ResourceOptions_BoolOption.encode(
                message.forwardHostHeader,
                writer.uint32(18).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ResourceOptions_HostOptions {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseResourceOptions_HostOptions } as ResourceOptions_HostOptions;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.host = ResourceOptions_StringOption.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.forwardHostHeader = ResourceOptions_BoolOption.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ResourceOptions_HostOptions {
        const message = { ...baseResourceOptions_HostOptions } as ResourceOptions_HostOptions;
        message.host =
            object.host !== undefined && object.host !== null
                ? ResourceOptions_StringOption.fromJSON(object.host)
                : undefined;
        message.forwardHostHeader =
            object.forwardHostHeader !== undefined && object.forwardHostHeader !== null
                ? ResourceOptions_BoolOption.fromJSON(object.forwardHostHeader)
                : undefined;
        return message;
    },

    toJSON(message: ResourceOptions_HostOptions): unknown {
        const obj: any = {};
        message.host !== undefined &&
            (obj.host = message.host
                ? ResourceOptions_StringOption.toJSON(message.host)
                : undefined);
        message.forwardHostHeader !== undefined &&
            (obj.forwardHostHeader = message.forwardHostHeader
                ? ResourceOptions_BoolOption.toJSON(message.forwardHostHeader)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ResourceOptions_HostOptions>, I>>(
        object: I,
    ): ResourceOptions_HostOptions {
        const message = { ...baseResourceOptions_HostOptions } as ResourceOptions_HostOptions;
        message.host =
            object.host !== undefined && object.host !== null
                ? ResourceOptions_StringOption.fromPartial(object.host)
                : undefined;
        message.forwardHostHeader =
            object.forwardHostHeader !== undefined && object.forwardHostHeader !== null
                ? ResourceOptions_BoolOption.fromPartial(object.forwardHostHeader)
                : undefined;
        return message;
    },
};

const baseResourceOptions_CompressionOptions: object = {};

export const ResourceOptions_CompressionOptions = {
    encode(
        message: ResourceOptions_CompressionOptions,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.fetchCompressed !== undefined) {
            ResourceOptions_BoolOption.encode(
                message.fetchCompressed,
                writer.uint32(10).fork(),
            ).ldelim();
        }
        if (message.gzipOn !== undefined) {
            ResourceOptions_BoolOption.encode(message.gzipOn, writer.uint32(18).fork()).ldelim();
        }
        if (message.brotliCompression !== undefined) {
            ResourceOptions_StringsListOption.encode(
                message.brotliCompression,
                writer.uint32(26).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ResourceOptions_CompressionOptions {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseResourceOptions_CompressionOptions,
        } as ResourceOptions_CompressionOptions;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fetchCompressed = ResourceOptions_BoolOption.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 2:
                    message.gzipOn = ResourceOptions_BoolOption.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.brotliCompression = ResourceOptions_StringsListOption.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ResourceOptions_CompressionOptions {
        const message = {
            ...baseResourceOptions_CompressionOptions,
        } as ResourceOptions_CompressionOptions;
        message.fetchCompressed =
            object.fetchCompressed !== undefined && object.fetchCompressed !== null
                ? ResourceOptions_BoolOption.fromJSON(object.fetchCompressed)
                : undefined;
        message.gzipOn =
            object.gzipOn !== undefined && object.gzipOn !== null
                ? ResourceOptions_BoolOption.fromJSON(object.gzipOn)
                : undefined;
        message.brotliCompression =
            object.brotliCompression !== undefined && object.brotliCompression !== null
                ? ResourceOptions_StringsListOption.fromJSON(object.brotliCompression)
                : undefined;
        return message;
    },

    toJSON(message: ResourceOptions_CompressionOptions): unknown {
        const obj: any = {};
        message.fetchCompressed !== undefined &&
            (obj.fetchCompressed = message.fetchCompressed
                ? ResourceOptions_BoolOption.toJSON(message.fetchCompressed)
                : undefined);
        message.gzipOn !== undefined &&
            (obj.gzipOn = message.gzipOn
                ? ResourceOptions_BoolOption.toJSON(message.gzipOn)
                : undefined);
        message.brotliCompression !== undefined &&
            (obj.brotliCompression = message.brotliCompression
                ? ResourceOptions_StringsListOption.toJSON(message.brotliCompression)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ResourceOptions_CompressionOptions>, I>>(
        object: I,
    ): ResourceOptions_CompressionOptions {
        const message = {
            ...baseResourceOptions_CompressionOptions,
        } as ResourceOptions_CompressionOptions;
        message.fetchCompressed =
            object.fetchCompressed !== undefined && object.fetchCompressed !== null
                ? ResourceOptions_BoolOption.fromPartial(object.fetchCompressed)
                : undefined;
        message.gzipOn =
            object.gzipOn !== undefined && object.gzipOn !== null
                ? ResourceOptions_BoolOption.fromPartial(object.gzipOn)
                : undefined;
        message.brotliCompression =
            object.brotliCompression !== undefined && object.brotliCompression !== null
                ? ResourceOptions_StringsListOption.fromPartial(object.brotliCompression)
                : undefined;
        return message;
    },
};

const baseResourceOptions_RewriteOption: object = { enabled: false, body: '', flag: 0 };

export const ResourceOptions_RewriteOption = {
    encode(
        message: ResourceOptions_RewriteOption,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.enabled === true) {
            writer.uint32(8).bool(message.enabled);
        }
        if (message.body !== '') {
            writer.uint32(18).string(message.body);
        }
        if (message.flag !== 0) {
            writer.uint32(24).int32(message.flag);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ResourceOptions_RewriteOption {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseResourceOptions_RewriteOption } as ResourceOptions_RewriteOption;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.enabled = reader.bool();
                    break;
                case 2:
                    message.body = reader.string();
                    break;
                case 3:
                    message.flag = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ResourceOptions_RewriteOption {
        const message = { ...baseResourceOptions_RewriteOption } as ResourceOptions_RewriteOption;
        message.enabled =
            object.enabled !== undefined && object.enabled !== null
                ? Boolean(object.enabled)
                : false;
        message.body = object.body !== undefined && object.body !== null ? String(object.body) : '';
        message.flag =
            object.flag !== undefined && object.flag !== null
                ? rewriteFlagFromJSON(object.flag)
                : 0;
        return message;
    },

    toJSON(message: ResourceOptions_RewriteOption): unknown {
        const obj: any = {};
        message.enabled !== undefined && (obj.enabled = message.enabled);
        message.body !== undefined && (obj.body = message.body);
        message.flag !== undefined && (obj.flag = rewriteFlagToJSON(message.flag));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ResourceOptions_RewriteOption>, I>>(
        object: I,
    ): ResourceOptions_RewriteOption {
        const message = { ...baseResourceOptions_RewriteOption } as ResourceOptions_RewriteOption;
        message.enabled = object.enabled ?? false;
        message.body = object.body ?? '';
        message.flag = object.flag ?? 0;
        return message;
    },
};

const baseResourceOptions_SecureKeyOption: object = { enabled: false, key: '', type: 0 };

export const ResourceOptions_SecureKeyOption = {
    encode(
        message: ResourceOptions_SecureKeyOption,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.enabled === true) {
            writer.uint32(8).bool(message.enabled);
        }
        if (message.key !== '') {
            writer.uint32(18).string(message.key);
        }
        if (message.type !== 0) {
            writer.uint32(24).int32(message.type);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ResourceOptions_SecureKeyOption {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseResourceOptions_SecureKeyOption,
        } as ResourceOptions_SecureKeyOption;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.enabled = reader.bool();
                    break;
                case 2:
                    message.key = reader.string();
                    break;
                case 3:
                    message.type = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ResourceOptions_SecureKeyOption {
        const message = {
            ...baseResourceOptions_SecureKeyOption,
        } as ResourceOptions_SecureKeyOption;
        message.enabled =
            object.enabled !== undefined && object.enabled !== null
                ? Boolean(object.enabled)
                : false;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.type =
            object.type !== undefined && object.type !== null
                ? secureKeyURLTypeFromJSON(object.type)
                : 0;
        return message;
    },

    toJSON(message: ResourceOptions_SecureKeyOption): unknown {
        const obj: any = {};
        message.enabled !== undefined && (obj.enabled = message.enabled);
        message.key !== undefined && (obj.key = message.key);
        message.type !== undefined && (obj.type = secureKeyURLTypeToJSON(message.type));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ResourceOptions_SecureKeyOption>, I>>(
        object: I,
    ): ResourceOptions_SecureKeyOption {
        const message = {
            ...baseResourceOptions_SecureKeyOption,
        } as ResourceOptions_SecureKeyOption;
        message.enabled = object.enabled ?? false;
        message.key = object.key ?? '';
        message.type = object.type ?? 0;
        return message;
    },
};

const baseResourceOptions_IPAddressACLOption: object = {
    enabled: false,
    policyType: 0,
    exceptedValues: '',
};

export const ResourceOptions_IPAddressACLOption = {
    encode(
        message: ResourceOptions_IPAddressACLOption,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.enabled === true) {
            writer.uint32(8).bool(message.enabled);
        }
        if (message.policyType !== 0) {
            writer.uint32(16).int32(message.policyType);
        }
        for (const v of message.exceptedValues) {
            writer.uint32(26).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ResourceOptions_IPAddressACLOption {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseResourceOptions_IPAddressACLOption,
        } as ResourceOptions_IPAddressACLOption;
        message.exceptedValues = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.enabled = reader.bool();
                    break;
                case 2:
                    message.policyType = reader.int32() as any;
                    break;
                case 3:
                    message.exceptedValues.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ResourceOptions_IPAddressACLOption {
        const message = {
            ...baseResourceOptions_IPAddressACLOption,
        } as ResourceOptions_IPAddressACLOption;
        message.enabled =
            object.enabled !== undefined && object.enabled !== null
                ? Boolean(object.enabled)
                : false;
        message.policyType =
            object.policyType !== undefined && object.policyType !== null
                ? policyTypeFromJSON(object.policyType)
                : 0;
        message.exceptedValues = (object.exceptedValues ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: ResourceOptions_IPAddressACLOption): unknown {
        const obj: any = {};
        message.enabled !== undefined && (obj.enabled = message.enabled);
        message.policyType !== undefined && (obj.policyType = policyTypeToJSON(message.policyType));
        if (message.exceptedValues) {
            obj.exceptedValues = message.exceptedValues.map((e) => e);
        } else {
            obj.exceptedValues = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ResourceOptions_IPAddressACLOption>, I>>(
        object: I,
    ): ResourceOptions_IPAddressACLOption {
        const message = {
            ...baseResourceOptions_IPAddressACLOption,
        } as ResourceOptions_IPAddressACLOption;
        message.enabled = object.enabled ?? false;
        message.policyType = object.policyType ?? 0;
        message.exceptedValues = object.exceptedValues?.map((e) => e) || [];
        return message;
    },
};

const baseSSLTargetCertificate: object = { type: 0 };

export const SSLTargetCertificate = {
    encode(message: SSLTargetCertificate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        if (message.data !== undefined) {
            SSLCertificateData.encode(message.data, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SSLTargetCertificate {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSSLTargetCertificate } as SSLTargetCertificate;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32() as any;
                    break;
                case 2:
                    message.data = SSLCertificateData.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): SSLTargetCertificate {
        const message = { ...baseSSLTargetCertificate } as SSLTargetCertificate;
        message.type =
            object.type !== undefined && object.type !== null
                ? sSLCertificateTypeFromJSON(object.type)
                : 0;
        message.data =
            object.data !== undefined && object.data !== null
                ? SSLCertificateData.fromJSON(object.data)
                : undefined;
        return message;
    },

    toJSON(message: SSLTargetCertificate): unknown {
        const obj: any = {};
        message.type !== undefined && (obj.type = sSLCertificateTypeToJSON(message.type));
        message.data !== undefined &&
            (obj.data = message.data ? SSLCertificateData.toJSON(message.data) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SSLTargetCertificate>, I>>(
        object: I,
    ): SSLTargetCertificate {
        const message = { ...baseSSLTargetCertificate } as SSLTargetCertificate;
        message.type = object.type ?? 0;
        message.data =
            object.data !== undefined && object.data !== null
                ? SSLCertificateData.fromPartial(object.data)
                : undefined;
        return message;
    },
};

const baseSSLCertificate: object = { type: 0, status: 0 };

export const SSLCertificate = {
    encode(message: SSLCertificate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        if (message.status !== 0) {
            writer.uint32(16).int32(message.status);
        }
        if (message.data !== undefined) {
            SSLCertificateData.encode(message.data, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SSLCertificate {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSSLCertificate } as SSLCertificate;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32() as any;
                    break;
                case 2:
                    message.status = reader.int32() as any;
                    break;
                case 3:
                    message.data = SSLCertificateData.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): SSLCertificate {
        const message = { ...baseSSLCertificate } as SSLCertificate;
        message.type =
            object.type !== undefined && object.type !== null
                ? sSLCertificateTypeFromJSON(object.type)
                : 0;
        message.status =
            object.status !== undefined && object.status !== null
                ? sSLCertificateStatusFromJSON(object.status)
                : 0;
        message.data =
            object.data !== undefined && object.data !== null
                ? SSLCertificateData.fromJSON(object.data)
                : undefined;
        return message;
    },

    toJSON(message: SSLCertificate): unknown {
        const obj: any = {};
        message.type !== undefined && (obj.type = sSLCertificateTypeToJSON(message.type));
        message.status !== undefined && (obj.status = sSLCertificateStatusToJSON(message.status));
        message.data !== undefined &&
            (obj.data = message.data ? SSLCertificateData.toJSON(message.data) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SSLCertificate>, I>>(object: I): SSLCertificate {
        const message = { ...baseSSLCertificate } as SSLCertificate;
        message.type = object.type ?? 0;
        message.status = object.status ?? 0;
        message.data =
            object.data !== undefined && object.data !== null
                ? SSLCertificateData.fromPartial(object.data)
                : undefined;
        return message;
    },
};

const baseSSLCertificateData: object = {};

export const SSLCertificateData = {
    encode(message: SSLCertificateData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.cm !== undefined) {
            SSLCertificateCMData.encode(message.cm, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SSLCertificateData {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSSLCertificateData } as SSLCertificateData;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cm = SSLCertificateCMData.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): SSLCertificateData {
        const message = { ...baseSSLCertificateData } as SSLCertificateData;
        message.cm =
            object.cm !== undefined && object.cm !== null
                ? SSLCertificateCMData.fromJSON(object.cm)
                : undefined;
        return message;
    },

    toJSON(message: SSLCertificateData): unknown {
        const obj: any = {};
        message.cm !== undefined &&
            (obj.cm = message.cm ? SSLCertificateCMData.toJSON(message.cm) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SSLCertificateData>, I>>(
        object: I,
    ): SSLCertificateData {
        const message = { ...baseSSLCertificateData } as SSLCertificateData;
        message.cm =
            object.cm !== undefined && object.cm !== null
                ? SSLCertificateCMData.fromPartial(object.cm)
                : undefined;
        return message;
    },
};

const baseSSLCertificateCMData: object = { id: '' };

export const SSLCertificateCMData = {
    encode(message: SSLCertificateCMData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SSLCertificateCMData {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSSLCertificateCMData } as SSLCertificateCMData;
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

    fromJSON(object: any): SSLCertificateCMData {
        const message = { ...baseSSLCertificateCMData } as SSLCertificateCMData;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        return message;
    },

    toJSON(message: SSLCertificateCMData): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SSLCertificateCMData>, I>>(
        object: I,
    ): SSLCertificateCMData {
        const message = { ...baseSSLCertificateCMData } as SSLCertificateCMData;
        message.id = object.id ?? '';
        return message;
    },
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

function toTimestamp(date: Date): Timestamp {
    const seconds = date.getTime() / 1_000;
    const nanos = (date.getTime() % 1_000) * 1_000_000;
    return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
    let millis = t.seconds * 1_000;
    millis += t.nanos / 1_000_000;
    return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
    if (o instanceof Date) {
        return o;
    } else if (typeof o === 'string') {
        return new Date(o);
    } else {
        return fromTimestamp(Timestamp.fromJSON(o));
    }
}

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
