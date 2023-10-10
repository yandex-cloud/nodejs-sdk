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
import { Timestamp } from "../../../../../google/protobuf/timestamp";
import {
  SessionState,
  QueryStatement,
} from "../../../../../yandex/cloud/mdb/postgresql/v1/perf_diag";

export const protobufPackage = "yandex.cloud.mdb.postgresql.v1";

export interface ListRawStatementsRequest {
  $type: "yandex.cloud.mdb.postgresql.v1.ListRawStatementsRequest";
  /**
   * ID of a PostgreSQL cluster to request query statistics for.
   *
   * To get a PostgreSQL cluster ID, use the [ClusterService.List] method.
   */
  clusterId: string;
  /** Beginning of the period for which you need to request data (in the [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format). */
  fromTime?: Date;
  /** End of the period for which you need to request data (in the [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format). */
  toTime?: Date;
  /** The maximum number of results per page to return. If the number of the results is larger than [page_size], the service returns [ListRawStatementsResponse.next_page_token]. You can use it to get the next page of the results in subsequent requests. */
  pageSize: number;
  /** Page token. To get the next page of results, set [page_token] to the [ListRawStatementsResponse.next_page_token] returned by the previous SQL statement list request. */
  pageToken: string;
}

export interface ListRawSessionStatesRequest {
  $type: "yandex.cloud.mdb.postgresql.v1.ListRawSessionStatesRequest";
  /**
   * ID of a PostgreSQL cluster to request session statistics for.
   *
   * To get a PostgreSQL cluster ID, use the [ClusterService.List] request.
   */
  clusterId: string;
  /** Beginning of the period for which you need to request data (in the [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format). */
  fromTime?: Date;
  /** End of the period for which you need to request data (in the [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format). */
  toTime?: Date;
  /** The maximum number of results per page to return. If the number of the results is larger than [page_size], the service returns [ListRawSessionStatesResponse.next_page_token]. You can use it to get the next page of the results in subsequent requests. */
  pageSize: number;
  /** Page token. To get the next page of results, set [page_token] to the [ListRawSessionStatesResponse.next_page_token] returned by the previous PostgreSQL session list request. */
  pageToken: string;
}

export interface ListRawSessionStatesResponse {
  $type: "yandex.cloud.mdb.postgresql.v1.ListRawSessionStatesResponse";
  /** List of PostgreSQL sessions. */
  sessionStates: SessionState[];
  /** This token allows you to get the next page of results when requesting the PostgreSQL session list. If the number of the results is larger than [ListRawSessionStatesRequest.page_size], use the [next_page_token] as the value for the [ListRawSessionStatesRequest.page_token] parameter in the next request. Each subsequent request will have its own [next_page_token] to continue paging through the results. */
  nextPageToken: string;
}

export interface ListRawStatementsResponse {
  $type: "yandex.cloud.mdb.postgresql.v1.ListRawStatementsResponse";
  /** List of SQL statements (queries). */
  statements: QueryStatement[];
  /** This token allows you to get the next page of results when requesting the PostgreSQL session list. If the number of the results is larger than [ListRawStatementsRequest.page_size], use the [next_page_token] as the value for the [ListRawStatementsRequest.page_token] parameter in the next request. Each subsequent request will have its own [next_page_token] to continue paging through the results. */
  nextPageToken: string;
}

const baseListRawStatementsRequest: object = {
  $type: "yandex.cloud.mdb.postgresql.v1.ListRawStatementsRequest",
  clusterId: "",
  pageSize: 0,
  pageToken: "",
};

