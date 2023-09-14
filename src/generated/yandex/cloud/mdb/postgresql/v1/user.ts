/* eslint-disable */
import { messageTypeRegistry } from "../../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { BoolValue, Int64Value } from "../../../../../google/protobuf/wrappers";

export const protobufPackage = "yandex.cloud.mdb.postgresql.v1";

/**
 * A PostgreSQL User resource. For more information, see
 * the [Developer's Guide](/docs/managed-postgresql/concepts).
 */
export interface User {
  $type: "yandex.cloud.mdb.postgresql.v1.User";
  /** Name of the PostgreSQL user. */
  name: string;
  /** ID of the PostgreSQL cluster the user belongs to. */
  clusterId: string;
  /** Set of permissions granted to the user to access specific databases. */
  permissions: Permission[];
  /**
   * Maximum number of database connections available to the user.
   *
   * When used in session pooling, this setting limits the number of connections to every single host in PostgreSQL cluster. In this case, the setting's value must be greater than the total number of connections that backend services can open to access the PostgreSQL cluster. The setting's value should not exceed the value of the [Cluster.config.postgresql_config_12.effective_config.max_connections] setting.
   *
   * When used in transaction pooling, this setting limits the number of user's active transactions; therefore, in this mode user can open thousands of connections, but only `N` concurrent connections will be opened, where `N` is the value of the setting.
   *
   * Minimum value: `10` (default: `50`), when used in session pooling.
   */
  connLimit: number;
  settings?: UserSettings;
  /**
   * This flag defines whether the user can login to a PostgreSQL database.
   *
   * Default value: `true` (login is allowed).
   */
  login?: boolean;
  /**
   * A set of roles and privileges that are granted to the user.
   *
   * For more information, see [the documentation](/docs/managed-postgresql/operations/grant).
   */
  grants: string[];
  /**
   * Deletion Protection inhibits deletion of the user
   *
   * Default value: `unspecified` (inherits cluster's deletion_protection)
   */
  deletionProtection?: boolean;
}

export interface Permission {
  $type: "yandex.cloud.mdb.postgresql.v1.Permission";
  /** Name of the database that the permission grants access to. */
  databaseName: string;
}

export interface UserSpec {
  $type: "yandex.cloud.mdb.postgresql.v1.UserSpec";
  /** Name of the PostgreSQL user. */
  name: string;
  /** Password of the PostgreSQL user. */
  password: string;
  /** Set of permissions to grant to the user to access specific databases. */
  permissions: Permission[];
  /**
   * Maximum number of database connections that should be available to the user.
   *
   * When used in session pooling, this setting limits the number of connections to every single host in PostgreSQL cluster. In this case, the setting's value must be greater than the total number of connections that backend services can open to access the PostgreSQL cluster. The setting's value should not exceed the value of the [Cluster.config.postgresql_config_12.effective_config.max_connections] setting.
   *
   * When used in transaction pooling, this setting limits the number of user's active transactions; therefore, in this mode user can open thousands of connections, but only `N` concurrent connections will be opened, where `N` is the value of the setting.
   *
   * Minimum value: `10` (default: `50`), when used in session pooling.
   */
  connLimit?: number;
  /** PostgreSQL settings for the user. */
  settings?: UserSettings;
  /**
   * This flag defines whether the user can login to a PostgreSQL database.
   *
   * Default value: `true` (login is allowed).
   */
  login?: boolean;
  /**
   * A set of roles and privileges that are granted to the user.
   *
   * For more information, see [the documentation](/docs/managed-postgresql/operations/grant).
   */
  grants: string[];
  /**
   * Deletion Protection inhibits deletion of the user
   *
   * Default value: `unspecified` (inherits cluster's deletion_protection)
   */
  deletionProtection?: boolean;
}

