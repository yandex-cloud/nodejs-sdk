/* eslint-disable */
import { messageTypeRegistry } from "../../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../../../google/protobuf/timestamp";

export const protobufPackage = "yandex.cloud.mdb.postgresql.v1";

export interface SessionState {
  $type: "yandex.cloud.mdb.postgresql.v1.SessionState";
  /** Time of collecting statistics on sessions (in the [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format). */
  time?: Date;
  /** Host of the connected client. */
  host: string;
  /** Server process ID. For client connections, this is a client connection ID. */
  pid: number;
  /** Database ID. */
  database: string;
  /** User ID. */
  user: string;
  /** Application name on the connected client. */
  applicationName: string;
  /** Time when a given process was started. For client connections, this is the time when the client connected to the server. */
  backendStart?: Date;
  /**
   * Time when a transaction of a given process was started. Returns [NULL] if no transaction is active.
   *
   * If the currently active query is the first of its transaction, the value of this parameter is equal to the value of the [query_start] parameter.
   */
  xactStart?: Date;
  /**
   * Time when the currently active query was started.
   *
   * If the [state] parameter does not take the value [active], the parameter returns the time when the lastest query was started.
   */
  queryStart?: Date;
  /** Time when the [state] parameter was last changed. */
  stateChange?: Date;
  /**
   * Type of event for which the backend is waiting. Such an event is called a wait event. A backend refers to the process that maintains the client connection.
   *
   * For the list of wait events, see the [PostgreSQL documentation](https://www.postgresql.org/docs/current/monitoring-stats.html#WAIT-EVENT-TABLE). If the backend is not waiting for any event, the parameter returns [NULL].
   */
  waitEventType: string;
  /**
   * Wait event name.
   *
   * For the list of such names, see the [PostgreSQL documentation](https://www.postgresql.org/docs/current/monitoring-stats.html#WAIT-EVENT-ACTIVITY-TABLE). If the backend is not waiting for any event, the parameter returns [NULL].
   */
  waitEvent: string;
  /** Current backend state. For the list of possible values, see the [PostgreSQL documentation](https://www.postgresql.org/docs/current/monitoring-stats.html#MONITORING-PG-STAT-ACTIVITY-VIEW). */
  state: string;
  /**
   * Text of the most recent query.
   *
   * If the [state] parameter takes the value [active], the parameter shows the currently executing query. For the rest of the states, the parameter shows the last query that was executed. By default, the query text is truncated to 1024 bytes.
   */
  query: string;
  /** Current backend type. For the list of possible values, see the [PostgreSQL documentation](https://www.postgresql.org/docs/current/monitoring-stats.html#MONITORING-PG-STAT-ACTIVITY-VIEW). */
  backendType: string;
  /**
   * IP address of the connected client.
   *
   * The parameter returns [NULL] in the following cases:
   * - The client is connected via a Unix socket on the server.
   * - A given process is internal (for example, autovacuum).
   */
  clientAddr: string;
  /** Host name of the connected client (relevant for IP connections). */
  clientHostname: string;
  /**
   * TCP port number that the client is using for communication with the server.
   *
   * Returns [-1] if the client is connected via a Unix socket on the server. Returns [NULL] if a given process is internal (for example, autovacuum).
   */
  clientPort: number;
  /** Top-level transaction ID, if any. */
  backendXid: number;
  /** Current [xmin horizon]. */
  backendXmin: number;
  /** Process IDs that are blocking a given server process ID. */
  blockingPids: string;
  /** Query ID. */
  queryId: string;
}

export interface PrimaryKey {
  $type: "yandex.cloud.mdb.postgresql.v1.PrimaryKey";
  /** Host of the connected client. */
  host: string;
  /** User ID. */
  user: string;
  /** Database ID. */
  database: string;
  /** Returns [true] if a query is executed as a top-level SQL statement or if the [pg_stat_statements.track](https://www.postgresql.org/docs/current/pgstatstatements.html#id-1.11.7.41.9) parameter is set to the value [top]. */
  toplevel: boolean;
  /** Query ID. */
  queryId: string;
  /** Query planning ID. */
  planId: string;
}

