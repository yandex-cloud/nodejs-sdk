// autogenerated file

import * as grpc from 'grpc';
import { util } from 'protobufjs';
import Long = util.Long;
import * as events from 'events';
import { Session } from '../../../index.js';

import * as protobuf from '../../../contrib/google/protobuf';
import * as operation from '../../../api/operation';
import * as Key from '../../../Key';
import * as access from '../../../api/access';

/**
 * An ApiKey resource.
 */
export interface ApiKey {
    /**
     * ID of the API Key.
     */
    id?: string;

    /**
     * ID of the service account that the API key belongs to.
     */
    serviceAccountId?: string;

    /**
     * Creation timestamp.
     */
    createdAt?: protobuf.Timestamp;

    /**
     * Description of the API key. 0-256 characters long.
     */
    description?: string;
}

/**
 * A set of methods for managing API keys.
 */
export class ApiKeyService {
    constructor(session?: Session);
    /**
     * Retrieves the list of API keys for the specified service account.
     */
    list(request: ListApiKeysRequest): Promise<ListApiKeysResponse>;

    /**
     * Returns the specified API key.
     *
     * To get the list of available API keys, make a [List] request.
     */
    get(request: GetApiKeyRequest): Promise<ApiKey>;

    /**
     * Creates an API key for the specified service account.
     */
    create(request: CreateApiKeyRequest): Promise<CreateApiKeyResponse>;

    /**
     * Updates the specified API key.
     */
    update(request: UpdateApiKeyRequest): Promise<operation.Operation>;

    /**
     * Deletes the specified API key.
     */
    delete(request: DeleteApiKeyRequest): Promise<operation.Operation>;

    /**
     * Retrieves the list of operations for the specified API key.
     */
    listOperations(
        request: ListApiKeyOperationsRequest
    ): Promise<ListApiKeyOperationsResponse>;
}

export interface GetApiKeyRequest {
    /**
     * ID of the API key to return.
     * To get the API key ID, use a [ApiKeyService.List] request.
     */
    apiKeyId: string;
}

export interface ListApiKeysRequest {
    /**
     * ID of the service account to list API keys for.
     * To get the service account ID, use a [yandex.cloud.iam.v1.ServiceAccountService.List] request.
     * If not specified, it defaults to the subject that made the request.
     */
    serviceAccountId?: string;

    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListApiKeysResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize?: Long;

    /**
     * Page token. To get the next page of results, set [page_token]
     * to the [ListApiKeysResponse.next_page_token]
     * returned by a previous list request.
     */
    pageToken?: string;
}

export interface ListApiKeysResponse {
    /**
     * List of API keys.
     */
    apiKeys?: ApiKey[];

    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListApiKeysRequest.page_size], use
     * the [next_page_token] as the value
     * for the [ListApiKeysRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken?: string;
}

export interface CreateApiKeyRequest {
    /**
     * ID of the service account to create an API key for.
     * To get the service account ID, use a [yandex.cloud.iam.v1.ServiceAccountService.List] request.
     * If not specified, it defaults to the subject that made the request.
     */
    serviceAccountId?: string;

    /**
     * Description of the API key.
     */
    description?: string;
}

export interface CreateApiKeyResponse {
    /**
     * ApiKey resource.
     */
    apiKey?: ApiKey;

    /**
     * Secret part of the API key. This secret key you may use in the requests for authentication.
     */
    secret?: string;
}

export interface UpdateApiKeyRequest {
    /**
     * ID of the ApiKey resource to update.
     * To get the API key ID, use a [ApiKeyService.List] request.
     */
    apiKeyId: string;

    /**
     * Field mask that specifies which fields of the ApiKey resource are going to be updated.
     */
    updateMask?: protobuf.FieldMask;

    /**
     * Description of the API key.
     */
    description?: string;
}

export interface UpdateApiKeyMetadata {
    /**
     * ID of the ApiKey resource that is being updated.
     */
    apiKeyId?: string;
}

export interface DeleteApiKeyRequest {
    /**
     * ID of the API key to delete.
     * To get the API key ID, use a [ApiKeyService.List] request.
     */
    apiKeyId: string;
}

