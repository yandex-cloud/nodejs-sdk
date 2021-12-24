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
  ScanResult,
  Vulnerability,
} from "../../../../yandex/cloud/containerregistry/v1/scanner";
import { Operation } from "../../../../yandex/cloud/operation/operation";

export const protobufPackage = "yandex.cloud.containerregistry.v1";

export interface ScanRequest {
  $type: "yandex.cloud.containerregistry.v1.ScanRequest";
  /** ID of the Image to be scanned for vulnerabilities. */
  imageId: string;
}

export interface ScanMetadata {
  $type: "yandex.cloud.containerregistry.v1.ScanMetadata";
  /** ID of the ScanResult that is being created. */
  scanResultId: string;
}

export interface GetScanResultRequest {
  $type: "yandex.cloud.containerregistry.v1.GetScanResultRequest";
  /** ID of the ScanResult to return. */
  scanResultId: string;
}

export interface GetLastScanResultRequest {
  $type: "yandex.cloud.containerregistry.v1.GetLastScanResultRequest";
  /** ID of the Image to get last finished ScanResult. */
  imageId: string;
}

export interface ListScanResultsRequest {
  $type: "yandex.cloud.containerregistry.v1.ListScanResultsRequest";
  imageId: string | undefined;
  repositoryId: string | undefined;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size],
   * the service returns a [ListRegistriesResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set [page_token] to the
   * [ListRegistriesResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
  /**
   * A filter expression that filters resources listed in the response.
   * The expression must specify:
   * 1. The field name. Currently you can use filtering only on [ScanResult.status] field.
   * 2. An `=` operator.
   * 3. The value in double quotes (`"`).
   */
  filter: string;
  /**
   * An order expression that orders resources listed in the response.
   * The expression must specify:
   * 1. The field name. Currently you can use filtering only on [ScanResult.status] field.
   * 2. Order selector. Currently you can use ordering only on `ScanResult.status` field (critical first).
   */
  orderBy: string;
}

export interface ListScanResultsResponse {
  $type: "yandex.cloud.containerregistry.v1.ListScanResultsResponse";
  /** List of ScanResult resources. */
  scanResults: ScanResult[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListImagesRequest.page_size], use
   * the [next_page_token] as the value
   * for the [ListImagesRequest.page_token] query parameter
   * in the next list request. Each subsequent list request will have its own
   * [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface ListVulnerabilitiesRequest {
  $type: "yandex.cloud.containerregistry.v1.ListVulnerabilitiesRequest";
  /** ID of the ScanResult to get list of vulnerabilities for. */
  scanResultId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size],
   * the service returns a [ListRegistriesResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set [page_token] to the
   * [ListRegistriesResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
  /**
   * A filter expression that filters resources listed in the response.
   * The expression must specify:
   * 1. The field name. Currently you can use filtering only on [Vulnerability.severity] and [PackageVulnerability.name] fields.
   * 2. An `=` operator.
   * 3. The value in double quotes (`"`).
   */
  filter: string;
  /**
   * An order expression that orders resources listed in the response.
   * The expression must specify:
   * 1. The field name. Currently you can use filtering only on [Vulnerability.severity] and [PackageVulnerability.name] fields.
   * 2. Order selector. Currently you can use ordering only on `Vulnerability.severity` field (recent first).
   */
  orderBy: string;
}

export interface ListVulnerabilitiesResponse {
  $type: "yandex.cloud.containerregistry.v1.ListVulnerabilitiesResponse";
  /** List of Vulnerability resources. */
  vulnerabilities: Vulnerability[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListImagesRequest.page_size], use
   * the [next_page_token] as the value
   * for the [ListImagesRequest.page_token] query parameter
   * in the next list request. Each subsequent list request will have its own
   * [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

const baseScanRequest: object = {
  $type: "yandex.cloud.containerregistry.v1.ScanRequest",
  imageId: "",
};

export const ScanRequest = {
  $type: "yandex.cloud.containerregistry.v1.ScanRequest" as const,

  encode(
    message: ScanRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.imageId !== "") {
      writer.uint32(10).string(message.imageId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ScanRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseScanRequest } as ScanRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.imageId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ScanRequest {
    const message = { ...baseScanRequest } as ScanRequest;
    message.imageId =
      object.imageId !== undefined && object.imageId !== null
        ? String(object.imageId)
        : "";
    return message;
  },

  toJSON(message: ScanRequest): unknown {
    const obj: any = {};
    message.imageId !== undefined && (obj.imageId = message.imageId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ScanRequest>, I>>(
    object: I
  ): ScanRequest {
    const message = { ...baseScanRequest } as ScanRequest;
    message.imageId = object.imageId ?? "";
    return message;
  },
};

messageTypeRegistry.set(ScanRequest.$type, ScanRequest);

const baseScanMetadata: object = {
  $type: "yandex.cloud.containerregistry.v1.ScanMetadata",
  scanResultId: "",
};

export const ScanMetadata = {
  $type: "yandex.cloud.containerregistry.v1.ScanMetadata" as const,

  encode(
    message: ScanMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.scanResultId !== "") {
      writer.uint32(10).string(message.scanResultId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ScanMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseScanMetadata } as ScanMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.scanResultId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ScanMetadata {
    const message = { ...baseScanMetadata } as ScanMetadata;
    message.scanResultId =
      object.scanResultId !== undefined && object.scanResultId !== null
        ? String(object.scanResultId)
        : "";
    return message;
  },

  toJSON(message: ScanMetadata): unknown {
    const obj: any = {};
    message.scanResultId !== undefined &&
      (obj.scanResultId = message.scanResultId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ScanMetadata>, I>>(
    object: I
  ): ScanMetadata {
    const message = { ...baseScanMetadata } as ScanMetadata;
    message.scanResultId = object.scanResultId ?? "";
    return message;
  },
};

messageTypeRegistry.set(ScanMetadata.$type, ScanMetadata);

const baseGetScanResultRequest: object = {
  $type: "yandex.cloud.containerregistry.v1.GetScanResultRequest",
  scanResultId: "",
};

export const GetScanResultRequest = {
  $type: "yandex.cloud.containerregistry.v1.GetScanResultRequest" as const,

  encode(
    message: GetScanResultRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.scanResultId !== "") {
      writer.uint32(10).string(message.scanResultId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetScanResultRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetScanResultRequest } as GetScanResultRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.scanResultId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetScanResultRequest {
    const message = { ...baseGetScanResultRequest } as GetScanResultRequest;
    message.scanResultId =
      object.scanResultId !== undefined && object.scanResultId !== null
        ? String(object.scanResultId)
        : "";
    return message;
  },

  toJSON(message: GetScanResultRequest): unknown {
    const obj: any = {};
    message.scanResultId !== undefined &&
      (obj.scanResultId = message.scanResultId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetScanResultRequest>, I>>(
    object: I
  ): GetScanResultRequest {
    const message = { ...baseGetScanResultRequest } as GetScanResultRequest;
    message.scanResultId = object.scanResultId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetScanResultRequest.$type, GetScanResultRequest);

const baseGetLastScanResultRequest: object = {
  $type: "yandex.cloud.containerregistry.v1.GetLastScanResultRequest",
  imageId: "",
};

export const GetLastScanResultRequest = {
  $type: "yandex.cloud.containerregistry.v1.GetLastScanResultRequest" as const,

  encode(
    message: GetLastScanResultRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.imageId !== "") {
      writer.uint32(10).string(message.imageId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetLastScanResultRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetLastScanResultRequest,
    } as GetLastScanResultRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.imageId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetLastScanResultRequest {
    const message = {
      ...baseGetLastScanResultRequest,
    } as GetLastScanResultRequest;
    message.imageId =
      object.imageId !== undefined && object.imageId !== null
        ? String(object.imageId)
        : "";
    return message;
  },

  toJSON(message: GetLastScanResultRequest): unknown {
    const obj: any = {};
    message.imageId !== undefined && (obj.imageId = message.imageId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetLastScanResultRequest>, I>>(
    object: I
  ): GetLastScanResultRequest {
    const message = {
      ...baseGetLastScanResultRequest,
    } as GetLastScanResultRequest;
    message.imageId = object.imageId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  GetLastScanResultRequest.$type,
  GetLastScanResultRequest
);

const baseListScanResultsRequest: object = {
  $type: "yandex.cloud.containerregistry.v1.ListScanResultsRequest",
  pageSize: 0,
  pageToken: "",
  filter: "",
  orderBy: "",
};

export const ListScanResultsRequest = {
  $type: "yandex.cloud.containerregistry.v1.ListScanResultsRequest" as const,

  encode(
    message: ListScanResultsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.imageId !== undefined) {
      writer.uint32(10).string(message.imageId);
    }
    if (message.repositoryId !== undefined) {
      writer.uint32(18).string(message.repositoryId);
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
    if (message.orderBy !== "") {
      writer.uint32(50).string(message.orderBy);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListScanResultsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListScanResultsRequest } as ListScanResultsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.imageId = reader.string();
          break;
        case 2:
          message.repositoryId = reader.string();
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
        case 6:
          message.orderBy = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListScanResultsRequest {
    const message = { ...baseListScanResultsRequest } as ListScanResultsRequest;
    message.imageId =
      object.imageId !== undefined && object.imageId !== null
        ? String(object.imageId)
        : undefined;
    message.repositoryId =
      object.repositoryId !== undefined && object.repositoryId !== null
        ? String(object.repositoryId)
        : undefined;
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
    message.orderBy =
      object.orderBy !== undefined && object.orderBy !== null
        ? String(object.orderBy)
        : "";
    return message;
  },

  toJSON(message: ListScanResultsRequest): unknown {
    const obj: any = {};
    message.imageId !== undefined && (obj.imageId = message.imageId);
    message.repositoryId !== undefined &&
      (obj.repositoryId = message.repositoryId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    message.filter !== undefined && (obj.filter = message.filter);
    message.orderBy !== undefined && (obj.orderBy = message.orderBy);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListScanResultsRequest>, I>>(
    object: I
  ): ListScanResultsRequest {
    const message = { ...baseListScanResultsRequest } as ListScanResultsRequest;
    message.imageId = object.imageId ?? undefined;
    message.repositoryId = object.repositoryId ?? undefined;
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    message.orderBy = object.orderBy ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListScanResultsRequest.$type, ListScanResultsRequest);

const baseListScanResultsResponse: object = {
  $type: "yandex.cloud.containerregistry.v1.ListScanResultsResponse",
  nextPageToken: "",
};

export const ListScanResultsResponse = {
  $type: "yandex.cloud.containerregistry.v1.ListScanResultsResponse" as const,

  encode(
    message: ListScanResultsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.scanResults) {
      ScanResult.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListScanResultsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListScanResultsResponse,
    } as ListScanResultsResponse;
    message.scanResults = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.scanResults.push(ScanResult.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListScanResultsResponse {
    const message = {
      ...baseListScanResultsResponse,
    } as ListScanResultsResponse;
    message.scanResults = (object.scanResults ?? []).map((e: any) =>
      ScanResult.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListScanResultsResponse): unknown {
    const obj: any = {};
    if (message.scanResults) {
      obj.scanResults = message.scanResults.map((e) =>
        e ? ScanResult.toJSON(e) : undefined
      );
    } else {
      obj.scanResults = [];
    }
    message.nextPageToken !== undefined &&
      (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListScanResultsResponse>, I>>(
    object: I
  ): ListScanResultsResponse {
    const message = {
      ...baseListScanResultsResponse,
    } as ListScanResultsResponse;
    message.scanResults =
      object.scanResults?.map((e) => ScanResult.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListScanResultsResponse.$type, ListScanResultsResponse);

const baseListVulnerabilitiesRequest: object = {
  $type: "yandex.cloud.containerregistry.v1.ListVulnerabilitiesRequest",
  scanResultId: "",
  pageSize: 0,
  pageToken: "",
  filter: "",
  orderBy: "",
};

export const ListVulnerabilitiesRequest = {
  $type:
    "yandex.cloud.containerregistry.v1.ListVulnerabilitiesRequest" as const,

  encode(
    message: ListVulnerabilitiesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.scanResultId !== "") {
      writer.uint32(10).string(message.scanResultId);
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
    if (message.orderBy !== "") {
      writer.uint32(42).string(message.orderBy);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListVulnerabilitiesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListVulnerabilitiesRequest,
    } as ListVulnerabilitiesRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.scanResultId = reader.string();
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
        case 5:
          message.orderBy = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListVulnerabilitiesRequest {
    const message = {
      ...baseListVulnerabilitiesRequest,
    } as ListVulnerabilitiesRequest;
    message.scanResultId =
      object.scanResultId !== undefined && object.scanResultId !== null
        ? String(object.scanResultId)
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
    message.orderBy =
      object.orderBy !== undefined && object.orderBy !== null
        ? String(object.orderBy)
        : "";
    return message;
  },

  toJSON(message: ListVulnerabilitiesRequest): unknown {
    const obj: any = {};
    message.scanResultId !== undefined &&
      (obj.scanResultId = message.scanResultId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    message.filter !== undefined && (obj.filter = message.filter);
    message.orderBy !== undefined && (obj.orderBy = message.orderBy);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListVulnerabilitiesRequest>, I>>(
    object: I
  ): ListVulnerabilitiesRequest {
    const message = {
      ...baseListVulnerabilitiesRequest,
    } as ListVulnerabilitiesRequest;
    message.scanResultId = object.scanResultId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    message.orderBy = object.orderBy ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListVulnerabilitiesRequest.$type,
  ListVulnerabilitiesRequest
);

const baseListVulnerabilitiesResponse: object = {
  $type: "yandex.cloud.containerregistry.v1.ListVulnerabilitiesResponse",
  nextPageToken: "",
};

export const ListVulnerabilitiesResponse = {
  $type:
    "yandex.cloud.containerregistry.v1.ListVulnerabilitiesResponse" as const,

  encode(
    message: ListVulnerabilitiesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.vulnerabilities) {
      Vulnerability.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListVulnerabilitiesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListVulnerabilitiesResponse,
    } as ListVulnerabilitiesResponse;
    message.vulnerabilities = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vulnerabilities.push(
            Vulnerability.decode(reader, reader.uint32())
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

  fromJSON(object: any): ListVulnerabilitiesResponse {
    const message = {
      ...baseListVulnerabilitiesResponse,
    } as ListVulnerabilitiesResponse;
    message.vulnerabilities = (object.vulnerabilities ?? []).map((e: any) =>
      Vulnerability.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListVulnerabilitiesResponse): unknown {
    const obj: any = {};
    if (message.vulnerabilities) {
      obj.vulnerabilities = message.vulnerabilities.map((e) =>
        e ? Vulnerability.toJSON(e) : undefined
      );
    } else {
      obj.vulnerabilities = [];
    }
    message.nextPageToken !== undefined &&
      (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListVulnerabilitiesResponse>, I>>(
    object: I
  ): ListVulnerabilitiesResponse {
    const message = {
      ...baseListVulnerabilitiesResponse,
    } as ListVulnerabilitiesResponse;
    message.vulnerabilities =
      object.vulnerabilities?.map((e) => Vulnerability.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListVulnerabilitiesResponse.$type,
  ListVulnerabilitiesResponse
);

/** A set of methods for scanning Docker images. */
export const ScannerServiceService = {
  /** Executes scanning of specified image. */
  scan: {
    path: "/yandex.cloud.containerregistry.v1.ScannerService/Scan",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ScanRequest) =>
      Buffer.from(ScanRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ScanRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /**
   * Returns the specified ScanResult resource.
   *
   * To get the list of ScanResults for specified Image, make a [List] request.
   */
  get: {
    path: "/yandex.cloud.containerregistry.v1.ScannerService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetScanResultRequest) =>
      Buffer.from(GetScanResultRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetScanResultRequest.decode(value),
    responseSerialize: (value: ScanResult) =>
      Buffer.from(ScanResult.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ScanResult.decode(value),
  },
  /** Returns the last finished ScanResult for the specified Image. */
  getLast: {
    path: "/yandex.cloud.containerregistry.v1.ScannerService/GetLast",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetLastScanResultRequest) =>
      Buffer.from(GetLastScanResultRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      GetLastScanResultRequest.decode(value),
    responseSerialize: (value: ScanResult) =>
      Buffer.from(ScanResult.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ScanResult.decode(value),
  },
  /** Retrieves the list of ScanResults for specified Image. */
  list: {
    path: "/yandex.cloud.containerregistry.v1.ScannerService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListScanResultsRequest) =>
      Buffer.from(ListScanResultsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListScanResultsRequest.decode(value),
    responseSerialize: (value: ListScanResultsResponse) =>
      Buffer.from(ListScanResultsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListScanResultsResponse.decode(value),
  },
  /** Retrieves the list of vulnerabilities found in particular scan. */
  listVulnerabilities: {
    path: "/yandex.cloud.containerregistry.v1.ScannerService/ListVulnerabilities",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListVulnerabilitiesRequest) =>
      Buffer.from(ListVulnerabilitiesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ListVulnerabilitiesRequest.decode(value),
    responseSerialize: (value: ListVulnerabilitiesResponse) =>
      Buffer.from(ListVulnerabilitiesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListVulnerabilitiesResponse.decode(value),
  },
} as const;

export interface ScannerServiceServer extends UntypedServiceImplementation {
  /** Executes scanning of specified image. */
  scan: handleUnaryCall<ScanRequest, Operation>;
  /**
   * Returns the specified ScanResult resource.
   *
   * To get the list of ScanResults for specified Image, make a [List] request.
   */
  get: handleUnaryCall<GetScanResultRequest, ScanResult>;
  /** Returns the last finished ScanResult for the specified Image. */
  getLast: handleUnaryCall<GetLastScanResultRequest, ScanResult>;
  /** Retrieves the list of ScanResults for specified Image. */
  list: handleUnaryCall<ListScanResultsRequest, ListScanResultsResponse>;
  /** Retrieves the list of vulnerabilities found in particular scan. */
  listVulnerabilities: handleUnaryCall<
    ListVulnerabilitiesRequest,
    ListVulnerabilitiesResponse
  >;
}

export interface ScannerServiceClient extends Client {
  /** Executes scanning of specified image. */
  scan(
    request: ScanRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  scan(
    request: ScanRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  scan(
    request: ScanRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /**
   * Returns the specified ScanResult resource.
   *
   * To get the list of ScanResults for specified Image, make a [List] request.
   */
  get(
    request: GetScanResultRequest,
    callback: (error: ServiceError | null, response: ScanResult) => void
  ): ClientUnaryCall;
  get(
    request: GetScanResultRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ScanResult) => void
  ): ClientUnaryCall;
  get(
    request: GetScanResultRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ScanResult) => void
  ): ClientUnaryCall;
  /** Returns the last finished ScanResult for the specified Image. */
  getLast(
    request: GetLastScanResultRequest,
    callback: (error: ServiceError | null, response: ScanResult) => void
  ): ClientUnaryCall;
  getLast(
    request: GetLastScanResultRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ScanResult) => void
  ): ClientUnaryCall;
  getLast(
    request: GetLastScanResultRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ScanResult) => void
  ): ClientUnaryCall;
  /** Retrieves the list of ScanResults for specified Image. */
  list(
    request: ListScanResultsRequest,
    callback: (
      error: ServiceError | null,
      response: ListScanResultsResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListScanResultsRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListScanResultsResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListScanResultsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListScanResultsResponse
    ) => void
  ): ClientUnaryCall;
  /** Retrieves the list of vulnerabilities found in particular scan. */
  listVulnerabilities(
    request: ListVulnerabilitiesRequest,
    callback: (
      error: ServiceError | null,
      response: ListVulnerabilitiesResponse
    ) => void
  ): ClientUnaryCall;
  listVulnerabilities(
    request: ListVulnerabilitiesRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListVulnerabilitiesResponse
    ) => void
  ): ClientUnaryCall;
  listVulnerabilities(
    request: ListVulnerabilitiesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListVulnerabilitiesResponse
    ) => void
  ): ClientUnaryCall;
}

export const ScannerServiceClient = makeGenericClientConstructor(
  ScannerServiceService,
  "yandex.cloud.containerregistry.v1.ScannerService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): ScannerServiceClient;
  service: typeof ScannerServiceService;
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