export interface QueryStats {
  $type: "yandex.cloud.mdb.postgresql.v1.QueryStats";
  /** Time of collecting statistics on planning and execution of queries. */
  time?: Date;
  /** Statement text. */
  query: string;
  /** Normalized query plan. */
  normalizedPlan: string;
  /** Example of a query execution plan (without normalization). */
  examplePlan: string;
  /**
   * Number of times that a query was planned.
   *
   * The parameter returns a non-zero value if the [pg_stat_statements.track_planning](https://www.postgresql.org/docs/current/pgstatstatements.html#id-1.11.7.41.9) parameter is enabled.
   */
  plans: number;
  /**
   * Total time taken to plan a query, in milliseconds.
   *
   * The parameter returns a non-zero value if the [pg_stat_statements.track_planning] parameter is enabled.
   */
  totalPlanTime: number;
  /**
   * Minimum time taken to plan a query, in milliseconds.
   *
   * The parameter returns a non-zero value if the [pg_stat_statements.track_planning] parameter is enabled.
   */
  minPlanTime: number;
  /**
   * Maximum time taken to plan a query, in milliseconds.
   *
   * The parameter returns a non-zero value if the [pg_stat_statements.track_planning] parameter is enabled.
   */
  maxPlanTime: number;
  /**
   * Average time taken to plan a query, in milliseconds.
   *
   * The parameter returns a non-zero value if the [pg_stat_statements.track_planning] parameter is enabled.
   */
  meanPlanTime: number;
  /**
   * Population standard deviation of the time taken to plan a query, in milliseconds.
   *
   * The parameter returns a non-zero value if the [pg_stat_statements.track_planning] parameter is enabled.
   */
  stddevPlanTime: number;
  /** Number of times that a query was executed. */
  calls: number;
  /** Total time taken to execute a query, in milliseconds. */
  totalTime: number;
  /** Minimum time taken to execute a query, in milliseconds. */
  minTime: number;
  /** Maximum time taken to execute a query, in milliseconds. */
  maxTime: number;
  /** Average time taken to execute a query, in milliseconds. */
  meanTime: number;
  /** Population standard deviation of the time taken to execute a query, in milliseconds. */
  stddevTime: number;
  /** Number of retrieved or affected rows. */
  rows: number;
  /** Number of shared blocks that are hit from cache. */
  sharedBlksHit: number;
  /** Number of read shared blocks. */
  sharedBlksRead: number;
  /** Number of 'dirtied' shared blocks. */
  sharedBlksDirtied: number;
  /** Number of written shared blocks. */
  sharedBlksWritten: number;
  /** Number of local blocks that are hit from cache. */
  localBlksHit: number;
  /** Number of read local blocks. */
  localBlksRead: number;
  /** Number of 'dirtied' local blocks. */
  localBlksDirtied: number;
  /** Number of written local blocks. */
  localBlksWritten: number;
  /** Number of read temporary blocks. */
  tempBlksRead: number;
  /** Number of written temporary blocks. */
  tempBlksWritten: number;
  /**
   * Time taken to read data blocks, in milliseconds.
   *
   * The parameter returns a non-zero value if the [track_io_timing](https://www.postgresql.org/docs/current/runtime-config-statistics.html#GUC-TRACK-IO-TIMING) parameter is enabled.
   */
  blkReadTime: number;
  /**
   * Time taken to record data blocks, in milliseconds.
   *
   * The parameter returns a non-zero value if the [track_io_timing] parameter is enabled.
   */
  blkWriteTime: number;
  /**
   * Time taken to read temporary data blocks, in milliseconds.
   *
   * The parameter returns a non-zero value if the [track_io_timing] parameter is enabled.
   */
  tempBlkReadTime: number;
  /**
   * Time taken to record temporary data blocks, in milliseconds.
   *
   * The parameter returns a non-zero value if the [track_io_timing] parameter is enabled.
   */
  tempBlkWriteTime: number;
  /** Number of WAL records generated during a given period. */
  walRecords: number;
  /** Number of WAL full page images generated during a given period. */
  walFpi: number;
  /** Number of WAL logs generated during a given period, in bytes. */
  walBytes: number;
  /** Number of JIT-compiled functions. */
  jitFunctions: number;
  /** Time taken to generate JIT code, in milliseconds. */
  jitGenerationTime: number;
  /** Number of times that functions have been inlined. */
  jitInliningCount: number;
  /** Time taken to inline functions, in milliseconds. */
  jitInliningTime: number;
  /** Number of times that a query was optimized. */
  jitOptimizationCount: number;
  /** Time taken to optimize a query, in milliseconds. */
  jitOptimizationTime: number;
  /** Number of times that code was emitted. */
  jitEmissionCount: number;
  /** Time taken to emit code. */
  jitEmissionTime: number;
  /** Cost of receiving a response to a query before the first row of the response is issued. */
  startupCost: number;
  /** Cost of receiving a response to a query when all the rows of the response are issued. */
  totalCost: number;
  /** Expected number of rows that a given plan node should issue. */
  planRows: number;
  /** Expected average size of rows that a given plan node should issue. */
  planWidth: number;
  /** Number of bytes that the filesystem layer has read. */
  reads: number;
  /** Number of bytes that the filesystem layer has written. */
  writes: number;
  /** User CPU time used. */
  userTime: number;
  /** System CPU time used. */
  systemTime: number;
}

export interface QueryStatement {
  $type: "yandex.cloud.mdb.postgresql.v1.QueryStatement";
  /** Primary keys in tables with the statistics on planning and execution of queries. */
  key?: PrimaryKey;
  /** Statistics on planning and execution of queries. */
  stats?: QueryStats;
}

const baseSessionState: object = {
  $type: "yandex.cloud.mdb.postgresql.v1.SessionState",
  host: "",
  pid: 0,
  database: "",
  user: "",
  applicationName: "",
  waitEventType: "",
  waitEvent: "",
  state: "",
  query: "",
  backendType: "",
  clientAddr: "",
  clientHostname: "",
  clientPort: 0,
  backendXid: 0,
  backendXmin: 0,
  blockingPids: "",
  queryId: "",
};