/** PostgreSQL user settings. */
export interface UserSettings {
  $type: "yandex.cloud.mdb.postgresql.v1.UserSettings";
  /**
   * SQL sets an isolation level for each transaction.
   * This setting defines the default isolation level to be set for all new SQL transactions.
   *
   * See in-depth description in [PostgreSQL documentation](https://www.postgresql.org/docs/current/transaction-iso.html).
   */
  defaultTransactionIsolation: UserSettings_TransactionIsolation;
  /**
   * The maximum time (in milliseconds) for any statement to wait for acquiring a lock on an table, index, row or other database object.
   * If the wait time is longer than the specified amount, then this statement is aborted.
   *
   * Default value: `0` (no control is enforced, a statement waiting time is unlimited).
   */
  lockTimeout?: number;
  /**
   * This setting controls logging of the duration of statements.
   *
   * The duration of each completed statement will be logged if the statement ran for at least the specified amount of time (in milliseconds).
   * E.g., if this setting's value is set to `500`, a statement that took 300 milliseconds to complete will not be logged; on the other hand, the one that took 2000 milliseconds to complete, will be logged.
   *
   * Value of `0` forces PostgreSQL to log the duration of all statements.
   *
   * Value of `-1` (default) disables logging of the duration of statements.
   *
   * See in-depth description in [PostgreSQL documentation](https://www.postgresql.org/docs/current/runtime-config-logging.html).
   */
  logMinDurationStatement?: number;
  /**
   * This setting defines whether DBMS will commit transaction in a synchronous way.
   *
   * When synchronization is enabled, cluster waits for the synchronous operations to be completed prior to reporting `success` to the client.
   * These operations guarantee different levels of the data safety and visibility in the cluster.
   *
   * See in-depth description in [PostgreSQL documentation](https://www.postgresql.org/docs/current/runtime-config-wal.html#GUC-SYNCHRONOUS-COMMIT).
   */
  synchronousCommit: UserSettings_SynchronousCommit;
  /**
   * The maximum storage space size (in kilobytes) that a single process can use to create temporary files.
   * If a transaction exceeds this limit during execution, it will be aborted.
   *
   * A huge query may not fit into a server's RAM, therefore PostgreSQL will use some storage to store and execute such a query. Too big queries can make excessive use of the storage system, effectively making other quieries to run slow. This setting prevents execution of a big queries that can influence other queries by limiting size of temporary files.
   */
  tempFileLimit?: number;
  /**
   * This setting specifies which SQL statements should be logged (on the user level).
   *
   * See in-depth description in [PostgreSQL documentation](https://www.postgresql.org/docs/current/runtime-config-logging.html).
   */
  logStatement: UserSettings_LogStatement;
  /**
   * Mode that the connection pooler is working in with specified user.
   *
   * See in-depth description in [Odyssey documentation](https://github.com/yandex/odyssey/blob/master/documentation/configuration.md#pool-string)
   */
  poolMode: UserSettings_PoolingMode;
  /**
   * User can use prepared statements with transaction pooling.
   *
   * See in-depth description in [PostgreSQL documentation](https://www.postgresql.org/docs/current/sql-prepare.html)
   */
  preparedStatementsPooling?: boolean;
  /**
   * The connection pooler setting. It determines the maximum allowed replication lag (in seconds).
   * Pooler will reject connections to the replica with a lag above this threshold.
   * It can be useful to prevent application from reading stale data.
   *
   * Default value: 0
   *
   * Value of `0` disables this mechanism
   */
  catchupTimeout?: number;
  /**
   * The maximum time (in milliseconds) to wait for WAL replication (can be set only for PostgreSQL 12+)
   * Terminate replication connections that are inactive for longer than this amount of time.
   *
   * Default value: `60000` (60 seconds).
   *
   * Value of `0` disables the timeout mechanism.
   *
   * See in-depth description in [PostgreSQL documentation](https://www.postgresql.org/docs/current/runtime-config-replication.html)
   */
  walSenderTimeout?: number;
  /**
   * Sets the maximum allowed idle time (in milliseconds) between queries, when in a transaction.
   *
   * Values of `0` (default) disables the timeout.
   *
   * See in-depth description in [PostgreSQL documentation](https://www.postgresql.org/docs/current/runtime-config-client.html)
   */
  idleInTransactionSessionTimeout?: number;
  /**
   * The maximum time (in milliseconds) to wait for statement
   * The timeout is measured from the time a command arrives at the server until it is completed by the server.
   *
   * If `log_min_error_statement` is set to ERROR or lower, the statement that timed out will also be logged.
   *
   * Value of `0` (default) disables the timeout
   *
   * See in-depth description in [PostgreSQL documentation](https://www.postgresql.org/docs/current/runtime-config-client.html)
   */
  statementTimeout?: number;
}

