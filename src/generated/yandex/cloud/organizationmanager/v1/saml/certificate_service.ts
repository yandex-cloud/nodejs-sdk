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
import { Certificate } from "../../../../../yandex/cloud/organizationmanager/v1/saml/certificate";
import { Operation } from "../../../../../yandex/cloud/operation/operation";

export const protobufPackage = "yandex.cloud.organizationmanager.v1.saml";

export interface GetCertificateRequest {
  $type: "yandex.cloud.organizationmanager.v1.saml.GetCertificateRequest";
  /**
   * ID of the certificate to return.
   * To get the certificate ID, make a [CertificateService.List] request.
   */
  certificateId: string;
}

export interface ListCertificatesRequest {
  $type: "yandex.cloud.organizationmanager.v1.saml.ListCertificatesRequest";
  /**
   * ID of the federation to list certificates in.
   * To get the federation ID make a [yandex.cloud.organizationmanager.v1.saml.FederationService.List] request.
   */
  federationId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size], the service returns a [ListCertificatesResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set [page_token]
   * to the [ListCertificatesResponse.next_page_token]
   * returned by a previous list request.
   */
  pageToken: string;
  /**
   * A filter expression that filters resources listed in the response.
   * The expression must specify:
   * 1. The field name. Currently you can use filtering only on [Certificate.name] field.
   * 2. An `=` operator.
   * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
   */
  filter: string;
}