export const SessionState = {
  $type: "yandex.cloud.mdb.postgresql.v1.SessionState" as const,

  encode(
    message: SessionState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.time !== undefined) {
      Timestamp.encode(
        toTimestamp(message.time),
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.host !== "") {
      writer.uint32(18).string(message.host);
    }
    if (message.pid !== 0) {
      writer.uint32(24).int64(message.pid);
    }
    if (message.database !== "") {
      writer.uint32(34).string(message.database);
    }
    if (message.user !== "") {
      writer.uint32(42).string(message.user);
    }
    if (message.applicationName !== "") {
      writer.uint32(50).string(message.applicationName);
    }
    if (message.backendStart !== undefined) {
      Timestamp.encode(
        toTimestamp(message.backendStart),
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.xactStart !== undefined) {
      Timestamp.encode(
        toTimestamp(message.xactStart),
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.queryStart !== undefined) {
      Timestamp.encode(
        toTimestamp(message.queryStart),
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.stateChange !== undefined) {
      Timestamp.encode(
        toTimestamp(message.stateChange),
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.waitEventType !== "") {
      writer.uint32(90).string(message.waitEventType);
    }
    if (message.waitEvent !== "") {
      writer.uint32(98).string(message.waitEvent);
    }
    if (message.state !== "") {
      writer.uint32(106).string(message.state);
    }
    if (message.query !== "") {
      writer.uint32(114).string(message.query);
    }
    if (message.backendType !== "") {
      writer.uint32(122).string(message.backendType);
    }
    if (message.clientAddr !== "") {
      writer.uint32(130).string(message.clientAddr);
    }
    if (message.clientHostname !== "") {
      writer.uint32(138).string(message.clientHostname);
    }
    if (message.clientPort !== 0) {
      writer.uint32(144).int64(message.clientPort);
    }
    if (message.backendXid !== 0) {
      writer.uint32(152).int64(message.backendXid);
    }
    if (message.backendXmin !== 0) {
      writer.uint32(160).int64(message.backendXmin);
    }
    if (message.blockingPids !== "") {
      writer.uint32(178).string(message.blockingPids);
    }
    if (message.queryId !== "") {
      writer.uint32(186).string(message.queryId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SessionState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSessionState } as SessionState;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.time = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.host = reader.string();
          break;
        case 3:
          message.pid = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.database = reader.string();
          break;
        case 5:
          message.user = reader.string();
          break;
        case 6:
          message.applicationName = reader.string();
          break;
        case 7:
          message.backendStart = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 8:
          message.xactStart = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.queryStart = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 10:
          message.stateChange = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 11:
          message.waitEventType = reader.string();
          break;
        case 12:
          message.waitEvent = reader.string();
          break;
        case 13:
          message.state = reader.string();
          break;
        case 14:
          message.query = reader.string();
          break;
        case 15:
          message.backendType = reader.string();
          break;
        case 16:
          message.clientAddr = reader.string();
          break;
        case 17:
          message.clientHostname = reader.string();
          break;
        case 18:
          message.clientPort = longToNumber(reader.int64() as Long);
          break;
        case 19:
          message.backendXid = longToNumber(reader.int64() as Long);
          break;
        case 20:
          message.backendXmin = longToNumber(reader.int64() as Long);
          break;
        case 22:
          message.blockingPids = reader.string();
          break;
        case 23:
          message.queryId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SessionState {
    const message = { ...baseSessionState } as SessionState;
    message.time =
      object.time !== undefined && object.time !== null
        ? fromJsonTimestamp(object.time)
        : undefined;
    message.host =
      object.host !== undefined && object.host !== null
        ? String(object.host)
        : "";
    message.pid =
      object.pid !== undefined && object.pid !== null ? Number(object.pid) : 0;
    message.database =
      object.database !== undefined && object.database !== null
        ? String(object.database)
        : "";
    message.user =
      object.user !== undefined && object.user !== null
        ? String(object.user)
        : "";
    message.applicationName =
      object.applicationName !== undefined && object.applicationName !== null
        ? String(object.applicationName)
        : "";
    message.backendStart =
      object.backendStart !== undefined && object.backendStart !== null
        ? fromJsonTimestamp(object.backendStart)
        : undefined;
    message.xactStart =
      object.xactStart !== undefined && object.xactStart !== null
        ? fromJsonTimestamp(object.xactStart)
        : undefined;
    message.queryStart =
      object.queryStart !== undefined && object.queryStart !== null
        ? fromJsonTimestamp(object.queryStart)
        : undefined;
    message.stateChange =
      object.stateChange !== undefined && object.stateChange !== null
        ? fromJsonTimestamp(object.stateChange)
        : undefined;
    message.waitEventType =
      object.waitEventType !== undefined && object.waitEventType !== null
        ? String(object.waitEventType)
        : "";
    message.waitEvent =
      object.waitEvent !== undefined && object.waitEvent !== null
        ? String(object.waitEvent)
        : "";
    message.state =
      object.state !== undefined && object.state !== null
        ? String(object.state)
        : "";
    message.query =
      object.query !== undefined && object.query !== null
        ? String(object.query)
        : "";
    message.backendType =
      object.backendType !== undefined && object.backendType !== null
        ? String(object.backendType)
        : "";
    message.clientAddr =
      object.clientAddr !== undefined && object.clientAddr !== null
        ? String(object.clientAddr)
        : "";
    message.clientHostname =
      object.clientHostname !== undefined && object.clientHostname !== null
        ? String(object.clientHostname)
        : "";
    message.clientPort =
      object.clientPort !== undefined && object.clientPort !== null
        ? Number(object.clientPort)
        : 0;
    message.backendXid =
      object.backendXid !== undefined && object.backendXid !== null
        ? Number(object.backendXid)
        : 0;
    message.backendXmin =
      object.backendXmin !== undefined && object.backendXmin !== null
        ? Number(object.backendXmin)
        : 0;
    message.blockingPids =
      object.blockingPids !== undefined && object.blockingPids !== null
        ? String(object.blockingPids)
        : "";
    message.queryId =
      object.queryId !== undefined && object.queryId !== null
        ? String(object.queryId)
        : "";
    return message;
  },

  toJSON(message: SessionState): unknown {
    const obj: any = {};
    message.time !== undefined && (obj.time = message.time.toISOString());
    message.host !== undefined && (obj.host = message.host);
    message.pid !== undefined && (obj.pid = Math.round(message.pid));
    message.database !== undefined && (obj.database = message.database);
    message.user !== undefined && (obj.user = message.user);
    message.applicationName !== undefined &&
      (obj.applicationName = message.applicationName);
    message.backendStart !== undefined &&
      (obj.backendStart = message.backendStart.toISOString());
    message.xactStart !== undefined &&
      (obj.xactStart = message.xactStart.toISOString());
    message.queryStart !== undefined &&
      (obj.queryStart = message.queryStart.toISOString());
    message.stateChange !== undefined &&
      (obj.stateChange = message.stateChange.toISOString());
    message.waitEventType !== undefined &&
      (obj.waitEventType = message.waitEventType);
    message.waitEvent !== undefined && (obj.waitEvent = message.waitEvent);
    message.state !== undefined && (obj.state = message.state);
    message.query !== undefined && (obj.query = message.query);
    message.backendType !== undefined &&
      (obj.backendType = message.backendType);
    message.clientAddr !== undefined && (obj.clientAddr = message.clientAddr);
    message.clientHostname !== undefined &&
      (obj.clientHostname = message.clientHostname);
    message.clientPort !== undefined &&
      (obj.clientPort = Math.round(message.clientPort));
    message.backendXid !== undefined &&
      (obj.backendXid = Math.round(message.backendXid));
    message.backendXmin !== undefined &&
      (obj.backendXmin = Math.round(message.backendXmin));
    message.blockingPids !== undefined &&
      (obj.blockingPids = message.blockingPids);
    message.queryId !== undefined && (obj.queryId = message.queryId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SessionState>, I>>(
    object: I
  ): SessionState {
    const message = { ...baseSessionState } as SessionState;
    message.time = object.time ?? undefined;
    message.host = object.host ?? "";
    message.pid = object.pid ?? 0;
    message.database = object.database ?? "";
    message.user = object.user ?? "";
    message.applicationName = object.applicationName ?? "";
    message.backendStart = object.backendStart ?? undefined;
    message.xactStart = object.xactStart ?? undefined;
    message.queryStart = object.queryStart ?? undefined;
    message.stateChange = object.stateChange ?? undefined;
    message.waitEventType = object.waitEventType ?? "";
    message.waitEvent = object.waitEvent ?? "";
    message.state = object.state ?? "";
    message.query = object.query ?? "";
    message.backendType = object.backendType ?? "";
    message.clientAddr = object.clientAddr ?? "";
    message.clientHostname = object.clientHostname ?? "";
    message.clientPort = object.clientPort ?? 0;
    message.backendXid = object.backendXid ?? 0;
    message.backendXmin = object.backendXmin ?? 0;
    message.blockingPids = object.blockingPids ?? "";
    message.queryId = object.queryId ?? "";
    return message;
  },
};

messageTypeRegistry.set(SessionState.$type, SessionState);

const basePrimaryKey: object = {
  $type: "yandex.cloud.mdb.postgresql.v1.PrimaryKey",
  host: "",
  user: "",
  database: "",
  toplevel: false,
  queryId: "",
  planId: "",
};

export const PrimaryKey = {
  $type: "yandex.cloud.mdb.postgresql.v1.PrimaryKey" as const,

  encode(
    message: PrimaryKey,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.host !== "") {
      writer.uint32(10).string(message.host);
    }
    if (message.user !== "") {
      writer.uint32(18).string(message.user);
    }
    if (message.database !== "") {
      writer.uint32(34).string(message.database);
    }
    if (message.toplevel === true) {
      writer.uint32(40).bool(message.toplevel);
    }
    if (message.queryId !== "") {
      writer.uint32(50).string(message.queryId);
    }
    if (message.planId !== "") {
      writer.uint32(58).string(message.planId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PrimaryKey {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePrimaryKey } as PrimaryKey;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.host = reader.string();
          break;
        case 2:
          message.user = reader.string();
          break;
        case 4:
          message.database = reader.string();
          break;
        case 5:
          message.toplevel = reader.bool();
          break;
        case 6:
          message.queryId = reader.string();
          break;
        case 7:
          message.planId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PrimaryKey {
    const message = { ...basePrimaryKey } as PrimaryKey;
    message.host =
      object.host !== undefined && object.host !== null
        ? String(object.host)
        : "";
    message.user =
      object.user !== undefined && object.user !== null
        ? String(object.user)
        : "";
    message.database =
      object.database !== undefined && object.database !== null
        ? String(object.database)
        : "";
    message.toplevel =
      object.toplevel !== undefined && object.toplevel !== null
        ? Boolean(object.toplevel)
        : false;
    message.queryId =
      object.queryId !== undefined && object.queryId !== null
        ? String(object.queryId)
        : "";
    message.planId =
      object.planId !== undefined && object.planId !== null
        ? String(object.planId)
        : "";
    return message;
  },

  toJSON(message: PrimaryKey): unknown {
    const obj: any = {};
    message.host !== undefined && (obj.host = message.host);
    message.user !== undefined && (obj.user = message.user);
    message.database !== undefined && (obj.database = message.database);
    message.toplevel !== undefined && (obj.toplevel = message.toplevel);
    message.queryId !== undefined && (obj.queryId = message.queryId);
    message.planId !== undefined && (obj.planId = message.planId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PrimaryKey>, I>>(
    object: I
  ): PrimaryKey {
    const message = { ...basePrimaryKey } as PrimaryKey;
    message.host = object.host ?? "";
    message.user = object.user ?? "";
    message.database = object.database ?? "";
    message.toplevel = object.toplevel ?? false;
    message.queryId = object.queryId ?? "";
    message.planId = object.planId ?? "";
    return message;
  },
};

messageTypeRegistry.set(PrimaryKey.$type, PrimaryKey);

const baseQueryStats: object = {
  $type: "yandex.cloud.mdb.postgresql.v1.QueryStats",
  query: "",
  normalizedPlan: "",
  examplePlan: "",
  plans: 0,
  totalPlanTime: 0,
  minPlanTime: 0,
  maxPlanTime: 0,
  meanPlanTime: 0,
  stddevPlanTime: 0,
  calls: 0,
  totalTime: 0,
  minTime: 0,
  maxTime: 0,
  meanTime: 0,
  stddevTime: 0,
  rows: 0,
  sharedBlksHit: 0,
  sharedBlksRead: 0,
  sharedBlksDirtied: 0,
  sharedBlksWritten: 0,
  localBlksHit: 0,
  localBlksRead: 0,
  localBlksDirtied: 0,
  localBlksWritten: 0,
  tempBlksRead: 0,
  tempBlksWritten: 0,
  blkReadTime: 0,
  blkWriteTime: 0,
  tempBlkReadTime: 0,
  tempBlkWriteTime: 0,
  walRecords: 0,
  walFpi: 0,
  walBytes: 0,
  jitFunctions: 0,
  jitGenerationTime: 0,
  jitInliningCount: 0,
  jitInliningTime: 0,
  jitOptimizationCount: 0,
  jitOptimizationTime: 0,
  jitEmissionCount: 0,
  jitEmissionTime: 0,
  startupCost: 0,
  totalCost: 0,
  planRows: 0,
  planWidth: 0,
  reads: 0,
  writes: 0,
  userTime: 0,
  systemTime: 0,
};

export const QueryStats = {
  $type: "yandex.cloud.mdb.postgresql.v1.QueryStats" as const,

  encode(
    message: QueryStats,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.time !== undefined) {
      Timestamp.encode(
        toTimestamp(message.time),
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.query !== "") {
      writer.uint32(18).string(message.query);
    }
    if (message.normalizedPlan !== "") {
      writer.uint32(26).string(message.normalizedPlan);
    }
    if (message.examplePlan !== "") {
      writer.uint32(34).string(message.examplePlan);
    }
    if (message.plans !== 0) {
      writer.uint32(40).int64(message.plans);
    }
    if (message.totalPlanTime !== 0) {
      writer.uint32(49).double(message.totalPlanTime);
    }
    if (message.minPlanTime !== 0) {
      writer.uint32(57).double(message.minPlanTime);
    }
    if (message.maxPlanTime !== 0) {
      writer.uint32(65).double(message.maxPlanTime);
    }
    if (message.meanPlanTime !== 0) {
      writer.uint32(73).double(message.meanPlanTime);
    }
    if (message.stddevPlanTime !== 0) {
      writer.uint32(81).double(message.stddevPlanTime);
    }
    if (message.calls !== 0) {
      writer.uint32(88).int64(message.calls);
    }
    if (message.totalTime !== 0) {
      writer.uint32(97).double(message.totalTime);
    }
    if (message.minTime !== 0) {
      writer.uint32(105).double(message.minTime);
    }
    if (message.maxTime !== 0) {
      writer.uint32(113).double(message.maxTime);
    }
    if (message.meanTime !== 0) {
      writer.uint32(121).double(message.meanTime);
    }
    if (message.stddevTime !== 0) {
      writer.uint32(129).double(message.stddevTime);
    }
    if (message.rows !== 0) {
      writer.uint32(136).int64(message.rows);
    }
    if (message.sharedBlksHit !== 0) {
      writer.uint32(144).int64(message.sharedBlksHit);
    }
    if (message.sharedBlksRead !== 0) {
      writer.uint32(152).int64(message.sharedBlksRead);
    }
    if (message.sharedBlksDirtied !== 0) {
      writer.uint32(160).int64(message.sharedBlksDirtied);
    }
    if (message.sharedBlksWritten !== 0) {
      writer.uint32(168).int64(message.sharedBlksWritten);
    }
    if (message.localBlksHit !== 0) {
      writer.uint32(176).int64(message.localBlksHit);
    }
    if (message.localBlksRead !== 0) {
      writer.uint32(184).int64(message.localBlksRead);
    }
    if (message.localBlksDirtied !== 0) {
      writer.uint32(192).int64(message.localBlksDirtied);
    }
    if (message.localBlksWritten !== 0) {
      writer.uint32(200).int64(message.localBlksWritten);
    }
    if (message.tempBlksRead !== 0) {
      writer.uint32(208).int64(message.tempBlksRead);
    }
    if (message.tempBlksWritten !== 0) {
      writer.uint32(216).int64(message.tempBlksWritten);
    }
    if (message.blkReadTime !== 0) {
      writer.uint32(225).double(message.blkReadTime);
    }
    if (message.blkWriteTime !== 0) {
      writer.uint32(233).double(message.blkWriteTime);
    }
    if (message.tempBlkReadTime !== 0) {
      writer.uint32(241).double(message.tempBlkReadTime);
    }
    if (message.tempBlkWriteTime !== 0) {
      writer.uint32(249).double(message.tempBlkWriteTime);
    }
    if (message.walRecords !== 0) {
      writer.uint32(256).int64(message.walRecords);
    }
    if (message.walFpi !== 0) {
      writer.uint32(264).int64(message.walFpi);
    }
    if (message.walBytes !== 0) {
      writer.uint32(272).int64(message.walBytes);
    }
    if (message.jitFunctions !== 0) {
      writer.uint32(280).int64(message.jitFunctions);
    }
    if (message.jitGenerationTime !== 0) {
      writer.uint32(289).double(message.jitGenerationTime);
    }
    if (message.jitInliningCount !== 0) {
      writer.uint32(296).int64(message.jitInliningCount);
    }
    if (message.jitInliningTime !== 0) {
      writer.uint32(305).double(message.jitInliningTime);
    }
    if (message.jitOptimizationCount !== 0) {
      writer.uint32(312).int64(message.jitOptimizationCount);
    }
    if (message.jitOptimizationTime !== 0) {
      writer.uint32(321).double(message.jitOptimizationTime);
    }
    if (message.jitEmissionCount !== 0) {
      writer.uint32(328).int64(message.jitEmissionCount);
    }
    if (message.jitEmissionTime !== 0) {
      writer.uint32(337).double(message.jitEmissionTime);
    }
    if (message.startupCost !== 0) {
      writer.uint32(344).int64(message.startupCost);
    }
    if (message.totalCost !== 0) {
      writer.uint32(352).int64(message.totalCost);
    }
    if (message.planRows !== 0) {
      writer.uint32(360).int64(message.planRows);
    }
    if (message.planWidth !== 0) {
      writer.uint32(368).int64(message.planWidth);
    }
    if (message.reads !== 0) {
      writer.uint32(376).int64(message.reads);
    }
    if (message.writes !== 0) {
      writer.uint32(384).int64(message.writes);
    }
    if (message.userTime !== 0) {
      writer.uint32(393).double(message.userTime);
    }
    if (message.systemTime !== 0) {
      writer.uint32(401).double(message.systemTime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryStats {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryStats } as QueryStats;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.time = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.query = reader.string();
          break;
        case 3:
          message.normalizedPlan = reader.string();
          break;
        case 4:
          message.examplePlan = reader.string();
          break;
        case 5:
          message.plans = longToNumber(reader.int64() as Long);
          break;
        case 6:
          message.totalPlanTime = reader.double();
          break;
        case 7:
          message.minPlanTime = reader.double();
          break;
        case 8:
          message.maxPlanTime = reader.double();
          break;
        case 9:
          message.meanPlanTime = reader.double();
          break;
        case 10:
          message.stddevPlanTime = reader.double();
          break;
        case 11:
          message.calls = longToNumber(reader.int64() as Long);
          break;
        case 12:
          message.totalTime = reader.double();
          break;
        case 13:
          message.minTime = reader.double();
          break;
        case 14:
          message.maxTime = reader.double();
          break;
        case 15:
          message.meanTime = reader.double();
          break;
        case 16:
          message.stddevTime = reader.double();
          break;
        case 17:
          message.rows = longToNumber(reader.int64() as Long);
          break;
        case 18:
          message.sharedBlksHit = longToNumber(reader.int64() as Long);
          break;
        case 19:
          message.sharedBlksRead = longToNumber(reader.int64() as Long);
          break;
        case 20:
          message.sharedBlksDirtied = longToNumber(reader.int64() as Long);
          break;
        case 21:
          message.sharedBlksWritten = longToNumber(reader.int64() as Long);
          break;
        case 22:
          message.localBlksHit = longToNumber(reader.int64() as Long);
          break;
        case 23:
          message.localBlksRead = longToNumber(reader.int64() as Long);
          break;
        case 24:
          message.localBlksDirtied = longToNumber(reader.int64() as Long);
          break;
        case 25:
          message.localBlksWritten = longToNumber(reader.int64() as Long);
          break;
        case 26:
          message.tempBlksRead = longToNumber(reader.int64() as Long);
          break;
        case 27:
          message.tempBlksWritten = longToNumber(reader.int64() as Long);
          break;
        case 28:
          message.blkReadTime = reader.double();
          break;
        case 29:
          message.blkWriteTime = reader.double();
          break;
        case 30:
          message.tempBlkReadTime = reader.double();
          break;
        case 31:
          message.tempBlkWriteTime = reader.double();
          break;
        case 32:
          message.walRecords = longToNumber(reader.int64() as Long);
          break;
        case 33:
          message.walFpi = longToNumber(reader.int64() as Long);
          break;
        case 34:
          message.walBytes = longToNumber(reader.int64() as Long);
          break;
        case 35:
          message.jitFunctions = longToNumber(reader.int64() as Long);
          break;
        case 36:
          message.jitGenerationTime = reader.double();
          break;
        case 37:
          message.jitInliningCount = longToNumber(reader.int64() as Long);
          break;
        case 38:
          message.jitInliningTime = reader.double();
          break;
        case 39:
          message.jitOptimizationCount = longToNumber(reader.int64() as Long);
          break;
        case 40:
          message.jitOptimizationTime = reader.double();
          break;
        case 41:
          message.jitEmissionCount = longToNumber(reader.int64() as Long);
          break;
        case 42:
          message.jitEmissionTime = reader.double();
          break;
        case 43:
          message.startupCost = longToNumber(reader.int64() as Long);
          break;
        case 44:
          message.totalCost = longToNumber(reader.int64() as Long);
          break;
        case 45:
          message.planRows = longToNumber(reader.int64() as Long);
          break;
        case 46:
          message.planWidth = longToNumber(reader.int64() as Long);
          break;
        case 47:
          message.reads = longToNumber(reader.int64() as Long);
          break;
        case 48:
          message.writes = longToNumber(reader.int64() as Long);
          break;
        case 49:
          message.userTime = reader.double();
          break;
        case 50:
          message.systemTime = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryStats {
    const message = { ...baseQueryStats } as QueryStats;
    message.time =
      object.time !== undefined && object.time !== null
        ? fromJsonTimestamp(object.time)
        : undefined;
    message.query =
      object.query !== undefined && object.query !== null
        ? String(object.query)
        : "";
    message.normalizedPlan =
      object.normalizedPlan !== undefined && object.normalizedPlan !== null
        ? String(object.normalizedPlan)
        : "";
    message.examplePlan =
      object.examplePlan !== undefined && object.examplePlan !== null
        ? String(object.examplePlan)
        : "";
    message.plans =
      object.plans !== undefined && object.plans !== null
        ? Number(object.plans)
        : 0;
    message.totalPlanTime =
      object.totalPlanTime !== undefined && object.totalPlanTime !== null
        ? Number(object.totalPlanTime)
        : 0;
    message.minPlanTime =
      object.minPlanTime !== undefined && object.minPlanTime !== null
        ? Number(object.minPlanTime)
        : 0;
    message.maxPlanTime =
      object.maxPlanTime !== undefined && object.maxPlanTime !== null
        ? Number(object.maxPlanTime)
        : 0;
    message.meanPlanTime =
      object.meanPlanTime !== undefined && object.meanPlanTime !== null
        ? Number(object.meanPlanTime)
        : 0;
    message.stddevPlanTime =
      object.stddevPlanTime !== undefined && object.stddevPlanTime !== null
        ? Number(object.stddevPlanTime)
        : 0;
    message.calls =
      object.calls !== undefined && object.calls !== null
        ? Number(object.calls)
        : 0;
    message.totalTime =
      object.totalTime !== undefined && object.totalTime !== null
        ? Number(object.totalTime)
        : 0;
    message.minTime =
      object.minTime !== undefined && object.minTime !== null
        ? Number(object.minTime)
        : 0;
    message.maxTime =
      object.maxTime !== undefined && object.maxTime !== null
        ? Number(object.maxTime)
        : 0;
    message.meanTime =
      object.meanTime !== undefined && object.meanTime !== null
        ? Number(object.meanTime)
        : 0;
    message.stddevTime =
      object.stddevTime !== undefined && object.stddevTime !== null
        ? Number(object.stddevTime)
        : 0;
    message.rows =
      object.rows !== undefined && object.rows !== null
        ? Number(object.rows)
        : 0;
    message.sharedBlksHit =
      object.sharedBlksHit !== undefined && object.sharedBlksHit !== null
        ? Number(object.sharedBlksHit)
        : 0;
    message.sharedBlksRead =
      object.sharedBlksRead !== undefined && object.sharedBlksRead !== null
        ? Number(object.sharedBlksRead)
        : 0;
    message.sharedBlksDirtied =
      object.sharedBlksDirtied !== undefined &&
      object.sharedBlksDirtied !== null
        ? Number(object.sharedBlksDirtied)
        : 0;
    message.sharedBlksWritten =
      object.sharedBlksWritten !== undefined &&
      object.sharedBlksWritten !== null
        ? Number(object.sharedBlksWritten)
        : 0;
    message.localBlksHit =
      object.localBlksHit !== undefined && object.localBlksHit !== null
        ? Number(object.localBlksHit)
        : 0;
    message.localBlksRead =
      object.localBlksRead !== undefined && object.localBlksRead !== null
        ? Number(object.localBlksRead)
        : 0;
    message.localBlksDirtied =
      object.localBlksDirtied !== undefined && object.localBlksDirtied !== null
        ? Number(object.localBlksDirtied)
        : 0;
    message.localBlksWritten =
      object.localBlksWritten !== undefined && object.localBlksWritten !== null
        ? Number(object.localBlksWritten)
        : 0;
    message.tempBlksRead =
      object.tempBlksRead !== undefined && object.tempBlksRead !== null
        ? Number(object.tempBlksRead)
        : 0;
    message.tempBlksWritten =
      object.tempBlksWritten !== undefined && object.tempBlksWritten !== null
        ? Number(object.tempBlksWritten)
        : 0;
    message.blkReadTime =
      object.blkReadTime !== undefined && object.blkReadTime !== null
        ? Number(object.blkReadTime)
        : 0;
    message.blkWriteTime =
      object.blkWriteTime !== undefined && object.blkWriteTime !== null
        ? Number(object.blkWriteTime)
        : 0;
    message.tempBlkReadTime =
      object.tempBlkReadTime !== undefined && object.tempBlkReadTime !== null
        ? Number(object.tempBlkReadTime)
        : 0;
    message.tempBlkWriteTime =
      object.tempBlkWriteTime !== undefined && object.tempBlkWriteTime !== null
        ? Number(object.tempBlkWriteTime)
        : 0;
    message.walRecords =
      object.walRecords !== undefined && object.walRecords !== null
        ? Number(object.walRecords)
        : 0;
    message.walFpi =
      object.walFpi !== undefined && object.walFpi !== null
        ? Number(object.walFpi)
        : 0;
    message.walBytes =
      object.walBytes !== undefined && object.walBytes !== null
        ? Number(object.walBytes)
        : 0;
    message.jitFunctions =
      object.jitFunctions !== undefined && object.jitFunctions !== null
        ? Number(object.jitFunctions)
        : 0;
    message.jitGenerationTime =
      object.jitGenerationTime !== undefined &&
      object.jitGenerationTime !== null
        ? Number(object.jitGenerationTime)
        : 0;
    message.jitInliningCount =
      object.jitInliningCount !== undefined && object.jitInliningCount !== null
        ? Number(object.jitInliningCount)
        : 0;
    message.jitInliningTime =
      object.jitInliningTime !== undefined && object.jitInliningTime !== null
        ? Number(object.jitInliningTime)
        : 0;
    message.jitOptimizationCount =
      object.jitOptimizationCount !== undefined &&
      object.jitOptimizationCount !== null
        ? Number(object.jitOptimizationCount)
        : 0;
    message.jitOptimizationTime =
      object.jitOptimizationTime !== undefined &&
      object.jitOptimizationTime !== null
        ? Number(object.jitOptimizationTime)
        : 0;
    message.jitEmissionCount =
      object.jitEmissionCount !== undefined && object.jitEmissionCount !== null
        ? Number(object.jitEmissionCount)
        : 0;
    message.jitEmissionTime =
      object.jitEmissionTime !== undefined && object.jitEmissionTime !== null
        ? Number(object.jitEmissionTime)
        : 0;
    message.startupCost =
      object.startupCost !== undefined && object.startupCost !== null
        ? Number(object.startupCost)
        : 0;
    message.totalCost =
      object.totalCost !== undefined && object.totalCost !== null
        ? Number(object.totalCost)
        : 0;
    message.planRows =
      object.planRows !== undefined && object.planRows !== null
        ? Number(object.planRows)
        : 0;
    message.planWidth =
      object.planWidth !== undefined && object.planWidth !== null
        ? Number(object.planWidth)
        : 0;
    message.reads =
      object.reads !== undefined && object.reads !== null
        ? Number(object.reads)
        : 0;
    message.writes =
      object.writes !== undefined && object.writes !== null
        ? Number(object.writes)
        : 0;
    message.userTime =
      object.userTime !== undefined && object.userTime !== null
        ? Number(object.userTime)
        : 0;
    message.systemTime =
      object.systemTime !== undefined && object.systemTime !== null
        ? Number(object.systemTime)
        : 0;
    return message;
  },

  toJSON(message: QueryStats): unknown {
    const obj: any = {};
    message.time !== undefined && (obj.time = message.time.toISOString());
    message.query !== undefined && (obj.query = message.query);
    message.normalizedPlan !== undefined &&
      (obj.normalizedPlan = message.normalizedPlan);
    message.examplePlan !== undefined &&
      (obj.examplePlan = message.examplePlan);
    message.plans !== undefined && (obj.plans = Math.round(message.plans));
    message.totalPlanTime !== undefined &&
      (obj.totalPlanTime = message.totalPlanTime);
    message.minPlanTime !== undefined &&
      (obj.minPlanTime = message.minPlanTime);
    message.maxPlanTime !== undefined &&
      (obj.maxPlanTime = message.maxPlanTime);
    message.meanPlanTime !== undefined &&
      (obj.meanPlanTime = message.meanPlanTime);
    message.stddevPlanTime !== undefined &&
      (obj.stddevPlanTime = message.stddevPlanTime);
    message.calls !== undefined && (obj.calls = Math.round(message.calls));
    message.totalTime !== undefined && (obj.totalTime = message.totalTime);
    message.minTime !== undefined && (obj.minTime = message.minTime);
    message.maxTime !== undefined && (obj.maxTime = message.maxTime);
    message.meanTime !== undefined && (obj.meanTime = message.meanTime);
    message.stddevTime !== undefined && (obj.stddevTime = message.stddevTime);
    message.rows !== undefined && (obj.rows = Math.round(message.rows));
    message.sharedBlksHit !== undefined &&
      (obj.sharedBlksHit = Math.round(message.sharedBlksHit));
    message.sharedBlksRead !== undefined &&
      (obj.sharedBlksRead = Math.round(message.sharedBlksRead));
    message.sharedBlksDirtied !== undefined &&
      (obj.sharedBlksDirtied = Math.round(message.sharedBlksDirtied));
    message.sharedBlksWritten !== undefined &&
      (obj.sharedBlksWritten = Math.round(message.sharedBlksWritten));
    message.localBlksHit !== undefined &&
      (obj.localBlksHit = Math.round(message.localBlksHit));
    message.localBlksRead !== undefined &&
      (obj.localBlksRead = Math.round(message.localBlksRead));
    message.localBlksDirtied !== undefined &&
      (obj.localBlksDirtied = Math.round(message.localBlksDirtied));
    message.localBlksWritten !== undefined &&
      (obj.localBlksWritten = Math.round(message.localBlksWritten));
    message.tempBlksRead !== undefined &&
      (obj.tempBlksRead = Math.round(message.tempBlksRead));
    message.tempBlksWritten !== undefined &&
      (obj.tempBlksWritten = Math.round(message.tempBlksWritten));
    message.blkReadTime !== undefined &&
      (obj.blkReadTime = message.blkReadTime);
    message.blkWriteTime !== undefined &&
      (obj.blkWriteTime = message.blkWriteTime);
    message.tempBlkReadTime !== undefined &&
      (obj.tempBlkReadTime = message.tempBlkReadTime);
    message.tempBlkWriteTime !== undefined &&
      (obj.tempBlkWriteTime = message.tempBlkWriteTime);
    message.walRecords !== undefined &&
      (obj.walRecords = Math.round(message.walRecords));
    message.walFpi !== undefined && (obj.walFpi = Math.round(message.walFpi));
    message.walBytes !== undefined &&
      (obj.walBytes = Math.round(message.walBytes));
    message.jitFunctions !== undefined &&
      (obj.jitFunctions = Math.round(message.jitFunctions));
    message.jitGenerationTime !== undefined &&
      (obj.jitGenerationTime = message.jitGenerationTime);
    message.jitInliningCount !== undefined &&
      (obj.jitInliningCount = Math.round(message.jitInliningCount));
    message.jitInliningTime !== undefined &&
      (obj.jitInliningTime = message.jitInliningTime);
    message.jitOptimizationCount !== undefined &&
      (obj.jitOptimizationCount = Math.round(message.jitOptimizationCount));
    message.jitOptimizationTime !== undefined &&
      (obj.jitOptimizationTime = message.jitOptimizationTime);
    message.jitEmissionCount !== undefined &&
      (obj.jitEmissionCount = Math.round(message.jitEmissionCount));
    message.jitEmissionTime !== undefined &&
      (obj.jitEmissionTime = message.jitEmissionTime);
    message.startupCost !== undefined &&
      (obj.startupCost = Math.round(message.startupCost));
    message.totalCost !== undefined &&
      (obj.totalCost = Math.round(message.totalCost));
    message.planRows !== undefined &&
      (obj.planRows = Math.round(message.planRows));
    message.planWidth !== undefined &&
      (obj.planWidth = Math.round(message.planWidth));
    message.reads !== undefined && (obj.reads = Math.round(message.reads));
    message.writes !== undefined && (obj.writes = Math.round(message.writes));
    message.userTime !== undefined && (obj.userTime = message.userTime);
    message.systemTime !== undefined && (obj.systemTime = message.systemTime);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryStats>, I>>(
    object: I
  ): QueryStats {
    const message = { ...baseQueryStats } as QueryStats;
    message.time = object.time ?? undefined;
    message.query = object.query ?? "";
    message.normalizedPlan = object.normalizedPlan ?? "";
    message.examplePlan = object.examplePlan ?? "";
    message.plans = object.plans ?? 0;
    message.totalPlanTime = object.totalPlanTime ?? 0;
    message.minPlanTime = object.minPlanTime ?? 0;
    message.maxPlanTime = object.maxPlanTime ?? 0;
    message.meanPlanTime = object.meanPlanTime ?? 0;
    message.stddevPlanTime = object.stddevPlanTime ?? 0;
    message.calls = object.calls ?? 0;
    message.totalTime = object.totalTime ?? 0;
    message.minTime = object.minTime ?? 0;
    message.maxTime = object.maxTime ?? 0;
    message.meanTime = object.meanTime ?? 0;
    message.stddevTime = object.stddevTime ?? 0;
    message.rows = object.rows ?? 0;
    message.sharedBlksHit = object.sharedBlksHit ?? 0;
    message.sharedBlksRead = object.sharedBlksRead ?? 0;
    message.sharedBlksDirtied = object.sharedBlksDirtied ?? 0;
    message.sharedBlksWritten = object.sharedBlksWritten ?? 0;
    message.localBlksHit = object.localBlksHit ?? 0;
    message.localBlksRead = object.localBlksRead ?? 0;
    message.localBlksDirtied = object.localBlksDirtied ?? 0;
    message.localBlksWritten = object.localBlksWritten ?? 0;
    message.tempBlksRead = object.tempBlksRead ?? 0;
    message.tempBlksWritten = object.tempBlksWritten ?? 0;
    message.blkReadTime = object.blkReadTime ?? 0;
    message.blkWriteTime = object.blkWriteTime ?? 0;
    message.tempBlkReadTime = object.tempBlkReadTime ?? 0;
    message.tempBlkWriteTime = object.tempBlkWriteTime ?? 0;
    message.walRecords = object.walRecords ?? 0;
    message.walFpi = object.walFpi ?? 0;
    message.walBytes = object.walBytes ?? 0;
    message.jitFunctions = object.jitFunctions ?? 0;
    message.jitGenerationTime = object.jitGenerationTime ?? 0;
    message.jitInliningCount = object.jitInliningCount ?? 0;
    message.jitInliningTime = object.jitInliningTime ?? 0;
    message.jitOptimizationCount = object.jitOptimizationCount ?? 0;
    message.jitOptimizationTime = object.jitOptimizationTime ?? 0;
    message.jitEmissionCount = object.jitEmissionCount ?? 0;
    message.jitEmissionTime = object.jitEmissionTime ?? 0;
    message.startupCost = object.startupCost ?? 0;
    message.totalCost = object.totalCost ?? 0;
    message.planRows = object.planRows ?? 0;
    message.planWidth = object.planWidth ?? 0;
    message.reads = object.reads ?? 0;
    message.writes = object.writes ?? 0;
    message.userTime = object.userTime ?? 0;
    message.systemTime = object.systemTime ?? 0;
    return message;
  },
};

messageTypeRegistry.set(QueryStats.$type, QueryStats);

const baseQueryStatement: object = {
  $type: "yandex.cloud.mdb.postgresql.v1.QueryStatement",
};

export const QueryStatement = {
  $type: "yandex.cloud.mdb.postgresql.v1.QueryStatement" as const,

  encode(
    message: QueryStatement,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== undefined) {
      PrimaryKey.encode(message.key, writer.uint32(10).fork()).ldelim();
    }
    if (message.stats !== undefined) {
      QueryStats.encode(message.stats, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryStatement {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryStatement } as QueryStatement;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = PrimaryKey.decode(reader, reader.uint32());
          break;
        case 2:
          message.stats = QueryStats.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryStatement {
    const message = { ...baseQueryStatement } as QueryStatement;
    message.key =
      object.key !== undefined && object.key !== null
        ? PrimaryKey.fromJSON(object.key)
        : undefined;
    message.stats =
      object.stats !== undefined && object.stats !== null
        ? QueryStats.fromJSON(object.stats)
        : undefined;
    return message;
  },

  toJSON(message: QueryStatement): unknown {
    const obj: any = {};
    message.key !== undefined &&
      (obj.key = message.key ? PrimaryKey.toJSON(message.key) : undefined);
    message.stats !== undefined &&
      (obj.stats = message.stats
        ? QueryStats.toJSON(message.stats)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryStatement>, I>>(
    object: I
  ): QueryStatement {
    const message = { ...baseQueryStatement } as QueryStatement;
    message.key =
      object.key !== undefined && object.key !== null
        ? PrimaryKey.fromPartial(object.key)
        : undefined;
    message.stats =
      object.stats !== undefined && object.stats !== null
        ? QueryStats.fromPartial(object.stats)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryStatement.$type, QueryStatement);

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