export interface DeleteApiKeyMetadata {
    /**
     * ID of the API key that is being deleted.
     */
    apiKeyId?: string;
}

export interface ListApiKeyOperationsRequest {
    /**
     * ID of the key to list operations for.
     */
    apiKeyId: string;

    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListApiKeyOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize?: Long;

    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListApiKeyOperationsResponse.next_page_token] returned by a previous list request.
     */
    pageToken?: string;
}

export interface ListApiKeyOperationsResponse {
    /**
     * List of operations for the specified API key.
     */
    operations?: operation.Operation[];

    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListApiKeyOperationsRequest.page_size], use the [next_page_token] as the value
     * for the [ListApiKeyOperationsRequest.page_token] query parameter in the next list request.
     * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken?: string;
}

/**
 * A set of methods for managing IAM tokens.
 */
export class IamTokenService {
    constructor(session?: Session);
    /**
     * Creates an IAM token for the specified identity.
     */
    create(request: CreateIamTokenRequest): Promise<CreateIamTokenResponse>;
}

export interface CreateIamTokenRequest {
    /**
     * OAuth token for a Yandex.Passport account.
     * For more information, see [OAuth token](/docs/iam/concepts/authorization/oauth-token).
     */
    yandexPassportOauthToken?: string;

    /**
     * JSON Web Token (JWT) for a service account.
     * For more information, see [Get IAM token for a service account](/docs/iam/operations/iam-token/create-for-sa).
     */
    jwt?: string;
}

export interface CreateIamTokenResponse {
    /**
     * IAM token for the specified identity.
     *
     * You should pass the token in the `Authorization` header for any further API requests.
     * For example, `Authorization: Bearer [iam_token]`.
     */
    iamToken?: string;

    /**
     * IAM token expiration time.
     */
    expiresAt?: protobuf.Timestamp;
}

/**
 * A Key resource. For more information, see [Authorized keys](/docs/iam/concepts/authorization/key).
 */
export interface Key {
    /**
     * ID of the Key resource.
     */
    id?: string;

    /**
     * ID of the user account that the Key resource belongs to.
     */
    userAccountId?: string;

    /**
     * ID of the service account that the Key resource belongs to.
     */
    serviceAccountId?: string;

    /**
     * Creation timestamp.
     */
    createdAt?: protobuf.Timestamp;

    /**
     * Description of the Key resource. 0-256 characters long.
     */
    description?: string;

    /**
     * An algorithm used to generate a key pair of the Key resource.
     */
    keyAlgorithm?: Key.Algorithm;

    /**
     * A public key of the Key resource.
     */
    publicKey?: string;
}

export namespace Key {
    export enum Algorithm {
        ALGORITHM_UNSPECIFIED = 0,

        /**
         * RSA with a 2048-bit key size. Default value.
         */
        RSA_2048 = 1,

        /**
         * RSA with a 4096-bit key size.
         */
        RSA_4096 = 2,
    }
}

/**
 * A set of methods for managing Key resources.
 */
export class KeyService {
    constructor(session?: Session);
    /**
     * Returns the specified Key resource.
     *
     * To get the list of available Key resources, make a [List] request.
     */
    get(request: GetKeyRequest): Promise<Key>;

    /**
     * Retrieves the list of Key resources for the specified service account.
     */
    list(request: ListKeysRequest): Promise<ListKeysResponse>;

    /**
     * Creates a key pair for the specified service account.
     */
    create(request: CreateKeyRequest): Promise<CreateKeyResponse>;

    /**
     * Updates the specified key pair.
     */
    update(request: UpdateKeyRequest): Promise<operation.Operation>;

    /**
     * Deletes the specified key pair.
     */
    delete(request: DeleteKeyRequest): Promise<operation.Operation>;

    /**
     * Lists operations for the specified key.
     */
    listOperations(
        request: ListKeyOperationsRequest
    ): Promise<ListKeyOperationsResponse>;
}

export interface GetKeyRequest {
    /**
     * ID of the Key resource to return.
     * To get the ID use a [KeyService.List] request.
     */
    keyId: string;

    /**
     * Output format of the key.
     */
    format?: KeyFormat;
}

export interface ListKeysRequest {
    /**
     * Output format of the key.
     */
    format?: KeyFormat;