export enum UserSettings_SynchronousCommit {
  SYNCHRONOUS_COMMIT_UNSPECIFIED = 0,
  /** SYNCHRONOUS_COMMIT_ON - (default value) success is reported to the client if the data is in WAL (Write-Ahead Log), and WAL is written to the storage of both the master and its synchronous standby server. */
  SYNCHRONOUS_COMMIT_ON = 1,
  /**
   * SYNCHRONOUS_COMMIT_OFF - success is reported to the client even if the data is not in WAL.
   * There is no synchronous write operation, data may be loss in case of storage subsystem failure.
   */
  SYNCHRONOUS_COMMIT_OFF = 2,
  /**
   * SYNCHRONOUS_COMMIT_LOCAL - success is reported to the client if the data is in WAL, and WAL is written to the storage of the master server.
   * The transaction may be lost due to storage subsystem failure on the master server.
   */
  SYNCHRONOUS_COMMIT_LOCAL = 3,
  /**
   * SYNCHRONOUS_COMMIT_REMOTE_WRITE - success is reported to the client if the data is in WAL, WAL is written to the storage of the master server, and the server's synchronous standby indicates that it has received WAL and written it out to its operating system.
   * The transaction may be lost due to simultaneous storage subsystem failure on the master and operating system's failure on the synchronous standby.
   */
  SYNCHRONOUS_COMMIT_REMOTE_WRITE = 4,
  /**
   * SYNCHRONOUS_COMMIT_REMOTE_APPLY - success is reported to the client if the data is in WAL (Write-Ahead Log), WAL is written to the storage of the master server, and its synchronous standby indicates that it has received WAL and applied it.
   * The transaction may be lost due to irrecoverably failure of both the master and its synchronous standby.
   */
  SYNCHRONOUS_COMMIT_REMOTE_APPLY = 5,
  UNRECOGNIZED = -1,
}

export function userSettings_SynchronousCommitFromJSON(
  object: any
): UserSettings_SynchronousCommit {
  switch (object) {
    case 0:
    case "SYNCHRONOUS_COMMIT_UNSPECIFIED":
      return UserSettings_SynchronousCommit.SYNCHRONOUS_COMMIT_UNSPECIFIED;
    case 1:
    case "SYNCHRONOUS_COMMIT_ON":
      return UserSettings_SynchronousCommit.SYNCHRONOUS_COMMIT_ON;
    case 2:
    case "SYNCHRONOUS_COMMIT_OFF":
      return UserSettings_SynchronousCommit.SYNCHRONOUS_COMMIT_OFF;
    case 3:
    case "SYNCHRONOUS_COMMIT_LOCAL":
      return UserSettings_SynchronousCommit.SYNCHRONOUS_COMMIT_LOCAL;
    case 4:
    case "SYNCHRONOUS_COMMIT_REMOTE_WRITE":
      return UserSettings_SynchronousCommit.SYNCHRONOUS_COMMIT_REMOTE_WRITE;
    case 5:
    case "SYNCHRONOUS_COMMIT_REMOTE_APPLY":
      return UserSettings_SynchronousCommit.SYNCHRONOUS_COMMIT_REMOTE_APPLY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return UserSettings_SynchronousCommit.UNRECOGNIZED;
  }
}

export function userSettings_SynchronousCommitToJSON(
  object: UserSettings_SynchronousCommit
): string {
  switch (object) {
    case UserSettings_SynchronousCommit.SYNCHRONOUS_COMMIT_UNSPECIFIED:
      return "SYNCHRONOUS_COMMIT_UNSPECIFIED";
    case UserSettings_SynchronousCommit.SYNCHRONOUS_COMMIT_ON:
      return "SYNCHRONOUS_COMMIT_ON";
    case UserSettings_SynchronousCommit.SYNCHRONOUS_COMMIT_OFF:
      return "SYNCHRONOUS_COMMIT_OFF";
    case UserSettings_SynchronousCommit.SYNCHRONOUS_COMMIT_LOCAL:
      return "SYNCHRONOUS_COMMIT_LOCAL";
    case UserSettings_SynchronousCommit.SYNCHRONOUS_COMMIT_REMOTE_WRITE:
      return "SYNCHRONOUS_COMMIT_REMOTE_WRITE";
    case UserSettings_SynchronousCommit.SYNCHRONOUS_COMMIT_REMOTE_APPLY:
      return "SYNCHRONOUS_COMMIT_REMOTE_APPLY";
    default:
      return "UNKNOWN";
  }
}

export enum UserSettings_LogStatement {
  LOG_STATEMENT_UNSPECIFIED = 0,
  /** LOG_STATEMENT_NONE - (default) logs none of SQL statements. */
  LOG_STATEMENT_NONE = 1,
  /** LOG_STATEMENT_DDL - logs all data definition statements (such as `CREATE`, `ALTER`, `DROP` and others). */
  LOG_STATEMENT_DDL = 2,
  /** LOG_STATEMENT_MOD - logs all statements that fall in the `LOG_STATEMENT_DDL` category plus data-modifying statements (such as `INSERT`, `UPDATE` and others). */
  LOG_STATEMENT_MOD = 3,
  /** LOG_STATEMENT_ALL - logs all SQL statements. */
  LOG_STATEMENT_ALL = 4,
  UNRECOGNIZED = -1,
}

