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
import {
  Job_Status,
  ApplicationInfo,
  Job,
  job_StatusFromJSON,
  job_StatusToJSON,
} from "../../../../../yandex/cloud/dataproc/manager/v1/job";

export const protobufPackage = "yandex.cloud.dataproc.manager.v1";

export interface ListJobsRequest {
  $type: "yandex.cloud.dataproc.manager.v1.ListJobsRequest";
  /** Required. ID of the cluster to list Data Proc jobs of. */
  clusterId: string;
  /**
   * The maximum number of results per page that should be returned. If the number of available
   * results is larger than `page_size`, the service returns a `next_page_token` that can be used
   * to get the next page of results in subsequent ListJobs requests.
   * Acceptable values are 0 to 1000, inclusive. Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. Set `page_token` to the `next_page_token` returned by a previous ListJobs
   * request to get the next page of results.
   */
  pageToken: string;
  /** String that describes a display filter. */
  filter: string;
}

export interface ListJobsResponse {
  $type: "yandex.cloud.dataproc.manager.v1.ListJobsResponse";
  /** Requested list of Data Proc jobs. */
  jobs: Job[];
  /**
   * This token allows you to get the next page of results for ListJobs requests,
   * if the number of results is larger than `page_size` specified in the request.
   * To get the next page, specify the value of `next_page_token` as a value for
   * the `page_token` parameter in the next ListClusters request. Subsequent ListClusters
   * requests will have their own `next_page_token` to continue paging through the results.
   */
  nextPageToken: string;
}

export interface UpdateJobStatusRequest {
  $type: "yandex.cloud.dataproc.manager.v1.UpdateJobStatusRequest";
  /** Required. ID of the Data Proc cluster. */
  clusterId: string;
  /** Required. ID of the Data Proc job to update. */
  jobId: string;
  /** Required. New status of the job. */
  status: Job_Status;
  /** Attributes of YARN application. */
  applicationInfo?: ApplicationInfo;
}

export interface UpdateJobStatusResponse {
  $type: "yandex.cloud.dataproc.manager.v1.UpdateJobStatusResponse";
}

const baseListJobsRequest: object = {
  $type: "yandex.cloud.dataproc.manager.v1.ListJobsRequest",
  clusterId: "",
  pageSize: 0,
  pageToken: "",
  filter: "",
};

