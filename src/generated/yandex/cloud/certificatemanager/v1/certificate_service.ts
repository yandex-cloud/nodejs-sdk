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
import {
  ChallengeType,
  Certificate,
  challengeTypeFromJSON,
  challengeTypeToJSON,
} from "../../../../yandex/cloud/certificatemanager/v1/certificate";
import { Operation } from "../../../../yandex/cloud/operation/operation";
import {
  ListAccessBindingsRequest,
  ListAccessBindingsResponse,
  SetAccessBindingsRequest,
  UpdateAccessBindingsRequest,
} from "../../../../yandex/cloud/access/access";

export const protobufPackage = "yandex.cloud.certificatemanager.v1";

export enum CertificateView {
  /** BASIC - Output basic information about the certificate. */
  BASIC = 0,
  /** FULL - Output full information about the certificate including domain challenges. */
  FULL = 1,
  UNRECOGNIZED = -1,
}

export function certificateViewFromJSON(object: any): CertificateView {
  switch (object) {
    case 0:
    case "BASIC":
      return CertificateView.BASIC;
    case 1:
    case "FULL":
      return CertificateView.FULL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CertificateView.UNRECOGNIZED;
  }
}

export function certificateViewToJSON(object: CertificateView): string {
  switch (object) {
    case CertificateView.BASIC:
      return "BASIC";
    case CertificateView.FULL:
      return "FULL";
    default:
      return "UNKNOWN";
  }
}

export interface GetCertificateRequest {
  $type: "yandex.cloud.certificatemanager.v1.GetCertificateRequest";
  /**
   * ID of the certificate to return.
   *
   * To get the ID of a certificate use a [CertificateService.List] request.
   */
  certificateId: string;
  /** The output type of the certificate. */
  view: CertificateView;
}

