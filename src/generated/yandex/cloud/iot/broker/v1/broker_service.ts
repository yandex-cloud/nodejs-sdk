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
import {
  Broker,
  BrokerCertificate,
  BrokerPassword,
} from "../../../../../yandex/cloud/iot/broker/v1/broker";
import { Operation } from "../../../../../yandex/cloud/operation/operation";

export const protobufPackage = "yandex.cloud.iot.broker.v1";

export interface GetBrokerRequest {
  $type: "yandex.cloud.iot.broker.v1.GetBrokerRequest";
  /**
   * ID of the broker to return.
   *
   * To get a broker ID make a [BrokerService.List] request.
   */
  brokerId: string;
}

export interface ListBrokersRequest {
  $type: "yandex.cloud.iot.broker.v1.ListBrokersRequest";
  /**
   * ID of the folder to list brokers in.
   *
   * To get a folder ID make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /**
   * The maximum number of results per page that should be returned. If the number of available
   * results is larger than `page_size`, the service returns a [ListBrokersResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set `page_token` to the
   * [ListBrokersResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
}

export interface ListBrokersResponse {
  $type: "yandex.cloud.iot.broker.v1.ListBrokersResponse";
  /** List of brokers. */
  brokers: Broker[];
  /**
   * Token for getting the next page of the list. If the number of results is greater than
   * the specified [ListBrokersRequest.page_size], use `next_page_token` as the value
   * for the [ListBrokersRequest.page_token] parameter in the next list request.
   *
   * Each subsequent page will have its own `next_page_token` to continue paging through the results.
   */
  nextPageToken: string;
}

export interface CreateBrokerRequest {
  $type: "yandex.cloud.iot.broker.v1.CreateBrokerRequest";
  /**
   * ID of the folder to create a broker in.
   *
   * To get a folder ID, make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /** Name of the broker. The name must be unique within the folder. */
  name: string;
  /** Description of the broker. */
  description: string;
  /** Resource labels as `key:value` pairs. */
  labels: { [key: string]: string };
  /** Broker certificates. */
  certificates: CreateBrokerRequest_Certificate[];
  /**
   * Broker passwords.
   *
   * The password must contain at least three character categories among the following: upper case latin, lower case latin, numbers and special symbols.
   */
  password: string;
}

export interface CreateBrokerRequest_LabelsEntry {
  $type: "yandex.cloud.iot.broker.v1.CreateBrokerRequest.LabelsEntry";
  key: string;
  value: string;
}

/** Specification of a broker certificate. */
export interface CreateBrokerRequest_Certificate {
  $type: "yandex.cloud.iot.broker.v1.CreateBrokerRequest.Certificate";
  /** Public part of the broker certificate. */
  certificateData: string;
}

export interface CreateBrokerMetadata {
  $type: "yandex.cloud.iot.broker.v1.CreateBrokerMetadata";
  /** ID of the broker that is being created. */
  brokerId: string;
}

export interface UpdateBrokerRequest {
  $type: "yandex.cloud.iot.broker.v1.UpdateBrokerRequest";
  /**
   * ID of the broker to update.
   *
   * To get a broker ID make a [BrokerService.List] request.
   */
  brokerId: string;
  /** Field mask that specifies which fields of the broker are going to be updated. */
  updateMask?: FieldMask;
  /** Name of the broker. The name must be unique within the folder. */
  name: string;
  /** Description of the broker. */
  description: string;
  /**
   * Resource labels as `key:value` pairs.
   *
   * Existing set of `labels` is completely replaced by the provided set.
   */
  labels: { [key: string]: string };
}

export interface UpdateBrokerRequest_LabelsEntry {
  $type: "yandex.cloud.iot.broker.v1.UpdateBrokerRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface UpdateBrokerMetadata {
  $type: "yandex.cloud.iot.broker.v1.UpdateBrokerMetadata";
  /** ID of the broker that is being updated. */
  brokerId: string;
}

export interface DeleteBrokerRequest {
  $type: "yandex.cloud.iot.broker.v1.DeleteBrokerRequest";
  /**
   * ID of the broker to delete.
   *
   * To get a broker ID make a [BrokerService.List] request.
   */
  brokerId: string;
}

export interface DeleteBrokerMetadata {
  $type: "yandex.cloud.iot.broker.v1.DeleteBrokerMetadata";
  /** ID of the broker that is being deleted. */
  brokerId: string;
}

export interface ListBrokerCertificatesRequest {
  $type: "yandex.cloud.iot.broker.v1.ListBrokerCertificatesRequest";
  /** ID of the broker to list certificates for. */
  brokerId: string;
}

export interface ListBrokerCertificatesResponse {
  $type: "yandex.cloud.iot.broker.v1.ListBrokerCertificatesResponse";
  /** List of certificates for the specified broker. */
  certificates: BrokerCertificate[];
}

export interface AddBrokerCertificateRequest {
  $type: "yandex.cloud.iot.broker.v1.AddBrokerCertificateRequest";
  /**
   * ID of the broker for which the certificate is being added.
   *
   * To get a broker ID make a [BrokerService.List] request.
   */
  brokerId: string;
  /** Public part of the certificate that is being added. */
  certificateData: string;
}

export interface AddBrokerCertificateMetadata {
  $type: "yandex.cloud.iot.broker.v1.AddBrokerCertificateMetadata";
  /** ID of the broker certificate that is being added. */
  brokerId: string;
  /** Fingerprint of the certificate that is being added. */
  fingerprint: string;
}

export interface DeleteBrokerCertificateRequest {
  $type: "yandex.cloud.iot.broker.v1.DeleteBrokerCertificateRequest";
  /**
   * ID of the broker to delete a certificate for.
   *
   * To get a broker ID make a [BrokerService.List] request.
   */
  brokerId: string;
  /** Fingerprint of the certificate that is being deleted. */
  fingerprint: string;
}

export interface DeleteBrokerCertificateMetadata {
  $type: "yandex.cloud.iot.broker.v1.DeleteBrokerCertificateMetadata";
  /** ID of a broker for which the certificate is being delete. */
  brokerId: string;
  /** Fingerprint of the certificate to deleted. */
  fingerprint: string;
}

export interface ListBrokerPasswordsRequest {
  $type: "yandex.cloud.iot.broker.v1.ListBrokerPasswordsRequest";
  /**
   * ID of the broker to list passwords in.
   *
   * To get a broker ID make a [BrokerService.List] request.
   */
  brokerId: string;
}

export interface ListBrokerPasswordsResponse {
  $type: "yandex.cloud.iot.broker.v1.ListBrokerPasswordsResponse";
  /** List of passwords for the specified broker. */
  passwords: BrokerPassword[];
}

export interface AddBrokerPasswordRequest {
  $type: "yandex.cloud.iot.broker.v1.AddBrokerPasswordRequest";
  /**
   * ID of the broker to add a password for.
   *
   * To get a broker ID make a [BrokerService.List] request.
   */
  brokerId: string;
  /**
   * Passwords for the broker.
   *
   * The password must contain at least three character categories among the following: upper case latin, lower case latin, numbers and special symbols.
   */
  password: string;
}

export interface AddBrokerPasswordMetadata {
  $type: "yandex.cloud.iot.broker.v1.AddBrokerPasswordMetadata";
  /** ID of the broker for which the password is being added. */
  brokerId: string;
  /** ID of a password that is being added. */
  passwordId: string;
}