export const ListJobsRequest = {
  $type: "yandex.cloud.dataproc.manager.v1.ListJobsRequest" as const,

  encode(
    message: ListJobsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ListJobsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListJobsRequest } as ListJobsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
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

  fromJSON(object: any): ListJobsRequest {
    const message = { ...baseListJobsRequest } as ListJobsRequest;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
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

  toJSON(message: ListJobsRequest): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    message.filter !== undefined && (obj.filter = message.filter);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListJobsRequest>, I>>(
    object: I
  ): ListJobsRequest {
    const message = { ...baseListJobsRequest } as ListJobsRequest;
    message.clusterId = object.clusterId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListJobsRequest.$type, ListJobsRequest);

const baseListJobsResponse: object = {
  $type: "yandex.cloud.dataproc.manager.v1.ListJobsResponse",
  nextPageToken: "",
};

export const ListJobsResponse = {
  $type: "yandex.cloud.dataproc.manager.v1.ListJobsResponse" as const,

  encode(
    message: ListJobsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.jobs) {
      Job.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListJobsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListJobsResponse } as ListJobsResponse;
    message.jobs = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.jobs.push(Job.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListJobsResponse {
    const message = { ...baseListJobsResponse } as ListJobsResponse;
    message.jobs = (object.jobs ?? []).map((e: any) => Job.fromJSON(e));
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListJobsResponse): unknown {
    const obj: any = {};
    if (message.jobs) {
      obj.jobs = message.jobs.map((e) => (e ? Job.toJSON(e) : undefined));
    } else {
      obj.jobs = [];
    }
    message.nextPageToken !== undefined &&
      (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListJobsResponse>, I>>(
    object: I
  ): ListJobsResponse {
    const message = { ...baseListJobsResponse } as ListJobsResponse;
    message.jobs = object.jobs?.map((e) => Job.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListJobsResponse.$type, ListJobsResponse);

const baseUpdateJobStatusRequest: object = {
  $type: "yandex.cloud.dataproc.manager.v1.UpdateJobStatusRequest",
  clusterId: "",
  jobId: "",
  status: 0,
};

export const UpdateJobStatusRequest = {
  $type: "yandex.cloud.dataproc.manager.v1.UpdateJobStatusRequest" as const,

  encode(
    message: UpdateJobStatusRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.jobId !== "") {
      writer.uint32(18).string(message.jobId);
    }
    if (message.status !== 0) {
      writer.uint32(24).int32(message.status);
    }
    if (message.applicationInfo !== undefined) {
      ApplicationInfo.encode(
        message.applicationInfo,
        writer.uint32(34).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateJobStatusRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdateJobStatusRequest } as UpdateJobStatusRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        case 2:
          message.jobId = reader.string();
          break;
        case 3:
          message.status = reader.int32() as any;
          break;
        case 4:
          message.applicationInfo = ApplicationInfo.decode(
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

  fromJSON(object: any): UpdateJobStatusRequest {
    const message = { ...baseUpdateJobStatusRequest } as UpdateJobStatusRequest;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.jobId =
      object.jobId !== undefined && object.jobId !== null
        ? String(object.jobId)
        : "";
    message.status =
      object.status !== undefined && object.status !== null
        ? job_StatusFromJSON(object.status)
        : 0;
    message.applicationInfo =
      object.applicationInfo !== undefined && object.applicationInfo !== null
        ? ApplicationInfo.fromJSON(object.applicationInfo)
        : undefined;
    return message;
  },

  toJSON(message: UpdateJobStatusRequest): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.jobId !== undefined && (obj.jobId = message.jobId);
    message.status !== undefined &&
      (obj.status = job_StatusToJSON(message.status));
    message.applicationInfo !== undefined &&
      (obj.applicationInfo = message.applicationInfo
        ? ApplicationInfo.toJSON(message.applicationInfo)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateJobStatusRequest>, I>>(
    object: I
  ): UpdateJobStatusRequest {
    const message = { ...baseUpdateJobStatusRequest } as UpdateJobStatusRequest;
    message.clusterId = object.clusterId ?? "";
    message.jobId = object.jobId ?? "";
    message.status = object.status ?? 0;
    message.applicationInfo =
      object.applicationInfo !== undefined && object.applicationInfo !== null
        ? ApplicationInfo.fromPartial(object.applicationInfo)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(UpdateJobStatusRequest.$type, UpdateJobStatusRequest);

const baseUpdateJobStatusResponse: object = {
  $type: "yandex.cloud.dataproc.manager.v1.UpdateJobStatusResponse",
};

export const UpdateJobStatusResponse = {
  $type: "yandex.cloud.dataproc.manager.v1.UpdateJobStatusResponse" as const,

  encode(
    _: UpdateJobStatusResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateJobStatusResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateJobStatusResponse,
    } as UpdateJobStatusResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): UpdateJobStatusResponse {
    const message = {
      ...baseUpdateJobStatusResponse,
    } as UpdateJobStatusResponse;
    return message;
  },

  toJSON(_: UpdateJobStatusResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateJobStatusResponse>, I>>(
    _: I
  ): UpdateJobStatusResponse {
    const message = {
      ...baseUpdateJobStatusResponse,
    } as UpdateJobStatusResponse;
    return message;
  },
};

messageTypeRegistry.set(UpdateJobStatusResponse.$type, UpdateJobStatusResponse);

export const JobServiceService = {
  /** Retrieves a list of jobs for Data Proc cluster. */
  listActive: {
    path: "/yandex.cloud.dataproc.manager.v1.JobService/ListActive",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListJobsRequest) =>
      Buffer.from(ListJobsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListJobsRequest.decode(value),
    responseSerialize: (value: ListJobsResponse) =>
      Buffer.from(ListJobsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListJobsResponse.decode(value),
  },
  /** Currently used to update Job status. */
  updateStatus: {
    path: "/yandex.cloud.dataproc.manager.v1.JobService/UpdateStatus",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateJobStatusRequest) =>
      Buffer.from(UpdateJobStatusRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateJobStatusRequest.decode(value),
    responseSerialize: (value: UpdateJobStatusResponse) =>
      Buffer.from(UpdateJobStatusResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      UpdateJobStatusResponse.decode(value),
  },
} as const;

export interface JobServiceServer extends UntypedServiceImplementation {
  /** Retrieves a list of jobs for Data Proc cluster. */
  listActive: handleUnaryCall<ListJobsRequest, ListJobsResponse>;
  /** Currently used to update Job status. */
  updateStatus: handleUnaryCall<
    UpdateJobStatusRequest,
    UpdateJobStatusResponse
  >;
}

export interface JobServiceClient extends Client {
  /** Retrieves a list of jobs for Data Proc cluster. */
  listActive(
    request: ListJobsRequest,
    callback: (error: ServiceError | null, response: ListJobsResponse) => void
  ): ClientUnaryCall;
  listActive(
    request: ListJobsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListJobsResponse) => void
  ): ClientUnaryCall;
  listActive(
    request: ListJobsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListJobsResponse) => void
  ): ClientUnaryCall;
  /** Currently used to update Job status. */
  updateStatus(
    request: UpdateJobStatusRequest,
    callback: (
      error: ServiceError | null,
      response: UpdateJobStatusResponse
    ) => void
  ): ClientUnaryCall;
  updateStatus(
    request: UpdateJobStatusRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: UpdateJobStatusResponse
    ) => void
  ): ClientUnaryCall;
  updateStatus(
    request: UpdateJobStatusRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: UpdateJobStatusResponse
    ) => void
  ): ClientUnaryCall;
}

export const JobServiceClient = makeGenericClientConstructor(
  JobServiceService,
  "yandex.cloud.dataproc.manager.v1.JobService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): JobServiceClient;
  service: typeof JobServiceService;
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