export interface ListCertificatesRequest {
  $type: "yandex.cloud.certificatemanager.v1.ListCertificatesRequest";
  /** ID of the folder to list certificate in. */
  folderId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than `page_size`, the service returns a [ListCertificatesResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set `page_token` to the
   * [ListCertificatesResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
  /** The output type of the certificate. */
  view: CertificateView;
}

export interface ListCertificatesResponse {
  $type: "yandex.cloud.certificatemanager.v1.ListCertificatesResponse";
  /** List of certificates in the specified folder. */
  certificates: Certificate[];
  /**
   * This token allows you to get the next page of results for list requests. If the number
   * of results is greater than the specified [ListCertificatesRequest.page_size], use
   * the `next_page_token` as the value for the [ListCertificatesRequest.page_token] query parameter
   * in the next list request. Each subsequent list request will have its own
   * [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface CreateCertificateRequest {
  $type: "yandex.cloud.certificatemanager.v1.CreateCertificateRequest";
  /** ID of the folder to create a certificate in. */
  folderId: string;
  /**
   * Name of the certificate.
   * The name must be unique within the folder.
   */
  name: string;
  /** Description of the certificate. */
  description: string;
  /** Labels for the certificate as `key:value` pairs. */
  labels: { [key: string]: string };
  /** PEM-encoded certificate content of the certificate. */
  certificate: string;
  /** PEM-encoded certificate chain content of the certificate. */
  chain: string;
  /** PEM-encoded private key content of the certificate. */
  privateKey: string;
}

export interface CreateCertificateRequest_LabelsEntry {
  $type: "yandex.cloud.certificatemanager.v1.CreateCertificateRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface CreateCertificateMetadata {
  $type: "yandex.cloud.certificatemanager.v1.CreateCertificateMetadata";
  /** ID of the certificate being created. */
  certificateId: string;
}

export interface UpdateCertificateRequest {
  $type: "yandex.cloud.certificatemanager.v1.UpdateCertificateRequest";
  /**
   * ID of the certificate to update.
   * To get the ID of a certificate use a [CertificateService.List] request.
   */
  certificateId: string;
  /** Field mask that specifies which attributes of the certificate are going to be updated. */
  updateMask?: FieldMask;
  /** New name for the certificate. */
  name: string;
  /** New description for the certificate. */
  description: string;
  /** New labels for the certificate as `key:value` pairs. */
  labels: { [key: string]: string };
  /** New PEM-encoded certificate content for the certificate. Used only for imported certificates. */
  certificate: string;
  /** New PEM-encoded certificate chain content for the certificate. Used only for imported certificates. */
  chain: string;
  /** New PEM-encoded private key content for the certificate. Used only for imported certificates. */
  privateKey: string;
}

export interface UpdateCertificateRequest_LabelsEntry {
  $type: "yandex.cloud.certificatemanager.v1.UpdateCertificateRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface UpdateCertificateMetadata {
  $type: "yandex.cloud.certificatemanager.v1.UpdateCertificateMetadata";
  /** ID of the certificate being updated. */
  certificateId: string;
}

export interface DeleteCertificateRequest {
  $type: "yandex.cloud.certificatemanager.v1.DeleteCertificateRequest";
  /** ID of the certificate to be deleted. */
  certificateId: string;
}

export interface DeleteCertificateMetadata {
  $type: "yandex.cloud.certificatemanager.v1.DeleteCertificateMetadata";
  /** ID of the certificate being deleted. */
  certificateId: string;
}

export interface RequestNewCertificateRequest {
  $type: "yandex.cloud.certificatemanager.v1.RequestNewCertificateRequest";
  /** ID of the folder to create a certificate in. */
  folderId: string;
  /** Name of the certificate. */
  name: string;
  /** Description of the certificate. */
  description: string;
  /** Labels for the certificate as `key:value` pairs. */
  labels: { [key: string]: string };
  /** Fully qualified domain names of the certificate. */
  domains: string[];
  /** Type of the domain validation challenge. */
  challengeType: ChallengeType;
}

export interface RequestNewCertificateRequest_LabelsEntry {
  $type: "yandex.cloud.certificatemanager.v1.RequestNewCertificateRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface RequestNewCertificateMetadata {
  $type: "yandex.cloud.certificatemanager.v1.RequestNewCertificateMetadata";
  /** ID of the certificate that is being requested. */
  certificateId: string;
}

export interface ListCertificateOperationsRequest {
  $type: "yandex.cloud.certificatemanager.v1.ListCertificateOperationsRequest";
  /**
   * ID of the certificate to list operations for.
   *
   * To get the certificate ID, use a [CertificateService.List] request.
   */
  certificateId: string;
  /**
   * The maximum number of results per page that should be returned. If the number of available
   * results is larger than `page_size`, the service returns a [ListCertificateOperationsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set `page_token` to the
   * [ListCertificateOperationsResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
}

export interface ListCertificateOperationsResponse {
  $type: "yandex.cloud.certificatemanager.v1.ListCertificateOperationsResponse";
  /** List of operations for the specified certificate. */
  operations: Operation[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListCertificateOperationsRequest.page_size], use the `next_page_token` as the value
   * for the [ListCertificateOperationsRequest.page_token] query parameter in the next list request.
   * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

const baseGetCertificateRequest: object = {
  $type: "yandex.cloud.certificatemanager.v1.GetCertificateRequest",
  certificateId: "",
  view: 0,
};

export const GetCertificateRequest = {
  $type: "yandex.cloud.certificatemanager.v1.GetCertificateRequest" as const,

  encode(
    message: GetCertificateRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.certificateId !== "") {
      writer.uint32(10).string(message.certificateId);
    }
    if (message.view !== 0) {
      writer.uint32(16).int32(message.view);
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

  fromJSON(object: any): GetCertificateRequest {
    const message = { ...baseGetCertificateRequest } as GetCertificateRequest;
    message.certificateId =
      object.certificateId !== undefined && object.certificateId !== null
        ? String(object.certificateId)
        : "";
    message.view =
      object.view !== undefined && object.view !== null
        ? certificateViewFromJSON(object.view)
        : 0;
    return message;
  },

  toJSON(message: GetCertificateRequest): unknown {
    const obj: any = {};
    message.certificateId !== undefined &&
      (obj.certificateId = message.certificateId);
    message.view !== undefined &&
      (obj.view = certificateViewToJSON(message.view));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetCertificateRequest>, I>>(
    object: I
  ): GetCertificateRequest {
    const message = { ...baseGetCertificateRequest } as GetCertificateRequest;
    message.certificateId = object.certificateId ?? "";
    message.view = object.view ?? 0;
    return message;
  },
};

messageTypeRegistry.set(GetCertificateRequest.$type, GetCertificateRequest);

const baseListCertificatesRequest: object = {
  $type: "yandex.cloud.certificatemanager.v1.ListCertificatesRequest",
  folderId: "",
  pageSize: 0,
  pageToken: "",
  view: 0,
};

export const ListCertificatesRequest = {
  $type: "yandex.cloud.certificatemanager.v1.ListCertificatesRequest" as const,

  encode(
    message: ListCertificatesRequest,
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
    if (message.view !== 0) {
      writer.uint32(48).int32(message.view);
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
          message.folderId = reader.string();
          break;
        case 2:
          message.pageSize = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.pageToken = reader.string();
          break;
        case 6:
          message.view = reader.int32() as any;
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
    message.view =
      object.view !== undefined && object.view !== null
        ? certificateViewFromJSON(object.view)
        : 0;
    return message;
  },

  toJSON(message: ListCertificatesRequest): unknown {
    const obj: any = {};
    message.folderId !== undefined && (obj.folderId = message.folderId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    message.view !== undefined &&
      (obj.view = certificateViewToJSON(message.view));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListCertificatesRequest>, I>>(
    object: I
  ): ListCertificatesRequest {
    const message = {
      ...baseListCertificatesRequest,
    } as ListCertificatesRequest;
    message.folderId = object.folderId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.view = object.view ?? 0;
    return message;
  },
};

messageTypeRegistry.set(ListCertificatesRequest.$type, ListCertificatesRequest);

const baseListCertificatesResponse: object = {
  $type: "yandex.cloud.certificatemanager.v1.ListCertificatesResponse",
  nextPageToken: "",
};

export const ListCertificatesResponse = {
  $type: "yandex.cloud.certificatemanager.v1.ListCertificatesResponse" as const,

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
  $type: "yandex.cloud.certificatemanager.v1.CreateCertificateRequest",
  folderId: "",
  name: "",
  description: "",
  certificate: "",
  chain: "",
  privateKey: "",
};

export const CreateCertificateRequest = {
  $type: "yandex.cloud.certificatemanager.v1.CreateCertificateRequest" as const,

  encode(
    message: CreateCertificateRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.folderId !== "") {
      writer.uint32(10).string(message.folderId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      CreateCertificateRequest_LabelsEntry.encode(
        {
          $type:
            "yandex.cloud.certificatemanager.v1.CreateCertificateRequest.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(34).fork()
      ).ldelim();
    });
    if (message.certificate !== "") {
      writer.uint32(42).string(message.certificate);
    }
    if (message.chain !== "") {
      writer.uint32(50).string(message.chain);
    }
    if (message.privateKey !== "") {
      writer.uint32(58).string(message.privateKey);
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
          message.description = reader.string();
          break;
        case 4:
          const entry4 = CreateCertificateRequest_LabelsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry4.value !== undefined) {
            message.labels[entry4.key] = entry4.value;
          }
          break;
        case 5:
          message.certificate = reader.string();
          break;
        case 6:
          message.chain = reader.string();
          break;
        case 7:
          message.privateKey = reader.string();
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
    message.folderId =
      object.folderId !== undefined && object.folderId !== null
        ? String(object.folderId)
        : "";
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.description =
      object.description !== undefined && object.description !== null
        ? String(object.description)
        : "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      acc[key] = String(value);
      return acc;
    }, {});
    message.certificate =
      object.certificate !== undefined && object.certificate !== null
        ? String(object.certificate)
        : "";
    message.chain =
      object.chain !== undefined && object.chain !== null
        ? String(object.chain)
        : "";
    message.privateKey =
      object.privateKey !== undefined && object.privateKey !== null
        ? String(object.privateKey)
        : "";
    return message;
  },

  toJSON(message: CreateCertificateRequest): unknown {
    const obj: any = {};
    message.folderId !== undefined && (obj.folderId = message.folderId);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    obj.labels = {};
    if (message.labels) {
      Object.entries(message.labels).forEach(([k, v]) => {
        obj.labels[k] = v;
      });
    }
    message.certificate !== undefined &&
      (obj.certificate = message.certificate);
    message.chain !== undefined && (obj.chain = message.chain);
    message.privateKey !== undefined && (obj.privateKey = message.privateKey);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateCertificateRequest>, I>>(
    object: I
  ): CreateCertificateRequest {
    const message = {
      ...baseCreateCertificateRequest,
    } as CreateCertificateRequest;
    message.folderId = object.folderId ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.certificate = object.certificate ?? "";
    message.chain = object.chain ?? "";
    message.privateKey = object.privateKey ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  CreateCertificateRequest.$type,
  CreateCertificateRequest
);

const baseCreateCertificateRequest_LabelsEntry: object = {
  $type:
    "yandex.cloud.certificatemanager.v1.CreateCertificateRequest.LabelsEntry",
  key: "",
  value: "",
};

export const CreateCertificateRequest_LabelsEntry = {
  $type:
    "yandex.cloud.certificatemanager.v1.CreateCertificateRequest.LabelsEntry" as const,

  encode(
    message: CreateCertificateRequest_LabelsEntry,
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
  ): CreateCertificateRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateCertificateRequest_LabelsEntry,
    } as CreateCertificateRequest_LabelsEntry;
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

  fromJSON(object: any): CreateCertificateRequest_LabelsEntry {
    const message = {
      ...baseCreateCertificateRequest_LabelsEntry,
    } as CreateCertificateRequest_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: CreateCertificateRequest_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<CreateCertificateRequest_LabelsEntry>, I>
  >(object: I): CreateCertificateRequest_LabelsEntry {
    const message = {
      ...baseCreateCertificateRequest_LabelsEntry,
    } as CreateCertificateRequest_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  CreateCertificateRequest_LabelsEntry.$type,
  CreateCertificateRequest_LabelsEntry
);

const baseCreateCertificateMetadata: object = {
  $type: "yandex.cloud.certificatemanager.v1.CreateCertificateMetadata",
  certificateId: "",
};

export const CreateCertificateMetadata = {
  $type:
    "yandex.cloud.certificatemanager.v1.CreateCertificateMetadata" as const,

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
  $type: "yandex.cloud.certificatemanager.v1.UpdateCertificateRequest",
  certificateId: "",
  name: "",
  description: "",
  certificate: "",
  chain: "",
  privateKey: "",
};

export const UpdateCertificateRequest = {
  $type: "yandex.cloud.certificatemanager.v1.UpdateCertificateRequest" as const,

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
    Object.entries(message.labels).forEach(([key, value]) => {
      UpdateCertificateRequest_LabelsEntry.encode(
        {
          $type:
            "yandex.cloud.certificatemanager.v1.UpdateCertificateRequest.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(42).fork()
      ).ldelim();
    });
    if (message.certificate !== "") {
      writer.uint32(50).string(message.certificate);
    }
    if (message.chain !== "") {
      writer.uint32(58).string(message.chain);
    }
    if (message.privateKey !== "") {
      writer.uint32(66).string(message.privateKey);
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
    message.labels = {};
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
          const entry5 = UpdateCertificateRequest_LabelsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry5.value !== undefined) {
            message.labels[entry5.key] = entry5.value;
          }
          break;
        case 6:
          message.certificate = reader.string();
          break;
        case 7:
          message.chain = reader.string();
          break;
        case 8:
          message.privateKey = reader.string();
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
    message.labels = Object.entries(object.labels ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      acc[key] = String(value);
      return acc;
    }, {});
    message.certificate =
      object.certificate !== undefined && object.certificate !== null
        ? String(object.certificate)
        : "";
    message.chain =
      object.chain !== undefined && object.chain !== null
        ? String(object.chain)
        : "";
    message.privateKey =
      object.privateKey !== undefined && object.privateKey !== null
        ? String(object.privateKey)
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
    obj.labels = {};
    if (message.labels) {
      Object.entries(message.labels).forEach(([k, v]) => {
        obj.labels[k] = v;
      });
    }
    message.certificate !== undefined &&
      (obj.certificate = message.certificate);
    message.chain !== undefined && (obj.chain = message.chain);
    message.privateKey !== undefined && (obj.privateKey = message.privateKey);
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
    message.labels = Object.entries(object.labels ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.certificate = object.certificate ?? "";
    message.chain = object.chain ?? "";
    message.privateKey = object.privateKey ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  UpdateCertificateRequest.$type,
  UpdateCertificateRequest
);

const baseUpdateCertificateRequest_LabelsEntry: object = {
  $type:
    "yandex.cloud.certificatemanager.v1.UpdateCertificateRequest.LabelsEntry",
  key: "",
  value: "",
};

export const UpdateCertificateRequest_LabelsEntry = {
  $type:
    "yandex.cloud.certificatemanager.v1.UpdateCertificateRequest.LabelsEntry" as const,

  encode(
    message: UpdateCertificateRequest_LabelsEntry,
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
  ): UpdateCertificateRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateCertificateRequest_LabelsEntry,
    } as UpdateCertificateRequest_LabelsEntry;
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

  fromJSON(object: any): UpdateCertificateRequest_LabelsEntry {
    const message = {
      ...baseUpdateCertificateRequest_LabelsEntry,
    } as UpdateCertificateRequest_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: UpdateCertificateRequest_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<UpdateCertificateRequest_LabelsEntry>, I>
  >(object: I): UpdateCertificateRequest_LabelsEntry {
    const message = {
      ...baseUpdateCertificateRequest_LabelsEntry,
    } as UpdateCertificateRequest_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  UpdateCertificateRequest_LabelsEntry.$type,
  UpdateCertificateRequest_LabelsEntry
);

const baseUpdateCertificateMetadata: object = {
  $type: "yandex.cloud.certificatemanager.v1.UpdateCertificateMetadata",
  certificateId: "",
};

export const UpdateCertificateMetadata = {
  $type:
    "yandex.cloud.certificatemanager.v1.UpdateCertificateMetadata" as const,

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
  $type: "yandex.cloud.certificatemanager.v1.DeleteCertificateRequest",
  certificateId: "",
};

export const DeleteCertificateRequest = {
  $type: "yandex.cloud.certificatemanager.v1.DeleteCertificateRequest" as const,

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
  $type: "yandex.cloud.certificatemanager.v1.DeleteCertificateMetadata",
  certificateId: "",
};

export const DeleteCertificateMetadata = {
  $type:
    "yandex.cloud.certificatemanager.v1.DeleteCertificateMetadata" as const,

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

const baseRequestNewCertificateRequest: object = {
  $type: "yandex.cloud.certificatemanager.v1.RequestNewCertificateRequest",
  folderId: "",
  name: "",
  description: "",
  domains: "",
  challengeType: 0,
};

export const RequestNewCertificateRequest = {
  $type:
    "yandex.cloud.certificatemanager.v1.RequestNewCertificateRequest" as const,

  encode(
    message: RequestNewCertificateRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.folderId !== "") {
      writer.uint32(10).string(message.folderId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      RequestNewCertificateRequest_LabelsEntry.encode(
        {
          $type:
            "yandex.cloud.certificatemanager.v1.RequestNewCertificateRequest.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(34).fork()
      ).ldelim();
    });
    for (const v of message.domains) {
      writer.uint32(42).string(v!);
    }
    if (message.challengeType !== 0) {
      writer.uint32(48).int32(message.challengeType);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RequestNewCertificateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseRequestNewCertificateRequest,
    } as RequestNewCertificateRequest;
    message.labels = {};
    message.domains = [];
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
          message.description = reader.string();
          break;
        case 4:
          const entry4 = RequestNewCertificateRequest_LabelsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry4.value !== undefined) {
            message.labels[entry4.key] = entry4.value;
          }
          break;
        case 5:
          message.domains.push(reader.string());
          break;
        case 6:
          message.challengeType = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RequestNewCertificateRequest {
    const message = {
      ...baseRequestNewCertificateRequest,
    } as RequestNewCertificateRequest;
    message.folderId =
      object.folderId !== undefined && object.folderId !== null
        ? String(object.folderId)
        : "";
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.description =
      object.description !== undefined && object.description !== null
        ? String(object.description)
        : "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      acc[key] = String(value);
      return acc;
    }, {});
    message.domains = (object.domains ?? []).map((e: any) => String(e));
    message.challengeType =
      object.challengeType !== undefined && object.challengeType !== null
        ? challengeTypeFromJSON(object.challengeType)
        : 0;
    return message;
  },

  toJSON(message: RequestNewCertificateRequest): unknown {
    const obj: any = {};
    message.folderId !== undefined && (obj.folderId = message.folderId);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    obj.labels = {};
    if (message.labels) {
      Object.entries(message.labels).forEach(([k, v]) => {
        obj.labels[k] = v;
      });
    }
    if (message.domains) {
      obj.domains = message.domains.map((e) => e);
    } else {
      obj.domains = [];
    }
    message.challengeType !== undefined &&
      (obj.challengeType = challengeTypeToJSON(message.challengeType));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RequestNewCertificateRequest>, I>>(
    object: I
  ): RequestNewCertificateRequest {
    const message = {
      ...baseRequestNewCertificateRequest,
    } as RequestNewCertificateRequest;
    message.folderId = object.folderId ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.domains = object.domains?.map((e) => e) || [];
    message.challengeType = object.challengeType ?? 0;
    return message;
  },
};

messageTypeRegistry.set(
  RequestNewCertificateRequest.$type,
  RequestNewCertificateRequest
);

const baseRequestNewCertificateRequest_LabelsEntry: object = {
  $type:
    "yandex.cloud.certificatemanager.v1.RequestNewCertificateRequest.LabelsEntry",
  key: "",
  value: "",
};

export const RequestNewCertificateRequest_LabelsEntry = {
  $type:
    "yandex.cloud.certificatemanager.v1.RequestNewCertificateRequest.LabelsEntry" as const,

  encode(
    message: RequestNewCertificateRequest_LabelsEntry,
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
  ): RequestNewCertificateRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseRequestNewCertificateRequest_LabelsEntry,
    } as RequestNewCertificateRequest_LabelsEntry;
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

  fromJSON(object: any): RequestNewCertificateRequest_LabelsEntry {
    const message = {
      ...baseRequestNewCertificateRequest_LabelsEntry,
    } as RequestNewCertificateRequest_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: RequestNewCertificateRequest_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<RequestNewCertificateRequest_LabelsEntry>, I>
  >(object: I): RequestNewCertificateRequest_LabelsEntry {
    const message = {
      ...baseRequestNewCertificateRequest_LabelsEntry,
    } as RequestNewCertificateRequest_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  RequestNewCertificateRequest_LabelsEntry.$type,
  RequestNewCertificateRequest_LabelsEntry
);

const baseRequestNewCertificateMetadata: object = {
  $type: "yandex.cloud.certificatemanager.v1.RequestNewCertificateMetadata",
  certificateId: "",
};

export const RequestNewCertificateMetadata = {
  $type:
    "yandex.cloud.certificatemanager.v1.RequestNewCertificateMetadata" as const,

  encode(
    message: RequestNewCertificateMetadata,
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
  ): RequestNewCertificateMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseRequestNewCertificateMetadata,
    } as RequestNewCertificateMetadata;
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

  fromJSON(object: any): RequestNewCertificateMetadata {
    const message = {
      ...baseRequestNewCertificateMetadata,
    } as RequestNewCertificateMetadata;
    message.certificateId =
      object.certificateId !== undefined && object.certificateId !== null
        ? String(object.certificateId)
        : "";
    return message;
  },

  toJSON(message: RequestNewCertificateMetadata): unknown {
    const obj: any = {};
    message.certificateId !== undefined &&
      (obj.certificateId = message.certificateId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RequestNewCertificateMetadata>, I>>(
    object: I
  ): RequestNewCertificateMetadata {
    const message = {
      ...baseRequestNewCertificateMetadata,
    } as RequestNewCertificateMetadata;
    message.certificateId = object.certificateId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  RequestNewCertificateMetadata.$type,
  RequestNewCertificateMetadata
);

const baseListCertificateOperationsRequest: object = {
  $type: "yandex.cloud.certificatemanager.v1.ListCertificateOperationsRequest",
  certificateId: "",
  pageSize: 0,
  pageToken: "",
};

export const ListCertificateOperationsRequest = {
  $type:
    "yandex.cloud.certificatemanager.v1.ListCertificateOperationsRequest" as const,

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
  $type: "yandex.cloud.certificatemanager.v1.ListCertificateOperationsResponse",
  nextPageToken: "",
};

export const ListCertificateOperationsResponse = {
  $type:
    "yandex.cloud.certificatemanager.v1.ListCertificateOperationsResponse" as const,

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
    path: "/yandex.cloud.certificatemanager.v1.CertificateService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetCertificateRequest) =>
      Buffer.from(GetCertificateRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetCertificateRequest.decode(value),
    responseSerialize: (value: Certificate) =>
      Buffer.from(Certificate.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Certificate.decode(value),
  },
  /** Returns the list of certificates in the specified folder. */
  list: {
    path: "/yandex.cloud.certificatemanager.v1.CertificateService/List",
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
  /** Creates a certificate in the specified folder. */
  create: {
    path: "/yandex.cloud.certificatemanager.v1.CertificateService/Create",
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
    path: "/yandex.cloud.certificatemanager.v1.CertificateService/Update",
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
    path: "/yandex.cloud.certificatemanager.v1.CertificateService/Delete",
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
  /** Request a certificate in the specified folder. */
  requestNew: {
    path: "/yandex.cloud.certificatemanager.v1.CertificateService/RequestNew",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: RequestNewCertificateRequest) =>
      Buffer.from(RequestNewCertificateRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      RequestNewCertificateRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Lists operations for the specified certificate. */
  listOperations: {
    path: "/yandex.cloud.certificatemanager.v1.CertificateService/ListOperations",
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
  /** Lists existing access bindings for the specified certificate. */
  listAccessBindings: {
    path: "/yandex.cloud.certificatemanager.v1.CertificateService/ListAccessBindings",
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
  /** Sets access bindings for the certificate. */
  setAccessBindings: {
    path: "/yandex.cloud.certificatemanager.v1.CertificateService/SetAccessBindings",
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
  /** Updates access bindings for the specified certificate. */
  updateAccessBindings: {
    path: "/yandex.cloud.certificatemanager.v1.CertificateService/UpdateAccessBindings",
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
} as const;

export interface CertificateServiceServer extends UntypedServiceImplementation {
  /**
   * Returns the specified certificate.
   *
   * To get the list of available certificates, make a [List] request.
   */
  get: handleUnaryCall<GetCertificateRequest, Certificate>;
  /** Returns the list of certificates in the specified folder. */
  list: handleUnaryCall<ListCertificatesRequest, ListCertificatesResponse>;
  /** Creates a certificate in the specified folder. */
  create: handleUnaryCall<CreateCertificateRequest, Operation>;
  /** Updates the specified certificate. */
  update: handleUnaryCall<UpdateCertificateRequest, Operation>;
  /** Deletes the specified certificate. */
  delete: handleUnaryCall<DeleteCertificateRequest, Operation>;
  /** Request a certificate in the specified folder. */
  requestNew: handleUnaryCall<RequestNewCertificateRequest, Operation>;
  /** Lists operations for the specified certificate. */
  listOperations: handleUnaryCall<
    ListCertificateOperationsRequest,
    ListCertificateOperationsResponse
  >;
  /** Lists existing access bindings for the specified certificate. */
  listAccessBindings: handleUnaryCall<
    ListAccessBindingsRequest,
    ListAccessBindingsResponse
  >;
  /** Sets access bindings for the certificate. */
  setAccessBindings: handleUnaryCall<SetAccessBindingsRequest, Operation>;
  /** Updates access bindings for the specified certificate. */
  updateAccessBindings: handleUnaryCall<UpdateAccessBindingsRequest, Operation>;
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
  /** Returns the list of certificates in the specified folder. */
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
  /** Creates a certificate in the specified folder. */
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
  /** Request a certificate in the specified folder. */
  requestNew(
    request: RequestNewCertificateRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  requestNew(
    request: RequestNewCertificateRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  requestNew(
    request: RequestNewCertificateRequest,
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
  /** Lists existing access bindings for the specified certificate. */
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
  /** Sets access bindings for the certificate. */
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
  /** Updates access bindings for the specified certificate. */
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
}

export const CertificateServiceClient = makeGenericClientConstructor(
  CertificateServiceService,
  "yandex.cloud.certificatemanager.v1.CertificateService"
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