export function userSettings_LogStatementFromJSON(
  object: any
): UserSettings_LogStatement {
  switch (object) {
    case 0:
    case "LOG_STATEMENT_UNSPECIFIED":
      return UserSettings_LogStatement.LOG_STATEMENT_UNSPECIFIED;
    case 1:
    case "LOG_STATEMENT_NONE":
      return UserSettings_LogStatement.LOG_STATEMENT_NONE;
    case 2:
    case "LOG_STATEMENT_DDL":
      return UserSettings_LogStatement.LOG_STATEMENT_DDL;
    case 3:
    case "LOG_STATEMENT_MOD":
      return UserSettings_LogStatement.LOG_STATEMENT_MOD;
    case 4:
    case "LOG_STATEMENT_ALL":
      return UserSettings_LogStatement.LOG_STATEMENT_ALL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return UserSettings_LogStatement.UNRECOGNIZED;
  }
}

export function userSettings_LogStatementToJSON(
  object: UserSettings_LogStatement
): string {
  switch (object) {
    case UserSettings_LogStatement.LOG_STATEMENT_UNSPECIFIED:
      return "LOG_STATEMENT_UNSPECIFIED";
    case UserSettings_LogStatement.LOG_STATEMENT_NONE:
      return "LOG_STATEMENT_NONE";
    case UserSettings_LogStatement.LOG_STATEMENT_DDL:
      return "LOG_STATEMENT_DDL";
    case UserSettings_LogStatement.LOG_STATEMENT_MOD:
      return "LOG_STATEMENT_MOD";
    case UserSettings_LogStatement.LOG_STATEMENT_ALL:
      return "LOG_STATEMENT_ALL";
    default:
      return "UNKNOWN";
  }
}

export enum UserSettings_TransactionIsolation {
  TRANSACTION_ISOLATION_UNSPECIFIED = 0,
  /** TRANSACTION_ISOLATION_READ_UNCOMMITTED - this level behaves like `TRANSACTION_ISOLATION_READ_COMMITTED` in PostgreSQL. */
  TRANSACTION_ISOLATION_READ_UNCOMMITTED = 1,
  /** TRANSACTION_ISOLATION_READ_COMMITTED - (default) on this level query sees only data committed before the query began. */
  TRANSACTION_ISOLATION_READ_COMMITTED = 2,
  /** TRANSACTION_ISOLATION_REPEATABLE_READ - on this level all subsequent queries in a transaction will see the same rows, that were read by the first `SELECT` or `INSERT` query in this transaction, unchanged (these rows are locked during the first query). */
  TRANSACTION_ISOLATION_REPEATABLE_READ = 3,
  /**
   * TRANSACTION_ISOLATION_SERIALIZABLE - this level provides the strictest transaction isolation.
   * All queries in the current transaction see only the rows that were fixed prior to execution of the first `SELECT` or `INSERT` query in this transaction.
   * If read and write operations in a concurrent set of serializable transactions overlap and this may cause an inconsistency that is not possible during the serial transaction execution, then one of the transaction will be rolled back, triggering a serialization failure.
   */
  TRANSACTION_ISOLATION_SERIALIZABLE = 4,
  UNRECOGNIZED = -1,
}

export function userSettings_TransactionIsolationFromJSON(
  object: any
): UserSettings_TransactionIsolation {
  switch (object) {
    case 0:
    case "TRANSACTION_ISOLATION_UNSPECIFIED":
      return UserSettings_TransactionIsolation.TRANSACTION_ISOLATION_UNSPECIFIED;
    case 1:
    case "TRANSACTION_ISOLATION_READ_UNCOMMITTED":
      return UserSettings_TransactionIsolation.TRANSACTION_ISOLATION_READ_UNCOMMITTED;
    case 2:
    case "TRANSACTION_ISOLATION_READ_COMMITTED":
      return UserSettings_TransactionIsolation.TRANSACTION_ISOLATION_READ_COMMITTED;
    case 3:
    case "TRANSACTION_ISOLATION_REPEATABLE_READ":
      return UserSettings_TransactionIsolation.TRANSACTION_ISOLATION_REPEATABLE_READ;
    case 4:
    case "TRANSACTION_ISOLATION_SERIALIZABLE":
      return UserSettings_TransactionIsolation.TRANSACTION_ISOLATION_SERIALIZABLE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return UserSettings_TransactionIsolation.UNRECOGNIZED;
  }
}