    /**
     * ID of the service account to list key pairs for.
     * To get the service account ID, use a [yandex.cloud.iam.v1.ServiceAccountService.List] request.
     * If not specified, it defaults to the subject that made the request.
     */
    serviceAccountId?: string;

    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListKeysResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize?: Long;

    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListKeysResponse.next_page_token] returned by a previous list request.
     */
    pageToken?: string;
}

export interface ListKeysResponse {
    /**
     * List of Key resources.
     */
    keys?: Key[];

    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListKeysRequest.page_size], use
     * the [next_page_token] as the value
     * for the [ListKeysRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken?: string;
}

export interface CreateKeyRequest {
    /**
     * ID of the service account to create a key pair for.
     * To get the service account ID, use a [yandex.cloud.iam.v1.ServiceAccountService.List] request.
     * If not specified, it defaults to the subject that made the request.
     */
    serviceAccountId?: string;

    /**
     * Description of the key pair.
     */
    description?: string;

    /**
     * Output format of the key.
     */
    format?: KeyFormat;

    /**
     * An algorithm used to generate a key pair of the Key resource.
     */
    keyAlgorithm?: Key.Algorithm;
}

export interface CreateKeyResponse {
    /**
     * Key resource.
     */
    key?: Key;

    /**
     * A private key of the Key resource.
     * This key must be stored securely.
     */
    privateKey?: string;
}

export interface UpdateKeyRequest {
    /**
     * ID of the Key resource to update.
     * To get key pair ID, use a [Service.List] request.
     */
    keyId: string;

    /**
     * Field mask that specifies which fields of the Key resource are going to be updated.
     */
    updateMask?: protobuf.FieldMask;

    /**
     * Description of the key pair.
     */
    description?: string;
}

export interface UpdateKeyMetadata {
    /**
     * ID of the Key resource that is being updated.
     */
    keyId?: string;
}

export interface DeleteKeyRequest {
    /**
     * ID of the key to delete.
     * To get key ID use a [KeyService.List] request.
     */
    keyId: string;
}

export interface DeleteKeyMetadata {
    /**
     * ID of the key that is being deleted.
     */
    keyId?: string;
}

export interface ListKeyOperationsRequest {
    /**
     * ID of the key to list operations for.
     */
    keyId: string;

    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListKeyOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize?: Long;

    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListKeyOperationsResponse.next_page_token] returned by a previous list request.
     */
    pageToken?: string;
}

export interface ListKeyOperationsResponse {
    /**
     * List of operations for the specified key.
     */
    operations?: operation.Operation[];

    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListKeyOperationsRequest.page_size], use the [next_page_token] as the value
     * for the [ListKeyOperationsRequest.page_token] query parameter in the next list request.
     * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken?: string;
}

export enum KeyFormat {
    /**
     * Privacy-Enhanced Mail (PEM) format. Default value.
     */
    PEM_FILE = 0,
}

/**
 * A Role resource. For more information, see [Roles](/docs/iam/concepts/access-control/roles).
 */
export interface Role {
    /**
     * ID of the role.
     */
    id?: string;

    /**
     * Description of the role. 0-256 characters long.
     */
    description?: string;
}

/**
 * A set of methods for managing Role resources.
 */
export class RoleService {
    constructor(session?: Session);
    /**
     * Returns the specified Role resource.
     *
     * To get the list of available Role resources, make a [List] request.
     */
    get(request: GetRoleRequest): Promise<Role>;

    /**
     * Retrieves the list of Role resources.
     */
    list(request: ListRolesRequest): Promise<ListRolesResponse>;
}

export interface GetRoleRequest {
    /**
     * ID of the Role resource to return.
     * To get the role ID, use a [RoleService.List] request.
     */
    roleId: string;
}

export interface ListRolesRequest {
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListRolesResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize?: Long;

    /**
     * Page token. To get the next page of results, set [page_token]
     * to the [ListRolesResponse.next_page_token]
     * returned by a previous list request.
     */
    pageToken?: string;

    /**
     * A filter expression that filters resources listed in the response.
     */
    filter?: string;
}