export const ListRawStatementsRequest = {
  $type: "yandex.cloud.mdb.postgresql.v1.ListRawStatementsRequest" as const,

  encode(
    message: ListRawStatementsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.fromTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.fromTime),
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.toTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.toTime),
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.pageSize !== 0) {
      writer.uint32(32).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(42).string(message.pageToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListRawStatementsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListRawStatementsRequest,
    } as ListRawStatementsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        case 2:
          message.fromTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.toTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.pageSize = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.pageToken = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListRawStatementsRequest {
    const message = {
      ...baseListRawStatementsRequest,
    } as ListRawStatementsRequest;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.fromTime =
      object.fromTime !== undefined && object.fromTime !== null
        ? fromJsonTimestamp(object.fromTime)
        : undefined;
    message.toTime =
      object.toTime !== undefined && object.toTime !== null
        ? fromJsonTimestamp(object.toTime)
        : undefined;
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

  toJSON(message: ListRawStatementsRequest): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.fromTime !== undefined &&
      (obj.fromTime = message.fromTime.toISOString());
    message.toTime !== undefined && (obj.toTime = message.toTime.toISOString());
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListRawStatementsRequest>, I>>(
    object: I
  ): ListRawStatementsRequest {
    const message = {
      ...baseListRawStatementsRequest,
    } as ListRawStatementsRequest;
    message.clusterId = object.clusterId ?? "";
    message.fromTime = object.fromTime ?? undefined;
    message.toTime = object.toTime ?? undefined;
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListRawStatementsRequest.$type,
  ListRawStatementsRequest
);

const baseListRawSessionStatesRequest: object = {
  $type: "yandex.cloud.mdb.postgresql.v1.ListRawSessionStatesRequest",
  clusterId: "",
  pageSize: 0,
  pageToken: "",
};

export const ListRawSessionStatesRequest = {
  $type: "yandex.cloud.mdb.postgresql.v1.ListRawSessionStatesRequest" as const,

  encode(
    message: ListRawSessionStatesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.fromTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.fromTime),
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.toTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.toTime),
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.pageSize !== 0) {
      writer.uint32(32).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(42).string(message.pageToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListRawSessionStatesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListRawSessionStatesRequest,
    } as ListRawSessionStatesRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        case 2:
          message.fromTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.toTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.pageSize = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.pageToken = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListRawSessionStatesRequest {
    const message = {
      ...baseListRawSessionStatesRequest,
    } as ListRawSessionStatesRequest;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.fromTime =
      object.fromTime !== undefined && object.fromTime !== null
        ? fromJsonTimestamp(object.fromTime)
        : undefined;
    message.toTime =
      object.toTime !== undefined && object.toTime !== null
        ? fromJsonTimestamp(object.toTime)
        : undefined;
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

  toJSON(message: ListRawSessionStatesRequest): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.fromTime !== undefined &&
      (obj.fromTime = message.fromTime.toISOString());
    message.toTime !== undefined && (obj.toTime = message.toTime.toISOString());
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListRawSessionStatesRequest>, I>>(
    object: I
  ): ListRawSessionStatesRequest {
    const message = {
      ...baseListRawSessionStatesRequest,
    } as ListRawSessionStatesRequest;
    message.clusterId = object.clusterId ?? "";
    message.fromTime = object.fromTime ?? undefined;
    message.toTime = object.toTime ?? undefined;
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListRawSessionStatesRequest.$type,
  ListRawSessionStatesRequest
);

const baseListRawSessionStatesResponse: object = {
  $type: "yandex.cloud.mdb.postgresql.v1.ListRawSessionStatesResponse",
  nextPageToken: "",
};

export const ListRawSessionStatesResponse = {
  $type: "yandex.cloud.mdb.postgresql.v1.ListRawSessionStatesResponse" as const,

  encode(
    message: ListRawSessionStatesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.sessionStates) {
      SessionState.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListRawSessionStatesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListRawSessionStatesResponse,
    } as ListRawSessionStatesResponse;
    message.sessionStates = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sessionStates.push(
            SessionState.decode(reader, reader.uint32())
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

  fromJSON(object: any): ListRawSessionStatesResponse {
    const message = {
      ...baseListRawSessionStatesResponse,
    } as ListRawSessionStatesResponse;
    message.sessionStates = (object.sessionStates ?? []).map((e: any) =>
      SessionState.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListRawSessionStatesResponse): unknown {
    const obj: any = {};
    if (message.sessionStates) {
      obj.sessionStates = message.sessionStates.map((e) =>
        e ? SessionState.toJSON(e) : undefined
      );
    } else {
      obj.sessionStates = [];
    }
    message.nextPageToken !== undefined &&
      (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListRawSessionStatesResponse>, I>>(
    object: I
  ): ListRawSessionStatesResponse {
    const message = {
      ...baseListRawSessionStatesResponse,
    } as ListRawSessionStatesResponse;
    message.sessionStates =
      object.sessionStates?.map((e) => SessionState.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListRawSessionStatesResponse.$type,
  ListRawSessionStatesResponse
);

const baseListRawStatementsResponse: object = {
  $type: "yandex.cloud.mdb.postgresql.v1.ListRawStatementsResponse",
  nextPageToken: "",
};

export const ListRawStatementsResponse = {
  $type: "yandex.cloud.mdb.postgresql.v1.ListRawStatementsResponse" as const,

  encode(
    message: ListRawStatementsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.statements) {
      QueryStatement.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListRawStatementsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListRawStatementsResponse,
    } as ListRawStatementsResponse;
    message.statements = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.statements.push(
            QueryStatement.decode(reader, reader.uint32())
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

  fromJSON(object: any): ListRawStatementsResponse {
    const message = {
      ...baseListRawStatementsResponse,
    } as ListRawStatementsResponse;
    message.statements = (object.statements ?? []).map((e: any) =>
      QueryStatement.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListRawStatementsResponse): unknown {
    const obj: any = {};
    if (message.statements) {
      obj.statements = message.statements.map((e) =>
        e ? QueryStatement.toJSON(e) : undefined
      );
    } else {
      obj.statements = [];
    }
    message.nextPageToken !== undefined &&
      (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListRawStatementsResponse>, I>>(
    object: I
  ): ListRawStatementsResponse {
    const message = {
      ...baseListRawStatementsResponse,
    } as ListRawStatementsResponse;
    message.statements =
      object.statements?.map((e) => QueryStatement.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListRawStatementsResponse.$type,
  ListRawStatementsResponse
);

/** A set of methods for PostgreSQL performance diagnostics. */
export const PerformanceDiagnosticsServiceService = {
  /** Retrieves raw statistics on sessions. Corresponds to the [pg_stat_activity view](https://www.postgresql.org/docs/current/monitoring-stats.html#MONITORING-PG-STAT-ACTIVITY-VIEW). */
  listRawSessionStates: {
    path: "/yandex.cloud.mdb.postgresql.v1.PerformanceDiagnosticsService/ListRawSessionStates",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListRawSessionStatesRequest) =>
      Buffer.from(ListRawSessionStatesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ListRawSessionStatesRequest.decode(value),
    responseSerialize: (value: ListRawSessionStatesResponse) =>
      Buffer.from(ListRawSessionStatesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListRawSessionStatesResponse.decode(value),
  },
  /** Retrieves statistics on planning and execution of SQL statements (queries). */
  listRawStatements: {
    path: "/yandex.cloud.mdb.postgresql.v1.PerformanceDiagnosticsService/ListRawStatements",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListRawStatementsRequest) =>
      Buffer.from(ListRawStatementsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ListRawStatementsRequest.decode(value),
    responseSerialize: (value: ListRawStatementsResponse) =>
      Buffer.from(ListRawStatementsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListRawStatementsResponse.decode(value),
  },
} as const;

export interface PerformanceDiagnosticsServiceServer
  extends UntypedServiceImplementation {
  /** Retrieves raw statistics on sessions. Corresponds to the [pg_stat_activity view](https://www.postgresql.org/docs/current/monitoring-stats.html#MONITORING-PG-STAT-ACTIVITY-VIEW). */
  listRawSessionStates: handleUnaryCall<
    ListRawSessionStatesRequest,
    ListRawSessionStatesResponse
  >;
  /** Retrieves statistics on planning and execution of SQL statements (queries). */
  listRawStatements: handleUnaryCall<
    ListRawStatementsRequest,
    ListRawStatementsResponse
  >;
}

export interface PerformanceDiagnosticsServiceClient extends Client {
  /** Retrieves raw statistics on sessions. Corresponds to the [pg_stat_activity view](https://www.postgresql.org/docs/current/monitoring-stats.html#MONITORING-PG-STAT-ACTIVITY-VIEW). */
  listRawSessionStates(
    request: ListRawSessionStatesRequest,
    callback: (
      error: ServiceError | null,
      response: ListRawSessionStatesResponse
    ) => void
  ): ClientUnaryCall;
  listRawSessionStates(
    request: ListRawSessionStatesRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListRawSessionStatesResponse
    ) => void
  ): ClientUnaryCall;
  listRawSessionStates(
    request: ListRawSessionStatesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListRawSessionStatesResponse
    ) => void
  ): ClientUnaryCall;
  /** Retrieves statistics on planning and execution of SQL statements (queries). */
  listRawStatements(
    request: ListRawStatementsRequest,
    callback: (
      error: ServiceError | null,
      response: ListRawStatementsResponse
    ) => void
  ): ClientUnaryCall;
  listRawStatements(
    request: ListRawStatementsRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListRawStatementsResponse
    ) => void
  ): ClientUnaryCall;
  listRawStatements(
    request: ListRawStatementsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListRawStatementsResponse
    ) => void
  ): ClientUnaryCall;
}

export const PerformanceDiagnosticsServiceClient = makeGenericClientConstructor(
  PerformanceDiagnosticsServiceService,
  "yandex.cloud.mdb.postgresql.v1.PerformanceDiagnosticsService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): PerformanceDiagnosticsServiceClient;
  service: typeof PerformanceDiagnosticsServiceService;
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