export interface DeleteBrokerPasswordRequest {
  $type: "yandex.cloud.iot.broker.v1.DeleteBrokerPasswordRequest";
  /**
   * ID of the broker to delete a password for.
   *
   * To get a broker ID make a [BrokerService.List] request.
   */
  brokerId: string;
  /**
   * ID of the password to delete.
   *
   * To get a password ID make a [BrokerService.ListPasswords] request.
   */
  passwordId: string;
}

export interface DeleteBrokerPasswordMetadata {
  $type: "yandex.cloud.iot.broker.v1.DeleteBrokerPasswordMetadata";
  /** ID of a broker for which the password is being delete. */
  brokerId: string;
  /**
   * ID of the password to delete.
   *
   * To get a password ID make a [BrokerService.ListPasswords] request.
   */
  passwordId: string;
}

export interface ListBrokerOperationsRequest {
  $type: "yandex.cloud.iot.broker.v1.ListBrokerOperationsRequest";
  /** ID of the broker to list operations for. */
  brokerId: string;
  /**
   * The maximum number of results per page that should be returned. If the number of available
   * results is larger than `page_size`, the service returns a [ListBrokerOperationsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set `page_token` to the
   * [ListBrokerOperationsResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
  /**
   * A filter expression that filters resources listed in the response.
   * Currently you can use filtering only on [Broker.name] field.
   */
  filter: string;
}

export interface ListBrokerOperationsResponse {
  $type: "yandex.cloud.iot.broker.v1.ListBrokerOperationsResponse";
  /** List of operations for the specified broker. */
  operations: Operation[];
  /**
   * Token for getting the next page of the list. If the number of results is greater than
   * the specified [ListBrokerOperationsRequest.page_size], use `next_page_token` as the value
   * for the [ListBrokerOperationsRequest.page_token] parameter in the next list request.
   *
   * Each subsequent page will have its own `next_page_token` to continue paging through the results.
   */
  nextPageToken: string;
}

const baseGetBrokerRequest: object = {
  $type: "yandex.cloud.iot.broker.v1.GetBrokerRequest",
  brokerId: "",
};