export interface ListRolesResponse {
    /**
     * List of Role resources.
     */
    roles?: Role[];

    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListRolesRequest.page_size], use
     * the [next_page_token] as the value
     * for the [ListRolesRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken?: string;
}

/**
 * A ServiceAccount resource. For more information, see [Service accounts](/docs/iam/concepts/users/service-accounts).
 */
export interface ServiceAccount {
    /**
     * ID of the service account.
     */
    id?: string;

    /**
     * ID of the folder that the service account belongs to.
     */
    folderId?: string;

    /**
     * Creation timestamp.
     */
    createdAt?: protobuf.Timestamp;

    /**
     * Name of the service account.
     * The name is unique within the cloud. 3-63 characters long.
     */
    name?: string;

    /**
     * Description of the service account. 0-256 characters long.
     */
    description?: string;
}

/**
 * A set of methods for managing ServiceAccount resources.
 */
export class ServiceAccountService {
    constructor(session?: Session);
    /**
     * Returns the specified ServiceAccount resource.
     *
     * To get the list of available ServiceAccount resources, make a [List] request.
     */
    get(request: GetServiceAccountRequest): Promise<ServiceAccount>;

    /**
     * Retrieves the list of ServiceAccount resources in the specified folder.
     */
    list(
        request: ListServiceAccountsRequest
    ): Promise<ListServiceAccountsResponse>;

    /**
     * Creates a service account in the specified folder.
     */
    create(request: CreateServiceAccountRequest): Promise<operation.Operation>;

    /**
     * Updates the specified service account.
     */
    update(request: UpdateServiceAccountRequest): Promise<operation.Operation>;

    /**
     * Deletes the specified service account.
     */
    delete(request: DeleteServiceAccountRequest): Promise<operation.Operation>;

    /**
     * Lists access bindings for the specified service account.
     */
    listAccessBindings(
        request: access.ListAccessBindingsRequest
    ): Promise<access.ListAccessBindingsResponse>;

    /**
     * Sets access bindings for the service account.
     */
    setAccessBindings(
        request: access.SetAccessBindingsRequest
    ): Promise<operation.Operation>;

    /**
     * Updates access bindings for the specified service account.
     */
    updateAccessBindings(
        request: access.UpdateAccessBindingsRequest
    ): Promise<operation.Operation>;

    /**
     * Lists operations for the specified service account.
     */
    listOperations(
        request: ListServiceAccountOperationsRequest
    ): Promise<ListServiceAccountOperationsResponse>;
}

export interface GetServiceAccountRequest {
    /**
     * ID of the ServiceAccount resource to return.
     * To get the service account ID, use a [ServiceAccountService.List] request.
     */
    serviceAccountId: string;
}

export interface ListServiceAccountsRequest {
    /**
     * ID of the folder to list service accounts in.
     * To get the folder ID, use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;

    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListServiceAccountsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100
     */
    pageSize?: Long;

    /**
     * Page token. To get the next page of results, set [page_token]
     * to the [ListServiceAccountsResponse.next_page_token]
     * returned by a previous list request.
     */
    pageToken?: string;

    /**
     * A filter expression that filters resources listed in the response.
     * The expression must specify:
     * 1. The field name. Currently you can use filtering only on the [ServiceAccount.name] field.
     * 2. An operator. Can be either `=` or `!=` for single values, `IN` or `NOT IN` for lists of values.
     * 3. The value. Must be 3-63 characters long and match the regular expression `^[a-z][-a-z0-9]{1,61}[a-z0-9]$`.
     */
    filter?: string;
}

export interface ListServiceAccountsResponse {
    /**
     * List of ServiceAccount resources.
     */
    serviceAccounts?: ServiceAccount[];

    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListServiceAccountsRequest.page_size], use
     * the [next_page_token] as the value
     * for the [ListServiceAccountsRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken?: string;
}

export interface CreateServiceAccountRequest {
    /**
     * ID of the folder to create a service account in.
     * To get the folder ID, use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;

    /**
     * Name of the service account.
     * The name must be unique within the cloud.
     */
    name: string;

    /**
     * Description of the service account.
     */
    description?: string;
}