export function userSettings_TransactionIsolationToJSON(
  object: UserSettings_TransactionIsolation
): string {
  switch (object) {
    case UserSettings_TransactionIsolation.TRANSACTION_ISOLATION_UNSPECIFIED:
      return "TRANSACTION_ISOLATION_UNSPECIFIED";
    case UserSettings_TransactionIsolation.TRANSACTION_ISOLATION_READ_UNCOMMITTED:
      return "TRANSACTION_ISOLATION_READ_UNCOMMITTED";
    case UserSettings_TransactionIsolation.TRANSACTION_ISOLATION_READ_COMMITTED:
      return "TRANSACTION_ISOLATION_READ_COMMITTED";
    case UserSettings_TransactionIsolation.TRANSACTION_ISOLATION_REPEATABLE_READ:
      return "TRANSACTION_ISOLATION_REPEATABLE_READ";
    case UserSettings_TransactionIsolation.TRANSACTION_ISOLATION_SERIALIZABLE:
      return "TRANSACTION_ISOLATION_SERIALIZABLE";
    default:
      return "UNKNOWN";
  }
}

export enum UserSettings_PoolingMode {
  POOLING_MODE_UNSPECIFIED = 0,
  /** SESSION - (default) server connection will be assigned to it for the whole duration the client stays connected */
  SESSION = 1,
  /** TRANSACTION - server connection is assigned to a client only during a transaction */
  TRANSACTION = 2,
  /** STATEMENT - server connection will be put back into the pool immediately after a query completes */
  STATEMENT = 3,
  UNRECOGNIZED = -1,
}

export function userSettings_PoolingModeFromJSON(
  object: any
): UserSettings_PoolingMode {
  switch (object) {
    case 0:
    case "POOLING_MODE_UNSPECIFIED":
      return UserSettings_PoolingMode.POOLING_MODE_UNSPECIFIED;
    case 1:
    case "SESSION":
      return UserSettings_PoolingMode.SESSION;
    case 2:
    case "TRANSACTION":
      return UserSettings_PoolingMode.TRANSACTION;
    case 3:
    case "STATEMENT":
      return UserSettings_PoolingMode.STATEMENT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return UserSettings_PoolingMode.UNRECOGNIZED;
  }
}

export function userSettings_PoolingModeToJSON(
  object: UserSettings_PoolingMode
): string {
  switch (object) {
    case UserSettings_PoolingMode.POOLING_MODE_UNSPECIFIED:
      return "POOLING_MODE_UNSPECIFIED";
    case UserSettings_PoolingMode.SESSION:
      return "SESSION";
    case UserSettings_PoolingMode.TRANSACTION:
      return "TRANSACTION";
    case UserSettings_PoolingMode.STATEMENT:
      return "STATEMENT";
    default:
      return "UNKNOWN";
  }
}

const baseUser: object = {
  $type: "yandex.cloud.mdb.postgresql.v1.User",
  name: "",
  clusterId: "",
  connLimit: 0,
  grants: "",
};

