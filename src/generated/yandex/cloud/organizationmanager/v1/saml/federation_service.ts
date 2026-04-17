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
import { Duration } from '../../../../../google/protobuf/duration';
import {
    BindingType,
    FederationSecuritySettings,
    Federation,
    Domain,
    bindingTypeFromJSON,
    bindingTypeToJSON,
} from './federation';
import { FieldMask } from '../../../../../google/protobuf/field_mask';
import { UserAccount } from '../user_account';
import { Operation } from '../../../operation/operation';

export const protobufPackage = 'yandex.cloud.organizationmanager.v1.saml';

export interface GetFederationRequest {
    /**
     * ID of the federation to return.
     * To get the federation ID, make a [FederationService.List] request.
     */
    federationId: string;
}

export interface ListFederationsRequest {
    /**
     * ID of the organization to list federations in.
     * To get the organization ID, make a [yandex.cloud.organizationmanager.v1.OrganizationService.List] request.
     */
    organizationId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListFederationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token]
     * to the [ListFederationsResponse.next_page_token]
     * returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     * The expression must specify:
     * 1. The field name. Currently you can use filtering only on the [Federation.name] field.
     * 2. An `=` operator.
     * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
     */
    filter: string;
}

export interface ListFederationsResponse {
    /** List of federations. */
    federations: Federation[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListFederationsRequest.page_size], use
     * the [next_page_token] as the value
     * for the [ListFederationsRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}

export interface CreateFederationRequest {
    /**
     * ID of the organization to create a federation in.
     * To get the organization ID, make a [yandex.cloud.organizationmanager.v1.OrganizationService.List] request.
     */
    organizationId: string;
    /**
     * Name of the federation.
     * The name must be unique within the organization.
     */
    name: string;
    /** Description of the federation. */
    description: string;
    /**
     * Browser cookie lifetime in seconds.
     * If the cookie is still valid, the management console
     * authenticates the user immediately and redirects them to the home page.
     * The default value is `8h`.
     */
    cookieMaxAge?: Duration;
    /**
     * Add new users automatically on successful authentication.
     * The user becomes member of the organization automatically,
     * but you need to grant other roles to them.
     *
     * If the value is `false`, users who aren't added to the organization
     * can't log in, even if they have authenticated on your server.
     */
    autoCreateAccountOnLogin: boolean;
    /**
     * ID of the IdP server to be used for authentication.
     * The IdP server also responds to IAM with this ID after the user authenticates.
     */
    issuer: string;
    /**
     * Single sign-on endpoint binding type. Most Identity Providers support the `POST` binding type.
     *
     * SAML Binding is a mapping of a SAML protocol message onto standard messaging
     * formats and/or communications protocols.
     */
    ssoBinding: BindingType;
    /**
     * Single sign-on endpoint URL.
     * Specify the link to the IdP login page here.
     */
    ssoUrl: string;
    /** Federation security settings. */
    securitySettings?: FederationSecuritySettings;
    /** Use case insensitive Name IDs. */
    caseInsensitiveNameIds: boolean;
    /** Resource labels as `` key:value `` pairs. */
    labels: { [key: string]: string };
}

export interface CreateFederationRequest_LabelsEntry {
    key: string;
    value: string;
}

export interface CreateFederationMetadata {
    /** ID of the federation that is being created. */
    federationId: string;
}

export interface UpdateFederationRequest {
    /**
     * ID of the federation to update.
     * To get the federation ID, make a [FederationService.List] request.
     */
    federationId: string;
    /** Field mask that specifies which fields of the federation are going to be updated. */
    updateMask?: FieldMask;
    /**
     * Name of the federation.
     * The name must be unique within the organization.
     */
    name: string;
    /** Description of the federation. */
    description: string;
    /**
     * Browser cookie lifetime in seconds.
     * If the cookie is still valid, the management console
     * authenticates the user immediately and redirects them to the home page.
     * The default value is `8h`.
     */
    cookieMaxAge?: Duration;
    /**
     * Add new users automatically on successful authentication.
     * The user becomes member of the organization automatically,
     * but you need to grant other roles to them.
     *
     * If the value is `false`, users who aren't added to the organization
     * can't log in, even if they have authenticated on your server.
     */
    autoCreateAccountOnLogin: boolean;
    /**
     * ID of the IdP server to be used for authentication.
     * The IdP server also responds to IAM with this ID after the user authenticates.
     */
    issuer: string;
    /**
     * Single sign-on endpoint binding type. Most Identity Providers support the `POST` binding type.
     *
     * SAML Binding is a mapping of a SAML protocol message onto standard messaging
     * formats and/or communications protocols.
     */
    ssoBinding: BindingType;
    /**
     * Single sign-on endpoint URL.
     * Specify the link to the IdP login page here.
     */
    ssoUrl: string;
    /** Federation security settings. */
    securitySettings?: FederationSecuritySettings;
    /** Use case insensitive name ids. */
    caseInsensitiveNameIds: boolean;
    /** Resource labels as `` key:value `` pairs. */
    labels: { [key: string]: string };
}

export interface UpdateFederationRequest_LabelsEntry {
    key: string;
    value: string;
}

export interface UpdateFederationMetadata {
    /** ID of the federation that is being updated. */
    federationId: string;
}

export interface DeleteFederationRequest {
    /**
     * ID of the federation to delete.
     * To get the federation ID, make a [FederationService.List] request.
     */
    federationId: string;
}

export interface DeleteFederationMetadata {
    /** ID of the federation that is being deleted. */
    federationId: string;
}

export interface AddFederatedUserAccountsRequest {
    /** ID of the federation to add users. */
    federationId: string;
    /**
     * Name IDs returned by the Identity Provider (IdP) on successful authentication.
     * These may be UPNs or user email addresses.
     */
    nameIds: string[];
}

export interface AddFederatedUserAccountsMetadata {
    /** ID of the federation that is being altered. */
    federationId: string;
}

export interface AddFederatedUserAccountsResponse {
    /** List of users created by [FederationService.AddUserAccounts] request. */
    userAccounts: UserAccount[];
}

export interface DeleteFederatedUserAccountsRequest {
    /** ID of the federation to delete users from. */
    federationId: string;
    /** List of subjects to delete. */
    subjectIds: string[];
}

export interface DeleteFederatedUserAccountsMetadata {
    /** ID of the federation that is being altered. */
    federationId: string;
}

export interface DeleteFederatedUserAccountsResponse {
    /** List of subjects deleted by [FederationService.DeleteUserAccounts] request. */
    deletedSubjects: string[];
    /** List of subjects found in [FederationService.DeleteUserAccounts] request that do not exist. */
    nonExistingSubjects: string[];
}

export interface ListFederatedUserAccountsRequest {
    /** ID of the federation to list user accounts for. */
    federationId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size], the service returns a [ListFederatedUserAccountsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token]
     * to the [ListFederatedUserAccountsResponse.next_page_token]
     * returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     * The expression must specify:
     * 1. The field name. Currently you can use filtering only on the [name_id] field.
     * 2. An `=` operator.
     * 3. The value in double quotes (`"`). Must be 1-1000 characters long and match the regular expression
     *   `[a-z0-9A-Z/@_.\-=+*\\]+`.
     */
    filter: string;
}

export interface ListFederatedUserAccountsResponse {
    /** List of user accounts for the specified federation. */
    userAccounts: UserAccount[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListFederatedUserAccountsRequest.page_size], use the [next_page_token] as the value
     * for the [ListFederatedUserAccountsRequest.page_token] query parameter in the next list request.
     * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}

export interface ListFederationOperationsRequest {
    /** ID of the federation to list operations for. */
    federationId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size], the service returns a [ListFederationOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token]
     * to the [ListFederationOperationsResponse.next_page_token]
     * returned by a previous list request.
     */
    pageToken: string;
}

export interface ListFederationOperationsResponse {
    /** List of operations for the specified federation. */
    operations: Operation[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListFederationOperationsRequest.page_size], use the [next_page_token] as the value
     * for the [ListFederationOperationsRequest.page_token] query parameter in the next list request.
     * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}

export interface GetFederationDomainRequest {
    /**
     * ID of the federation to get domain information for.
     * To get the federation ID, make a [FederationService.List] request.
     */
    federationId: string;
    /**
     * Domain name to get information for.
     * Must be a valid domain name (1-253 characters).
     */
    domain: string;
}

export interface ListFederationDomainsRequest {
    /**
     * ID of the federation to list domains for.
     * To get the federation ID, make a [FederationService.List] request.
     */
    federationId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size], the service returns a [ListFederationDomainsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token]
     * to the [ListFederationDomainsResponse.next_page_token]
     * returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     * The expression supports the following operations:
     * - `=` for exact match: `domain = 'domain-1.com'`
     * - `IN` for multiple values: `status IN ('NEED_TO_VALIDATE', 'VALID')`
     * - `contains` for domain substring search: `domain contains '3'`
     * - `AND` for combining conditions: `status = 'INVALID' AND domain contains '3'`
     *
     * Available fields for filtering:
     * - `domain` - domain name
     * - `status` - domain validation status
     *
     * Must be 1-1000 characters long.
     */
    filter: string;
}

export interface ListFederationDomainsResponse {
    /** List of domains for the specified federation. */
    domains: Domain[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListFederationDomainsRequest.page_size], use the [next_page_token] as the value
     * for the [ListFederationDomainsRequest.page_token] query parameter in the next list request.
     * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}

export interface AddFederationDomainRequest {
    /**
     * ID of the federation to add a domain to.
     * To get the federation ID, make a [FederationService.List] request.
     */
    federationId: string;
    /**
     * Domain name to add to the federation.
     * Must be a valid domain name (1-253 characters).
     */
    domain: string;
}

export interface AddFederationDomainMetadata {
    /** ID of the federation that the domain is being added to. */
    federationId: string;
    /** Domain name that is being added to the federation. */
    domain: string;
}

export interface ValidateFederationDomainRequest {
    /**
     * ID of the federation to validate a domain for.
     * To get the federation ID, make a [FederationService.List] request.
     */
    federationId: string;
    /**
     * Domain name to validate for the federation.
     * Must be a valid domain name (1-253 characters).
     */
    domain: string;
}

export interface ValidateFederationDomainMetadata {
    /** ID of the federation that the domain validation is being performed for. */
    federationId: string;
    /** Domain name that is being validated for the federation. */
    domain: string;
}

export interface DeleteFederationDomainRequest {
    /**
     * ID of the federation to delete a domain from.
     * To get the federation ID, make a [FederationService.List] request.
     */
    federationId: string;
    /**
     * Domain name to delete from the federation.
     * Must be a valid domain name (1-253 characters).
     */
    domain: string;
}

export interface DeleteFederationDomainMetadata {
    /** ID of the federation that the domain is being deleted from. */
    federationId: string;
    /** Domain name that is being deleted from the federation. */
    domain: string;
}

export interface SuspendFederatedUserAccountsRequest {
    /** ID of the federation to suspend users of. */
    federationId: string;
    /** List of subjects to suspend. */
    subjectIds: string[];
    /** Reason of the suspension */
    reason: string;
}

export interface SuspendFederatedUserAccountsMetadata {
    /** ID of the federation to suspend subjects of. */
    federationId: string;
    /** List of subjects to suspend. */
    subjectIds: string[];
    /** Reason of the suspension. */
    reason: string;
}

export interface SuspendFederatedUserAccountsResponse {
    /** Subjects that were actually suspended. */
    subjectIds: string[];
}

export interface ReactivateFederatedUserAccountsRequest {
    /** ID of the federation to reactivate subjects of. */
    federationId: string;
    /** List of subjects to reactivate. */
    subjectIds: string[];
}