export const GetBrokerRequest = {
  $type: "yandex.cloud.iot.broker.v1.GetBrokerRequest" as const,

  encode(
    message: GetBrokerRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.brokerId !== "") {
      writer.uint32(10).string(message.brokerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetBrokerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetBrokerRequest } as GetBrokerRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.brokerId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetBrokerRequest {
    const message = { ...baseGetBrokerRequest } as GetBrokerRequest;
    message.brokerId =
      object.brokerId !== undefined && object.brokerId !== null
        ? String(object.brokerId)
        : "";
    return message;
  },

  toJSON(message: GetBrokerRequest): unknown {
    const obj: any = {};
    message.brokerId !== undefined && (obj.brokerId = message.brokerId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetBrokerRequest>, I>>(
    object: I
  ): GetBrokerRequest {
    const message = { ...baseGetBrokerRequest } as GetBrokerRequest;
    message.brokerId = object.brokerId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetBrokerRequest.$type, GetBrokerRequest);

const baseListBrokersRequest: object = {
  $type: "yandex.cloud.iot.broker.v1.ListBrokersRequest",
  folderId: "",
  pageSize: 0,
  pageToken: "",
};

export const ListBrokersRequest = {
  $type: "yandex.cloud.iot.broker.v1.ListBrokersRequest" as const,

  encode(
    message: ListBrokersRequest,
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
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListBrokersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListBrokersRequest } as ListBrokersRequest;
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListBrokersRequest {
    const message = { ...baseListBrokersRequest } as ListBrokersRequest;
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
    return message;
  },

  toJSON(message: ListBrokersRequest): unknown {
    const obj: any = {};
    message.folderId !== undefined && (obj.folderId = message.folderId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListBrokersRequest>, I>>(
    object: I
  ): ListBrokersRequest {
    const message = { ...baseListBrokersRequest } as ListBrokersRequest;
    message.folderId = object.folderId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListBrokersRequest.$type, ListBrokersRequest);

const baseListBrokersResponse: object = {
  $type: "yandex.cloud.iot.broker.v1.ListBrokersResponse",
  nextPageToken: "",
};

export const ListBrokersResponse = {
  $type: "yandex.cloud.iot.broker.v1.ListBrokersResponse" as const,

  encode(
    message: ListBrokersResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.brokers) {
      Broker.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListBrokersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListBrokersResponse } as ListBrokersResponse;
    message.brokers = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.brokers.push(Broker.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListBrokersResponse {
    const message = { ...baseListBrokersResponse } as ListBrokersResponse;
    message.brokers = (object.brokers ?? []).map((e: any) =>
      Broker.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListBrokersResponse): unknown {
    const obj: any = {};
    if (message.brokers) {
      obj.brokers = message.brokers.map((e) =>
        e ? Broker.toJSON(e) : undefined
      );
    } else {
      obj.brokers = [];
    }
    message.nextPageToken !== undefined &&
      (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListBrokersResponse>, I>>(
    object: I
  ): ListBrokersResponse {
    const message = { ...baseListBrokersResponse } as ListBrokersResponse;
    message.brokers = object.brokers?.map((e) => Broker.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListBrokersResponse.$type, ListBrokersResponse);

const baseCreateBrokerRequest: object = {
  $type: "yandex.cloud.iot.broker.v1.CreateBrokerRequest",
  folderId: "",
  name: "",
  description: "",
  password: "",
};

export const CreateBrokerRequest = {
  $type: "yandex.cloud.iot.broker.v1.CreateBrokerRequest" as const,

  encode(
    message: CreateBrokerRequest,
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
      CreateBrokerRequest_LabelsEntry.encode(
        {
          $type: "yandex.cloud.iot.broker.v1.CreateBrokerRequest.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(34).fork()
      ).ldelim();
    });
    for (const v of message.certificates) {
      CreateBrokerRequest_Certificate.encode(
        v!,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.password !== "") {
      writer.uint32(50).string(message.password);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateBrokerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateBrokerRequest } as CreateBrokerRequest;
    message.labels = {};
    message.certificates = [];
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
          const entry4 = CreateBrokerRequest_LabelsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry4.value !== undefined) {
            message.labels[entry4.key] = entry4.value;
          }
          break;
        case 5:
          message.certificates.push(
            CreateBrokerRequest_Certificate.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.password = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateBrokerRequest {
    const message = { ...baseCreateBrokerRequest } as CreateBrokerRequest;
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
    message.certificates = (object.certificates ?? []).map((e: any) =>
      CreateBrokerRequest_Certificate.fromJSON(e)
    );
    message.password =
      object.password !== undefined && object.password !== null
        ? String(object.password)
        : "";
    return message;
  },

  toJSON(message: CreateBrokerRequest): unknown {
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
    if (message.certificates) {
      obj.certificates = message.certificates.map((e) =>
        e ? CreateBrokerRequest_Certificate.toJSON(e) : undefined
      );
    } else {
      obj.certificates = [];
    }
    message.password !== undefined && (obj.password = message.password);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateBrokerRequest>, I>>(
    object: I
  ): CreateBrokerRequest {
    const message = { ...baseCreateBrokerRequest } as CreateBrokerRequest;
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
    message.certificates =
      object.certificates?.map((e) =>
        CreateBrokerRequest_Certificate.fromPartial(e)
      ) || [];
    message.password = object.password ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateBrokerRequest.$type, CreateBrokerRequest);

const baseCreateBrokerRequest_LabelsEntry: object = {
  $type: "yandex.cloud.iot.broker.v1.CreateBrokerRequest.LabelsEntry",
  key: "",
  value: "",
};

export const CreateBrokerRequest_LabelsEntry = {
  $type: "yandex.cloud.iot.broker.v1.CreateBrokerRequest.LabelsEntry" as const,

  encode(
    message: CreateBrokerRequest_LabelsEntry,
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
  ): CreateBrokerRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateBrokerRequest_LabelsEntry,
    } as CreateBrokerRequest_LabelsEntry;
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

  fromJSON(object: any): CreateBrokerRequest_LabelsEntry {
    const message = {
      ...baseCreateBrokerRequest_LabelsEntry,
    } as CreateBrokerRequest_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: CreateBrokerRequest_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateBrokerRequest_LabelsEntry>, I>>(
    object: I
  ): CreateBrokerRequest_LabelsEntry {
    const message = {
      ...baseCreateBrokerRequest_LabelsEntry,
    } as CreateBrokerRequest_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  CreateBrokerRequest_LabelsEntry.$type,
  CreateBrokerRequest_LabelsEntry
);

const baseCreateBrokerRequest_Certificate: object = {
  $type: "yandex.cloud.iot.broker.v1.CreateBrokerRequest.Certificate",
  certificateData: "",
};

export const CreateBrokerRequest_Certificate = {
  $type: "yandex.cloud.iot.broker.v1.CreateBrokerRequest.Certificate" as const,

  encode(
    message: CreateBrokerRequest_Certificate,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.certificateData !== "") {
      writer.uint32(10).string(message.certificateData);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateBrokerRequest_Certificate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateBrokerRequest_Certificate,
    } as CreateBrokerRequest_Certificate;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.certificateData = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateBrokerRequest_Certificate {
    const message = {
      ...baseCreateBrokerRequest_Certificate,
    } as CreateBrokerRequest_Certificate;
    message.certificateData =
      object.certificateData !== undefined && object.certificateData !== null
        ? String(object.certificateData)
        : "";
    return message;
  },

  toJSON(message: CreateBrokerRequest_Certificate): unknown {
    const obj: any = {};
    message.certificateData !== undefined &&
      (obj.certificateData = message.certificateData);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateBrokerRequest_Certificate>, I>>(
    object: I
  ): CreateBrokerRequest_Certificate {
    const message = {
      ...baseCreateBrokerRequest_Certificate,
    } as CreateBrokerRequest_Certificate;
    message.certificateData = object.certificateData ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  CreateBrokerRequest_Certificate.$type,
  CreateBrokerRequest_Certificate
);

const baseCreateBrokerMetadata: object = {
  $type: "yandex.cloud.iot.broker.v1.CreateBrokerMetadata",
  brokerId: "",
};

export const CreateBrokerMetadata = {
  $type: "yandex.cloud.iot.broker.v1.CreateBrokerMetadata" as const,

  encode(
    message: CreateBrokerMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.brokerId !== "") {
      writer.uint32(10).string(message.brokerId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateBrokerMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateBrokerMetadata } as CreateBrokerMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.brokerId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateBrokerMetadata {
    const message = { ...baseCreateBrokerMetadata } as CreateBrokerMetadata;
    message.brokerId =
      object.brokerId !== undefined && object.brokerId !== null
        ? String(object.brokerId)
        : "";
    return message;
  },

  toJSON(message: CreateBrokerMetadata): unknown {
    const obj: any = {};
    message.brokerId !== undefined && (obj.brokerId = message.brokerId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateBrokerMetadata>, I>>(
    object: I
  ): CreateBrokerMetadata {
    const message = { ...baseCreateBrokerMetadata } as CreateBrokerMetadata;
    message.brokerId = object.brokerId ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateBrokerMetadata.$type, CreateBrokerMetadata);

const baseUpdateBrokerRequest: object = {
  $type: "yandex.cloud.iot.broker.v1.UpdateBrokerRequest",
  brokerId: "",
  name: "",
  description: "",
};

export const UpdateBrokerRequest = {
  $type: "yandex.cloud.iot.broker.v1.UpdateBrokerRequest" as const,

  encode(
    message: UpdateBrokerRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.brokerId !== "") {
      writer.uint32(10).string(message.brokerId);
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
      UpdateBrokerRequest_LabelsEntry.encode(
        {
          $type: "yandex.cloud.iot.broker.v1.UpdateBrokerRequest.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(42).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateBrokerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdateBrokerRequest } as UpdateBrokerRequest;
    message.labels = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.brokerId = reader.string();
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
          const entry5 = UpdateBrokerRequest_LabelsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry5.value !== undefined) {
            message.labels[entry5.key] = entry5.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateBrokerRequest {
    const message = { ...baseUpdateBrokerRequest } as UpdateBrokerRequest;
    message.brokerId =
      object.brokerId !== undefined && object.brokerId !== null
        ? String(object.brokerId)
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
    return message;
  },

  toJSON(message: UpdateBrokerRequest): unknown {
    const obj: any = {};
    message.brokerId !== undefined && (obj.brokerId = message.brokerId);
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
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateBrokerRequest>, I>>(
    object: I
  ): UpdateBrokerRequest {
    const message = { ...baseUpdateBrokerRequest } as UpdateBrokerRequest;
    message.brokerId = object.brokerId ?? "";
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
    return message;
  },
};

messageTypeRegistry.set(UpdateBrokerRequest.$type, UpdateBrokerRequest);

const baseUpdateBrokerRequest_LabelsEntry: object = {
  $type: "yandex.cloud.iot.broker.v1.UpdateBrokerRequest.LabelsEntry",
  key: "",
  value: "",
};

export const UpdateBrokerRequest_LabelsEntry = {
  $type: "yandex.cloud.iot.broker.v1.UpdateBrokerRequest.LabelsEntry" as const,

  encode(
    message: UpdateBrokerRequest_LabelsEntry,
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
  ): UpdateBrokerRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateBrokerRequest_LabelsEntry,
    } as UpdateBrokerRequest_LabelsEntry;
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

  fromJSON(object: any): UpdateBrokerRequest_LabelsEntry {
    const message = {
      ...baseUpdateBrokerRequest_LabelsEntry,
    } as UpdateBrokerRequest_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: UpdateBrokerRequest_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateBrokerRequest_LabelsEntry>, I>>(
    object: I
  ): UpdateBrokerRequest_LabelsEntry {
    const message = {
      ...baseUpdateBrokerRequest_LabelsEntry,
    } as UpdateBrokerRequest_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  UpdateBrokerRequest_LabelsEntry.$type,
  UpdateBrokerRequest_LabelsEntry
);

const baseUpdateBrokerMetadata: object = {
  $type: "yandex.cloud.iot.broker.v1.UpdateBrokerMetadata",
  brokerId: "",
};

export const UpdateBrokerMetadata = {
  $type: "yandex.cloud.iot.broker.v1.UpdateBrokerMetadata" as const,

  encode(
    message: UpdateBrokerMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.brokerId !== "") {
      writer.uint32(10).string(message.brokerId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateBrokerMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdateBrokerMetadata } as UpdateBrokerMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.brokerId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateBrokerMetadata {
    const message = { ...baseUpdateBrokerMetadata } as UpdateBrokerMetadata;
    message.brokerId =
      object.brokerId !== undefined && object.brokerId !== null
        ? String(object.brokerId)
        : "";
    return message;
  },

  toJSON(message: UpdateBrokerMetadata): unknown {
    const obj: any = {};
    message.brokerId !== undefined && (obj.brokerId = message.brokerId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateBrokerMetadata>, I>>(
    object: I
  ): UpdateBrokerMetadata {
    const message = { ...baseUpdateBrokerMetadata } as UpdateBrokerMetadata;
    message.brokerId = object.brokerId ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateBrokerMetadata.$type, UpdateBrokerMetadata);

const baseDeleteBrokerRequest: object = {
  $type: "yandex.cloud.iot.broker.v1.DeleteBrokerRequest",
  brokerId: "",
};

export const DeleteBrokerRequest = {
  $type: "yandex.cloud.iot.broker.v1.DeleteBrokerRequest" as const,

  encode(
    message: DeleteBrokerRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.brokerId !== "") {
      writer.uint32(10).string(message.brokerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteBrokerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleteBrokerRequest } as DeleteBrokerRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.brokerId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteBrokerRequest {
    const message = { ...baseDeleteBrokerRequest } as DeleteBrokerRequest;
    message.brokerId =
      object.brokerId !== undefined && object.brokerId !== null
        ? String(object.brokerId)
        : "";
    return message;
  },

  toJSON(message: DeleteBrokerRequest): unknown {
    const obj: any = {};
    message.brokerId !== undefined && (obj.brokerId = message.brokerId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteBrokerRequest>, I>>(
    object: I
  ): DeleteBrokerRequest {
    const message = { ...baseDeleteBrokerRequest } as DeleteBrokerRequest;
    message.brokerId = object.brokerId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteBrokerRequest.$type, DeleteBrokerRequest);

const baseDeleteBrokerMetadata: object = {
  $type: "yandex.cloud.iot.broker.v1.DeleteBrokerMetadata",
  brokerId: "",
};

export const DeleteBrokerMetadata = {
  $type: "yandex.cloud.iot.broker.v1.DeleteBrokerMetadata" as const,

  encode(
    message: DeleteBrokerMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.brokerId !== "") {
      writer.uint32(10).string(message.brokerId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteBrokerMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleteBrokerMetadata } as DeleteBrokerMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.brokerId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteBrokerMetadata {
    const message = { ...baseDeleteBrokerMetadata } as DeleteBrokerMetadata;
    message.brokerId =
      object.brokerId !== undefined && object.brokerId !== null
        ? String(object.brokerId)
        : "";
    return message;
  },

  toJSON(message: DeleteBrokerMetadata): unknown {
    const obj: any = {};
    message.brokerId !== undefined && (obj.brokerId = message.brokerId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteBrokerMetadata>, I>>(
    object: I
  ): DeleteBrokerMetadata {
    const message = { ...baseDeleteBrokerMetadata } as DeleteBrokerMetadata;
    message.brokerId = object.brokerId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteBrokerMetadata.$type, DeleteBrokerMetadata);

const baseListBrokerCertificatesRequest: object = {
  $type: "yandex.cloud.iot.broker.v1.ListBrokerCertificatesRequest",
  brokerId: "",
};

export const ListBrokerCertificatesRequest = {
  $type: "yandex.cloud.iot.broker.v1.ListBrokerCertificatesRequest" as const,

  encode(
    message: ListBrokerCertificatesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.brokerId !== "") {
      writer.uint32(10).string(message.brokerId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListBrokerCertificatesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListBrokerCertificatesRequest,
    } as ListBrokerCertificatesRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.brokerId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListBrokerCertificatesRequest {
    const message = {
      ...baseListBrokerCertificatesRequest,
    } as ListBrokerCertificatesRequest;
    message.brokerId =
      object.brokerId !== undefined && object.brokerId !== null
        ? String(object.brokerId)
        : "";
    return message;
  },

  toJSON(message: ListBrokerCertificatesRequest): unknown {
    const obj: any = {};
    message.brokerId !== undefined && (obj.brokerId = message.brokerId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListBrokerCertificatesRequest>, I>>(
    object: I
  ): ListBrokerCertificatesRequest {
    const message = {
      ...baseListBrokerCertificatesRequest,
    } as ListBrokerCertificatesRequest;
    message.brokerId = object.brokerId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListBrokerCertificatesRequest.$type,
  ListBrokerCertificatesRequest
);

const baseListBrokerCertificatesResponse: object = {
  $type: "yandex.cloud.iot.broker.v1.ListBrokerCertificatesResponse",
};

export const ListBrokerCertificatesResponse = {
  $type: "yandex.cloud.iot.broker.v1.ListBrokerCertificatesResponse" as const,

  encode(
    message: ListBrokerCertificatesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.certificates) {
      BrokerCertificate.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListBrokerCertificatesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListBrokerCertificatesResponse,
    } as ListBrokerCertificatesResponse;
    message.certificates = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.certificates.push(
            BrokerCertificate.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListBrokerCertificatesResponse {
    const message = {
      ...baseListBrokerCertificatesResponse,
    } as ListBrokerCertificatesResponse;
    message.certificates = (object.certificates ?? []).map((e: any) =>
      BrokerCertificate.fromJSON(e)
    );
    return message;
  },

  toJSON(message: ListBrokerCertificatesResponse): unknown {
    const obj: any = {};
    if (message.certificates) {
      obj.certificates = message.certificates.map((e) =>
        e ? BrokerCertificate.toJSON(e) : undefined
      );
    } else {
      obj.certificates = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListBrokerCertificatesResponse>, I>>(
    object: I
  ): ListBrokerCertificatesResponse {
    const message = {
      ...baseListBrokerCertificatesResponse,
    } as ListBrokerCertificatesResponse;
    message.certificates =
      object.certificates?.map((e) => BrokerCertificate.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(
  ListBrokerCertificatesResponse.$type,
  ListBrokerCertificatesResponse
);

const baseAddBrokerCertificateRequest: object = {
  $type: "yandex.cloud.iot.broker.v1.AddBrokerCertificateRequest",
  brokerId: "",
  certificateData: "",
};

export const AddBrokerCertificateRequest = {
  $type: "yandex.cloud.iot.broker.v1.AddBrokerCertificateRequest" as const,

  encode(
    message: AddBrokerCertificateRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.brokerId !== "") {
      writer.uint32(10).string(message.brokerId);
    }
    if (message.certificateData !== "") {
      writer.uint32(26).string(message.certificateData);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AddBrokerCertificateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseAddBrokerCertificateRequest,
    } as AddBrokerCertificateRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.brokerId = reader.string();
          break;
        case 3:
          message.certificateData = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddBrokerCertificateRequest {
    const message = {
      ...baseAddBrokerCertificateRequest,
    } as AddBrokerCertificateRequest;
    message.brokerId =
      object.brokerId !== undefined && object.brokerId !== null
        ? String(object.brokerId)
        : "";
    message.certificateData =
      object.certificateData !== undefined && object.certificateData !== null
        ? String(object.certificateData)
        : "";
    return message;
  },

  toJSON(message: AddBrokerCertificateRequest): unknown {
    const obj: any = {};
    message.brokerId !== undefined && (obj.brokerId = message.brokerId);
    message.certificateData !== undefined &&
      (obj.certificateData = message.certificateData);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AddBrokerCertificateRequest>, I>>(
    object: I
  ): AddBrokerCertificateRequest {
    const message = {
      ...baseAddBrokerCertificateRequest,
    } as AddBrokerCertificateRequest;
    message.brokerId = object.brokerId ?? "";
    message.certificateData = object.certificateData ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  AddBrokerCertificateRequest.$type,
  AddBrokerCertificateRequest
);

const baseAddBrokerCertificateMetadata: object = {
  $type: "yandex.cloud.iot.broker.v1.AddBrokerCertificateMetadata",
  brokerId: "",
  fingerprint: "",
};

export const AddBrokerCertificateMetadata = {
  $type: "yandex.cloud.iot.broker.v1.AddBrokerCertificateMetadata" as const,

  encode(
    message: AddBrokerCertificateMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.brokerId !== "") {
      writer.uint32(10).string(message.brokerId);
    }
    if (message.fingerprint !== "") {
      writer.uint32(18).string(message.fingerprint);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AddBrokerCertificateMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseAddBrokerCertificateMetadata,
    } as AddBrokerCertificateMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.brokerId = reader.string();
          break;
        case 2:
          message.fingerprint = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddBrokerCertificateMetadata {
    const message = {
      ...baseAddBrokerCertificateMetadata,
    } as AddBrokerCertificateMetadata;
    message.brokerId =
      object.brokerId !== undefined && object.brokerId !== null
        ? String(object.brokerId)
        : "";
    message.fingerprint =
      object.fingerprint !== undefined && object.fingerprint !== null
        ? String(object.fingerprint)
        : "";
    return message;
  },

  toJSON(message: AddBrokerCertificateMetadata): unknown {
    const obj: any = {};
    message.brokerId !== undefined && (obj.brokerId = message.brokerId);
    message.fingerprint !== undefined &&
      (obj.fingerprint = message.fingerprint);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AddBrokerCertificateMetadata>, I>>(
    object: I
  ): AddBrokerCertificateMetadata {
    const message = {
      ...baseAddBrokerCertificateMetadata,
    } as AddBrokerCertificateMetadata;
    message.brokerId = object.brokerId ?? "";
    message.fingerprint = object.fingerprint ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  AddBrokerCertificateMetadata.$type,
  AddBrokerCertificateMetadata
);

const baseDeleteBrokerCertificateRequest: object = {
  $type: "yandex.cloud.iot.broker.v1.DeleteBrokerCertificateRequest",
  brokerId: "",
  fingerprint: "",
};

export const DeleteBrokerCertificateRequest = {
  $type: "yandex.cloud.iot.broker.v1.DeleteBrokerCertificateRequest" as const,

  encode(
    message: DeleteBrokerCertificateRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.brokerId !== "") {
      writer.uint32(10).string(message.brokerId);
    }
    if (message.fingerprint !== "") {
      writer.uint32(18).string(message.fingerprint);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteBrokerCertificateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeleteBrokerCertificateRequest,
    } as DeleteBrokerCertificateRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.brokerId = reader.string();
          break;
        case 2:
          message.fingerprint = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteBrokerCertificateRequest {
    const message = {
      ...baseDeleteBrokerCertificateRequest,
    } as DeleteBrokerCertificateRequest;
    message.brokerId =
      object.brokerId !== undefined && object.brokerId !== null
        ? String(object.brokerId)
        : "";
    message.fingerprint =
      object.fingerprint !== undefined && object.fingerprint !== null
        ? String(object.fingerprint)
        : "";
    return message;
  },

  toJSON(message: DeleteBrokerCertificateRequest): unknown {
    const obj: any = {};
    message.brokerId !== undefined && (obj.brokerId = message.brokerId);
    message.fingerprint !== undefined &&
      (obj.fingerprint = message.fingerprint);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteBrokerCertificateRequest>, I>>(
    object: I
  ): DeleteBrokerCertificateRequest {
    const message = {
      ...baseDeleteBrokerCertificateRequest,
    } as DeleteBrokerCertificateRequest;
    message.brokerId = object.brokerId ?? "";
    message.fingerprint = object.fingerprint ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  DeleteBrokerCertificateRequest.$type,
  DeleteBrokerCertificateRequest
);

const baseDeleteBrokerCertificateMetadata: object = {
  $type: "yandex.cloud.iot.broker.v1.DeleteBrokerCertificateMetadata",
  brokerId: "",
  fingerprint: "",
};

export const DeleteBrokerCertificateMetadata = {
  $type: "yandex.cloud.iot.broker.v1.DeleteBrokerCertificateMetadata" as const,

  encode(
    message: DeleteBrokerCertificateMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.brokerId !== "") {
      writer.uint32(10).string(message.brokerId);
    }
    if (message.fingerprint !== "") {
      writer.uint32(18).string(message.fingerprint);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteBrokerCertificateMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeleteBrokerCertificateMetadata,
    } as DeleteBrokerCertificateMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.brokerId = reader.string();
          break;
        case 2:
          message.fingerprint = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteBrokerCertificateMetadata {
    const message = {
      ...baseDeleteBrokerCertificateMetadata,
    } as DeleteBrokerCertificateMetadata;
    message.brokerId =
      object.brokerId !== undefined && object.brokerId !== null
        ? String(object.brokerId)
        : "";
    message.fingerprint =
      object.fingerprint !== undefined && object.fingerprint !== null
        ? String(object.fingerprint)
        : "";
    return message;
  },

  toJSON(message: DeleteBrokerCertificateMetadata): unknown {
    const obj: any = {};
    message.brokerId !== undefined && (obj.brokerId = message.brokerId);
    message.fingerprint !== undefined &&
      (obj.fingerprint = message.fingerprint);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteBrokerCertificateMetadata>, I>>(
    object: I
  ): DeleteBrokerCertificateMetadata {
    const message = {
      ...baseDeleteBrokerCertificateMetadata,
    } as DeleteBrokerCertificateMetadata;
    message.brokerId = object.brokerId ?? "";
    message.fingerprint = object.fingerprint ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  DeleteBrokerCertificateMetadata.$type,
  DeleteBrokerCertificateMetadata
);

const baseListBrokerPasswordsRequest: object = {
  $type: "yandex.cloud.iot.broker.v1.ListBrokerPasswordsRequest",
  brokerId: "",
};

export const ListBrokerPasswordsRequest = {
  $type: "yandex.cloud.iot.broker.v1.ListBrokerPasswordsRequest" as const,

  encode(
    message: ListBrokerPasswordsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.brokerId !== "") {
      writer.uint32(10).string(message.brokerId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListBrokerPasswordsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListBrokerPasswordsRequest,
    } as ListBrokerPasswordsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.brokerId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListBrokerPasswordsRequest {
    const message = {
      ...baseListBrokerPasswordsRequest,
    } as ListBrokerPasswordsRequest;
    message.brokerId =
      object.brokerId !== undefined && object.brokerId !== null
        ? String(object.brokerId)
        : "";
    return message;
  },

  toJSON(message: ListBrokerPasswordsRequest): unknown {
    const obj: any = {};
    message.brokerId !== undefined && (obj.brokerId = message.brokerId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListBrokerPasswordsRequest>, I>>(
    object: I
  ): ListBrokerPasswordsRequest {
    const message = {
      ...baseListBrokerPasswordsRequest,
    } as ListBrokerPasswordsRequest;
    message.brokerId = object.brokerId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListBrokerPasswordsRequest.$type,
  ListBrokerPasswordsRequest
);

const baseListBrokerPasswordsResponse: object = {
  $type: "yandex.cloud.iot.broker.v1.ListBrokerPasswordsResponse",
};

export const ListBrokerPasswordsResponse = {
  $type: "yandex.cloud.iot.broker.v1.ListBrokerPasswordsResponse" as const,

  encode(
    message: ListBrokerPasswordsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.passwords) {
      BrokerPassword.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListBrokerPasswordsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListBrokerPasswordsResponse,
    } as ListBrokerPasswordsResponse;
    message.passwords = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.passwords.push(
            BrokerPassword.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListBrokerPasswordsResponse {
    const message = {
      ...baseListBrokerPasswordsResponse,
    } as ListBrokerPasswordsResponse;
    message.passwords = (object.passwords ?? []).map((e: any) =>
      BrokerPassword.fromJSON(e)
    );
    return message;
  },

  toJSON(message: ListBrokerPasswordsResponse): unknown {
    const obj: any = {};
    if (message.passwords) {
      obj.passwords = message.passwords.map((e) =>
        e ? BrokerPassword.toJSON(e) : undefined
      );
    } else {
      obj.passwords = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListBrokerPasswordsResponse>, I>>(
    object: I
  ): ListBrokerPasswordsResponse {
    const message = {
      ...baseListBrokerPasswordsResponse,
    } as ListBrokerPasswordsResponse;
    message.passwords =
      object.passwords?.map((e) => BrokerPassword.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(
  ListBrokerPasswordsResponse.$type,
  ListBrokerPasswordsResponse
);

const baseAddBrokerPasswordRequest: object = {
  $type: "yandex.cloud.iot.broker.v1.AddBrokerPasswordRequest",
  brokerId: "",
  password: "",
};

export const AddBrokerPasswordRequest = {
  $type: "yandex.cloud.iot.broker.v1.AddBrokerPasswordRequest" as const,

  encode(
    message: AddBrokerPasswordRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.brokerId !== "") {
      writer.uint32(10).string(message.brokerId);
    }
    if (message.password !== "") {
      writer.uint32(18).string(message.password);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AddBrokerPasswordRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseAddBrokerPasswordRequest,
    } as AddBrokerPasswordRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.brokerId = reader.string();
          break;
        case 2:
          message.password = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddBrokerPasswordRequest {
    const message = {
      ...baseAddBrokerPasswordRequest,
    } as AddBrokerPasswordRequest;
    message.brokerId =
      object.brokerId !== undefined && object.brokerId !== null
        ? String(object.brokerId)
        : "";
    message.password =
      object.password !== undefined && object.password !== null
        ? String(object.password)
        : "";
    return message;
  },

  toJSON(message: AddBrokerPasswordRequest): unknown {
    const obj: any = {};
    message.brokerId !== undefined && (obj.brokerId = message.brokerId);
    message.password !== undefined && (obj.password = message.password);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AddBrokerPasswordRequest>, I>>(
    object: I
  ): AddBrokerPasswordRequest {
    const message = {
      ...baseAddBrokerPasswordRequest,
    } as AddBrokerPasswordRequest;
    message.brokerId = object.brokerId ?? "";
    message.password = object.password ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  AddBrokerPasswordRequest.$type,
  AddBrokerPasswordRequest
);

const baseAddBrokerPasswordMetadata: object = {
  $type: "yandex.cloud.iot.broker.v1.AddBrokerPasswordMetadata",
  brokerId: "",
  passwordId: "",
};

export const AddBrokerPasswordMetadata = {
  $type: "yandex.cloud.iot.broker.v1.AddBrokerPasswordMetadata" as const,

  encode(
    message: AddBrokerPasswordMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.brokerId !== "") {
      writer.uint32(10).string(message.brokerId);
    }
    if (message.passwordId !== "") {
      writer.uint32(18).string(message.passwordId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AddBrokerPasswordMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseAddBrokerPasswordMetadata,
    } as AddBrokerPasswordMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.brokerId = reader.string();
          break;
        case 2:
          message.passwordId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddBrokerPasswordMetadata {
    const message = {
      ...baseAddBrokerPasswordMetadata,
    } as AddBrokerPasswordMetadata;
    message.brokerId =
      object.brokerId !== undefined && object.brokerId !== null
        ? String(object.brokerId)
        : "";
    message.passwordId =
      object.passwordId !== undefined && object.passwordId !== null
        ? String(object.passwordId)
        : "";
    return message;
  },

  toJSON(message: AddBrokerPasswordMetadata): unknown {
    const obj: any = {};
    message.brokerId !== undefined && (obj.brokerId = message.brokerId);
    message.passwordId !== undefined && (obj.passwordId = message.passwordId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AddBrokerPasswordMetadata>, I>>(
    object: I
  ): AddBrokerPasswordMetadata {
    const message = {
      ...baseAddBrokerPasswordMetadata,
    } as AddBrokerPasswordMetadata;
    message.brokerId = object.brokerId ?? "";
    message.passwordId = object.passwordId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  AddBrokerPasswordMetadata.$type,
  AddBrokerPasswordMetadata
);

const baseDeleteBrokerPasswordRequest: object = {
  $type: "yandex.cloud.iot.broker.v1.DeleteBrokerPasswordRequest",
  brokerId: "",
  passwordId: "",
};

export const DeleteBrokerPasswordRequest = {
  $type: "yandex.cloud.iot.broker.v1.DeleteBrokerPasswordRequest" as const,

  encode(
    message: DeleteBrokerPasswordRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.brokerId !== "") {
      writer.uint32(10).string(message.brokerId);
    }
    if (message.passwordId !== "") {
      writer.uint32(18).string(message.passwordId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteBrokerPasswordRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeleteBrokerPasswordRequest,
    } as DeleteBrokerPasswordRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.brokerId = reader.string();
          break;
        case 2:
          message.passwordId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteBrokerPasswordRequest {
    const message = {
      ...baseDeleteBrokerPasswordRequest,
    } as DeleteBrokerPasswordRequest;
    message.brokerId =
      object.brokerId !== undefined && object.brokerId !== null
        ? String(object.brokerId)
        : "";
    message.passwordId =
      object.passwordId !== undefined && object.passwordId !== null
        ? String(object.passwordId)
        : "";
    return message;
  },

  toJSON(message: DeleteBrokerPasswordRequest): unknown {
    const obj: any = {};
    message.brokerId !== undefined && (obj.brokerId = message.brokerId);
    message.passwordId !== undefined && (obj.passwordId = message.passwordId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteBrokerPasswordRequest>, I>>(
    object: I
  ): DeleteBrokerPasswordRequest {
    const message = {
      ...baseDeleteBrokerPasswordRequest,
    } as DeleteBrokerPasswordRequest;
    message.brokerId = object.brokerId ?? "";
    message.passwordId = object.passwordId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  DeleteBrokerPasswordRequest.$type,
  DeleteBrokerPasswordRequest
);

const baseDeleteBrokerPasswordMetadata: object = {
  $type: "yandex.cloud.iot.broker.v1.DeleteBrokerPasswordMetadata",
  brokerId: "",
  passwordId: "",
};

export const DeleteBrokerPasswordMetadata = {
  $type: "yandex.cloud.iot.broker.v1.DeleteBrokerPasswordMetadata" as const,

  encode(
    message: DeleteBrokerPasswordMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.brokerId !== "") {
      writer.uint32(10).string(message.brokerId);
    }
    if (message.passwordId !== "") {
      writer.uint32(18).string(message.passwordId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteBrokerPasswordMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeleteBrokerPasswordMetadata,
    } as DeleteBrokerPasswordMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.brokerId = reader.string();
          break;
        case 2:
          message.passwordId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteBrokerPasswordMetadata {
    const message = {
      ...baseDeleteBrokerPasswordMetadata,
    } as DeleteBrokerPasswordMetadata;
    message.brokerId =
      object.brokerId !== undefined && object.brokerId !== null
        ? String(object.brokerId)
        : "";
    message.passwordId =
      object.passwordId !== undefined && object.passwordId !== null
        ? String(object.passwordId)
        : "";
    return message;
  },

  toJSON(message: DeleteBrokerPasswordMetadata): unknown {
    const obj: any = {};
    message.brokerId !== undefined && (obj.brokerId = message.brokerId);
    message.passwordId !== undefined && (obj.passwordId = message.passwordId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteBrokerPasswordMetadata>, I>>(
    object: I
  ): DeleteBrokerPasswordMetadata {
    const message = {
      ...baseDeleteBrokerPasswordMetadata,
    } as DeleteBrokerPasswordMetadata;
    message.brokerId = object.brokerId ?? "";
    message.passwordId = object.passwordId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  DeleteBrokerPasswordMetadata.$type,
  DeleteBrokerPasswordMetadata
);

const baseListBrokerOperationsRequest: object = {
  $type: "yandex.cloud.iot.broker.v1.ListBrokerOperationsRequest",
  brokerId: "",
  pageSize: 0,
  pageToken: "",
  filter: "",
};

export const ListBrokerOperationsRequest = {
  $type: "yandex.cloud.iot.broker.v1.ListBrokerOperationsRequest" as const,

  encode(
    message: ListBrokerOperationsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.brokerId !== "") {
      writer.uint32(10).string(message.brokerId);
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
  ): ListBrokerOperationsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListBrokerOperationsRequest,
    } as ListBrokerOperationsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.brokerId = reader.string();
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

  fromJSON(object: any): ListBrokerOperationsRequest {
    const message = {
      ...baseListBrokerOperationsRequest,
    } as ListBrokerOperationsRequest;
    message.brokerId =
      object.brokerId !== undefined && object.brokerId !== null
        ? String(object.brokerId)
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

  toJSON(message: ListBrokerOperationsRequest): unknown {
    const obj: any = {};
    message.brokerId !== undefined && (obj.brokerId = message.brokerId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    message.filter !== undefined && (obj.filter = message.filter);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListBrokerOperationsRequest>, I>>(
    object: I
  ): ListBrokerOperationsRequest {
    const message = {
      ...baseListBrokerOperationsRequest,
    } as ListBrokerOperationsRequest;
    message.brokerId = object.brokerId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListBrokerOperationsRequest.$type,
  ListBrokerOperationsRequest
);

const baseListBrokerOperationsResponse: object = {
  $type: "yandex.cloud.iot.broker.v1.ListBrokerOperationsResponse",
  nextPageToken: "",
};

export const ListBrokerOperationsResponse = {
  $type: "yandex.cloud.iot.broker.v1.ListBrokerOperationsResponse" as const,

  encode(
    message: ListBrokerOperationsResponse,
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
  ): ListBrokerOperationsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListBrokerOperationsResponse,
    } as ListBrokerOperationsResponse;
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

  fromJSON(object: any): ListBrokerOperationsResponse {
    const message = {
      ...baseListBrokerOperationsResponse,
    } as ListBrokerOperationsResponse;
    message.operations = (object.operations ?? []).map((e: any) =>
      Operation.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListBrokerOperationsResponse): unknown {
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

  fromPartial<I extends Exact<DeepPartial<ListBrokerOperationsResponse>, I>>(
    object: I
  ): ListBrokerOperationsResponse {
    const message = {
      ...baseListBrokerOperationsResponse,
    } as ListBrokerOperationsResponse;
    message.operations =
      object.operations?.map((e) => Operation.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListBrokerOperationsResponse.$type,
  ListBrokerOperationsResponse
);

/** A set of methods for managing broker. */
export const BrokerServiceService = {
  /**
   * Returns the specified broker.
   *
   * To get the list of available brokers, make a [List] request.
   */
  get: {
    path: "/yandex.cloud.iot.broker.v1.BrokerService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetBrokerRequest) =>
      Buffer.from(GetBrokerRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetBrokerRequest.decode(value),
    responseSerialize: (value: Broker) =>
      Buffer.from(Broker.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Broker.decode(value),
  },
  /** Retrieves the list of brokers in the specified folder. */
  list: {
    path: "/yandex.cloud.iot.broker.v1.BrokerService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListBrokersRequest) =>
      Buffer.from(ListBrokersRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListBrokersRequest.decode(value),
    responseSerialize: (value: ListBrokersResponse) =>
      Buffer.from(ListBrokersResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListBrokersResponse.decode(value),
  },
  /** Creates a broker in the specified folder. */
  create: {
    path: "/yandex.cloud.iot.broker.v1.BrokerService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateBrokerRequest) =>
      Buffer.from(CreateBrokerRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateBrokerRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates the specified broker. */
  update: {
    path: "/yandex.cloud.iot.broker.v1.BrokerService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateBrokerRequest) =>
      Buffer.from(UpdateBrokerRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateBrokerRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified broker. */
  delete: {
    path: "/yandex.cloud.iot.broker.v1.BrokerService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteBrokerRequest) =>
      Buffer.from(DeleteBrokerRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteBrokerRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Retrieves the list of broker certificates for the specified broker. */
  listCertificates: {
    path: "/yandex.cloud.iot.broker.v1.BrokerService/ListCertificates",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListBrokerCertificatesRequest) =>
      Buffer.from(ListBrokerCertificatesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ListBrokerCertificatesRequest.decode(value),
    responseSerialize: (value: ListBrokerCertificatesResponse) =>
      Buffer.from(ListBrokerCertificatesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListBrokerCertificatesResponse.decode(value),
  },
  /** Adds a certificate. */
  addCertificate: {
    path: "/yandex.cloud.iot.broker.v1.BrokerService/AddCertificate",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: AddBrokerCertificateRequest) =>
      Buffer.from(AddBrokerCertificateRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      AddBrokerCertificateRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified broker certificate. */
  deleteCertificate: {
    path: "/yandex.cloud.iot.broker.v1.BrokerService/DeleteCertificate",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteBrokerCertificateRequest) =>
      Buffer.from(DeleteBrokerCertificateRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      DeleteBrokerCertificateRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Retrieves the list of passwords for the specified broker. */
  listPasswords: {
    path: "/yandex.cloud.iot.broker.v1.BrokerService/ListPasswords",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListBrokerPasswordsRequest) =>
      Buffer.from(ListBrokerPasswordsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ListBrokerPasswordsRequest.decode(value),
    responseSerialize: (value: ListBrokerPasswordsResponse) =>
      Buffer.from(ListBrokerPasswordsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListBrokerPasswordsResponse.decode(value),
  },
  /** Adds password for the specified broker. */
  addPassword: {
    path: "/yandex.cloud.iot.broker.v1.BrokerService/AddPassword",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: AddBrokerPasswordRequest) =>
      Buffer.from(AddBrokerPasswordRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      AddBrokerPasswordRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified password. */
  deletePassword: {
    path: "/yandex.cloud.iot.broker.v1.BrokerService/DeletePassword",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteBrokerPasswordRequest) =>
      Buffer.from(DeleteBrokerPasswordRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      DeleteBrokerPasswordRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Lists operations for the specified broker. */
  listOperations: {
    path: "/yandex.cloud.iot.broker.v1.BrokerService/ListOperations",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListBrokerOperationsRequest) =>
      Buffer.from(ListBrokerOperationsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ListBrokerOperationsRequest.decode(value),
    responseSerialize: (value: ListBrokerOperationsResponse) =>
      Buffer.from(ListBrokerOperationsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListBrokerOperationsResponse.decode(value),
  },
} as const;

export interface BrokerServiceServer extends UntypedServiceImplementation {
  /**
   * Returns the specified broker.
   *
   * To get the list of available brokers, make a [List] request.
   */
  get: handleUnaryCall<GetBrokerRequest, Broker>;
  /** Retrieves the list of brokers in the specified folder. */
  list: handleUnaryCall<ListBrokersRequest, ListBrokersResponse>;
  /** Creates a broker in the specified folder. */
  create: handleUnaryCall<CreateBrokerRequest, Operation>;
  /** Updates the specified broker. */
  update: handleUnaryCall<UpdateBrokerRequest, Operation>;
  /** Deletes the specified broker. */
  delete: handleUnaryCall<DeleteBrokerRequest, Operation>;
  /** Retrieves the list of broker certificates for the specified broker. */
  listCertificates: handleUnaryCall<
    ListBrokerCertificatesRequest,
    ListBrokerCertificatesResponse
  >;
  /** Adds a certificate. */
  addCertificate: handleUnaryCall<AddBrokerCertificateRequest, Operation>;
  /** Deletes the specified broker certificate. */
  deleteCertificate: handleUnaryCall<DeleteBrokerCertificateRequest, Operation>;
  /** Retrieves the list of passwords for the specified broker. */
  listPasswords: handleUnaryCall<
    ListBrokerPasswordsRequest,
    ListBrokerPasswordsResponse
  >;
  /** Adds password for the specified broker. */
  addPassword: handleUnaryCall<AddBrokerPasswordRequest, Operation>;
  /** Deletes the specified password. */
  deletePassword: handleUnaryCall<DeleteBrokerPasswordRequest, Operation>;
  /** Lists operations for the specified broker. */
  listOperations: handleUnaryCall<
    ListBrokerOperationsRequest,
    ListBrokerOperationsResponse
  >;
}

export interface BrokerServiceClient extends Client {
  /**
   * Returns the specified broker.
   *
   * To get the list of available brokers, make a [List] request.
   */
  get(
    request: GetBrokerRequest,
    callback: (error: ServiceError | null, response: Broker) => void
  ): ClientUnaryCall;
  get(
    request: GetBrokerRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Broker) => void
  ): ClientUnaryCall;
  get(
    request: GetBrokerRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Broker) => void
  ): ClientUnaryCall;
  /** Retrieves the list of brokers in the specified folder. */
  list(
    request: ListBrokersRequest,
    callback: (
      error: ServiceError | null,
      response: ListBrokersResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListBrokersRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListBrokersResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListBrokersRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListBrokersResponse
    ) => void
  ): ClientUnaryCall;
  /** Creates a broker in the specified folder. */
  create(
    request: CreateBrokerRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreateBrokerRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreateBrokerRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Updates the specified broker. */
  update(
    request: UpdateBrokerRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateBrokerRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateBrokerRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Deletes the specified broker. */
  delete(
    request: DeleteBrokerRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteBrokerRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteBrokerRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Retrieves the list of broker certificates for the specified broker. */
  listCertificates(
    request: ListBrokerCertificatesRequest,
    callback: (
      error: ServiceError | null,
      response: ListBrokerCertificatesResponse
    ) => void
  ): ClientUnaryCall;
  listCertificates(
    request: ListBrokerCertificatesRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListBrokerCertificatesResponse
    ) => void
  ): ClientUnaryCall;
  listCertificates(
    request: ListBrokerCertificatesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListBrokerCertificatesResponse
    ) => void
  ): ClientUnaryCall;
  /** Adds a certificate. */
  addCertificate(
    request: AddBrokerCertificateRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  addCertificate(
    request: AddBrokerCertificateRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  addCertificate(
    request: AddBrokerCertificateRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Deletes the specified broker certificate. */
  deleteCertificate(
    request: DeleteBrokerCertificateRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  deleteCertificate(
    request: DeleteBrokerCertificateRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  deleteCertificate(
    request: DeleteBrokerCertificateRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Retrieves the list of passwords for the specified broker. */
  listPasswords(
    request: ListBrokerPasswordsRequest,
    callback: (
      error: ServiceError | null,
      response: ListBrokerPasswordsResponse
    ) => void
  ): ClientUnaryCall;
  listPasswords(
    request: ListBrokerPasswordsRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListBrokerPasswordsResponse
    ) => void
  ): ClientUnaryCall;
  listPasswords(
    request: ListBrokerPasswordsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListBrokerPasswordsResponse
    ) => void
  ): ClientUnaryCall;
  /** Adds password for the specified broker. */
  addPassword(
    request: AddBrokerPasswordRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  addPassword(
    request: AddBrokerPasswordRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  addPassword(
    request: AddBrokerPasswordRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Deletes the specified password. */
  deletePassword(
    request: DeleteBrokerPasswordRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  deletePassword(
    request: DeleteBrokerPasswordRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  deletePassword(
    request: DeleteBrokerPasswordRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Lists operations for the specified broker. */
  listOperations(
    request: ListBrokerOperationsRequest,
    callback: (
      error: ServiceError | null,
      response: ListBrokerOperationsResponse
    ) => void
  ): ClientUnaryCall;
  listOperations(
    request: ListBrokerOperationsRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListBrokerOperationsResponse
    ) => void
  ): ClientUnaryCall;
  listOperations(
    request: ListBrokerOperationsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListBrokerOperationsResponse
    ) => void
  ): ClientUnaryCall;
}

export const BrokerServiceClient = makeGenericClientConstructor(
  BrokerServiceService,
  "yandex.cloud.iot.broker.v1.BrokerService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): BrokerServiceClient;
  service: typeof BrokerServiceService;
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
