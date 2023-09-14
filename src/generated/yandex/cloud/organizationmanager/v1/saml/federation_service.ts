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
import { Duration } from "../../../../../google/protobuf/duration";
import {
  BindingType,
  FederationSecuritySettings,
  Federation,
  bindingTypeFromJSON,
  bindingTypeToJSON,
} from "../../../../../yandex/cloud/organizationmanager/v1/saml/federation";
import { FieldMask } from "../../../../../google/protobuf/field_mask";
import { UserAccount } from "../../../../../yandex/cloud/organizationmanager/v1/user_account";
import { Operation } from "../../../../../yandex/cloud/operation/operation";

export const protobufPackage = "yandex.cloud.organizationmanager.v1.saml";

export interface GetFederationRequest {
  $type: "yandex.cloud.organizationmanager.v1.saml.GetFederationRequest";
  /**
   * ID of the federation to return.
   * To get the federation ID, make a [FederationService.List] request.
   */
  federationId: string;
}

export interface ListFederationsRequest {
  $type: "yandex.cloud.organizationmanager.v1.saml.ListFederationsRequest";
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
  $type: "yandex.cloud.organizationmanager.v1.saml.ListFederationsResponse";
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
  $type: "yandex.cloud.organizationmanager.v1.saml.CreateFederationRequest";
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
  $type: "yandex.cloud.organizationmanager.v1.saml.CreateFederationRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface CreateFederationMetadata {
  $type: "yandex.cloud.organizationmanager.v1.saml.CreateFederationMetadata";
  /** ID of the federation that is being created. */
  federationId: string;
}

export interface UpdateFederationRequest {
  $type: "yandex.cloud.organizationmanager.v1.saml.UpdateFederationRequest";
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
  $type: "yandex.cloud.organizationmanager.v1.saml.UpdateFederationRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface UpdateFederationMetadata {
  $type: "yandex.cloud.organizationmanager.v1.saml.UpdateFederationMetadata";
  /** ID of the federation that is being updated. */
  federationId: string;
}

export interface DeleteFederationRequest {
  $type: "yandex.cloud.organizationmanager.v1.saml.DeleteFederationRequest";
  /**
   * ID of the federation to delete.
   * To get the federation ID, make a [FederationService.List] request.
   */
  federationId: string;
}

export interface DeleteFederationMetadata {
  $type: "yandex.cloud.organizationmanager.v1.saml.DeleteFederationMetadata";
  /** ID of the federation that is being deleted. */
  federationId: string;
}

export interface AddFederatedUserAccountsRequest {
  $type: "yandex.cloud.organizationmanager.v1.saml.AddFederatedUserAccountsRequest";
  /** ID of the federation to add users. */
  federationId: string;
  /**
   * Name IDs returned by the Identity Provider (IdP) on successful authentication.
   * These may be UPNs or user email addresses.
   */
  nameIds: string[];
}

export interface AddFederatedUserAccountsMetadata {
  $type: "yandex.cloud.organizationmanager.v1.saml.AddFederatedUserAccountsMetadata";
  /** ID of the federation that is being altered. */
  federationId: string;
}

export interface AddFederatedUserAccountsResponse {
  $type: "yandex.cloud.organizationmanager.v1.saml.AddFederatedUserAccountsResponse";
  /** List of users created by [FederationService.AddUserAccounts] request. */
  userAccounts: UserAccount[];
}