export interface ReactivateFederatedUserAccountsMetadata {
    /** ID of the federation to reactivate subjects of. */
    federationId: string;
    /** List of subjects to reactivate. */
    subjectIds: string[];
}

export interface ReactivateFederatedUserAccountsResponse {
    /** Subjects that were actually reactivated. */
    subjectIds: string[];
}

const baseGetFederationRequest: object = { federationId: '' };

export const GetFederationRequest: {
    encode(message: GetFederationRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetFederationRequest;
    fromJSON(object: any): GetFederationRequest;
    toJSON(message: GetFederationRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<GetFederationRequest>, I>>(object: I): GetFederationRequest;
} = {
    encode(message: GetFederationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.federationId !== '') {
            writer.uint32(10).string(message.federationId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetFederationRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetFederationRequest } as GetFederationRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.federationId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetFederationRequest {
        const message = { ...baseGetFederationRequest } as GetFederationRequest;
        message.federationId =
            object.federationId !== undefined && object.federationId !== null
                ? String(object.federationId)
                : '';
        return message;
    },

    toJSON(message: GetFederationRequest): unknown {
        const obj: any = {};
        message.federationId !== undefined && (obj.federationId = message.federationId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetFederationRequest>, I>>(
        object: I,
    ): GetFederationRequest {
        const message = { ...baseGetFederationRequest } as GetFederationRequest;
        message.federationId = object.federationId ?? '';
        return message;
    },
};

const baseListFederationsRequest: object = {
    organizationId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};

export const ListFederationsRequest: {
    encode(message: ListFederationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListFederationsRequest;
    fromJSON(object: any): ListFederationsRequest;
    toJSON(message: ListFederationsRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<ListFederationsRequest>, I>>(object: I): ListFederationsRequest;
} = {
    encode(message: ListFederationsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.organizationId !== '') {
            writer.uint32(50).string(message.organizationId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(24).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(34).string(message.pageToken);
        }
        if (message.filter !== '') {
            writer.uint32(42).string(message.filter);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListFederationsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListFederationsRequest } as ListFederationsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 6:
                    message.organizationId = reader.string();
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

    fromJSON(object: any): ListFederationsRequest {
        const message = { ...baseListFederationsRequest } as ListFederationsRequest;
        message.organizationId =
            object.organizationId !== undefined && object.organizationId !== null
                ? String(object.organizationId)
                : '';
        message.pageSize =
            object.pageSize !== undefined && object.pageSize !== null ? Number(object.pageSize) : 0;
        message.pageToken =
            object.pageToken !== undefined && object.pageToken !== null
                ? String(object.pageToken)
                : '';
        message.filter =
            object.filter !== undefined && object.filter !== null ? String(object.filter) : '';
        return message;
    },

    toJSON(message: ListFederationsRequest): unknown {
        const obj: any = {};
        message.organizationId !== undefined && (obj.organizationId = message.organizationId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListFederationsRequest>, I>>(
        object: I,
    ): ListFederationsRequest {
        const message = { ...baseListFederationsRequest } as ListFederationsRequest;
        message.organizationId = object.organizationId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        message.filter = object.filter ?? '';
        return message;
    },
};

const baseListFederationsResponse: object = { nextPageToken: '' };

export const ListFederationsResponse: {
    encode(message: ListFederationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListFederationsResponse;
    fromJSON(object: any): ListFederationsResponse;
    toJSON(message: ListFederationsResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<ListFederationsResponse>, I>>(object: I): ListFederationsResponse;
} = {
    encode(message: ListFederationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.federations) {
            Federation.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListFederationsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListFederationsResponse } as ListFederationsResponse;
        message.federations = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.federations.push(Federation.decode(reader, reader.uint32()));
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

    fromJSON(object: any): ListFederationsResponse {
        const message = { ...baseListFederationsResponse } as ListFederationsResponse;
        message.federations = (object.federations ?? []).map((e: any) => Federation.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListFederationsResponse): unknown {
        const obj: any = {};
        if (message.federations) {
            obj.federations = message.federations.map((e) =>
                e ? Federation.toJSON(e) : undefined,
            );
        } else {
            obj.federations = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListFederationsResponse>, I>>(
        object: I,
    ): ListFederationsResponse {
        const message = { ...baseListFederationsResponse } as ListFederationsResponse;
        message.federations = object.federations?.map((e) => Federation.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

const baseCreateFederationRequest: object = {
    organizationId: '',
    name: '',
    description: '',
    autoCreateAccountOnLogin: false,
    issuer: '',
    ssoBinding: 0,
    ssoUrl: '',
    caseInsensitiveNameIds: false,
};

export const CreateFederationRequest: {
    encode(message: CreateFederationRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateFederationRequest;
    fromJSON(object: any): CreateFederationRequest;
    toJSON(message: CreateFederationRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<CreateFederationRequest>, I>>(object: I): CreateFederationRequest;
} = {
    encode(message: CreateFederationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.organizationId !== '') {
            writer.uint32(10).string(message.organizationId);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(26).string(message.description);
        }
        if (message.cookieMaxAge !== undefined) {
            Duration.encode(message.cookieMaxAge, writer.uint32(34).fork()).ldelim();
        }
        if (message.autoCreateAccountOnLogin === true) {
            writer.uint32(40).bool(message.autoCreateAccountOnLogin);
        }
        if (message.issuer !== '') {
            writer.uint32(50).string(message.issuer);
        }
        if (message.ssoBinding !== 0) {
            writer.uint32(56).int32(message.ssoBinding);
        }
        if (message.ssoUrl !== '') {
            writer.uint32(66).string(message.ssoUrl);
        }
        if (message.securitySettings !== undefined) {
            FederationSecuritySettings.encode(
                message.securitySettings,
                writer.uint32(74).fork(),
            ).ldelim();
        }
        if (message.caseInsensitiveNameIds === true) {
            writer.uint32(80).bool(message.caseInsensitiveNameIds);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            CreateFederationRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(90).fork(),
            ).ldelim();
        });
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateFederationRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateFederationRequest } as CreateFederationRequest;
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.organizationId = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 4:
                    message.cookieMaxAge = Duration.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.autoCreateAccountOnLogin = reader.bool();
                    break;
                case 6:
                    message.issuer = reader.string();
                    break;
                case 7:
                    message.ssoBinding = reader.int32() as any;
                    break;
                case 8:
                    message.ssoUrl = reader.string();
                    break;
                case 9:
                    message.securitySettings = FederationSecuritySettings.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 10:
                    message.caseInsensitiveNameIds = reader.bool();
                    break;
                case 11:
                    const entry11 = CreateFederationRequest_LabelsEntry.decode(
                        reader,
                        reader.uint32(),
                    );
                    if (entry11.value !== undefined) {
                        message.labels[entry11.key] = entry11.value;
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateFederationRequest {
        const message = { ...baseCreateFederationRequest } as CreateFederationRequest;
        message.organizationId =
            object.organizationId !== undefined && object.organizationId !== null
                ? String(object.organizationId)
                : '';
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        message.cookieMaxAge =
            object.cookieMaxAge !== undefined && object.cookieMaxAge !== null
                ? Duration.fromJSON(object.cookieMaxAge)
                : undefined;
        message.autoCreateAccountOnLogin =
            object.autoCreateAccountOnLogin !== undefined &&
            object.autoCreateAccountOnLogin !== null
                ? Boolean(object.autoCreateAccountOnLogin)
                : false;
        message.issuer =
            object.issuer !== undefined && object.issuer !== null ? String(object.issuer) : '';
        message.ssoBinding =
            object.ssoBinding !== undefined && object.ssoBinding !== null
                ? bindingTypeFromJSON(object.ssoBinding)
                : 0;
        message.ssoUrl =
            object.ssoUrl !== undefined && object.ssoUrl !== null ? String(object.ssoUrl) : '';
        message.securitySettings =
            object.securitySettings !== undefined && object.securitySettings !== null
                ? FederationSecuritySettings.fromJSON(object.securitySettings)
                : undefined;
        message.caseInsensitiveNameIds =
            object.caseInsensitiveNameIds !== undefined && object.caseInsensitiveNameIds !== null
                ? Boolean(object.caseInsensitiveNameIds)
                : false;
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                acc[key] = String(value);
                return acc;
            },
            {},
        );
        return message;
    },

    toJSON(message: CreateFederationRequest): unknown {
        const obj: any = {};
        message.organizationId !== undefined && (obj.organizationId = message.organizationId);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        message.cookieMaxAge !== undefined &&
            (obj.cookieMaxAge = message.cookieMaxAge
                ? Duration.toJSON(message.cookieMaxAge)
                : undefined);
        message.autoCreateAccountOnLogin !== undefined &&
            (obj.autoCreateAccountOnLogin = message.autoCreateAccountOnLogin);
        message.issuer !== undefined && (obj.issuer = message.issuer);
        message.ssoBinding !== undefined &&
            (obj.ssoBinding = bindingTypeToJSON(message.ssoBinding));
        message.ssoUrl !== undefined && (obj.ssoUrl = message.ssoUrl);
        message.securitySettings !== undefined &&
            (obj.securitySettings = message.securitySettings
                ? FederationSecuritySettings.toJSON(message.securitySettings)
                : undefined);
        message.caseInsensitiveNameIds !== undefined &&
            (obj.caseInsensitiveNameIds = message.caseInsensitiveNameIds);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateFederationRequest>, I>>(
        object: I,
    ): CreateFederationRequest {
        const message = { ...baseCreateFederationRequest } as CreateFederationRequest;
        message.organizationId = object.organizationId ?? '';
        message.name = object.name ?? '';
        message.description = object.description ?? '';
        message.cookieMaxAge =
            object.cookieMaxAge !== undefined && object.cookieMaxAge !== null
                ? Duration.fromPartial(object.cookieMaxAge)
                : undefined;
        message.autoCreateAccountOnLogin = object.autoCreateAccountOnLogin ?? false;
        message.issuer = object.issuer ?? '';
        message.ssoBinding = object.ssoBinding ?? 0;
        message.ssoUrl = object.ssoUrl ?? '';
        message.securitySettings =
            object.securitySettings !== undefined && object.securitySettings !== null
                ? FederationSecuritySettings.fromPartial(object.securitySettings)
                : undefined;
        message.caseInsensitiveNameIds = object.caseInsensitiveNameIds ?? false;
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

const baseCreateFederationRequest_LabelsEntry: object = { key: '', value: '' };

export const CreateFederationRequest_LabelsEntry: {
    encode(message: CreateFederationRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateFederationRequest_LabelsEntry;
    fromJSON(object: any): CreateFederationRequest_LabelsEntry;
    toJSON(message: CreateFederationRequest_LabelsEntry): unknown;
    fromPartial<I extends Exact<DeepPartial<CreateFederationRequest_LabelsEntry>, I>>(object: I): CreateFederationRequest_LabelsEntry;
} = {
    encode(
        message: CreateFederationRequest_LabelsEntry,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateFederationRequest_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateFederationRequest_LabelsEntry,
        } as CreateFederationRequest_LabelsEntry;
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

    fromJSON(object: any): CreateFederationRequest_LabelsEntry {
        const message = {
            ...baseCreateFederationRequest_LabelsEntry,
        } as CreateFederationRequest_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: CreateFederationRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateFederationRequest_LabelsEntry>, I>>(
        object: I,
    ): CreateFederationRequest_LabelsEntry {
        const message = {
            ...baseCreateFederationRequest_LabelsEntry,
        } as CreateFederationRequest_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseCreateFederationMetadata: object = { federationId: '' };

export const CreateFederationMetadata: {
    encode(message: CreateFederationMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateFederationMetadata;
    fromJSON(object: any): CreateFederationMetadata;
    toJSON(message: CreateFederationMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<CreateFederationMetadata>, I>>(object: I): CreateFederationMetadata;
} = {
    encode(
        message: CreateFederationMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.federationId !== '') {
            writer.uint32(10).string(message.federationId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateFederationMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateFederationMetadata } as CreateFederationMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.federationId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateFederationMetadata {
        const message = { ...baseCreateFederationMetadata } as CreateFederationMetadata;
        message.federationId =
            object.federationId !== undefined && object.federationId !== null
                ? String(object.federationId)
                : '';
        return message;
    },

    toJSON(message: CreateFederationMetadata): unknown {
        const obj: any = {};
        message.federationId !== undefined && (obj.federationId = message.federationId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateFederationMetadata>, I>>(
        object: I,
    ): CreateFederationMetadata {
        const message = { ...baseCreateFederationMetadata } as CreateFederationMetadata;
        message.federationId = object.federationId ?? '';
        return message;
    },
};

const baseUpdateFederationRequest: object = {
    federationId: '',
    name: '',
    description: '',
    autoCreateAccountOnLogin: false,
    issuer: '',
    ssoBinding: 0,
    ssoUrl: '',
    caseInsensitiveNameIds: false,
};

export const UpdateFederationRequest: {
    encode(message: UpdateFederationRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateFederationRequest;
    fromJSON(object: any): UpdateFederationRequest;
    toJSON(message: UpdateFederationRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<UpdateFederationRequest>, I>>(object: I): UpdateFederationRequest;
} = {
    encode(message: UpdateFederationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.federationId !== '') {
            writer.uint32(10).string(message.federationId);
        }
        if (message.updateMask !== undefined) {
            FieldMask.encode(message.updateMask, writer.uint32(18).fork()).ldelim();
        }
        if (message.name !== '') {
            writer.uint32(26).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(34).string(message.description);
        }
        if (message.cookieMaxAge !== undefined) {
            Duration.encode(message.cookieMaxAge, writer.uint32(42).fork()).ldelim();
        }
        if (message.autoCreateAccountOnLogin === true) {
            writer.uint32(48).bool(message.autoCreateAccountOnLogin);
        }
        if (message.issuer !== '') {
            writer.uint32(58).string(message.issuer);
        }
        if (message.ssoBinding !== 0) {
            writer.uint32(64).int32(message.ssoBinding);
        }
        if (message.ssoUrl !== '') {
            writer.uint32(74).string(message.ssoUrl);
        }
        if (message.securitySettings !== undefined) {
            FederationSecuritySettings.encode(
                message.securitySettings,
                writer.uint32(82).fork(),
            ).ldelim();
        }
        if (message.caseInsensitiveNameIds === true) {
            writer.uint32(96).bool(message.caseInsensitiveNameIds);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            UpdateFederationRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(106).fork(),
            ).ldelim();
        });
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateFederationRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateFederationRequest } as UpdateFederationRequest;
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.federationId = reader.string();
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
                    message.cookieMaxAge = Duration.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.autoCreateAccountOnLogin = reader.bool();
                    break;
                case 7:
                    message.issuer = reader.string();
                    break;
                case 8:
                    message.ssoBinding = reader.int32() as any;
                    break;
                case 9:
                    message.ssoUrl = reader.string();
                    break;
                case 10:
                    message.securitySettings = FederationSecuritySettings.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 12:
                    message.caseInsensitiveNameIds = reader.bool();
                    break;
                case 13:
                    const entry13 = UpdateFederationRequest_LabelsEntry.decode(
                        reader,
                        reader.uint32(),
                    );
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

    fromJSON(object: any): UpdateFederationRequest {
        const message = { ...baseUpdateFederationRequest } as UpdateFederationRequest;
        message.federationId =
            object.federationId !== undefined && object.federationId !== null
                ? String(object.federationId)
                : '';
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? FieldMask.fromJSON(object.updateMask)
                : undefined;
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        message.cookieMaxAge =
            object.cookieMaxAge !== undefined && object.cookieMaxAge !== null
                ? Duration.fromJSON(object.cookieMaxAge)
                : undefined;
        message.autoCreateAccountOnLogin =
            object.autoCreateAccountOnLogin !== undefined &&
            object.autoCreateAccountOnLogin !== null
                ? Boolean(object.autoCreateAccountOnLogin)
                : false;
        message.issuer =
            object.issuer !== undefined && object.issuer !== null ? String(object.issuer) : '';
        message.ssoBinding =
            object.ssoBinding !== undefined && object.ssoBinding !== null
                ? bindingTypeFromJSON(object.ssoBinding)
                : 0;
        message.ssoUrl =
            object.ssoUrl !== undefined && object.ssoUrl !== null ? String(object.ssoUrl) : '';
        message.securitySettings =
            object.securitySettings !== undefined && object.securitySettings !== null
                ? FederationSecuritySettings.fromJSON(object.securitySettings)
                : undefined;
        message.caseInsensitiveNameIds =
            object.caseInsensitiveNameIds !== undefined && object.caseInsensitiveNameIds !== null
                ? Boolean(object.caseInsensitiveNameIds)
                : false;
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                acc[key] = String(value);
                return acc;
            },
            {},
        );
        return message;
    },

    toJSON(message: UpdateFederationRequest): unknown {
        const obj: any = {};
        message.federationId !== undefined && (obj.federationId = message.federationId);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? FieldMask.toJSON(message.updateMask)
                : undefined);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        message.cookieMaxAge !== undefined &&
            (obj.cookieMaxAge = message.cookieMaxAge
                ? Duration.toJSON(message.cookieMaxAge)
                : undefined);
        message.autoCreateAccountOnLogin !== undefined &&
            (obj.autoCreateAccountOnLogin = message.autoCreateAccountOnLogin);
        message.issuer !== undefined && (obj.issuer = message.issuer);
        message.ssoBinding !== undefined &&
            (obj.ssoBinding = bindingTypeToJSON(message.ssoBinding));
        message.ssoUrl !== undefined && (obj.ssoUrl = message.ssoUrl);
        message.securitySettings !== undefined &&
            (obj.securitySettings = message.securitySettings
                ? FederationSecuritySettings.toJSON(message.securitySettings)
                : undefined);
        message.caseInsensitiveNameIds !== undefined &&
            (obj.caseInsensitiveNameIds = message.caseInsensitiveNameIds);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateFederationRequest>, I>>(
        object: I,
    ): UpdateFederationRequest {
        const message = { ...baseUpdateFederationRequest } as UpdateFederationRequest;
        message.federationId = object.federationId ?? '';
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? FieldMask.fromPartial(object.updateMask)
                : undefined;
        message.name = object.name ?? '';
        message.description = object.description ?? '';
        message.cookieMaxAge =
            object.cookieMaxAge !== undefined && object.cookieMaxAge !== null
                ? Duration.fromPartial(object.cookieMaxAge)
                : undefined;
        message.autoCreateAccountOnLogin = object.autoCreateAccountOnLogin ?? false;
        message.issuer = object.issuer ?? '';
        message.ssoBinding = object.ssoBinding ?? 0;
        message.ssoUrl = object.ssoUrl ?? '';
        message.securitySettings =
            object.securitySettings !== undefined && object.securitySettings !== null
                ? FederationSecuritySettings.fromPartial(object.securitySettings)
                : undefined;
        message.caseInsensitiveNameIds = object.caseInsensitiveNameIds ?? false;
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

const baseUpdateFederationRequest_LabelsEntry: object = { key: '', value: '' };

export const UpdateFederationRequest_LabelsEntry: {
    encode(message: UpdateFederationRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateFederationRequest_LabelsEntry;
    fromJSON(object: any): UpdateFederationRequest_LabelsEntry;
    toJSON(message: UpdateFederationRequest_LabelsEntry): unknown;
    fromPartial<I extends Exact<DeepPartial<UpdateFederationRequest_LabelsEntry>, I>>(object: I): UpdateFederationRequest_LabelsEntry;
} = {
    encode(
        message: UpdateFederationRequest_LabelsEntry,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateFederationRequest_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateFederationRequest_LabelsEntry,
        } as UpdateFederationRequest_LabelsEntry;
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

    fromJSON(object: any): UpdateFederationRequest_LabelsEntry {
        const message = {
            ...baseUpdateFederationRequest_LabelsEntry,
        } as UpdateFederationRequest_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: UpdateFederationRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateFederationRequest_LabelsEntry>, I>>(
        object: I,
    ): UpdateFederationRequest_LabelsEntry {
        const message = {
            ...baseUpdateFederationRequest_LabelsEntry,
        } as UpdateFederationRequest_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseUpdateFederationMetadata: object = { federationId: '' };

export const UpdateFederationMetadata: {
    encode(message: UpdateFederationMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateFederationMetadata;
    fromJSON(object: any): UpdateFederationMetadata;
    toJSON(message: UpdateFederationMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<UpdateFederationMetadata>, I>>(object: I): UpdateFederationMetadata;
} = {
    encode(
        message: UpdateFederationMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.federationId !== '') {
            writer.uint32(10).string(message.federationId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateFederationMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateFederationMetadata } as UpdateFederationMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.federationId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateFederationMetadata {
        const message = { ...baseUpdateFederationMetadata } as UpdateFederationMetadata;
        message.federationId =
            object.federationId !== undefined && object.federationId !== null
                ? String(object.federationId)
                : '';
        return message;
    },

    toJSON(message: UpdateFederationMetadata): unknown {
        const obj: any = {};
        message.federationId !== undefined && (obj.federationId = message.federationId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateFederationMetadata>, I>>(
        object: I,
    ): UpdateFederationMetadata {
        const message = { ...baseUpdateFederationMetadata } as UpdateFederationMetadata;
        message.federationId = object.federationId ?? '';
        return message;
    },
};

const baseDeleteFederationRequest: object = { federationId: '' };

export const DeleteFederationRequest: {
    encode(message: DeleteFederationRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteFederationRequest;
    fromJSON(object: any): DeleteFederationRequest;
    toJSON(message: DeleteFederationRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<DeleteFederationRequest>, I>>(object: I): DeleteFederationRequest;
} = {
    encode(message: DeleteFederationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.federationId !== '') {
            writer.uint32(10).string(message.federationId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteFederationRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteFederationRequest } as DeleteFederationRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.federationId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteFederationRequest {
        const message = { ...baseDeleteFederationRequest } as DeleteFederationRequest;
        message.federationId =
            object.federationId !== undefined && object.federationId !== null
                ? String(object.federationId)
                : '';
        return message;
    },

    toJSON(message: DeleteFederationRequest): unknown {
        const obj: any = {};
        message.federationId !== undefined && (obj.federationId = message.federationId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteFederationRequest>, I>>(
        object: I,
    ): DeleteFederationRequest {
        const message = { ...baseDeleteFederationRequest } as DeleteFederationRequest;
        message.federationId = object.federationId ?? '';
        return message;
    },
};

const baseDeleteFederationMetadata: object = { federationId: '' };

export const DeleteFederationMetadata: {
    encode(message: DeleteFederationMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteFederationMetadata;
    fromJSON(object: any): DeleteFederationMetadata;
    toJSON(message: DeleteFederationMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<DeleteFederationMetadata>, I>>(object: I): DeleteFederationMetadata;
} = {
    encode(
        message: DeleteFederationMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.federationId !== '') {
            writer.uint32(10).string(message.federationId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteFederationMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteFederationMetadata } as DeleteFederationMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.federationId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteFederationMetadata {
        const message = { ...baseDeleteFederationMetadata } as DeleteFederationMetadata;
        message.federationId =
            object.federationId !== undefined && object.federationId !== null
                ? String(object.federationId)
                : '';
        return message;
    },

    toJSON(message: DeleteFederationMetadata): unknown {
        const obj: any = {};
        message.federationId !== undefined && (obj.federationId = message.federationId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteFederationMetadata>, I>>(
        object: I,
    ): DeleteFederationMetadata {
        const message = { ...baseDeleteFederationMetadata } as DeleteFederationMetadata;
        message.federationId = object.federationId ?? '';
        return message;
    },
};

const baseAddFederatedUserAccountsRequest: object = { federationId: '', nameIds: '' };

export const AddFederatedUserAccountsRequest: {
    encode(message: AddFederatedUserAccountsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddFederatedUserAccountsRequest;
    fromJSON(object: any): AddFederatedUserAccountsRequest;
    toJSON(message: AddFederatedUserAccountsRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<AddFederatedUserAccountsRequest>, I>>(object: I): AddFederatedUserAccountsRequest;
} = {
    encode(
        message: AddFederatedUserAccountsRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.federationId !== '') {
            writer.uint32(10).string(message.federationId);
        }
        for (const v of message.nameIds) {
            writer.uint32(18).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): AddFederatedUserAccountsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseAddFederatedUserAccountsRequest,
        } as AddFederatedUserAccountsRequest;
        message.nameIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.federationId = reader.string();
                    break;
                case 2:
                    message.nameIds.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): AddFederatedUserAccountsRequest {
        const message = {
            ...baseAddFederatedUserAccountsRequest,
        } as AddFederatedUserAccountsRequest;
        message.federationId =
            object.federationId !== undefined && object.federationId !== null
                ? String(object.federationId)
                : '';
        message.nameIds = (object.nameIds ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: AddFederatedUserAccountsRequest): unknown {
        const obj: any = {};
        message.federationId !== undefined && (obj.federationId = message.federationId);
        if (message.nameIds) {
            obj.nameIds = message.nameIds.map((e) => e);
        } else {
            obj.nameIds = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<AddFederatedUserAccountsRequest>, I>>(
        object: I,
    ): AddFederatedUserAccountsRequest {
        const message = {
            ...baseAddFederatedUserAccountsRequest,
        } as AddFederatedUserAccountsRequest;
        message.federationId = object.federationId ?? '';
        message.nameIds = object.nameIds?.map((e) => e) || [];
        return message;
    },
};

const baseAddFederatedUserAccountsMetadata: object = { federationId: '' };

export const AddFederatedUserAccountsMetadata: {
    encode(message: AddFederatedUserAccountsMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddFederatedUserAccountsMetadata;
    fromJSON(object: any): AddFederatedUserAccountsMetadata;
    toJSON(message: AddFederatedUserAccountsMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<AddFederatedUserAccountsMetadata>, I>>(object: I): AddFederatedUserAccountsMetadata;
} = {
    encode(
        message: AddFederatedUserAccountsMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.federationId !== '') {
            writer.uint32(10).string(message.federationId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): AddFederatedUserAccountsMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseAddFederatedUserAccountsMetadata,
        } as AddFederatedUserAccountsMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.federationId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): AddFederatedUserAccountsMetadata {
        const message = {
            ...baseAddFederatedUserAccountsMetadata,
        } as AddFederatedUserAccountsMetadata;
        message.federationId =
            object.federationId !== undefined && object.federationId !== null
                ? String(object.federationId)
                : '';
        return message;
    },

    toJSON(message: AddFederatedUserAccountsMetadata): unknown {
        const obj: any = {};
        message.federationId !== undefined && (obj.federationId = message.federationId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<AddFederatedUserAccountsMetadata>, I>>(
        object: I,
    ): AddFederatedUserAccountsMetadata {
        const message = {
            ...baseAddFederatedUserAccountsMetadata,
        } as AddFederatedUserAccountsMetadata;
        message.federationId = object.federationId ?? '';
        return message;
    },
};

const baseAddFederatedUserAccountsResponse: object = {};

export const AddFederatedUserAccountsResponse: {
    encode(message: AddFederatedUserAccountsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddFederatedUserAccountsResponse;
    fromJSON(object: any): AddFederatedUserAccountsResponse;
    toJSON(message: AddFederatedUserAccountsResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<AddFederatedUserAccountsResponse>, I>>(object: I): AddFederatedUserAccountsResponse;
} = {
    encode(
        message: AddFederatedUserAccountsResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.userAccounts) {
            UserAccount.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): AddFederatedUserAccountsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseAddFederatedUserAccountsResponse,
        } as AddFederatedUserAccountsResponse;
        message.userAccounts = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.userAccounts.push(UserAccount.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): AddFederatedUserAccountsResponse {
        const message = {
            ...baseAddFederatedUserAccountsResponse,
        } as AddFederatedUserAccountsResponse;
        message.userAccounts = (object.userAccounts ?? []).map((e: any) => UserAccount.fromJSON(e));
        return message;
    },

    toJSON(message: AddFederatedUserAccountsResponse): unknown {
        const obj: any = {};
        if (message.userAccounts) {
            obj.userAccounts = message.userAccounts.map((e) =>
                e ? UserAccount.toJSON(e) : undefined,
            );
        } else {
            obj.userAccounts = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<AddFederatedUserAccountsResponse>, I>>(
        object: I,
    ): AddFederatedUserAccountsResponse {
        const message = {
            ...baseAddFederatedUserAccountsResponse,
        } as AddFederatedUserAccountsResponse;
        message.userAccounts = object.userAccounts?.map((e) => UserAccount.fromPartial(e)) || [];
        return message;
    },
};

const baseDeleteFederatedUserAccountsRequest: object = { federationId: '', subjectIds: '' };

export const DeleteFederatedUserAccountsRequest: {
    encode(message: DeleteFederatedUserAccountsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteFederatedUserAccountsRequest;
    fromJSON(object: any): DeleteFederatedUserAccountsRequest;
    toJSON(message: DeleteFederatedUserAccountsRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<DeleteFederatedUserAccountsRequest>, I>>(object: I): DeleteFederatedUserAccountsRequest;
} = {
    encode(
        message: DeleteFederatedUserAccountsRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.federationId !== '') {
            writer.uint32(10).string(message.federationId);
        }
        for (const v of message.subjectIds) {
            writer.uint32(18).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteFederatedUserAccountsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteFederatedUserAccountsRequest,
        } as DeleteFederatedUserAccountsRequest;
        message.subjectIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.federationId = reader.string();
                    break;
                case 2:
                    message.subjectIds.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteFederatedUserAccountsRequest {
        const message = {
            ...baseDeleteFederatedUserAccountsRequest,
        } as DeleteFederatedUserAccountsRequest;
        message.federationId =
            object.federationId !== undefined && object.federationId !== null
                ? String(object.federationId)
                : '';
        message.subjectIds = (object.subjectIds ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: DeleteFederatedUserAccountsRequest): unknown {
        const obj: any = {};
        message.federationId !== undefined && (obj.federationId = message.federationId);
        if (message.subjectIds) {
            obj.subjectIds = message.subjectIds.map((e) => e);
        } else {
            obj.subjectIds = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteFederatedUserAccountsRequest>, I>>(
        object: I,
    ): DeleteFederatedUserAccountsRequest {
        const message = {
            ...baseDeleteFederatedUserAccountsRequest,
        } as DeleteFederatedUserAccountsRequest;
        message.federationId = object.federationId ?? '';
        message.subjectIds = object.subjectIds?.map((e) => e) || [];
        return message;
    },
};

const baseDeleteFederatedUserAccountsMetadata: object = { federationId: '' };

export const DeleteFederatedUserAccountsMetadata: {
    encode(message: DeleteFederatedUserAccountsMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteFederatedUserAccountsMetadata;
    fromJSON(object: any): DeleteFederatedUserAccountsMetadata;
    toJSON(message: DeleteFederatedUserAccountsMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<DeleteFederatedUserAccountsMetadata>, I>>(object: I): DeleteFederatedUserAccountsMetadata;
} = {
    encode(
        message: DeleteFederatedUserAccountsMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.federationId !== '') {
            writer.uint32(10).string(message.federationId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteFederatedUserAccountsMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteFederatedUserAccountsMetadata,
        } as DeleteFederatedUserAccountsMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.federationId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteFederatedUserAccountsMetadata {
        const message = {
            ...baseDeleteFederatedUserAccountsMetadata,
        } as DeleteFederatedUserAccountsMetadata;
        message.federationId =
            object.federationId !== undefined && object.federationId !== null
                ? String(object.federationId)
                : '';
        return message;
    },

    toJSON(message: DeleteFederatedUserAccountsMetadata): unknown {
        const obj: any = {};
        message.federationId !== undefined && (obj.federationId = message.federationId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteFederatedUserAccountsMetadata>, I>>(
        object: I,
    ): DeleteFederatedUserAccountsMetadata {
        const message = {
            ...baseDeleteFederatedUserAccountsMetadata,
        } as DeleteFederatedUserAccountsMetadata;
        message.federationId = object.federationId ?? '';
        return message;
    },
};

const baseDeleteFederatedUserAccountsResponse: object = {
    deletedSubjects: '',
    nonExistingSubjects: '',
};

export const DeleteFederatedUserAccountsResponse: {
    encode(message: DeleteFederatedUserAccountsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteFederatedUserAccountsResponse;
    fromJSON(object: any): DeleteFederatedUserAccountsResponse;
    toJSON(message: DeleteFederatedUserAccountsResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<DeleteFederatedUserAccountsResponse>, I>>(object: I): DeleteFederatedUserAccountsResponse;
} = {
    encode(
        message: DeleteFederatedUserAccountsResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.deletedSubjects) {
            writer.uint32(10).string(v!);
        }
        for (const v of message.nonExistingSubjects) {
            writer.uint32(18).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteFederatedUserAccountsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteFederatedUserAccountsResponse,
        } as DeleteFederatedUserAccountsResponse;
        message.deletedSubjects = [];
        message.nonExistingSubjects = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deletedSubjects.push(reader.string());
                    break;
                case 2:
                    message.nonExistingSubjects.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteFederatedUserAccountsResponse {
        const message = {
            ...baseDeleteFederatedUserAccountsResponse,
        } as DeleteFederatedUserAccountsResponse;
        message.deletedSubjects = (object.deletedSubjects ?? []).map((e: any) => String(e));
        message.nonExistingSubjects = (object.nonExistingSubjects ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: DeleteFederatedUserAccountsResponse): unknown {
        const obj: any = {};
        if (message.deletedSubjects) {
            obj.deletedSubjects = message.deletedSubjects.map((e) => e);
        } else {
            obj.deletedSubjects = [];
        }
        if (message.nonExistingSubjects) {
            obj.nonExistingSubjects = message.nonExistingSubjects.map((e) => e);
        } else {
            obj.nonExistingSubjects = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteFederatedUserAccountsResponse>, I>>(
        object: I,
    ): DeleteFederatedUserAccountsResponse {
        const message = {
            ...baseDeleteFederatedUserAccountsResponse,
        } as DeleteFederatedUserAccountsResponse;
        message.deletedSubjects = object.deletedSubjects?.map((e) => e) || [];
        message.nonExistingSubjects = object.nonExistingSubjects?.map((e) => e) || [];
        return message;
    },
};

const baseListFederatedUserAccountsRequest: object = {
    federationId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};

export const ListFederatedUserAccountsRequest: {
    encode(message: ListFederatedUserAccountsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListFederatedUserAccountsRequest;
    fromJSON(object: any): ListFederatedUserAccountsRequest;
    toJSON(message: ListFederatedUserAccountsRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<ListFederatedUserAccountsRequest>, I>>(object: I): ListFederatedUserAccountsRequest;
} = {
    encode(
        message: ListFederatedUserAccountsRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.federationId !== '') {
            writer.uint32(10).string(message.federationId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(16).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(26).string(message.pageToken);
        }
        if (message.filter !== '') {
            writer.uint32(34).string(message.filter);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListFederatedUserAccountsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListFederatedUserAccountsRequest,
        } as ListFederatedUserAccountsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.federationId = reader.string();
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

    fromJSON(object: any): ListFederatedUserAccountsRequest {
        const message = {
            ...baseListFederatedUserAccountsRequest,
        } as ListFederatedUserAccountsRequest;
        message.federationId =
            object.federationId !== undefined && object.federationId !== null
                ? String(object.federationId)
                : '';
        message.pageSize =
            object.pageSize !== undefined && object.pageSize !== null ? Number(object.pageSize) : 0;
        message.pageToken =
            object.pageToken !== undefined && object.pageToken !== null
                ? String(object.pageToken)
                : '';
        message.filter =
            object.filter !== undefined && object.filter !== null ? String(object.filter) : '';
        return message;
    },

    toJSON(message: ListFederatedUserAccountsRequest): unknown {
        const obj: any = {};
        message.federationId !== undefined && (obj.federationId = message.federationId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListFederatedUserAccountsRequest>, I>>(
        object: I,
    ): ListFederatedUserAccountsRequest {
        const message = {
            ...baseListFederatedUserAccountsRequest,
        } as ListFederatedUserAccountsRequest;
        message.federationId = object.federationId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        message.filter = object.filter ?? '';
        return message;
    },
};

const baseListFederatedUserAccountsResponse: object = { nextPageToken: '' };

export const ListFederatedUserAccountsResponse: {
    encode(message: ListFederatedUserAccountsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListFederatedUserAccountsResponse;
    fromJSON(object: any): ListFederatedUserAccountsResponse;
    toJSON(message: ListFederatedUserAccountsResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<ListFederatedUserAccountsResponse>, I>>(object: I): ListFederatedUserAccountsResponse;
} = {
    encode(
        message: ListFederatedUserAccountsResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.userAccounts) {
            UserAccount.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListFederatedUserAccountsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListFederatedUserAccountsResponse,
        } as ListFederatedUserAccountsResponse;
        message.userAccounts = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.userAccounts.push(UserAccount.decode(reader, reader.uint32()));
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

    fromJSON(object: any): ListFederatedUserAccountsResponse {
        const message = {
            ...baseListFederatedUserAccountsResponse,
        } as ListFederatedUserAccountsResponse;
        message.userAccounts = (object.userAccounts ?? []).map((e: any) => UserAccount.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListFederatedUserAccountsResponse): unknown {
        const obj: any = {};
        if (message.userAccounts) {
            obj.userAccounts = message.userAccounts.map((e) =>
                e ? UserAccount.toJSON(e) : undefined,
            );
        } else {
            obj.userAccounts = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListFederatedUserAccountsResponse>, I>>(
        object: I,
    ): ListFederatedUserAccountsResponse {
        const message = {
            ...baseListFederatedUserAccountsResponse,
        } as ListFederatedUserAccountsResponse;
        message.userAccounts = object.userAccounts?.map((e) => UserAccount.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

const baseListFederationOperationsRequest: object = {
    federationId: '',
    pageSize: 0,
    pageToken: '',
};

export const ListFederationOperationsRequest: {
    encode(message: ListFederationOperationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListFederationOperationsRequest;
    fromJSON(object: any): ListFederationOperationsRequest;
    toJSON(message: ListFederationOperationsRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<ListFederationOperationsRequest>, I>>(object: I): ListFederationOperationsRequest;
} = {
    encode(
        message: ListFederationOperationsRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.federationId !== '') {
            writer.uint32(10).string(message.federationId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(16).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(26).string(message.pageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListFederationOperationsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListFederationOperationsRequest,
        } as ListFederationOperationsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.federationId = reader.string();
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

    fromJSON(object: any): ListFederationOperationsRequest {
        const message = {
            ...baseListFederationOperationsRequest,
        } as ListFederationOperationsRequest;
        message.federationId =
            object.federationId !== undefined && object.federationId !== null
                ? String(object.federationId)
                : '';
        message.pageSize =
            object.pageSize !== undefined && object.pageSize !== null ? Number(object.pageSize) : 0;
        message.pageToken =
            object.pageToken !== undefined && object.pageToken !== null
                ? String(object.pageToken)
                : '';
        return message;
    },

    toJSON(message: ListFederationOperationsRequest): unknown {
        const obj: any = {};
        message.federationId !== undefined && (obj.federationId = message.federationId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListFederationOperationsRequest>, I>>(
        object: I,
    ): ListFederationOperationsRequest {
        const message = {
            ...baseListFederationOperationsRequest,
        } as ListFederationOperationsRequest;
        message.federationId = object.federationId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        return message;
    },
};

const baseListFederationOperationsResponse: object = { nextPageToken: '' };

export const ListFederationOperationsResponse: {
    encode(message: ListFederationOperationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListFederationOperationsResponse;
    fromJSON(object: any): ListFederationOperationsResponse;
    toJSON(message: ListFederationOperationsResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<ListFederationOperationsResponse>, I>>(object: I): ListFederationOperationsResponse;
} = {
    encode(
        message: ListFederationOperationsResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.operations) {
            Operation.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListFederationOperationsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListFederationOperationsResponse,
        } as ListFederationOperationsResponse;
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

    fromJSON(object: any): ListFederationOperationsResponse {
        const message = {
            ...baseListFederationOperationsResponse,
        } as ListFederationOperationsResponse;
        message.operations = (object.operations ?? []).map((e: any) => Operation.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListFederationOperationsResponse): unknown {
        const obj: any = {};
        if (message.operations) {
            obj.operations = message.operations.map((e) => (e ? Operation.toJSON(e) : undefined));
        } else {
            obj.operations = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListFederationOperationsResponse>, I>>(
        object: I,
    ): ListFederationOperationsResponse {
        const message = {
            ...baseListFederationOperationsResponse,
        } as ListFederationOperationsResponse;
        message.operations = object.operations?.map((e) => Operation.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

const baseGetFederationDomainRequest: object = { federationId: '', domain: '' };

export const GetFederationDomainRequest: {
    encode(message: GetFederationDomainRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetFederationDomainRequest;
    fromJSON(object: any): GetFederationDomainRequest;
    toJSON(message: GetFederationDomainRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<GetFederationDomainRequest>, I>>(object: I): GetFederationDomainRequest;
} = {
    encode(
        message: GetFederationDomainRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.federationId !== '') {
            writer.uint32(10).string(message.federationId);
        }
        if (message.domain !== '') {
            writer.uint32(18).string(message.domain);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetFederationDomainRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetFederationDomainRequest } as GetFederationDomainRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.federationId = reader.string();
                    break;
                case 2:
                    message.domain = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetFederationDomainRequest {
        const message = { ...baseGetFederationDomainRequest } as GetFederationDomainRequest;
        message.federationId =
            object.federationId !== undefined && object.federationId !== null
                ? String(object.federationId)
                : '';
        message.domain =
            object.domain !== undefined && object.domain !== null ? String(object.domain) : '';
        return message;
    },

    toJSON(message: GetFederationDomainRequest): unknown {
        const obj: any = {};
        message.federationId !== undefined && (obj.federationId = message.federationId);
        message.domain !== undefined && (obj.domain = message.domain);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetFederationDomainRequest>, I>>(
        object: I,
    ): GetFederationDomainRequest {
        const message = { ...baseGetFederationDomainRequest } as GetFederationDomainRequest;
        message.federationId = object.federationId ?? '';
        message.domain = object.domain ?? '';
        return message;
    },
};

const baseListFederationDomainsRequest: object = {
    federationId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};

export const ListFederationDomainsRequest: {
    encode(message: ListFederationDomainsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListFederationDomainsRequest;
    fromJSON(object: any): ListFederationDomainsRequest;
    toJSON(message: ListFederationDomainsRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<ListFederationDomainsRequest>, I>>(object: I): ListFederationDomainsRequest;
} = {
    encode(
        message: ListFederationDomainsRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.federationId !== '') {
            writer.uint32(10).string(message.federationId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(16).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(26).string(message.pageToken);
        }
        if (message.filter !== '') {
            writer.uint32(34).string(message.filter);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListFederationDomainsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListFederationDomainsRequest } as ListFederationDomainsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.federationId = reader.string();
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

    fromJSON(object: any): ListFederationDomainsRequest {
        const message = { ...baseListFederationDomainsRequest } as ListFederationDomainsRequest;
        message.federationId =
            object.federationId !== undefined && object.federationId !== null
                ? String(object.federationId)
                : '';
        message.pageSize =
            object.pageSize !== undefined && object.pageSize !== null ? Number(object.pageSize) : 0;
        message.pageToken =
            object.pageToken !== undefined && object.pageToken !== null
                ? String(object.pageToken)
                : '';
        message.filter =
            object.filter !== undefined && object.filter !== null ? String(object.filter) : '';
        return message;
    },

    toJSON(message: ListFederationDomainsRequest): unknown {
        const obj: any = {};
        message.federationId !== undefined && (obj.federationId = message.federationId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListFederationDomainsRequest>, I>>(
        object: I,
    ): ListFederationDomainsRequest {
        const message = { ...baseListFederationDomainsRequest } as ListFederationDomainsRequest;
        message.federationId = object.federationId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        message.filter = object.filter ?? '';
        return message;
    },
};

const baseListFederationDomainsResponse: object = { nextPageToken: '' };

export const ListFederationDomainsResponse: {
    encode(message: ListFederationDomainsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListFederationDomainsResponse;
    fromJSON(object: any): ListFederationDomainsResponse;
    toJSON(message: ListFederationDomainsResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<ListFederationDomainsResponse>, I>>(object: I): ListFederationDomainsResponse;
} = {
    encode(
        message: ListFederationDomainsResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.domains) {
            Domain.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListFederationDomainsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListFederationDomainsResponse } as ListFederationDomainsResponse;
        message.domains = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.domains.push(Domain.decode(reader, reader.uint32()));
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

    fromJSON(object: any): ListFederationDomainsResponse {
        const message = { ...baseListFederationDomainsResponse } as ListFederationDomainsResponse;
        message.domains = (object.domains ?? []).map((e: any) => Domain.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListFederationDomainsResponse): unknown {
        const obj: any = {};
        if (message.domains) {
            obj.domains = message.domains.map((e) => (e ? Domain.toJSON(e) : undefined));
        } else {
            obj.domains = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListFederationDomainsResponse>, I>>(
        object: I,
    ): ListFederationDomainsResponse {
        const message = { ...baseListFederationDomainsResponse } as ListFederationDomainsResponse;
        message.domains = object.domains?.map((e) => Domain.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

const baseAddFederationDomainRequest: object = { federationId: '', domain: '' };

export const AddFederationDomainRequest: {
    encode(message: AddFederationDomainRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddFederationDomainRequest;
    fromJSON(object: any): AddFederationDomainRequest;
    toJSON(message: AddFederationDomainRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<AddFederationDomainRequest>, I>>(object: I): AddFederationDomainRequest;
} = {
    encode(
        message: AddFederationDomainRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.federationId !== '') {
            writer.uint32(10).string(message.federationId);
        }
        if (message.domain !== '') {
            writer.uint32(18).string(message.domain);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): AddFederationDomainRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAddFederationDomainRequest } as AddFederationDomainRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.federationId = reader.string();
                    break;
                case 2:
                    message.domain = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): AddFederationDomainRequest {
        const message = { ...baseAddFederationDomainRequest } as AddFederationDomainRequest;
        message.federationId =
            object.federationId !== undefined && object.federationId !== null
                ? String(object.federationId)
                : '';
        message.domain =
            object.domain !== undefined && object.domain !== null ? String(object.domain) : '';
        return message;
    },

    toJSON(message: AddFederationDomainRequest): unknown {
        const obj: any = {};
        message.federationId !== undefined && (obj.federationId = message.federationId);
        message.domain !== undefined && (obj.domain = message.domain);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<AddFederationDomainRequest>, I>>(
        object: I,
    ): AddFederationDomainRequest {
        const message = { ...baseAddFederationDomainRequest } as AddFederationDomainRequest;
        message.federationId = object.federationId ?? '';
        message.domain = object.domain ?? '';
        return message;
    },
};

const baseAddFederationDomainMetadata: object = { federationId: '', domain: '' };

export const AddFederationDomainMetadata: {
    encode(message: AddFederationDomainMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddFederationDomainMetadata;
    fromJSON(object: any): AddFederationDomainMetadata;
    toJSON(message: AddFederationDomainMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<AddFederationDomainMetadata>, I>>(object: I): AddFederationDomainMetadata;
} = {
    encode(
        message: AddFederationDomainMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.federationId !== '') {
            writer.uint32(10).string(message.federationId);
        }
        if (message.domain !== '') {
            writer.uint32(18).string(message.domain);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): AddFederationDomainMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAddFederationDomainMetadata } as AddFederationDomainMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.federationId = reader.string();
                    break;
                case 2:
                    message.domain = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): AddFederationDomainMetadata {
        const message = { ...baseAddFederationDomainMetadata } as AddFederationDomainMetadata;
        message.federationId =
            object.federationId !== undefined && object.federationId !== null
                ? String(object.federationId)
                : '';
        message.domain =
            object.domain !== undefined && object.domain !== null ? String(object.domain) : '';
        return message;
    },

    toJSON(message: AddFederationDomainMetadata): unknown {
        const obj: any = {};
        message.federationId !== undefined && (obj.federationId = message.federationId);
        message.domain !== undefined && (obj.domain = message.domain);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<AddFederationDomainMetadata>, I>>(
        object: I,
    ): AddFederationDomainMetadata {
        const message = { ...baseAddFederationDomainMetadata } as AddFederationDomainMetadata;
        message.federationId = object.federationId ?? '';
        message.domain = object.domain ?? '';
        return message;
    },
};

const baseValidateFederationDomainRequest: object = { federationId: '', domain: '' };

export const ValidateFederationDomainRequest: {
    encode(message: ValidateFederationDomainRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ValidateFederationDomainRequest;
    fromJSON(object: any): ValidateFederationDomainRequest;
    toJSON(message: ValidateFederationDomainRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<ValidateFederationDomainRequest>, I>>(object: I): ValidateFederationDomainRequest;
} = {
    encode(
        message: ValidateFederationDomainRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.federationId !== '') {
            writer.uint32(10).string(message.federationId);
        }
        if (message.domain !== '') {
            writer.uint32(18).string(message.domain);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ValidateFederationDomainRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseValidateFederationDomainRequest,
        } as ValidateFederationDomainRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.federationId = reader.string();
                    break;
                case 2:
                    message.domain = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ValidateFederationDomainRequest {
        const message = {
            ...baseValidateFederationDomainRequest,
        } as ValidateFederationDomainRequest;
        message.federationId =
            object.federationId !== undefined && object.federationId !== null
                ? String(object.federationId)
                : '';
        message.domain =
            object.domain !== undefined && object.domain !== null ? String(object.domain) : '';
        return message;
    },

    toJSON(message: ValidateFederationDomainRequest): unknown {
        const obj: any = {};
        message.federationId !== undefined && (obj.federationId = message.federationId);
        message.domain !== undefined && (obj.domain = message.domain);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ValidateFederationDomainRequest>, I>>(
        object: I,
    ): ValidateFederationDomainRequest {
        const message = {
            ...baseValidateFederationDomainRequest,
        } as ValidateFederationDomainRequest;
        message.federationId = object.federationId ?? '';
        message.domain = object.domain ?? '';
        return message;
    },
};

const baseValidateFederationDomainMetadata: object = { federationId: '', domain: '' };

export const ValidateFederationDomainMetadata: {
    encode(message: ValidateFederationDomainMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ValidateFederationDomainMetadata;
    fromJSON(object: any): ValidateFederationDomainMetadata;
    toJSON(message: ValidateFederationDomainMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<ValidateFederationDomainMetadata>, I>>(object: I): ValidateFederationDomainMetadata;
} = {
    encode(
        message: ValidateFederationDomainMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.federationId !== '') {
            writer.uint32(10).string(message.federationId);
        }
        if (message.domain !== '') {
            writer.uint32(18).string(message.domain);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ValidateFederationDomainMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseValidateFederationDomainMetadata,
        } as ValidateFederationDomainMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.federationId = reader.string();
                    break;
                case 2:
                    message.domain = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ValidateFederationDomainMetadata {
        const message = {
            ...baseValidateFederationDomainMetadata,
        } as ValidateFederationDomainMetadata;
        message.federationId =
            object.federationId !== undefined && object.federationId !== null
                ? String(object.federationId)
                : '';
        message.domain =
            object.domain !== undefined && object.domain !== null ? String(object.domain) : '';
        return message;
    },

    toJSON(message: ValidateFederationDomainMetadata): unknown {
        const obj: any = {};
        message.federationId !== undefined && (obj.federationId = message.federationId);
        message.domain !== undefined && (obj.domain = message.domain);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ValidateFederationDomainMetadata>, I>>(
        object: I,
    ): ValidateFederationDomainMetadata {
        const message = {
            ...baseValidateFederationDomainMetadata,
        } as ValidateFederationDomainMetadata;
        message.federationId = object.federationId ?? '';
        message.domain = object.domain ?? '';
        return message;
    },
};

const baseDeleteFederationDomainRequest: object = { federationId: '', domain: '' };

export const DeleteFederationDomainRequest: {
    encode(message: DeleteFederationDomainRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteFederationDomainRequest;
    fromJSON(object: any): DeleteFederationDomainRequest;
    toJSON(message: DeleteFederationDomainRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<DeleteFederationDomainRequest>, I>>(object: I): DeleteFederationDomainRequest;
} = {
    encode(
        message: DeleteFederationDomainRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.federationId !== '') {
            writer.uint32(10).string(message.federationId);
        }
        if (message.domain !== '') {
            writer.uint32(18).string(message.domain);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteFederationDomainRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteFederationDomainRequest } as DeleteFederationDomainRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.federationId = reader.string();
                    break;
                case 2:
                    message.domain = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteFederationDomainRequest {
        const message = { ...baseDeleteFederationDomainRequest } as DeleteFederationDomainRequest;
        message.federationId =
            object.federationId !== undefined && object.federationId !== null
                ? String(object.federationId)
                : '';
        message.domain =
            object.domain !== undefined && object.domain !== null ? String(object.domain) : '';
        return message;
    },

    toJSON(message: DeleteFederationDomainRequest): unknown {
        const obj: any = {};
        message.federationId !== undefined && (obj.federationId = message.federationId);
        message.domain !== undefined && (obj.domain = message.domain);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteFederationDomainRequest>, I>>(
        object: I,
    ): DeleteFederationDomainRequest {
        const message = { ...baseDeleteFederationDomainRequest } as DeleteFederationDomainRequest;
        message.federationId = object.federationId ?? '';
        message.domain = object.domain ?? '';
        return message;
    },
};

const baseDeleteFederationDomainMetadata: object = { federationId: '', domain: '' };

export const DeleteFederationDomainMetadata: {
    encode(message: DeleteFederationDomainMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteFederationDomainMetadata;
    fromJSON(object: any): DeleteFederationDomainMetadata;
    toJSON(message: DeleteFederationDomainMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<DeleteFederationDomainMetadata>, I>>(object: I): DeleteFederationDomainMetadata;
} = {
    encode(
        message: DeleteFederationDomainMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.federationId !== '') {
            writer.uint32(10).string(message.federationId);
        }
        if (message.domain !== '') {
            writer.uint32(18).string(message.domain);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteFederationDomainMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteFederationDomainMetadata } as DeleteFederationDomainMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.federationId = reader.string();
                    break;
                case 2:
                    message.domain = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteFederationDomainMetadata {
        const message = { ...baseDeleteFederationDomainMetadata } as DeleteFederationDomainMetadata;
        message.federationId =
            object.federationId !== undefined && object.federationId !== null
                ? String(object.federationId)
                : '';
        message.domain =
            object.domain !== undefined && object.domain !== null ? String(object.domain) : '';
        return message;
    },

    toJSON(message: DeleteFederationDomainMetadata): unknown {
        const obj: any = {};
        message.federationId !== undefined && (obj.federationId = message.federationId);
        message.domain !== undefined && (obj.domain = message.domain);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteFederationDomainMetadata>, I>>(
        object: I,
    ): DeleteFederationDomainMetadata {
        const message = { ...baseDeleteFederationDomainMetadata } as DeleteFederationDomainMetadata;
        message.federationId = object.federationId ?? '';
        message.domain = object.domain ?? '';
        return message;
    },
};

const baseSuspendFederatedUserAccountsRequest: object = {
    federationId: '',
    subjectIds: '',
    reason: '',
};

export const SuspendFederatedUserAccountsRequest: {
    encode(message: SuspendFederatedUserAccountsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SuspendFederatedUserAccountsRequest;
    fromJSON(object: any): SuspendFederatedUserAccountsRequest;
    toJSON(message: SuspendFederatedUserAccountsRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<SuspendFederatedUserAccountsRequest>, I>>(object: I): SuspendFederatedUserAccountsRequest;
} = {
    encode(
        message: SuspendFederatedUserAccountsRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.federationId !== '') {
            writer.uint32(10).string(message.federationId);
        }
        for (const v of message.subjectIds) {
            writer.uint32(18).string(v!);
        }
        if (message.reason !== '') {
            writer.uint32(26).string(message.reason);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SuspendFederatedUserAccountsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseSuspendFederatedUserAccountsRequest,
        } as SuspendFederatedUserAccountsRequest;
        message.subjectIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.federationId = reader.string();
                    break;
                case 2:
                    message.subjectIds.push(reader.string());
                    break;
                case 3:
                    message.reason = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): SuspendFederatedUserAccountsRequest {
        const message = {
            ...baseSuspendFederatedUserAccountsRequest,
        } as SuspendFederatedUserAccountsRequest;
        message.federationId =
            object.federationId !== undefined && object.federationId !== null
                ? String(object.federationId)
                : '';
        message.subjectIds = (object.subjectIds ?? []).map((e: any) => String(e));
        message.reason =
            object.reason !== undefined && object.reason !== null ? String(object.reason) : '';
        return message;
    },

    toJSON(message: SuspendFederatedUserAccountsRequest): unknown {
        const obj: any = {};
        message.federationId !== undefined && (obj.federationId = message.federationId);
        if (message.subjectIds) {
            obj.subjectIds = message.subjectIds.map((e) => e);
        } else {
            obj.subjectIds = [];
        }
        message.reason !== undefined && (obj.reason = message.reason);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SuspendFederatedUserAccountsRequest>, I>>(
        object: I,
    ): SuspendFederatedUserAccountsRequest {
        const message = {
            ...baseSuspendFederatedUserAccountsRequest,
        } as SuspendFederatedUserAccountsRequest;
        message.federationId = object.federationId ?? '';
        message.subjectIds = object.subjectIds?.map((e) => e) || [];
        message.reason = object.reason ?? '';
        return message;
    },
};

const baseSuspendFederatedUserAccountsMetadata: object = {
    federationId: '',
    subjectIds: '',
    reason: '',
};

export const SuspendFederatedUserAccountsMetadata: {
    encode(message: SuspendFederatedUserAccountsMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SuspendFederatedUserAccountsMetadata;
    fromJSON(object: any): SuspendFederatedUserAccountsMetadata;
    toJSON(message: SuspendFederatedUserAccountsMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<SuspendFederatedUserAccountsMetadata>, I>>(object: I): SuspendFederatedUserAccountsMetadata;
} = {
    encode(
        message: SuspendFederatedUserAccountsMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.federationId !== '') {
            writer.uint32(10).string(message.federationId);
        }
        for (const v of message.subjectIds) {
            writer.uint32(18).string(v!);
        }
        if (message.reason !== '') {
            writer.uint32(26).string(message.reason);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SuspendFederatedUserAccountsMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseSuspendFederatedUserAccountsMetadata,
        } as SuspendFederatedUserAccountsMetadata;
        message.subjectIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.federationId = reader.string();
                    break;
                case 2:
                    message.subjectIds.push(reader.string());
                    break;
                case 3:
                    message.reason = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): SuspendFederatedUserAccountsMetadata {
        const message = {
            ...baseSuspendFederatedUserAccountsMetadata,
        } as SuspendFederatedUserAccountsMetadata;
        message.federationId =
            object.federationId !== undefined && object.federationId !== null
                ? String(object.federationId)
                : '';
        message.subjectIds = (object.subjectIds ?? []).map((e: any) => String(e));
        message.reason =
            object.reason !== undefined && object.reason !== null ? String(object.reason) : '';
        return message;
    },

    toJSON(message: SuspendFederatedUserAccountsMetadata): unknown {
        const obj: any = {};
        message.federationId !== undefined && (obj.federationId = message.federationId);
        if (message.subjectIds) {
            obj.subjectIds = message.subjectIds.map((e) => e);
        } else {
            obj.subjectIds = [];
        }
        message.reason !== undefined && (obj.reason = message.reason);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SuspendFederatedUserAccountsMetadata>, I>>(
        object: I,
    ): SuspendFederatedUserAccountsMetadata {
        const message = {
            ...baseSuspendFederatedUserAccountsMetadata,
        } as SuspendFederatedUserAccountsMetadata;
        message.federationId = object.federationId ?? '';
        message.subjectIds = object.subjectIds?.map((e) => e) || [];
        message.reason = object.reason ?? '';
        return message;
    },
};

const baseSuspendFederatedUserAccountsResponse: object = { subjectIds: '' };

export const SuspendFederatedUserAccountsResponse: {
    encode(message: SuspendFederatedUserAccountsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SuspendFederatedUserAccountsResponse;
    fromJSON(object: any): SuspendFederatedUserAccountsResponse;
    toJSON(message: SuspendFederatedUserAccountsResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<SuspendFederatedUserAccountsResponse>, I>>(object: I): SuspendFederatedUserAccountsResponse;
} = {
    encode(
        message: SuspendFederatedUserAccountsResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.subjectIds) {
            writer.uint32(10).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SuspendFederatedUserAccountsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseSuspendFederatedUserAccountsResponse,
        } as SuspendFederatedUserAccountsResponse;
        message.subjectIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subjectIds.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): SuspendFederatedUserAccountsResponse {
        const message = {
            ...baseSuspendFederatedUserAccountsResponse,
        } as SuspendFederatedUserAccountsResponse;
        message.subjectIds = (object.subjectIds ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: SuspendFederatedUserAccountsResponse): unknown {
        const obj: any = {};
        if (message.subjectIds) {
            obj.subjectIds = message.subjectIds.map((e) => e);
        } else {
            obj.subjectIds = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SuspendFederatedUserAccountsResponse>, I>>(
        object: I,
    ): SuspendFederatedUserAccountsResponse {
        const message = {
            ...baseSuspendFederatedUserAccountsResponse,
        } as SuspendFederatedUserAccountsResponse;
        message.subjectIds = object.subjectIds?.map((e) => e) || [];
        return message;
    },
};

const baseReactivateFederatedUserAccountsRequest: object = { federationId: '', subjectIds: '' };

export const ReactivateFederatedUserAccountsRequest: {
    encode(message: ReactivateFederatedUserAccountsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ReactivateFederatedUserAccountsRequest;
    fromJSON(object: any): ReactivateFederatedUserAccountsRequest;
    toJSON(message: ReactivateFederatedUserAccountsRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<ReactivateFederatedUserAccountsRequest>, I>>(object: I): ReactivateFederatedUserAccountsRequest;
} = {
    encode(
        message: ReactivateFederatedUserAccountsRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.federationId !== '') {
            writer.uint32(10).string(message.federationId);
        }
        for (const v of message.subjectIds) {
            writer.uint32(18).string(v!);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): ReactivateFederatedUserAccountsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseReactivateFederatedUserAccountsRequest,
        } as ReactivateFederatedUserAccountsRequest;
        message.subjectIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.federationId = reader.string();
                    break;
                case 2:
                    message.subjectIds.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ReactivateFederatedUserAccountsRequest {
        const message = {
            ...baseReactivateFederatedUserAccountsRequest,
        } as ReactivateFederatedUserAccountsRequest;
        message.federationId =
            object.federationId !== undefined && object.federationId !== null
                ? String(object.federationId)
                : '';
        message.subjectIds = (object.subjectIds ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: ReactivateFederatedUserAccountsRequest): unknown {
        const obj: any = {};
        message.federationId !== undefined && (obj.federationId = message.federationId);
        if (message.subjectIds) {
            obj.subjectIds = message.subjectIds.map((e) => e);
        } else {
            obj.subjectIds = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ReactivateFederatedUserAccountsRequest>, I>>(
        object: I,
    ): ReactivateFederatedUserAccountsRequest {
        const message = {
            ...baseReactivateFederatedUserAccountsRequest,
        } as ReactivateFederatedUserAccountsRequest;
        message.federationId = object.federationId ?? '';
        message.subjectIds = object.subjectIds?.map((e) => e) || [];
        return message;
    },
};

const baseReactivateFederatedUserAccountsMetadata: object = { federationId: '', subjectIds: '' };

export const ReactivateFederatedUserAccountsMetadata: {
    encode(message: ReactivateFederatedUserAccountsMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ReactivateFederatedUserAccountsMetadata;
    fromJSON(object: any): ReactivateFederatedUserAccountsMetadata;
    toJSON(message: ReactivateFederatedUserAccountsMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<ReactivateFederatedUserAccountsMetadata>, I>>(object: I): ReactivateFederatedUserAccountsMetadata;
} = {
    encode(
        message: ReactivateFederatedUserAccountsMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.federationId !== '') {
            writer.uint32(10).string(message.federationId);
        }
        for (const v of message.subjectIds) {
            writer.uint32(18).string(v!);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): ReactivateFederatedUserAccountsMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseReactivateFederatedUserAccountsMetadata,
        } as ReactivateFederatedUserAccountsMetadata;
        message.subjectIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.federationId = reader.string();
                    break;
                case 2:
                    message.subjectIds.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ReactivateFederatedUserAccountsMetadata {
        const message = {
            ...baseReactivateFederatedUserAccountsMetadata,
        } as ReactivateFederatedUserAccountsMetadata;
        message.federationId =
            object.federationId !== undefined && object.federationId !== null
                ? String(object.federationId)
                : '';
        message.subjectIds = (object.subjectIds ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: ReactivateFederatedUserAccountsMetadata): unknown {
        const obj: any = {};
        message.federationId !== undefined && (obj.federationId = message.federationId);
        if (message.subjectIds) {
            obj.subjectIds = message.subjectIds.map((e) => e);
        } else {
            obj.subjectIds = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ReactivateFederatedUserAccountsMetadata>, I>>(
        object: I,
    ): ReactivateFederatedUserAccountsMetadata {
        const message = {
            ...baseReactivateFederatedUserAccountsMetadata,
        } as ReactivateFederatedUserAccountsMetadata;
        message.federationId = object.federationId ?? '';
        message.subjectIds = object.subjectIds?.map((e) => e) || [];
        return message;
    },
};

const baseReactivateFederatedUserAccountsResponse: object = { subjectIds: '' };

export const ReactivateFederatedUserAccountsResponse: {
    encode(message: ReactivateFederatedUserAccountsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ReactivateFederatedUserAccountsResponse;
    fromJSON(object: any): ReactivateFederatedUserAccountsResponse;
    toJSON(message: ReactivateFederatedUserAccountsResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<ReactivateFederatedUserAccountsResponse>, I>>(object: I): ReactivateFederatedUserAccountsResponse;
} = {
    encode(
        message: ReactivateFederatedUserAccountsResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.subjectIds) {
            writer.uint32(10).string(v!);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): ReactivateFederatedUserAccountsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseReactivateFederatedUserAccountsResponse,
        } as ReactivateFederatedUserAccountsResponse;
        message.subjectIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subjectIds.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ReactivateFederatedUserAccountsResponse {
        const message = {
            ...baseReactivateFederatedUserAccountsResponse,
        } as ReactivateFederatedUserAccountsResponse;
        message.subjectIds = (object.subjectIds ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: ReactivateFederatedUserAccountsResponse): unknown {
        const obj: any = {};
        if (message.subjectIds) {
            obj.subjectIds = message.subjectIds.map((e) => e);
        } else {
            obj.subjectIds = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ReactivateFederatedUserAccountsResponse>, I>>(
        object: I,
    ): ReactivateFederatedUserAccountsResponse {
        const message = {
            ...baseReactivateFederatedUserAccountsResponse,
        } as ReactivateFederatedUserAccountsResponse;
        message.subjectIds = object.subjectIds?.map((e) => e) || [];
        return message;
    },
};

/** A set of methods for managing federations. */
export const FederationServiceService = {
    /**
     * Returns the specified federation.
     *
     * To get the list of available federations, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.organizationmanager.v1.saml.FederationService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetFederationRequest) =>
            Buffer.from(GetFederationRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetFederationRequest.decode(value),
        responseSerialize: (value: Federation) => Buffer.from(Federation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Federation.decode(value),
    },
    /** Retrieves the list of federations in the specified organization. */
    list: {
        path: '/yandex.cloud.organizationmanager.v1.saml.FederationService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListFederationsRequest) =>
            Buffer.from(ListFederationsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListFederationsRequest.decode(value),
        responseSerialize: (value: ListFederationsResponse) =>
            Buffer.from(ListFederationsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListFederationsResponse.decode(value),
    },
    /** Creates a federation in the specified organization. */
    create: {
        path: '/yandex.cloud.organizationmanager.v1.saml.FederationService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateFederationRequest) =>
            Buffer.from(CreateFederationRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => CreateFederationRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Updates the specified federation. */
    update: {
        path: '/yandex.cloud.organizationmanager.v1.saml.FederationService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateFederationRequest) =>
            Buffer.from(UpdateFederationRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpdateFederationRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Deletes the specified federation. */
    delete: {
        path: '/yandex.cloud.organizationmanager.v1.saml.FederationService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteFederationRequest) =>
            Buffer.from(DeleteFederationRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => DeleteFederationRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Adds users to the specified federation. */
    addUserAccounts: {
        path: '/yandex.cloud.organizationmanager.v1.saml.FederationService/AddUserAccounts',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: AddFederatedUserAccountsRequest) =>
            Buffer.from(AddFederatedUserAccountsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => AddFederatedUserAccountsRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Deletes users from the specified federation. */
    deleteUserAccounts: {
        path: '/yandex.cloud.organizationmanager.v1.saml.FederationService/DeleteUserAccounts',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteFederatedUserAccountsRequest) =>
            Buffer.from(DeleteFederatedUserAccountsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => DeleteFederatedUserAccountsRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Lists users for the specified federation. */
    listUserAccounts: {
        path: '/yandex.cloud.organizationmanager.v1.saml.FederationService/ListUserAccounts',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListFederatedUserAccountsRequest) =>
            Buffer.from(ListFederatedUserAccountsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListFederatedUserAccountsRequest.decode(value),
        responseSerialize: (value: ListFederatedUserAccountsResponse) =>
            Buffer.from(ListFederatedUserAccountsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListFederatedUserAccountsResponse.decode(value),
    },
    /** Lists operations for the specified federation. */
    listOperations: {
        path: '/yandex.cloud.organizationmanager.v1.saml.FederationService/ListOperations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListFederationOperationsRequest) =>
            Buffer.from(ListFederationOperationsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListFederationOperationsRequest.decode(value),
        responseSerialize: (value: ListFederationOperationsResponse) =>
            Buffer.from(ListFederationOperationsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListFederationOperationsResponse.decode(value),
    },
    /**
     * Returns the specified domain in the federation.
     *
     * To get the list of available domains, make a [ListDomains] request.
     */
    getDomain: {
        path: '/yandex.cloud.organizationmanager.v1.saml.FederationService/GetDomain',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetFederationDomainRequest) =>
            Buffer.from(GetFederationDomainRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetFederationDomainRequest.decode(value),
        responseSerialize: (value: Domain) => Buffer.from(Domain.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Domain.decode(value),
    },
    /** Retrieves the list of domains in the specified federation. */
    listDomains: {
        path: '/yandex.cloud.organizationmanager.v1.saml.FederationService/ListDomains',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListFederationDomainsRequest) =>
            Buffer.from(ListFederationDomainsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListFederationDomainsRequest.decode(value),
        responseSerialize: (value: ListFederationDomainsResponse) =>
            Buffer.from(ListFederationDomainsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListFederationDomainsResponse.decode(value),
    },
    /** Adds a domain to the specified federation. */
    addDomain: {
        path: '/yandex.cloud.organizationmanager.v1.saml.FederationService/AddDomain',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: AddFederationDomainRequest) =>
            Buffer.from(AddFederationDomainRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => AddFederationDomainRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Validates a domain in the specified federation. */
    validateDomain: {
        path: '/yandex.cloud.organizationmanager.v1.saml.FederationService/ValidateDomain',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ValidateFederationDomainRequest) =>
            Buffer.from(ValidateFederationDomainRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ValidateFederationDomainRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Deletes the specified domain from the federation. */
    deleteDomain: {
        path: '/yandex.cloud.organizationmanager.v1.saml.FederationService/DeleteDomain',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteFederationDomainRequest) =>
            Buffer.from(DeleteFederationDomainRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => DeleteFederationDomainRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /**
     * Suspend federated user accounts.
     * Method skips non-existent federated user accounts and returns ones that were actually suspended.
     */
    suspendUserAccounts: {
        path: '/yandex.cloud.organizationmanager.v1.saml.FederationService/SuspendUserAccounts',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: SuspendFederatedUserAccountsRequest) =>
            Buffer.from(SuspendFederatedUserAccountsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => SuspendFederatedUserAccountsRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /**
     * Reactivate federated user accounts.
     * Method skips non-existent federated user accounts and returns ones that were actually reactivated.
     */
    reactivateUserAccounts: {
        path: '/yandex.cloud.organizationmanager.v1.saml.FederationService/ReactivateUserAccounts',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ReactivateFederatedUserAccountsRequest) =>
            Buffer.from(ReactivateFederatedUserAccountsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ReactivateFederatedUserAccountsRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
} as const;

export interface FederationServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified federation.
     *
     * To get the list of available federations, make a [List] request.
     */
    get: handleUnaryCall<GetFederationRequest, Federation>;
    /** Retrieves the list of federations in the specified organization. */
    list: handleUnaryCall<ListFederationsRequest, ListFederationsResponse>;
    /** Creates a federation in the specified organization. */
    create: handleUnaryCall<CreateFederationRequest, Operation>;
    /** Updates the specified federation. */
    update: handleUnaryCall<UpdateFederationRequest, Operation>;
    /** Deletes the specified federation. */
    delete: handleUnaryCall<DeleteFederationRequest, Operation>;
    /** Adds users to the specified federation. */
    addUserAccounts: handleUnaryCall<AddFederatedUserAccountsRequest, Operation>;
    /** Deletes users from the specified federation. */
    deleteUserAccounts: handleUnaryCall<DeleteFederatedUserAccountsRequest, Operation>;
    /** Lists users for the specified federation. */
    listUserAccounts: handleUnaryCall<
        ListFederatedUserAccountsRequest,
        ListFederatedUserAccountsResponse
    >;
    /** Lists operations for the specified federation. */
    listOperations: handleUnaryCall<
        ListFederationOperationsRequest,
        ListFederationOperationsResponse
    >;
    /**
     * Returns the specified domain in the federation.
     *
     * To get the list of available domains, make a [ListDomains] request.
     */
    getDomain: handleUnaryCall<GetFederationDomainRequest, Domain>;
    /** Retrieves the list of domains in the specified federation. */
    listDomains: handleUnaryCall<ListFederationDomainsRequest, ListFederationDomainsResponse>;
    /** Adds a domain to the specified federation. */
    addDomain: handleUnaryCall<AddFederationDomainRequest, Operation>;
    /** Validates a domain in the specified federation. */
    validateDomain: handleUnaryCall<ValidateFederationDomainRequest, Operation>;
    /** Deletes the specified domain from the federation. */
    deleteDomain: handleUnaryCall<DeleteFederationDomainRequest, Operation>;
    /**
     * Suspend federated user accounts.
     * Method skips non-existent federated user accounts and returns ones that were actually suspended.
     */
    suspendUserAccounts: handleUnaryCall<SuspendFederatedUserAccountsRequest, Operation>;
    /**
     * Reactivate federated user accounts.
     * Method skips non-existent federated user accounts and returns ones that were actually reactivated.
     */
    reactivateUserAccounts: handleUnaryCall<ReactivateFederatedUserAccountsRequest, Operation>;
}

export interface FederationServiceClient extends Client {
    /**
     * Returns the specified federation.
     *
     * To get the list of available federations, make a [List] request.
     */
    get(
        request: GetFederationRequest,
        callback: (error: ServiceError | null, response: Federation) => void,
    ): ClientUnaryCall;
    get(
        request: GetFederationRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Federation) => void,
    ): ClientUnaryCall;
    get(
        request: GetFederationRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Federation) => void,
    ): ClientUnaryCall;
    /** Retrieves the list of federations in the specified organization. */
    list(
        request: ListFederationsRequest,
        callback: (error: ServiceError | null, response: ListFederationsResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListFederationsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListFederationsResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListFederationsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListFederationsResponse) => void,
    ): ClientUnaryCall;
    /** Creates a federation in the specified organization. */
    create(
        request: CreateFederationRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateFederationRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateFederationRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Updates the specified federation. */
    update(
        request: UpdateFederationRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateFederationRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateFederationRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Deletes the specified federation. */
    delete(
        request: DeleteFederationRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteFederationRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteFederationRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Adds users to the specified federation. */
    addUserAccounts(
        request: AddFederatedUserAccountsRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    addUserAccounts(
        request: AddFederatedUserAccountsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    addUserAccounts(
        request: AddFederatedUserAccountsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Deletes users from the specified federation. */
    deleteUserAccounts(
        request: DeleteFederatedUserAccountsRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    deleteUserAccounts(
        request: DeleteFederatedUserAccountsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    deleteUserAccounts(
        request: DeleteFederatedUserAccountsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Lists users for the specified federation. */
    listUserAccounts(
        request: ListFederatedUserAccountsRequest,
        callback: (error: ServiceError | null, response: ListFederatedUserAccountsResponse) => void,
    ): ClientUnaryCall;
    listUserAccounts(
        request: ListFederatedUserAccountsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListFederatedUserAccountsResponse) => void,
    ): ClientUnaryCall;
    listUserAccounts(
        request: ListFederatedUserAccountsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListFederatedUserAccountsResponse) => void,
    ): ClientUnaryCall;
    /** Lists operations for the specified federation. */
    listOperations(
        request: ListFederationOperationsRequest,
        callback: (error: ServiceError | null, response: ListFederationOperationsResponse) => void,
    ): ClientUnaryCall;
    listOperations(
        request: ListFederationOperationsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListFederationOperationsResponse) => void,
    ): ClientUnaryCall;
    listOperations(
        request: ListFederationOperationsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListFederationOperationsResponse) => void,
    ): ClientUnaryCall;
    /**
     * Returns the specified domain in the federation.
     *
     * To get the list of available domains, make a [ListDomains] request.
     */
    getDomain(
        request: GetFederationDomainRequest,
        callback: (error: ServiceError | null, response: Domain) => void,
    ): ClientUnaryCall;
    getDomain(
        request: GetFederationDomainRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Domain) => void,
    ): ClientUnaryCall;
    getDomain(
        request: GetFederationDomainRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Domain) => void,
    ): ClientUnaryCall;
    /** Retrieves the list of domains in the specified federation. */
    listDomains(
        request: ListFederationDomainsRequest,
        callback: (error: ServiceError | null, response: ListFederationDomainsResponse) => void,
    ): ClientUnaryCall;
    listDomains(
        request: ListFederationDomainsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListFederationDomainsResponse) => void,
    ): ClientUnaryCall;
    listDomains(
        request: ListFederationDomainsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListFederationDomainsResponse) => void,
    ): ClientUnaryCall;
    /** Adds a domain to the specified federation. */
    addDomain(
        request: AddFederationDomainRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    addDomain(
        request: AddFederationDomainRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    addDomain(
        request: AddFederationDomainRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Validates a domain in the specified federation. */
    validateDomain(
        request: ValidateFederationDomainRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    validateDomain(
        request: ValidateFederationDomainRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    validateDomain(
        request: ValidateFederationDomainRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Deletes the specified domain from the federation. */
    deleteDomain(
        request: DeleteFederationDomainRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    deleteDomain(
        request: DeleteFederationDomainRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    deleteDomain(
        request: DeleteFederationDomainRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /**
     * Suspend federated user accounts.
     * Method skips non-existent federated user accounts and returns ones that were actually suspended.
     */
    suspendUserAccounts(
        request: SuspendFederatedUserAccountsRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    suspendUserAccounts(
        request: SuspendFederatedUserAccountsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    suspendUserAccounts(
        request: SuspendFederatedUserAccountsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /**
     * Reactivate federated user accounts.
     * Method skips non-existent federated user accounts and returns ones that were actually reactivated.
     */
    reactivateUserAccounts(
        request: ReactivateFederatedUserAccountsRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    reactivateUserAccounts(
        request: ReactivateFederatedUserAccountsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    reactivateUserAccounts(
        request: ReactivateFederatedUserAccountsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
}

export const FederationServiceClient = makeGenericClientConstructor(
    FederationServiceService,
    'yandex.cloud.organizationmanager.v1.saml.FederationService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): FederationServiceClient;
    service: typeof FederationServiceService;
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