export interface ListCertificatesResponse {
  $type: "yandex.cloud.organizationmanager.v1.saml.ListCertificatesResponse";
  /** List of certificates. */
  certificates: Certificate[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListCertificatesRequest.page_size], use
   * the [next_page_token] as the value
   * for the [ListCertificatesRequest.page_token] query parameter
   * in the next list request. Each subsequent list request will have its own
   * [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface CreateCertificateRequest {
  $type: "yandex.cloud.organizationmanager.v1.saml.CreateCertificateRequest";
  /**
   * ID of the federation to add new certificate.
   * To get the federation ID make a [yandex.cloud.organizationmanager.v1.saml.FederationService.List] request.
   */
  federationId: string;
  /**
   * Name of the certificate.
   * The name must be unique within the federation.
   */
  name: string;
  /** Description of the certificate. */
  description: string;
  /** Certificate data in PEM format. */
  data: string;
}

export interface CreateCertificateMetadata {
  $type: "yandex.cloud.organizationmanager.v1.saml.CreateCertificateMetadata";
  /** ID of the certificate that is being created. */
  certificateId: string;
}

export interface UpdateCertificateRequest {
  $type: "yandex.cloud.organizationmanager.v1.saml.UpdateCertificateRequest";
  /**
   * ID of the certificate to update.
   * To get the certificate ID, make a [CertificateService.List] request.
   */
  certificateId: string;
  /** Field mask that specifies which fields of the certificate are going to be updated. */
  updateMask?: FieldMask;
  /**
   * Name of the certificate.
   * The name must be unique within the federation.
   */
  name: string;
  /** Description of the certificate. */
  description: string;
  /** Certificate data in PEM format. */
  data: string;
}

export interface UpdateCertificateMetadata {
  $type: "yandex.cloud.organizationmanager.v1.saml.UpdateCertificateMetadata";
  /** ID of the certificate that is being updated. */
  certificateId: string;
}

export interface DeleteCertificateRequest {
  $type: "yandex.cloud.organizationmanager.v1.saml.DeleteCertificateRequest";
  /**
   * ID of the certificate to delete.
   * To get the certificate ID, make a [CertificateService.List] request.
   */
  certificateId: string;
}

export interface DeleteCertificateMetadata {
  $type: "yandex.cloud.organizationmanager.v1.saml.DeleteCertificateMetadata";
  /** ID of the certificate that is being deleted. */
  certificateId: string;
}

export interface ListCertificateOperationsRequest {
  $type: "yandex.cloud.organizationmanager.v1.saml.ListCertificateOperationsRequest";
  /** ID of the certificate to list operations for. */
  certificateId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size], the service returns a [ListCertificateOperationsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set [page_token]
   * to the [ListCertificateOperationsResponse.next_page_token]
   * returned by a previous list request.
   */
  pageToken: string;
}

export interface ListCertificateOperationsResponse {
  $type: "yandex.cloud.organizationmanager.v1.saml.ListCertificateOperationsResponse";
  /** List of operations for the specified certificate. */
  operations: Operation[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListCertificateOperationsRequest.page_size], use the [next_page_token] as the value
   * for the [ListCertificateOperationsRequest.page_token] query parameter in the next list request.
   * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

const baseGetCertificateRequest: object = {
  $type: "yandex.cloud.organizationmanager.v1.saml.GetCertificateRequest",
  certificateId: "",
};

export const GetCertificateRequest = {
  $type:
    "yandex.cloud.organizationmanager.v1.saml.GetCertificateRequest" as const,

  encode(
    message: GetCertificateRequest,
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
  ): GetCertificateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetCertificateRequest } as GetCertificateRequest;
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

  fromJSON(object: any): GetCertificateRequest {
    const message = { ...baseGetCertificateRequest } as GetCertificateRequest;
    message.certificateId =
      object.certificateId !== undefined && object.certificateId !== null
        ? String(object.certificateId)
        : "";
    return message;
  },

  toJSON(message: GetCertificateRequest): unknown {
    const obj: any = {};
    message.certificateId !== undefined &&
      (obj.certificateId = message.certificateId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetCertificateRequest>, I>>(
    object: I
  ): GetCertificateRequest {
    const message = { ...baseGetCertificateRequest } as GetCertificateRequest;
    message.certificateId = object.certificateId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetCertificateRequest.$type, GetCertificateRequest);

const baseListCertificatesRequest: object = {
  $type: "yandex.cloud.organizationmanager.v1.saml.ListCertificatesRequest",
  federationId: "",
  pageSize: 0,
  pageToken: "",
  filter: "",
};

export const ListCertificatesRequest = {
  $type:
    "yandex.cloud.organizationmanager.v1.saml.ListCertificatesRequest" as const,

  encode(
    message: ListCertificatesRequest,
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
  ): ListCertificatesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListCertificatesRequest,
    } as ListCertificatesRequest;
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

  fromJSON(object: any): ListCertificatesRequest {
    const message = {
      ...baseListCertificatesRequest,
    } as ListCertificatesRequest;
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

  toJSON(message: ListCertificatesRequest): unknown {
    const obj: any = {};
    message.federationId !== undefined &&
      (obj.federationId = message.federationId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    message.filter !== undefined && (obj.filter = message.filter);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListCertificatesRequest>, I>>(
    object: I
  ): ListCertificatesRequest {
    const message = {
      ...baseListCertificatesRequest,
    } as ListCertificatesRequest;
    message.federationId = object.federationId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListCertificatesRequest.$type, ListCertificatesRequest);

const baseListCertificatesResponse: object = {
  $type: "yandex.cloud.organizationmanager.v1.saml.ListCertificatesResponse",
  nextPageToken: "",
};

export const ListCertificatesResponse = {
  $type:
    "yandex.cloud.organizationmanager.v1.saml.ListCertificatesResponse" as const,

  encode(
    message: ListCertificatesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.certificates) {
      Certificate.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListCertificatesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListCertificatesResponse,
    } as ListCertificatesResponse;
    message.certificates = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.certificates.push(
            Certificate.decode(reader, reader.uint32())
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

  fromJSON(object: any): ListCertificatesResponse {
    const message = {
      ...baseListCertificatesResponse,
    } as ListCertificatesResponse;
    message.certificates = (object.certificates ?? []).map((e: any) =>
      Certificate.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListCertificatesResponse): unknown {
    const obj: any = {};
    if (message.certificates) {
      obj.certificates = message.certificates.map((e) =>
        e ? Certificate.toJSON(e) : undefined
      );
    } else {
      obj.certificates = [];
    }
    message.nextPageToken !== undefined &&
      (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListCertificatesResponse>, I>>(
    object: I
  ): ListCertificatesResponse {
    const message = {
      ...baseListCertificatesResponse,
    } as ListCertificatesResponse;
    message.certificates =
      object.certificates?.map((e) => Certificate.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListCertificatesResponse.$type,
  ListCertificatesResponse
);

const baseCreateCertificateRequest: object = {
  $type: "yandex.cloud.organizationmanager.v1.saml.CreateCertificateRequest",
  federationId: "",
  name: "",
  description: "",
  data: "",
};

export const CreateCertificateRequest = {
  $type:
    "yandex.cloud.organizationmanager.v1.saml.CreateCertificateRequest" as const,

  encode(
    message: CreateCertificateRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.federationId !== "") {
      writer.uint32(10).string(message.federationId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.data !== "") {
      writer.uint32(34).string(message.data);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateCertificateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateCertificateRequest,
    } as CreateCertificateRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.federationId = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.data = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateCertificateRequest {
    const message = {
      ...baseCreateCertificateRequest,
    } as CreateCertificateRequest;
    message.federationId =
      object.federationId !== undefined && object.federationId !== null
        ? String(object.federationId)
        : "";
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.description =
      object.description !== undefined && object.description !== null
        ? String(object.description)
        : "";
    message.data =
      object.data !== undefined && object.data !== null
        ? String(object.data)
        : "";
    return message;
  },

  toJSON(message: CreateCertificateRequest): unknown {
    const obj: any = {};
    message.federationId !== undefined &&
      (obj.federationId = message.federationId);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    message.data !== undefined && (obj.data = message.data);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateCertificateRequest>, I>>(
    object: I
  ): CreateCertificateRequest {
    const message = {
      ...baseCreateCertificateRequest,
    } as CreateCertificateRequest;
    message.federationId = object.federationId ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.data = object.data ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  CreateCertificateRequest.$type,
  CreateCertificateRequest
);

const baseCreateCertificateMetadata: object = {
  $type: "yandex.cloud.organizationmanager.v1.saml.CreateCertificateMetadata",
  certificateId: "",
};

export const CreateCertificateMetadata = {
  $type:
    "yandex.cloud.organizationmanager.v1.saml.CreateCertificateMetadata" as const,

  encode(
    message: CreateCertificateMetadata,
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
  ): CreateCertificateMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateCertificateMetadata,
    } as CreateCertificateMetadata;
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

  fromJSON(object: any): CreateCertificateMetadata {
    const message = {
      ...baseCreateCertificateMetadata,
    } as CreateCertificateMetadata;
    message.certificateId =
      object.certificateId !== undefined && object.certificateId !== null
        ? String(object.certificateId)
        : "";
    return message;
  },

  toJSON(message: CreateCertificateMetadata): unknown {
    const obj: any = {};
    message.certificateId !== undefined &&
      (obj.certificateId = message.certificateId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateCertificateMetadata>, I>>(
    object: I
  ): CreateCertificateMetadata {
    const message = {
      ...baseCreateCertificateMetadata,
    } as CreateCertificateMetadata;
    message.certificateId = object.certificateId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  CreateCertificateMetadata.$type,
  CreateCertificateMetadata
);

const baseUpdateCertificateRequest: object = {
  $type: "yandex.cloud.organizationmanager.v1.saml.UpdateCertificateRequest",
  certificateId: "",
  name: "",
  description: "",
  data: "",
};

export const UpdateCertificateRequest = {
  $type:
    "yandex.cloud.organizationmanager.v1.saml.UpdateCertificateRequest" as const,

  encode(
    message: UpdateCertificateRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.certificateId !== "") {
      writer.uint32(10).string(message.certificateId);
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
    if (message.data !== "") {
      writer.uint32(42).string(message.data);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateCertificateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateCertificateRequest,
    } as UpdateCertificateRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.certificateId = reader.string();
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
          message.data = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateCertificateRequest {
    const message = {
      ...baseUpdateCertificateRequest,
    } as UpdateCertificateRequest;
    message.certificateId =
      object.certificateId !== undefined && object.certificateId !== null
        ? String(object.certificateId)
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
    message.data =
      object.data !== undefined && object.data !== null
        ? String(object.data)
        : "";
    return message;
  },

  toJSON(message: UpdateCertificateRequest): unknown {
    const obj: any = {};
    message.certificateId !== undefined &&
      (obj.certificateId = message.certificateId);
    message.updateMask !== undefined &&
      (obj.updateMask = message.updateMask
        ? FieldMask.toJSON(message.updateMask)
        : undefined);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    message.data !== undefined && (obj.data = message.data);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateCertificateRequest>, I>>(
    object: I
  ): UpdateCertificateRequest {
    const message = {
      ...baseUpdateCertificateRequest,
    } as UpdateCertificateRequest;
    message.certificateId = object.certificateId ?? "";
    message.updateMask =
      object.updateMask !== undefined && object.updateMask !== null
        ? FieldMask.fromPartial(object.updateMask)
        : undefined;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.data = object.data ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  UpdateCertificateRequest.$type,
  UpdateCertificateRequest
);

const baseUpdateCertificateMetadata: object = {
  $type: "yandex.cloud.organizationmanager.v1.saml.UpdateCertificateMetadata",
  certificateId: "",
};

export const UpdateCertificateMetadata = {
  $type:
    "yandex.cloud.organizationmanager.v1.saml.UpdateCertificateMetadata" as const,

  encode(
    message: UpdateCertificateMetadata,
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
  ): UpdateCertificateMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateCertificateMetadata,
    } as UpdateCertificateMetadata;
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

  fromJSON(object: any): UpdateCertificateMetadata {
    const message = {
      ...baseUpdateCertificateMetadata,
    } as UpdateCertificateMetadata;
    message.certificateId =
      object.certificateId !== undefined && object.certificateId !== null
        ? String(object.certificateId)
        : "";
    return message;
  },

  toJSON(message: UpdateCertificateMetadata): unknown {
    const obj: any = {};
    message.certificateId !== undefined &&
      (obj.certificateId = message.certificateId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateCertificateMetadata>, I>>(
    object: I
  ): UpdateCertificateMetadata {
    const message = {
      ...baseUpdateCertificateMetadata,
    } as UpdateCertificateMetadata;
    message.certificateId = object.certificateId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  UpdateCertificateMetadata.$type,
  UpdateCertificateMetadata
);

const baseDeleteCertificateRequest: object = {
  $type: "yandex.cloud.organizationmanager.v1.saml.DeleteCertificateRequest",
  certificateId: "",
};

export const DeleteCertificateRequest = {
  $type:
    "yandex.cloud.organizationmanager.v1.saml.DeleteCertificateRequest" as const,

  encode(
    message: DeleteCertificateRequest,
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
  ): DeleteCertificateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeleteCertificateRequest,
    } as DeleteCertificateRequest;
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

  fromJSON(object: any): DeleteCertificateRequest {
    const message = {
      ...baseDeleteCertificateRequest,
    } as DeleteCertificateRequest;
    message.certificateId =
      object.certificateId !== undefined && object.certificateId !== null
        ? String(object.certificateId)
        : "";
    return message;
  },

  toJSON(message: DeleteCertificateRequest): unknown {
    const obj: any = {};
    message.certificateId !== undefined &&
      (obj.certificateId = message.certificateId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteCertificateRequest>, I>>(
    object: I
  ): DeleteCertificateRequest {
    const message = {
      ...baseDeleteCertificateRequest,
    } as DeleteCertificateRequest;
    message.certificateId = object.certificateId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  DeleteCertificateRequest.$type,
  DeleteCertificateRequest
);

const baseDeleteCertificateMetadata: object = {
  $type: "yandex.cloud.organizationmanager.v1.saml.DeleteCertificateMetadata",
  certificateId: "",
};

export const DeleteCertificateMetadata = {
  $type:
    "yandex.cloud.organizationmanager.v1.saml.DeleteCertificateMetadata" as const,

  encode(
    message: DeleteCertificateMetadata,
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
  ): DeleteCertificateMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeleteCertificateMetadata,
    } as DeleteCertificateMetadata;
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

  fromJSON(object: any): DeleteCertificateMetadata {
    const message = {
      ...baseDeleteCertificateMetadata,
    } as DeleteCertificateMetadata;
    message.certificateId =
      object.certificateId !== undefined && object.certificateId !== null
        ? String(object.certificateId)
        : "";
    return message;
  },

  toJSON(message: DeleteCertificateMetadata): unknown {
    const obj: any = {};
    message.certificateId !== undefined &&
      (obj.certificateId = message.certificateId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteCertificateMetadata>, I>>(
    object: I
  ): DeleteCertificateMetadata {
    const message = {
      ...baseDeleteCertificateMetadata,
    } as DeleteCertificateMetadata;
    message.certificateId = object.certificateId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  DeleteCertificateMetadata.$type,
  DeleteCertificateMetadata
);

const baseListCertificateOperationsRequest: object = {
  $type:
    "yandex.cloud.organizationmanager.v1.saml.ListCertificateOperationsRequest",
  certificateId: "",
  pageSize: 0,
  pageToken: "",
};

export const ListCertificateOperationsRequest = {
  $type:
    "yandex.cloud.organizationmanager.v1.saml.ListCertificateOperationsRequest" as const,

  encode(
    message: ListCertificateOperationsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.certificateId !== "") {
      writer.uint32(10).string(message.certificateId);
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
  ): ListCertificateOperationsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListCertificateOperationsRequest,
    } as ListCertificateOperationsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.certificateId = reader.string();
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

  fromJSON(object: any): ListCertificateOperationsRequest {
    const message = {
      ...baseListCertificateOperationsRequest,
    } as ListCertificateOperationsRequest;
    message.certificateId =
      object.certificateId !== undefined && object.certificateId !== null
        ? String(object.certificateId)
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

  toJSON(message: ListCertificateOperationsRequest): unknown {
    const obj: any = {};
    message.certificateId !== undefined &&
      (obj.certificateId = message.certificateId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<ListCertificateOperationsRequest>, I>
  >(object: I): ListCertificateOperationsRequest {
    const message = {
      ...baseListCertificateOperationsRequest,
    } as ListCertificateOperationsRequest;
    message.certificateId = object.certificateId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListCertificateOperationsRequest.$type,
  ListCertificateOperationsRequest
);

const baseListCertificateOperationsResponse: object = {
  $type:
    "yandex.cloud.organizationmanager.v1.saml.ListCertificateOperationsResponse",
  nextPageToken: "",
};

export const ListCertificateOperationsResponse = {
  $type:
    "yandex.cloud.organizationmanager.v1.saml.ListCertificateOperationsResponse" as const,

  encode(
    message: ListCertificateOperationsResponse,
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
  ): ListCertificateOperationsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListCertificateOperationsResponse,
    } as ListCertificateOperationsResponse;
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

  fromJSON(object: any): ListCertificateOperationsResponse {
    const message = {
      ...baseListCertificateOperationsResponse,
    } as ListCertificateOperationsResponse;
    message.operations = (object.operations ?? []).map((e: any) =>
      Operation.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListCertificateOperationsResponse): unknown {
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
    I extends Exact<DeepPartial<ListCertificateOperationsResponse>, I>
  >(object: I): ListCertificateOperationsResponse {
    const message = {
      ...baseListCertificateOperationsResponse,
    } as ListCertificateOperationsResponse;
    message.operations =
      object.operations?.map((e) => Operation.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListCertificateOperationsResponse.$type,
  ListCertificateOperationsResponse
);

/** A set of methods for managing certificates. */
export const CertificateServiceService = {
  /**
   * Returns the specified certificate.
   *
   * To get the list of available certificates, make a [List] request.
   */
  get: {
    path: "/yandex.cloud.organizationmanager.v1.saml.CertificateService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetCertificateRequest) =>
      Buffer.from(GetCertificateRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetCertificateRequest.decode(value),
    responseSerialize: (value: Certificate) =>
      Buffer.from(Certificate.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Certificate.decode(value),
  },
  /** Retrieves the list of certificates in the specified federation. */
  list: {
    path: "/yandex.cloud.organizationmanager.v1.saml.CertificateService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListCertificatesRequest) =>
      Buffer.from(ListCertificatesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ListCertificatesRequest.decode(value),
    responseSerialize: (value: ListCertificatesResponse) =>
      Buffer.from(ListCertificatesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListCertificatesResponse.decode(value),
  },
  /** Creates a certificate in the specified federation. */
  create: {
    path: "/yandex.cloud.organizationmanager.v1.saml.CertificateService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateCertificateRequest) =>
      Buffer.from(CreateCertificateRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      CreateCertificateRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates the specified certificate. */
  update: {
    path: "/yandex.cloud.organizationmanager.v1.saml.CertificateService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateCertificateRequest) =>
      Buffer.from(UpdateCertificateRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      UpdateCertificateRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified certificate. */
  delete: {
    path: "/yandex.cloud.organizationmanager.v1.saml.CertificateService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteCertificateRequest) =>
      Buffer.from(DeleteCertificateRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      DeleteCertificateRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Lists operations for the specified certificate. */
  listOperations: {
    path: "/yandex.cloud.organizationmanager.v1.saml.CertificateService/ListOperations",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListCertificateOperationsRequest) =>
      Buffer.from(ListCertificateOperationsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ListCertificateOperationsRequest.decode(value),
    responseSerialize: (value: ListCertificateOperationsResponse) =>
      Buffer.from(ListCertificateOperationsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListCertificateOperationsResponse.decode(value),
  },
} as const;

export interface CertificateServiceServer extends UntypedServiceImplementation {
  /**
   * Returns the specified certificate.
   *
   * To get the list of available certificates, make a [List] request.
   */
  get: handleUnaryCall<GetCertificateRequest, Certificate>;
  /** Retrieves the list of certificates in the specified federation. */
  list: handleUnaryCall<ListCertificatesRequest, ListCertificatesResponse>;
  /** Creates a certificate in the specified federation. */
  create: handleUnaryCall<CreateCertificateRequest, Operation>;
  /** Updates the specified certificate. */
  update: handleUnaryCall<UpdateCertificateRequest, Operation>;
  /** Deletes the specified certificate. */
  delete: handleUnaryCall<DeleteCertificateRequest, Operation>;
  /** Lists operations for the specified certificate. */
  listOperations: handleUnaryCall<
    ListCertificateOperationsRequest,
    ListCertificateOperationsResponse
  >;
}

export interface CertificateServiceClient extends Client {
  /**
   * Returns the specified certificate.
   *
   * To get the list of available certificates, make a [List] request.
   */
  get(
    request: GetCertificateRequest,
    callback: (error: ServiceError | null, response: Certificate) => void
  ): ClientUnaryCall;
  get(
    request: GetCertificateRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Certificate) => void
  ): ClientUnaryCall;
  get(
    request: GetCertificateRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Certificate) => void
  ): ClientUnaryCall;
  /** Retrieves the list of certificates in the specified federation. */
  list(
    request: ListCertificatesRequest,
    callback: (
      error: ServiceError | null,
      response: ListCertificatesResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListCertificatesRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListCertificatesResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListCertificatesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListCertificatesResponse
    ) => void
  ): ClientUnaryCall;
  /** Creates a certificate in the specified federation. */
  create(
    request: CreateCertificateRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreateCertificateRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreateCertificateRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Updates the specified certificate. */
  update(
    request: UpdateCertificateRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateCertificateRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateCertificateRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Deletes the specified certificate. */
  delete(
    request: DeleteCertificateRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteCertificateRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteCertificateRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Lists operations for the specified certificate. */
  listOperations(
    request: ListCertificateOperationsRequest,
    callback: (
      error: ServiceError | null,
      response: ListCertificateOperationsResponse
    ) => void
  ): ClientUnaryCall;
  listOperations(
    request: ListCertificateOperationsRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListCertificateOperationsResponse
    ) => void
  ): ClientUnaryCall;
  listOperations(
    request: ListCertificateOperationsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListCertificateOperationsResponse
    ) => void
  ): ClientUnaryCall;
}

export const CertificateServiceClient = makeGenericClientConstructor(
  CertificateServiceService,
  "yandex.cloud.organizationmanager.v1.saml.CertificateService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): CertificateServiceClient;
  service: typeof CertificateServiceService;
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