export interface ListFederatedUserAccountsRequest {
  $type: "yandex.cloud.organizationmanager.v1.saml.ListFederatedUserAccountsRequest";
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
  $type: "yandex.cloud.organizationmanager.v1.saml.ListFederatedUserAccountsResponse";
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
  $type: "yandex.cloud.organizationmanager.v1.saml.ListFederationOperationsRequest";
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
  $type: "yandex.cloud.organizationmanager.v1.saml.ListFederationOperationsResponse";
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

const baseGetFederationRequest: object = {
  $type: "yandex.cloud.organizationmanager.v1.saml.GetFederationRequest",
  federationId: "",
};

export const GetFederationRequest = {
  $type:
    "yandex.cloud.organizationmanager.v1.saml.GetFederationRequest" as const,

  encode(
    message: GetFederationRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.federationId !== "") {
      writer.uint32(10).string(message.federationId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetFederationRequest {
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
        : "";
    return message;
  },

  toJSON(message: GetFederationRequest): unknown {
    const obj: any = {};
    message.federationId !== undefined &&
      (obj.federationId = message.federationId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetFederationRequest>, I>>(
    object: I
  ): GetFederationRequest {
    const message = { ...baseGetFederationRequest } as GetFederationRequest;
    message.federationId = object.federationId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetFederationRequest.$type, GetFederationRequest);

const baseListFederationsRequest: object = {
  $type: "yandex.cloud.organizationmanager.v1.saml.ListFederationsRequest",
  organizationId: "",
  pageSize: 0,
  pageToken: "",
  filter: "",
};

export const ListFederationsRequest = {
  $type:
    "yandex.cloud.organizationmanager.v1.saml.ListFederationsRequest" as const,

  encode(
    message: ListFederationsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.organizationId !== "") {
      writer.uint32(50).string(message.organizationId);
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
  ): ListFederationsRequest {
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

  toJSON(message: ListFederationsRequest): unknown {
    const obj: any = {};
    message.organizationId !== undefined &&
      (obj.organizationId = message.organizationId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    message.filter !== undefined && (obj.filter = message.filter);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListFederationsRequest>, I>>(
    object: I
  ): ListFederationsRequest {
    const message = { ...baseListFederationsRequest } as ListFederationsRequest;
    message.organizationId = object.organizationId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListFederationsRequest.$type, ListFederationsRequest);

const baseListFederationsResponse: object = {
  $type: "yandex.cloud.organizationmanager.v1.saml.ListFederationsResponse",
  nextPageToken: "",
};

export const ListFederationsResponse = {
  $type:
    "yandex.cloud.organizationmanager.v1.saml.ListFederationsResponse" as const,

  encode(
    message: ListFederationsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.federations) {
      Federation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListFederationsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListFederationsResponse,
    } as ListFederationsResponse;
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
    const message = {
      ...baseListFederationsResponse,
    } as ListFederationsResponse;
    message.federations = (object.federations ?? []).map((e: any) =>
      Federation.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListFederationsResponse): unknown {
    const obj: any = {};
    if (message.federations) {
      obj.federations = message.federations.map((e) =>
        e ? Federation.toJSON(e) : undefined
      );
    } else {
      obj.federations = [];
    }
    message.nextPageToken !== undefined &&
      (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListFederationsResponse>, I>>(
    object: I
  ): ListFederationsResponse {
    const message = {
      ...baseListFederationsResponse,
    } as ListFederationsResponse;
    message.federations =
      object.federations?.map((e) => Federation.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListFederationsResponse.$type, ListFederationsResponse);

const baseCreateFederationRequest: object = {
  $type: "yandex.cloud.organizationmanager.v1.saml.CreateFederationRequest",
  organizationId: "",
  name: "",
  description: "",
  autoCreateAccountOnLogin: false,
  issuer: "",
  ssoBinding: 0,
  ssoUrl: "",
  caseInsensitiveNameIds: false,
};

export const CreateFederationRequest = {
  $type:
    "yandex.cloud.organizationmanager.v1.saml.CreateFederationRequest" as const,

  encode(
    message: CreateFederationRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.organizationId !== "") {
      writer.uint32(10).string(message.organizationId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.cookieMaxAge !== undefined) {
      Duration.encode(message.cookieMaxAge, writer.uint32(34).fork()).ldelim();
    }
    if (message.autoCreateAccountOnLogin === true) {
      writer.uint32(40).bool(message.autoCreateAccountOnLogin);
    }
    if (message.issuer !== "") {
      writer.uint32(50).string(message.issuer);
    }
    if (message.ssoBinding !== 0) {
      writer.uint32(56).int32(message.ssoBinding);
    }
    if (message.ssoUrl !== "") {
      writer.uint32(66).string(message.ssoUrl);
    }
    if (message.securitySettings !== undefined) {
      FederationSecuritySettings.encode(
        message.securitySettings,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.caseInsensitiveNameIds === true) {
      writer.uint32(80).bool(message.caseInsensitiveNameIds);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      CreateFederationRequest_LabelsEntry.encode(
        {
          $type:
            "yandex.cloud.organizationmanager.v1.saml.CreateFederationRequest.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(90).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateFederationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateFederationRequest,
    } as CreateFederationRequest;
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
            reader.uint32()
          );
          break;
        case 10:
          message.caseInsensitiveNameIds = reader.bool();
          break;
        case 11:
          const entry11 = CreateFederationRequest_LabelsEntry.decode(
            reader,
            reader.uint32()
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
    const message = {
      ...baseCreateFederationRequest,
    } as CreateFederationRequest;
    message.organizationId =
      object.organizationId !== undefined && object.organizationId !== null
        ? String(object.organizationId)
        : "";
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.description =
      object.description !== undefined && object.description !== null
        ? String(object.description)
        : "";
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
      object.issuer !== undefined && object.issuer !== null
        ? String(object.issuer)
        : "";
    message.ssoBinding =
      object.ssoBinding !== undefined && object.ssoBinding !== null
        ? bindingTypeFromJSON(object.ssoBinding)
        : 0;
    message.ssoUrl =
      object.ssoUrl !== undefined && object.ssoUrl !== null
        ? String(object.ssoUrl)
        : "";
    message.securitySettings =
      object.securitySettings !== undefined && object.securitySettings !== null
        ? FederationSecuritySettings.fromJSON(object.securitySettings)
        : undefined;
    message.caseInsensitiveNameIds =
      object.caseInsensitiveNameIds !== undefined &&
      object.caseInsensitiveNameIds !== null
        ? Boolean(object.caseInsensitiveNameIds)
        : false;
    message.labels = Object.entries(object.labels ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      acc[key] = String(value);
      return acc;
    }, {});
    return message;
  },

  toJSON(message: CreateFederationRequest): unknown {
    const obj: any = {};
    message.organizationId !== undefined &&
      (obj.organizationId = message.organizationId);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
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
    object: I
  ): CreateFederationRequest {
    const message = {
      ...baseCreateFederationRequest,
    } as CreateFederationRequest;
    message.organizationId = object.organizationId ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.cookieMaxAge =
      object.cookieMaxAge !== undefined && object.cookieMaxAge !== null
        ? Duration.fromPartial(object.cookieMaxAge)
        : undefined;
    message.autoCreateAccountOnLogin = object.autoCreateAccountOnLogin ?? false;
    message.issuer = object.issuer ?? "";
    message.ssoBinding = object.ssoBinding ?? 0;
    message.ssoUrl = object.ssoUrl ?? "";
    message.securitySettings =
      object.securitySettings !== undefined && object.securitySettings !== null
        ? FederationSecuritySettings.fromPartial(object.securitySettings)
        : undefined;
    message.caseInsensitiveNameIds = object.caseInsensitiveNameIds ?? false;
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

messageTypeRegistry.set(CreateFederationRequest.$type, CreateFederationRequest);

const baseCreateFederationRequest_LabelsEntry: object = {
  $type:
    "yandex.cloud.organizationmanager.v1.saml.CreateFederationRequest.LabelsEntry",
  key: "",
  value: "",
};

export const CreateFederationRequest_LabelsEntry = {
  $type:
    "yandex.cloud.organizationmanager.v1.saml.CreateFederationRequest.LabelsEntry" as const,

  encode(
    message: CreateFederationRequest_LabelsEntry,
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
  ): CreateFederationRequest_LabelsEntry {
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
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: CreateFederationRequest_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<CreateFederationRequest_LabelsEntry>, I>
  >(object: I): CreateFederationRequest_LabelsEntry {
    const message = {
      ...baseCreateFederationRequest_LabelsEntry,
    } as CreateFederationRequest_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  CreateFederationRequest_LabelsEntry.$type,
  CreateFederationRequest_LabelsEntry
);

const baseCreateFederationMetadata: object = {
  $type: "yandex.cloud.organizationmanager.v1.saml.CreateFederationMetadata",
  federationId: "",
};

export const CreateFederationMetadata = {
  $type:
    "yandex.cloud.organizationmanager.v1.saml.CreateFederationMetadata" as const,

  encode(
    message: CreateFederationMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.federationId !== "") {
      writer.uint32(10).string(message.federationId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateFederationMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateFederationMetadata,
    } as CreateFederationMetadata;
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
    const message = {
      ...baseCreateFederationMetadata,
    } as CreateFederationMetadata;
    message.federationId =
      object.federationId !== undefined && object.federationId !== null
        ? String(object.federationId)
        : "";
    return message;
  },

  toJSON(message: CreateFederationMetadata): unknown {
    const obj: any = {};
    message.federationId !== undefined &&
      (obj.federationId = message.federationId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateFederationMetadata>, I>>(
    object: I
  ): CreateFederationMetadata {
    const message = {
      ...baseCreateFederationMetadata,
    } as CreateFederationMetadata;
    message.federationId = object.federationId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  CreateFederationMetadata.$type,
  CreateFederationMetadata
);

const baseUpdateFederationRequest: object = {
  $type: "yandex.cloud.organizationmanager.v1.saml.UpdateFederationRequest",
  federationId: "",
  name: "",
  description: "",
  autoCreateAccountOnLogin: false,
  issuer: "",
  ssoBinding: 0,
  ssoUrl: "",
  caseInsensitiveNameIds: false,
};

export const UpdateFederationRequest = {
  $type:
    "yandex.cloud.organizationmanager.v1.saml.UpdateFederationRequest" as const,

  encode(
    message: UpdateFederationRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.federationId !== "") {
      writer.uint32(10).string(message.federationId);
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
    if (message.cookieMaxAge !== undefined) {
      Duration.encode(message.cookieMaxAge, writer.uint32(42).fork()).ldelim();
    }
    if (message.autoCreateAccountOnLogin === true) {
      writer.uint32(48).bool(message.autoCreateAccountOnLogin);
    }
    if (message.issuer !== "") {
      writer.uint32(58).string(message.issuer);
    }
    if (message.ssoBinding !== 0) {
      writer.uint32(64).int32(message.ssoBinding);
    }
    if (message.ssoUrl !== "") {
      writer.uint32(74).string(message.ssoUrl);
    }
    if (message.securitySettings !== undefined) {
      FederationSecuritySettings.encode(
        message.securitySettings,
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.caseInsensitiveNameIds === true) {
      writer.uint32(96).bool(message.caseInsensitiveNameIds);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      UpdateFederationRequest_LabelsEntry.encode(
        {
          $type:
            "yandex.cloud.organizationmanager.v1.saml.UpdateFederationRequest.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(106).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateFederationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateFederationRequest,
    } as UpdateFederationRequest;
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
            reader.uint32()
          );
          break;
        case 12:
          message.caseInsensitiveNameIds = reader.bool();
          break;
        case 13:
          const entry13 = UpdateFederationRequest_LabelsEntry.decode(
            reader,
            reader.uint32()
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
    const message = {
      ...baseUpdateFederationRequest,
    } as UpdateFederationRequest;
    message.federationId =
      object.federationId !== undefined && object.federationId !== null
        ? String(object.federationId)
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
      object.issuer !== undefined && object.issuer !== null
        ? String(object.issuer)
        : "";
    message.ssoBinding =
      object.ssoBinding !== undefined && object.ssoBinding !== null
        ? bindingTypeFromJSON(object.ssoBinding)
        : 0;
    message.ssoUrl =
      object.ssoUrl !== undefined && object.ssoUrl !== null
        ? String(object.ssoUrl)
        : "";
    message.securitySettings =
      object.securitySettings !== undefined && object.securitySettings !== null
        ? FederationSecuritySettings.fromJSON(object.securitySettings)
        : undefined;
    message.caseInsensitiveNameIds =
      object.caseInsensitiveNameIds !== undefined &&
      object.caseInsensitiveNameIds !== null
        ? Boolean(object.caseInsensitiveNameIds)
        : false;
    message.labels = Object.entries(object.labels ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      acc[key] = String(value);
      return acc;
    }, {});
    return message;
  },

  toJSON(message: UpdateFederationRequest): unknown {
    const obj: any = {};
    message.federationId !== undefined &&
      (obj.federationId = message.federationId);
    message.updateMask !== undefined &&
      (obj.updateMask = message.updateMask
        ? FieldMask.toJSON(message.updateMask)
        : undefined);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
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
    object: I
  ): UpdateFederationRequest {
    const message = {
      ...baseUpdateFederationRequest,
    } as UpdateFederationRequest;
    message.federationId = object.federationId ?? "";
    message.updateMask =
      object.updateMask !== undefined && object.updateMask !== null
        ? FieldMask.fromPartial(object.updateMask)
        : undefined;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.cookieMaxAge =
      object.cookieMaxAge !== undefined && object.cookieMaxAge !== null
        ? Duration.fromPartial(object.cookieMaxAge)
        : undefined;
    message.autoCreateAccountOnLogin = object.autoCreateAccountOnLogin ?? false;
    message.issuer = object.issuer ?? "";
    message.ssoBinding = object.ssoBinding ?? 0;
    message.ssoUrl = object.ssoUrl ?? "";
    message.securitySettings =
      object.securitySettings !== undefined && object.securitySettings !== null
        ? FederationSecuritySettings.fromPartial(object.securitySettings)
        : undefined;
    message.caseInsensitiveNameIds = object.caseInsensitiveNameIds ?? false;
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

messageTypeRegistry.set(UpdateFederationRequest.$type, UpdateFederationRequest);

const baseUpdateFederationRequest_LabelsEntry: object = {
  $type:
    "yandex.cloud.organizationmanager.v1.saml.UpdateFederationRequest.LabelsEntry",
  key: "",
  value: "",
};

export const UpdateFederationRequest_LabelsEntry = {
  $type:
    "yandex.cloud.organizationmanager.v1.saml.UpdateFederationRequest.LabelsEntry" as const,

  encode(
    message: UpdateFederationRequest_LabelsEntry,
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
  ): UpdateFederationRequest_LabelsEntry {
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
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: UpdateFederationRequest_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<UpdateFederationRequest_LabelsEntry>, I>
  >(object: I): UpdateFederationRequest_LabelsEntry {
    const message = {
      ...baseUpdateFederationRequest_LabelsEntry,
    } as UpdateFederationRequest_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  UpdateFederationRequest_LabelsEntry.$type,
  UpdateFederationRequest_LabelsEntry
);

const baseUpdateFederationMetadata: object = {
  $type: "yandex.cloud.organizationmanager.v1.saml.UpdateFederationMetadata",
  federationId: "",
};

export const UpdateFederationMetadata = {
  $type:
    "yandex.cloud.organizationmanager.v1.saml.UpdateFederationMetadata" as const,

  encode(
    message: UpdateFederationMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.federationId !== "") {
      writer.uint32(10).string(message.federationId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateFederationMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateFederationMetadata,
    } as UpdateFederationMetadata;
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
    const message = {
      ...baseUpdateFederationMetadata,
    } as UpdateFederationMetadata;
    message.federationId =
      object.federationId !== undefined && object.federationId !== null
        ? String(object.federationId)
        : "";
    return message;
  },

  toJSON(message: UpdateFederationMetadata): unknown {
    const obj: any = {};
    message.federationId !== undefined &&
      (obj.federationId = message.federationId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateFederationMetadata>, I>>(
    object: I
  ): UpdateFederationMetadata {
    const message = {
      ...baseUpdateFederationMetadata,
    } as UpdateFederationMetadata;
    message.federationId = object.federationId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  UpdateFederationMetadata.$type,
  UpdateFederationMetadata
);

const baseDeleteFederationRequest: object = {
  $type: "yandex.cloud.organizationmanager.v1.saml.DeleteFederationRequest",
  federationId: "",
};

export const DeleteFederationRequest = {
  $type:
    "yandex.cloud.organizationmanager.v1.saml.DeleteFederationRequest" as const,

  encode(
    message: DeleteFederationRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.federationId !== "") {
      writer.uint32(10).string(message.federationId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteFederationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeleteFederationRequest,
    } as DeleteFederationRequest;
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
    const message = {
      ...baseDeleteFederationRequest,
    } as DeleteFederationRequest;
    message.federationId =
      object.federationId !== undefined && object.federationId !== null
        ? String(object.federationId)
        : "";
    return message;
  },

  toJSON(message: DeleteFederationRequest): unknown {
    const obj: any = {};
    message.federationId !== undefined &&
      (obj.federationId = message.federationId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteFederationRequest>, I>>(
    object: I
  ): DeleteFederationRequest {
    const message = {
      ...baseDeleteFederationRequest,
    } as DeleteFederationRequest;
    message.federationId = object.federationId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteFederationRequest.$type, DeleteFederationRequest);

const baseDeleteFederationMetadata: object = {
  $type: "yandex.cloud.organizationmanager.v1.saml.DeleteFederationMetadata",
  federationId: "",
};

export const DeleteFederationMetadata = {
  $type:
    "yandex.cloud.organizationmanager.v1.saml.DeleteFederationMetadata" as const,

  encode(
    message: DeleteFederationMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.federationId !== "") {
      writer.uint32(10).string(message.federationId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteFederationMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeleteFederationMetadata,
    } as DeleteFederationMetadata;
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
    const message = {
      ...baseDeleteFederationMetadata,
    } as DeleteFederationMetadata;
    message.federationId =
      object.federationId !== undefined && object.federationId !== null
        ? String(object.federationId)
        : "";
    return message;
  },

  toJSON(message: DeleteFederationMetadata): unknown {
    const obj: any = {};
    message.federationId !== undefined &&
      (obj.federationId = message.federationId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteFederationMetadata>, I>>(
    object: I
  ): DeleteFederationMetadata {
    const message = {
      ...baseDeleteFederationMetadata,
    } as DeleteFederationMetadata;
    message.federationId = object.federationId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  DeleteFederationMetadata.$type,
  DeleteFederationMetadata
);

const baseAddFederatedUserAccountsRequest: object = {
  $type:
    "yandex.cloud.organizationmanager.v1.saml.AddFederatedUserAccountsRequest",
  federationId: "",
  nameIds: "",
};

export const AddFederatedUserAccountsRequest = {
  $type:
    "yandex.cloud.organizationmanager.v1.saml.AddFederatedUserAccountsRequest" as const,

  encode(
    message: AddFederatedUserAccountsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.federationId !== "") {
      writer.uint32(10).string(message.federationId);
    }
    for (const v of message.nameIds) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AddFederatedUserAccountsRequest {
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
        : "";
    message.nameIds = (object.nameIds ?? []).map((e: any) => String(e));
    return message;
  },

  toJSON(message: AddFederatedUserAccountsRequest): unknown {
    const obj: any = {};
    message.federationId !== undefined &&
      (obj.federationId = message.federationId);
    if (message.nameIds) {
      obj.nameIds = message.nameIds.map((e) => e);
    } else {
      obj.nameIds = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AddFederatedUserAccountsRequest>, I>>(
    object: I
  ): AddFederatedUserAccountsRequest {
    const message = {
      ...baseAddFederatedUserAccountsRequest,
    } as AddFederatedUserAccountsRequest;
    message.federationId = object.federationId ?? "";
    message.nameIds = object.nameIds?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(
  AddFederatedUserAccountsRequest.$type,
  AddFederatedUserAccountsRequest
);

const baseAddFederatedUserAccountsMetadata: object = {
  $type:
    "yandex.cloud.organizationmanager.v1.saml.AddFederatedUserAccountsMetadata",
  federationId: "",
};

export const AddFederatedUserAccountsMetadata = {
  $type:
    "yandex.cloud.organizationmanager.v1.saml.AddFederatedUserAccountsMetadata" as const,

  encode(
    message: AddFederatedUserAccountsMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.federationId !== "") {
      writer.uint32(10).string(message.federationId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AddFederatedUserAccountsMetadata {
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
        : "";
    return message;
  },

  toJSON(message: AddFederatedUserAccountsMetadata): unknown {
    const obj: any = {};
    message.federationId !== undefined &&
      (obj.federationId = message.federationId);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<AddFederatedUserAccountsMetadata>, I>
  >(object: I): AddFederatedUserAccountsMetadata {
    const message = {
      ...baseAddFederatedUserAccountsMetadata,
    } as AddFederatedUserAccountsMetadata;
    message.federationId = object.federationId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  AddFederatedUserAccountsMetadata.$type,
  AddFederatedUserAccountsMetadata
);

const baseAddFederatedUserAccountsResponse: object = {
  $type:
    "yandex.cloud.organizationmanager.v1.saml.AddFederatedUserAccountsResponse",
};

export const AddFederatedUserAccountsResponse = {
  $type:
    "yandex.cloud.organizationmanager.v1.saml.AddFederatedUserAccountsResponse" as const,

  encode(
    message: AddFederatedUserAccountsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.userAccounts) {
      UserAccount.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AddFederatedUserAccountsResponse {
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
          message.userAccounts.push(
            UserAccount.decode(reader, reader.uint32())
          );
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
    message.userAccounts = (object.userAccounts ?? []).map((e: any) =>
      UserAccount.fromJSON(e)
    );
    return message;
  },

  toJSON(message: AddFederatedUserAccountsResponse): unknown {
    const obj: any = {};
    if (message.userAccounts) {
      obj.userAccounts = message.userAccounts.map((e) =>
        e ? UserAccount.toJSON(e) : undefined
      );
    } else {
      obj.userAccounts = [];
    }
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<AddFederatedUserAccountsResponse>, I>
  >(object: I): AddFederatedUserAccountsResponse {
    const message = {
      ...baseAddFederatedUserAccountsResponse,
    } as AddFederatedUserAccountsResponse;
    message.userAccounts =
      object.userAccounts?.map((e) => UserAccount.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(
  AddFederatedUserAccountsResponse.$type,
  AddFederatedUserAccountsResponse
);

const baseListFederatedUserAccountsRequest: object = {
  $type:
    "yandex.cloud.organizationmanager.v1.saml.ListFederatedUserAccountsRequest",
  federationId: "",
  pageSize: 0,
  pageToken: "",
  filter: "",
};

export const ListFederatedUserAccountsRequest = {
  $type:
    "yandex.cloud.organizationmanager.v1.saml.ListFederatedUserAccountsRequest" as const,

  encode(
    message: ListFederatedUserAccountsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.federationId !== "") {
      writer.uint32(10).string(message.federationId);
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
  ): ListFederatedUserAccountsRequest {
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

  toJSON(message: ListFederatedUserAccountsRequest): unknown {
    const obj: any = {};
    message.federationId !== undefined &&
      (obj.federationId = message.federationId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    message.filter !== undefined && (obj.filter = message.filter);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<ListFederatedUserAccountsRequest>, I>
  >(object: I): ListFederatedUserAccountsRequest {
    const message = {
      ...baseListFederatedUserAccountsRequest,
    } as ListFederatedUserAccountsRequest;
    message.federationId = object.federationId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListFederatedUserAccountsRequest.$type,
  ListFederatedUserAccountsRequest
);

const baseListFederatedUserAccountsResponse: object = {
  $type:
    "yandex.cloud.organizationmanager.v1.saml.ListFederatedUserAccountsResponse",
  nextPageToken: "",
};

export const ListFederatedUserAccountsResponse = {
  $type:
    "yandex.cloud.organizationmanager.v1.saml.ListFederatedUserAccountsResponse" as const,

  encode(
    message: ListFederatedUserAccountsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.userAccounts) {
      UserAccount.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListFederatedUserAccountsResponse {
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
          message.userAccounts.push(
            UserAccount.decode(reader, reader.uint32())
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

  fromJSON(object: any): ListFederatedUserAccountsResponse {
    const message = {
      ...baseListFederatedUserAccountsResponse,
    } as ListFederatedUserAccountsResponse;
    message.userAccounts = (object.userAccounts ?? []).map((e: any) =>
      UserAccount.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListFederatedUserAccountsResponse): unknown {
    const obj: any = {};
    if (message.userAccounts) {
      obj.userAccounts = message.userAccounts.map((e) =>
        e ? UserAccount.toJSON(e) : undefined
      );
    } else {
      obj.userAccounts = [];
    }
    message.nextPageToken !== undefined &&
      (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<ListFederatedUserAccountsResponse>, I>
  >(object: I): ListFederatedUserAccountsResponse {
    const message = {
      ...baseListFederatedUserAccountsResponse,
    } as ListFederatedUserAccountsResponse;
    message.userAccounts =
      object.userAccounts?.map((e) => UserAccount.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListFederatedUserAccountsResponse.$type,
  ListFederatedUserAccountsResponse
);

const baseListFederationOperationsRequest: object = {
  $type:
    "yandex.cloud.organizationmanager.v1.saml.ListFederationOperationsRequest",
  federationId: "",
  pageSize: 0,
  pageToken: "",
};

export const ListFederationOperationsRequest = {
  $type:
    "yandex.cloud.organizationmanager.v1.saml.ListFederationOperationsRequest" as const,

  encode(
    message: ListFederationOperationsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.federationId !== "") {
      writer.uint32(10).string(message.federationId);
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
  ): ListFederationOperationsRequest {
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

  toJSON(message: ListFederationOperationsRequest): unknown {
    const obj: any = {};
    message.federationId !== undefined &&
      (obj.federationId = message.federationId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListFederationOperationsRequest>, I>>(
    object: I
  ): ListFederationOperationsRequest {
    const message = {
      ...baseListFederationOperationsRequest,
    } as ListFederationOperationsRequest;
    message.federationId = object.federationId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListFederationOperationsRequest.$type,
  ListFederationOperationsRequest
);

const baseListFederationOperationsResponse: object = {
  $type:
    "yandex.cloud.organizationmanager.v1.saml.ListFederationOperationsResponse",
  nextPageToken: "",
};

export const ListFederationOperationsResponse = {
  $type:
    "yandex.cloud.organizationmanager.v1.saml.ListFederationOperationsResponse" as const,

  encode(
    message: ListFederationOperationsResponse,
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
  ): ListFederationOperationsResponse {
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
    message.operations = (object.operations ?? []).map((e: any) =>
      Operation.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListFederationOperationsResponse): unknown {
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

  fromPartial<
    I extends Exact<DeepPartial<ListFederationOperationsResponse>, I>
  >(object: I): ListFederationOperationsResponse {
    const message = {
      ...baseListFederationOperationsResponse,
    } as ListFederationOperationsResponse;
    message.operations =
      object.operations?.map((e) => Operation.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListFederationOperationsResponse.$type,
  ListFederationOperationsResponse
);

/** A set of methods for managing federations. */
export const FederationServiceService = {
  /**
   * Returns the specified federation.
   *
   * To get the list of available federations, make a [List] request.
   */
  get: {
    path: "/yandex.cloud.organizationmanager.v1.saml.FederationService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetFederationRequest) =>
      Buffer.from(GetFederationRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetFederationRequest.decode(value),
    responseSerialize: (value: Federation) =>
      Buffer.from(Federation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Federation.decode(value),
  },
  /** Retrieves the list of federations in the specified organization. */
  list: {
    path: "/yandex.cloud.organizationmanager.v1.saml.FederationService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListFederationsRequest) =>
      Buffer.from(ListFederationsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListFederationsRequest.decode(value),
    responseSerialize: (value: ListFederationsResponse) =>
      Buffer.from(ListFederationsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListFederationsResponse.decode(value),
  },
  /** Creates a federation in the specified organization. */
  create: {
    path: "/yandex.cloud.organizationmanager.v1.saml.FederationService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateFederationRequest) =>
      Buffer.from(CreateFederationRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      CreateFederationRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates the specified federation. */
  update: {
    path: "/yandex.cloud.organizationmanager.v1.saml.FederationService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateFederationRequest) =>
      Buffer.from(UpdateFederationRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      UpdateFederationRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified federation. */
  delete: {
    path: "/yandex.cloud.organizationmanager.v1.saml.FederationService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteFederationRequest) =>
      Buffer.from(DeleteFederationRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      DeleteFederationRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Adds users to the specified federation. */
  addUserAccounts: {
    path: "/yandex.cloud.organizationmanager.v1.saml.FederationService/AddUserAccounts",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: AddFederatedUserAccountsRequest) =>
      Buffer.from(AddFederatedUserAccountsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      AddFederatedUserAccountsRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Lists users for the specified federation. */
  listUserAccounts: {
    path: "/yandex.cloud.organizationmanager.v1.saml.FederationService/ListUserAccounts",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListFederatedUserAccountsRequest) =>
      Buffer.from(ListFederatedUserAccountsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ListFederatedUserAccountsRequest.decode(value),
    responseSerialize: (value: ListFederatedUserAccountsResponse) =>
      Buffer.from(ListFederatedUserAccountsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListFederatedUserAccountsResponse.decode(value),
  },
  /** Lists operations for the specified federation. */
  listOperations: {
    path: "/yandex.cloud.organizationmanager.v1.saml.FederationService/ListOperations",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListFederationOperationsRequest) =>
      Buffer.from(ListFederationOperationsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ListFederationOperationsRequest.decode(value),
    responseSerialize: (value: ListFederationOperationsResponse) =>
      Buffer.from(ListFederationOperationsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListFederationOperationsResponse.decode(value),
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
}

export interface FederationServiceClient extends Client {
  /**
   * Returns the specified federation.
   *
   * To get the list of available federations, make a [List] request.
   */
  get(
    request: GetFederationRequest,
    callback: (error: ServiceError | null, response: Federation) => void
  ): ClientUnaryCall;
  get(
    request: GetFederationRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Federation) => void
  ): ClientUnaryCall;
  get(
    request: GetFederationRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Federation) => void
  ): ClientUnaryCall;
  /** Retrieves the list of federations in the specified organization. */
  list(
    request: ListFederationsRequest,
    callback: (
      error: ServiceError | null,
      response: ListFederationsResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListFederationsRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListFederationsResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListFederationsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListFederationsResponse
    ) => void
  ): ClientUnaryCall;
  /** Creates a federation in the specified organization. */
  create(
    request: CreateFederationRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreateFederationRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreateFederationRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Updates the specified federation. */
  update(
    request: UpdateFederationRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateFederationRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateFederationRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Deletes the specified federation. */
  delete(
    request: DeleteFederationRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteFederationRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteFederationRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Adds users to the specified federation. */
  addUserAccounts(
    request: AddFederatedUserAccountsRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  addUserAccounts(
    request: AddFederatedUserAccountsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  addUserAccounts(
    request: AddFederatedUserAccountsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Lists users for the specified federation. */
  listUserAccounts(
    request: ListFederatedUserAccountsRequest,
    callback: (
      error: ServiceError | null,
      response: ListFederatedUserAccountsResponse
    ) => void
  ): ClientUnaryCall;
  listUserAccounts(
    request: ListFederatedUserAccountsRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListFederatedUserAccountsResponse
    ) => void
  ): ClientUnaryCall;
  listUserAccounts(
    request: ListFederatedUserAccountsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListFederatedUserAccountsResponse
    ) => void
  ): ClientUnaryCall;
  /** Lists operations for the specified federation. */
  listOperations(
    request: ListFederationOperationsRequest,
    callback: (
      error: ServiceError | null,
      response: ListFederationOperationsResponse
    ) => void
  ): ClientUnaryCall;
  listOperations(
    request: ListFederationOperationsRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListFederationOperationsResponse
    ) => void
  ): ClientUnaryCall;
  listOperations(
    request: ListFederationOperationsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListFederationOperationsResponse
    ) => void
  ): ClientUnaryCall;
}

export const FederationServiceClient = makeGenericClientConstructor(
  FederationServiceService,
  "yandex.cloud.organizationmanager.v1.saml.FederationService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): FederationServiceClient;
  service: typeof FederationServiceService;
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