export interface CreateServiceAccountMetadata {
    /**
     * ID of the service account that is being created.
     */
    serviceAccountId?: string;
}

export interface UpdateServiceAccountRequest {
    /**
     * ID of the ServiceAccount resource to update.
     * To get the service account ID, use a [ServiceAccountService.List] request.
     */
    serviceAccountId: string;

    /**
     * Field mask that specifies which fields of the ServiceAccount resource are going to be updated.
     */
    updateMask?: protobuf.FieldMask;

    /**
     * Name of the service account.
     * The name must be unique within the cloud.
     */
    name: string;

    /**
     * Description of the service account.
     */
    description?: string;
}

export interface UpdateServiceAccountMetadata {
    /**
     * ID of the ServiceAccount resource that is being updated.
     */
    serviceAccountId?: string;
}

export interface DeleteServiceAccountRequest {
    /**
     * ID of the service account to delete.
     * To get the service account ID, use a [ServiceAccountService.List] request.
     */
    serviceAccountId: string;
}

export interface DeleteServiceAccountMetadata {
    /**
     * ID of the service account that is being deleted.
     */
    serviceAccountId?: string;
}

export interface ListServiceAccountOperationsRequest {
    /**
     * ID of the ServiceAccount resource to list operations for.
     */
    serviceAccountId: string;

    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size], the service returns a [ListServiceAccountOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize?: Long;

    /**
     * Page token. To get the next page of results, set [page_token]
     * to the [ListServiceAccountOperationsResponse.next_page_token]
     * returned by a previous list request.
     */
    pageToken?: string;
}

export interface ListServiceAccountOperationsResponse {
    /**
     * List of operations for the specified service account.
     */
    operations?: operation.Operation[];

    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListServiceAccountOperationsRequest.page_size], use the [next_page_token] as the value
     * for the [ListServiceAccountOperationsRequest.page_token] query parameter in the next list request.
     * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken?: string;
}

/**
 * Currently represents only [Yandex.Passport account](/docs/iam/concepts/#passport).
 */
export interface UserAccount {
    /**
     * ID of the user account.
     */
    id?: string;

    /**
     * A YandexPassportUserAccount resource.
     */
    yandexPassportUserAccount?: YandexPassportUserAccount;

    /**
     * A SAML federated user.
     */
    samlUserAccount?: SamlUserAccount;
}

/**
 * A YandexPassportUserAccount resource.
 * For more information, see [Yandex.Passport account](/docs/iam/concepts/#passport).
 */
export interface YandexPassportUserAccount {
    /**
     * Login of the Yandex.Passport user account.
     */
    login?: string;

    /**
     * Default email of the Yandex.Passport user account.
     */
    defaultEmail?: string;
}

/**
 * A SAML federated user.
 * For more information, see [federations](/docs/iam/concepts/users/saml-federations).
 */
export interface SamlUserAccount {
    /**
     * ID of the federation that the federation belongs to.
     */
    federationId: string;

    /**
     * Name Id of the SAML federated user.
     * The name is unique within the federation. 1-256 characters long.
     */
    nameId: string;

    /**
     * Additional attributes of the SAML federated user.
     */
    attributes?: { [s: string]: SamlUserAccount.Attribute };
}

export namespace SamlUserAccount {
    export interface Attribute {
        value?: string[];
    }
}

/**
 * A set of methods for managing user accounts. Currently applicable only for [Yandex.Passport accounts](/docs/iam/concepts/#passport).
 */
export class UserAccountService {
    constructor(session?: Session);
    /**
     * Returns the specified UserAccount resource.
     */
    get(request: GetUserAccountRequest): Promise<UserAccount>;
}

export interface GetUserAccountRequest {
    /**
     * ID of the UserAccount resource to return.
     */
    userAccountId: string;
}

/**
 * A set of methods for managing YandexPassportUserAccount resources.
 */
export class YandexPassportUserAccountService {
    constructor(session?: Session);
    /**
     * Returns the specified YandexPassportUserAccount resource.
     */
    getByLogin(request: GetUserAccountByLoginRequest): Promise<UserAccount>;
}

export interface GetUserAccountByLoginRequest {
    /**
     * Login of the YandexPassportUserAccount resource to return.
     */
    login: string;
}