export const User = {
  $type: "yandex.cloud.mdb.postgresql.v1.User" as const,

  encode(message: User, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.clusterId !== "") {
      writer.uint32(18).string(message.clusterId);
    }
    for (const v of message.permissions) {
      Permission.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.connLimit !== 0) {
      writer.uint32(32).int64(message.connLimit);
    }
    if (message.settings !== undefined) {
      UserSettings.encode(message.settings, writer.uint32(42).fork()).ldelim();
    }
    if (message.login !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.login! },
        writer.uint32(50).fork()
      ).ldelim();
    }
    for (const v of message.grants) {
      writer.uint32(58).string(v!);
    }
    if (message.deletionProtection !== undefined) {
      BoolValue.encode(
        {
          $type: "google.protobuf.BoolValue",
          value: message.deletionProtection!,
        },
        writer.uint32(66).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): User {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUser } as User;
    message.permissions = [];
    message.grants = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.clusterId = reader.string();
          break;
        case 3:
          message.permissions.push(Permission.decode(reader, reader.uint32()));
          break;
        case 4:
          message.connLimit = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.settings = UserSettings.decode(reader, reader.uint32());
          break;
        case 6:
          message.login = BoolValue.decode(reader, reader.uint32()).value;
          break;
        case 7:
          message.grants.push(reader.string());
          break;
        case 8:
          message.deletionProtection = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): User {
    const message = { ...baseUser } as User;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.permissions = (object.permissions ?? []).map((e: any) =>
      Permission.fromJSON(e)
    );
    message.connLimit =
      object.connLimit !== undefined && object.connLimit !== null
        ? Number(object.connLimit)
        : 0;
    message.settings =
      object.settings !== undefined && object.settings !== null
        ? UserSettings.fromJSON(object.settings)
        : undefined;
    message.login =
      object.login !== undefined && object.login !== null
        ? Boolean(object.login)
        : undefined;
    message.grants = (object.grants ?? []).map((e: any) => String(e));
    message.deletionProtection =
      object.deletionProtection !== undefined &&
      object.deletionProtection !== null
        ? Boolean(object.deletionProtection)
        : undefined;
    return message;
  },

  toJSON(message: User): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    if (message.permissions) {
      obj.permissions = message.permissions.map((e) =>
        e ? Permission.toJSON(e) : undefined
      );
    } else {
      obj.permissions = [];
    }
    message.connLimit !== undefined &&
      (obj.connLimit = Math.round(message.connLimit));
    message.settings !== undefined &&
      (obj.settings = message.settings
        ? UserSettings.toJSON(message.settings)
        : undefined);
    message.login !== undefined && (obj.login = message.login);
    if (message.grants) {
      obj.grants = message.grants.map((e) => e);
    } else {
      obj.grants = [];
    }
    message.deletionProtection !== undefined &&
      (obj.deletionProtection = message.deletionProtection);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<User>, I>>(object: I): User {
    const message = { ...baseUser } as User;
    message.name = object.name ?? "";
    message.clusterId = object.clusterId ?? "";
    message.permissions =
      object.permissions?.map((e) => Permission.fromPartial(e)) || [];
    message.connLimit = object.connLimit ?? 0;
    message.settings =
      object.settings !== undefined && object.settings !== null
        ? UserSettings.fromPartial(object.settings)
        : undefined;
    message.login = object.login ?? undefined;
    message.grants = object.grants?.map((e) => e) || [];
    message.deletionProtection = object.deletionProtection ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(User.$type, User);

const basePermission: object = {
  $type: "yandex.cloud.mdb.postgresql.v1.Permission",
  databaseName: "",
};

export const Permission = {
  $type: "yandex.cloud.mdb.postgresql.v1.Permission" as const,

  encode(
    message: Permission,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.databaseName !== "") {
      writer.uint32(10).string(message.databaseName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Permission {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePermission } as Permission;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.databaseName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Permission {
    const message = { ...basePermission } as Permission;
    message.databaseName =
      object.databaseName !== undefined && object.databaseName !== null
        ? String(object.databaseName)
        : "";
    return message;
  },

  toJSON(message: Permission): unknown {
    const obj: any = {};
    message.databaseName !== undefined &&
      (obj.databaseName = message.databaseName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Permission>, I>>(
    object: I
  ): Permission {
    const message = { ...basePermission } as Permission;
    message.databaseName = object.databaseName ?? "";
    return message;
  },
};

messageTypeRegistry.set(Permission.$type, Permission);

const baseUserSpec: object = {
  $type: "yandex.cloud.mdb.postgresql.v1.UserSpec",
  name: "",
  password: "",
  grants: "",
};

export const UserSpec = {
  $type: "yandex.cloud.mdb.postgresql.v1.UserSpec" as const,

  encode(
    message: UserSpec,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.password !== "") {
      writer.uint32(18).string(message.password);
    }
    for (const v of message.permissions) {
      Permission.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.connLimit !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.connLimit! },
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.settings !== undefined) {
      UserSettings.encode(message.settings, writer.uint32(42).fork()).ldelim();
    }
    if (message.login !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.login! },
        writer.uint32(50).fork()
      ).ldelim();
    }
    for (const v of message.grants) {
      writer.uint32(58).string(v!);
    }
    if (message.deletionProtection !== undefined) {
      BoolValue.encode(
        {
          $type: "google.protobuf.BoolValue",
          value: message.deletionProtection!,
        },
        writer.uint32(66).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserSpec {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUserSpec } as UserSpec;
    message.permissions = [];
    message.grants = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.password = reader.string();
          break;
        case 3:
          message.permissions.push(Permission.decode(reader, reader.uint32()));
          break;
        case 4:
          message.connLimit = Int64Value.decode(reader, reader.uint32()).value;
          break;
        case 5:
          message.settings = UserSettings.decode(reader, reader.uint32());
          break;
        case 6:
          message.login = BoolValue.decode(reader, reader.uint32()).value;
          break;
        case 7:
          message.grants.push(reader.string());
          break;
        case 8:
          message.deletionProtection = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UserSpec {
    const message = { ...baseUserSpec } as UserSpec;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.password =
      object.password !== undefined && object.password !== null
        ? String(object.password)
        : "";
    message.permissions = (object.permissions ?? []).map((e: any) =>
      Permission.fromJSON(e)
    );
    message.connLimit =
      object.connLimit !== undefined && object.connLimit !== null
        ? Number(object.connLimit)
        : undefined;
    message.settings =
      object.settings !== undefined && object.settings !== null
        ? UserSettings.fromJSON(object.settings)
        : undefined;
    message.login =
      object.login !== undefined && object.login !== null
        ? Boolean(object.login)
        : undefined;
    message.grants = (object.grants ?? []).map((e: any) => String(e));
    message.deletionProtection =
      object.deletionProtection !== undefined &&
      object.deletionProtection !== null
        ? Boolean(object.deletionProtection)
        : undefined;
    return message;
  },

  toJSON(message: UserSpec): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.password !== undefined && (obj.password = message.password);
    if (message.permissions) {
      obj.permissions = message.permissions.map((e) =>
        e ? Permission.toJSON(e) : undefined
      );
    } else {
      obj.permissions = [];
    }
    message.connLimit !== undefined && (obj.connLimit = message.connLimit);
    message.settings !== undefined &&
      (obj.settings = message.settings
        ? UserSettings.toJSON(message.settings)
        : undefined);
    message.login !== undefined && (obj.login = message.login);
    if (message.grants) {
      obj.grants = message.grants.map((e) => e);
    } else {
      obj.grants = [];
    }
    message.deletionProtection !== undefined &&
      (obj.deletionProtection = message.deletionProtection);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UserSpec>, I>>(object: I): UserSpec {
    const message = { ...baseUserSpec } as UserSpec;
    message.name = object.name ?? "";
    message.password = object.password ?? "";
    message.permissions =
      object.permissions?.map((e) => Permission.fromPartial(e)) || [];
    message.connLimit = object.connLimit ?? undefined;
    message.settings =
      object.settings !== undefined && object.settings !== null
        ? UserSettings.fromPartial(object.settings)
        : undefined;
    message.login = object.login ?? undefined;
    message.grants = object.grants?.map((e) => e) || [];
    message.deletionProtection = object.deletionProtection ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(UserSpec.$type, UserSpec);

const baseUserSettings: object = {
  $type: "yandex.cloud.mdb.postgresql.v1.UserSettings",
  defaultTransactionIsolation: 0,
  synchronousCommit: 0,
  logStatement: 0,
  poolMode: 0,
};

export const UserSettings = {
  $type: "yandex.cloud.mdb.postgresql.v1.UserSettings" as const,

  encode(
    message: UserSettings,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.defaultTransactionIsolation !== 0) {
      writer.uint32(8).int32(message.defaultTransactionIsolation);
    }
    if (message.lockTimeout !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.lockTimeout! },
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.logMinDurationStatement !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.logMinDurationStatement!,
        },
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.synchronousCommit !== 0) {
      writer.uint32(32).int32(message.synchronousCommit);
    }
    if (message.tempFileLimit !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.tempFileLimit! },
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.logStatement !== 0) {
      writer.uint32(48).int32(message.logStatement);
    }
    if (message.poolMode !== 0) {
      writer.uint32(56).int32(message.poolMode);
    }
    if (message.preparedStatementsPooling !== undefined) {
      BoolValue.encode(
        {
          $type: "google.protobuf.BoolValue",
          value: message.preparedStatementsPooling!,
        },
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.catchupTimeout !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.catchupTimeout! },
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.walSenderTimeout !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.walSenderTimeout!,
        },
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.idleInTransactionSessionTimeout !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.idleInTransactionSessionTimeout!,
        },
        writer.uint32(90).fork()
      ).ldelim();
    }
    if (message.statementTimeout !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.statementTimeout!,
        },
        writer.uint32(98).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserSettings {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUserSettings } as UserSettings;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.defaultTransactionIsolation = reader.int32() as any;
          break;
        case 2:
          message.lockTimeout = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 3:
          message.logMinDurationStatement = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 4:
          message.synchronousCommit = reader.int32() as any;
          break;
        case 5:
          message.tempFileLimit = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 6:
          message.logStatement = reader.int32() as any;
          break;
        case 7:
          message.poolMode = reader.int32() as any;
          break;
        case 8:
          message.preparedStatementsPooling = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 9:
          message.catchupTimeout = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 10:
          message.walSenderTimeout = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 11:
          message.idleInTransactionSessionTimeout = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 12:
          message.statementTimeout = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UserSettings {
    const message = { ...baseUserSettings } as UserSettings;
    message.defaultTransactionIsolation =
      object.defaultTransactionIsolation !== undefined &&
      object.defaultTransactionIsolation !== null
        ? userSettings_TransactionIsolationFromJSON(
            object.defaultTransactionIsolation
          )
        : 0;
    message.lockTimeout =
      object.lockTimeout !== undefined && object.lockTimeout !== null
        ? Number(object.lockTimeout)
        : undefined;
    message.logMinDurationStatement =
      object.logMinDurationStatement !== undefined &&
      object.logMinDurationStatement !== null
        ? Number(object.logMinDurationStatement)
        : undefined;
    message.synchronousCommit =
      object.synchronousCommit !== undefined &&
      object.synchronousCommit !== null
        ? userSettings_SynchronousCommitFromJSON(object.synchronousCommit)
        : 0;
    message.tempFileLimit =
      object.tempFileLimit !== undefined && object.tempFileLimit !== null
        ? Number(object.tempFileLimit)
        : undefined;
    message.logStatement =
      object.logStatement !== undefined && object.logStatement !== null
        ? userSettings_LogStatementFromJSON(object.logStatement)
        : 0;
    message.poolMode =
      object.poolMode !== undefined && object.poolMode !== null
        ? userSettings_PoolingModeFromJSON(object.poolMode)
        : 0;
    message.preparedStatementsPooling =
      object.preparedStatementsPooling !== undefined &&
      object.preparedStatementsPooling !== null
        ? Boolean(object.preparedStatementsPooling)
        : undefined;
    message.catchupTimeout =
      object.catchupTimeout !== undefined && object.catchupTimeout !== null
        ? Number(object.catchupTimeout)
        : undefined;
    message.walSenderTimeout =
      object.walSenderTimeout !== undefined && object.walSenderTimeout !== null
        ? Number(object.walSenderTimeout)
        : undefined;
    message.idleInTransactionSessionTimeout =
      object.idleInTransactionSessionTimeout !== undefined &&
      object.idleInTransactionSessionTimeout !== null
        ? Number(object.idleInTransactionSessionTimeout)
        : undefined;
    message.statementTimeout =
      object.statementTimeout !== undefined && object.statementTimeout !== null
        ? Number(object.statementTimeout)
        : undefined;
    return message;
  },

  toJSON(message: UserSettings): unknown {
    const obj: any = {};
    message.defaultTransactionIsolation !== undefined &&
      (obj.defaultTransactionIsolation =
        userSettings_TransactionIsolationToJSON(
          message.defaultTransactionIsolation
        ));
    message.lockTimeout !== undefined &&
      (obj.lockTimeout = message.lockTimeout);
    message.logMinDurationStatement !== undefined &&
      (obj.logMinDurationStatement = message.logMinDurationStatement);
    message.synchronousCommit !== undefined &&
      (obj.synchronousCommit = userSettings_SynchronousCommitToJSON(
        message.synchronousCommit
      ));
    message.tempFileLimit !== undefined &&
      (obj.tempFileLimit = message.tempFileLimit);
    message.logStatement !== undefined &&
      (obj.logStatement = userSettings_LogStatementToJSON(
        message.logStatement
      ));
    message.poolMode !== undefined &&
      (obj.poolMode = userSettings_PoolingModeToJSON(message.poolMode));
    message.preparedStatementsPooling !== undefined &&
      (obj.preparedStatementsPooling = message.preparedStatementsPooling);
    message.catchupTimeout !== undefined &&
      (obj.catchupTimeout = message.catchupTimeout);
    message.walSenderTimeout !== undefined &&
      (obj.walSenderTimeout = message.walSenderTimeout);
    message.idleInTransactionSessionTimeout !== undefined &&
      (obj.idleInTransactionSessionTimeout =
        message.idleInTransactionSessionTimeout);
    message.statementTimeout !== undefined &&
      (obj.statementTimeout = message.statementTimeout);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UserSettings>, I>>(
    object: I
  ): UserSettings {
    const message = { ...baseUserSettings } as UserSettings;
    message.defaultTransactionIsolation =
      object.defaultTransactionIsolation ?? 0;
    message.lockTimeout = object.lockTimeout ?? undefined;
    message.logMinDurationStatement =
      object.logMinDurationStatement ?? undefined;
    message.synchronousCommit = object.synchronousCommit ?? 0;
    message.tempFileLimit = object.tempFileLimit ?? undefined;
    message.logStatement = object.logStatement ?? 0;
    message.poolMode = object.poolMode ?? 0;
    message.preparedStatementsPooling =
      object.preparedStatementsPooling ?? undefined;
    message.catchupTimeout = object.catchupTimeout ?? undefined;
    message.walSenderTimeout = object.walSenderTimeout ?? undefined;
    message.idleInTransactionSessionTimeout =
      object.idleInTransactionSessionTimeout ?? undefined;
    message.statementTimeout = object.statementTimeout ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(UserSettings.$type, UserSettings);

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
