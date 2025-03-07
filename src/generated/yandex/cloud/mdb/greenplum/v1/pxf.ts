/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Int64Value, BoolValue } from '../../../../../google/protobuf/wrappers';

export const protobufPackage = 'yandex.cloud.mdb.greenplum.v1';

export interface PXFConfig {
    /**
     * Timeout for connection to the Apache Tomcat® server when making read requests.
     *
     * Specify values in seconds.
     */
    connectionTimeout?: number;
    /**
     * Timeout for connection to the Apache Tomcat® server when making write requests.
     *
     * Specify the values in seconds.
     */
    uploadTimeout?: number;
    /**
     * Maximum number of the Apache Tomcat® threads.
     *
     * To prevent situations when requests get stuck or fail due to running out of memory or malfunctioning of the Java garbage collector, specify the number of the Apache Tomcat® threads. Learn more about adjusting the number of threads in the [VMware Greenplum® Platform Extension Framework](https://docs.vmware.com/en/VMware-Greenplum-Platform-Extension-Framework/6.9/greenplum-platform-extension-framework/cfg_mem.html) documentation.
     */
    maxThreads?: number;
    /** Determines whether the timeout for core streaming threads is permitted. */
    poolAllowCoreThreadTimeout?: boolean;
    /** Number of core streaming threads per pool. */
    poolCoreSize?: number;
    /**
     * Maximum number of requests you can add to a pool queue for core streaming threads.
     *
     * If `0`, no pool queue is generated.
     */
    poolQueueCapacity?: number;
    /** Maximum allowed number of core streaming threads. */
    poolMaxSize?: number;
    /** Initial size, in megabytes, of the JVM heap for the PXF daemon. */
    xmx?: number;
    /** Maximum size, in megabytes, of the JVM heap for the PXF daemon. */
    xms?: number;
}

export interface PXFConfigSet {
    effectiveConfig?: PXFConfig;
    /** User-defined settings. */
    userConfig?: PXFConfig;
    /** Default configuration. */
    defaultConfig?: PXFConfig;
}

export interface PXFDatasourceS3 {
    /** Public key to access S3 storage. */
    accessKey: string;
    /** Secret key to access S3 storage. */
    secretKey: string;
    /**
     * Manages a fast upload of big files to S3 storage. In case of the `false` value, the PXF generates files on disk before sending them to the S3 storage. In case of the `true` value, the PXF generates files in RAM (the PXF writes to disc only if there is not enough RAM).
     *
     * The fast upload is enabled by default.
     */
    fastUpload?: boolean;
    /** S3 storage address. The default value is `storage.yandexcloud.net` used for Yandex Object Storage. */
    endpoint: string;
}

export interface PXFDatasourceJDBC {
    /**
     * JDBC driver class in Java. The possible values are the following:
     *
     * * `com.simba.athena.jdbc.Driver`
     * * `com.clickhouse.jdbc.ClickHouseDriver`
     * * `com.ibm.as400.access.AS400JDBCDriver`
     * * `com.microsoft.sqlserver.jdbc.SQLServerDriver`
     * * `com.mysql.cj.jdbc.Driver`
     * * `org.postgresql.Driver`
     * * `oracle.jdbc.driver.OracleDriver`
     * * `net.snowflake.client.jdbc.SnowflakeDriver`
     * * `io.trino.jdbc.TrinoDriver`
     */
    driver: string;
    /**
     * URL that the JDBC driver uses to connect to the database. Examples:
     *
     * * `jdbc:mysql://mysqlhost:3306/testdb`: Local MySQL DB.
     * * `jdbc:postgresql://c-<cluster_id>.rw.mdb.yandexcloud.net:6432/db1`: Managed Service for PostgreSQL cluster. The address contains the special FQDN of the cluster's master.
     * * `jdbc:oracle:thin:@host.example:1521:orcl`: Oracle DB.
     */
    url: string;
    /** Username of the DB owner. */
    user: string;
    /** Password of the DB owner. */
    password: string;
    /**
     * Number of rows to read in an external table, in a batch.
     *
     * The default value is `100`.
     */
    statementBatchSize?: number;
    /**
     * Number of rows to fetch (buffer) when reading from an external table.
     *
     * The default value is `1000`.
     */
    statementFetchSize?: number;
    /**
     * Amount of time (in seconds) the JDBC driver waits for a statement to run. This timeout applies to statements created for both read and write operations.
     *
     * The default value is `60`.
     */
    statementQueryTimeout?: number;
    /** Determines whether JDBC connection pooling is used in a server configuration. By default, it is used. */
    poolEnabled?: boolean;
    /**
     * Maximum number of connections to the DB backend.
     *
     * The default value is `5`.
     */
    poolMaximumSize?: number;
    /**
     * Maximum time, in milliseconds, to wait for a connection from the pool.
     *
     * The default value is `30000`.
     */
    poolConnectionTimeout?: number;
    /**
     * Maximum amount of time, in milliseconds, after which an inactive connection is considered idle.
     *
     * The default value is `30000`.
     */
    poolIdleTimeout?: number;
    /**
     * Minimum number of idle connections maintained in the connection pool.
     *
     * The default value is `0`.
     */
    poolMinimumIdle?: number;
}

export interface PXFDatasourceCore {
    /** URI whose scheme and authority determine the file system implementation. */
    defaultFs: string;
    /** Rules for mapping Kerberos principals to operating system user accounts. */
    securityAuthToLocal: string;
}

export interface PXFDatasourceKerberos {
    /** Determines whether the Kerberos authentication server is used. By default, it is not used. */
    enable?: boolean;
    /** Host of the primary KDC server (Key Distribution Center). */
    primary: string;
    /** Kerberos realm for a Greenplum® DB. */
    realm: string;
    /** KDC server hosts. */
    kdcServers: string[];
    /** Administration server host. Usually, this is the primary Kerberos server. */
    adminServer: string;
    /** Domain that is used for the host name extension. Applicable when Kerberos 4 service members become Kerberos 5 service members (for example, when rcmd.hostname is replaced with host/hostname.domain). */
    defaultDomain: string;
    /** Base64 encoded contents of the keytab file. */
    keytabBase64: string;
}

export interface PXFDatasourceHDFSDfsNamenode {
    rpcAddress: string;
    serviceRpcAddress: string;
    httpAddress: string;
    httpsAddress: string;
}

export interface PXFDatasourceHDFSDfs {
    /**
     * Determines whether automatic failover is enabled for the high availability of the file system.
     *
     * The automatic failover is enabled by default.
     */
    haAutomaticFailoverEnabled?: boolean;
    /**
     * If `true`, access tokens are used as capabilities for accessing datanodes. If `false`, no access tokens are checked on accessing datanodes.
     *
     * The check of access tokens is enabled by default.
     */
    blockAccessTokenEnabled?: boolean;
    /** Determines whether the datanode hostname is used when connecting to datanodes. */
    useDatanodeHostname?: boolean;
    /**
     * List of HDFS service logical names.
     *
     * Specify them separated by commas. The names can be arbitrary.
     */
    namenodes: { [key: string]: PXFDatasourceHDFSDfsNamenode };
    /** Corresponds well-known HDFS client setting "dfs.nameservices" for this datasource */
    nameservices: string;
}

export interface PXFDatasourceHDFSDfs_NamenodesEntry {
    key: string;
    value?: PXFDatasourceHDFSDfsNamenode;
}

export interface PXFDatasourceHDFSYarnHaRm {
    resourcemanagerAddress: string;
    resourcemanagerSchedulerAddress: string;
    resourcemanagerResourceTrackerAddress: string;
    resourcemanagerAdminAddress: string;
    resourcemanagerWebappAddress: string;
    resourcemanagerWebappHttpsAddress: string;
}

export interface PXFDatasourceHDFSYarn {
    /**
     * Determines whether high availability is enabled for YARN's ResourceManager services.
     *
     * The high availability is enabled by default.
     */
    resourcemanagerHaEnabled?: boolean;
    /**
     * Determines whether another ResourceManager should automatically become active when the active ResourceManager has failed and does not respond.
     *
     * The switch of ResourceManagers is enabled by default if the high availability is enabled.
     */
    resourcemanagerHaAutoFailoverEnabled?: boolean;
    /** Determines whether the embedded ActiveStandbyElector method should be used for the election of the active ResourceManager. If the current active ResourceManager has failed and does not respond, the ActiveStandbyElector method makes another ResourceManager active which then takes over. */
    resourcemanagerHaAutoFailoverEmbedded?: boolean;
    /** Cluster ID. Specify it, so the ResourceManager service does not become active for a different cluster. */
    resourcemanagerClusterId: string;
    /** Highly available ResourceManager service. */
    haRm: { [key: string]: PXFDatasourceHDFSYarnHaRm };
}

export interface PXFDatasourceHDFSYarn_HaRmEntry {
    key: string;
    value?: PXFDatasourceHDFSYarnHaRm;
}

export interface PXFDatasourceHDFS {
    /** Settings of the file system and security rules. */
    core?: PXFDatasourceCore;
    /** Settings of the Kerberos network authentication protocol. */
    kerberos?: PXFDatasourceKerberos;
    /**
     * Enables authentication on behalf of the Greenplum® user when connecting to the remote file storage or DBMS.
     *
     * The authentication is disabled by default.
     */
    userImpersonation?: boolean;
    /** Login username for the remote file storage or DBMS if authentication on behalf of the Greenplum® user is enabled. */
    username: string;
    /**
     * Maximum number of times that PXF retries a SASL connection request after a refused connection returns a `GSS initiate failed` error.
     *
     * The default value is `5`.
     */
    saslConnectionRetries?: number;
    /**
     * ZooKeeper server hosts.
     *
     * Specify values in the `<address>:<port>` format.
     */
    zkHosts: string[];
    /** Settings of the distributed file system. */
    dfs?: PXFDatasourceHDFSDfs;
    /** Settings of the ResourceManager service that is responsible for tracking resources in a cluster and scheduling applications (e.g., MapReduce jobs). */
    yarn?: PXFDatasourceHDFSYarn;
}

export interface PXFDatasourceHive {
    /** Settings of the file system and security rules. */
    core?: PXFDatasourceCore;
    /** Settings of the Kerberos network authentication protocol. */
    kerberos?: PXFDatasourceKerberos;
    /**
     * Enables authentication on behalf of the Greenplum® user when connecting to the remote file storage or DBMS.
     *
     * The authentication is disabled by default.
     */
    userImpersonation?: boolean;
    /** Login username for the remote file storage or DBMS if authentication on behalf of the Greenplum® user is enabled. */
    username: string;
    /**
     * Maximum number of times that PXF retries a SASL connection request after a refused connection returns a `GSS initiate failed` error.
     *
     * The default value is `5`.
     */
    saslConnectionRetries?: number;
    /**
     * ZooKeeper server hosts.
     *
     * Specify values in the `<address>:<port>` format.
     */
    zkHosts: string[];
    /**
     * Specifies if predicate pushdown is enabled for queries on external tables.
     *
     * The predicate pushdown is enabled by default.
     */
    ppd?: boolean;
    /** List of URIs separated by commas. To request metadata, the remote DBMS connects to Metastore by one of these URIs. */
    metastoreUris: string[];
    /** Service principal for the Metastore Thrift server. */
    metastoreKerberosPrincipal: string;
    /** Kerberos server principal. */
    authKerberosPrincipal: string;
}

export interface PXFDatasource {
    /** Data source name. */
    name: string;
    /** Settings of an external S3 data source. */
    s3?: PXFDatasourceS3 | undefined;
    /** Settings of an external JDBC data source. */
    jdbc?: PXFDatasourceJDBC | undefined;
    /** Settings of an external HDFS data source. */
    hdfs?: PXFDatasourceHDFS | undefined;
    /** Settings of an external Hive data source. */
    hive?: PXFDatasourceHive | undefined;
}

const basePXFConfig: object = {};

export const PXFConfig = {
    encode(message: PXFConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.connectionTimeout !== undefined) {
            Int64Value.encode(
                { value: message.connectionTimeout! },
                writer.uint32(10).fork(),
            ).ldelim();
        }
        if (message.uploadTimeout !== undefined) {
            Int64Value.encode({ value: message.uploadTimeout! }, writer.uint32(18).fork()).ldelim();
        }
        if (message.maxThreads !== undefined) {
            Int64Value.encode({ value: message.maxThreads! }, writer.uint32(26).fork()).ldelim();
        }
        if (message.poolAllowCoreThreadTimeout !== undefined) {
            BoolValue.encode(
                { value: message.poolAllowCoreThreadTimeout! },
                writer.uint32(34).fork(),
            ).ldelim();
        }
        if (message.poolCoreSize !== undefined) {
            Int64Value.encode({ value: message.poolCoreSize! }, writer.uint32(42).fork()).ldelim();
        }
        if (message.poolQueueCapacity !== undefined) {
            Int64Value.encode(
                { value: message.poolQueueCapacity! },
                writer.uint32(50).fork(),
            ).ldelim();
        }
        if (message.poolMaxSize !== undefined) {
            Int64Value.encode({ value: message.poolMaxSize! }, writer.uint32(58).fork()).ldelim();
        }
        if (message.xmx !== undefined) {
            Int64Value.encode({ value: message.xmx! }, writer.uint32(66).fork()).ldelim();
        }
        if (message.xms !== undefined) {
            Int64Value.encode({ value: message.xms! }, writer.uint32(74).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PXFConfig {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePXFConfig } as PXFConfig;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connectionTimeout = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 2:
                    message.uploadTimeout = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 3:
                    message.maxThreads = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 4:
                    message.poolAllowCoreThreadTimeout = BoolValue.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 5:
                    message.poolCoreSize = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 6:
                    message.poolQueueCapacity = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 7:
                    message.poolMaxSize = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 8:
                    message.xmx = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 9:
                    message.xms = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PXFConfig {
        const message = { ...basePXFConfig } as PXFConfig;
        message.connectionTimeout =
            object.connectionTimeout !== undefined && object.connectionTimeout !== null
                ? Number(object.connectionTimeout)
                : undefined;
        message.uploadTimeout =
            object.uploadTimeout !== undefined && object.uploadTimeout !== null
                ? Number(object.uploadTimeout)
                : undefined;
        message.maxThreads =
            object.maxThreads !== undefined && object.maxThreads !== null
                ? Number(object.maxThreads)
                : undefined;
        message.poolAllowCoreThreadTimeout =
            object.poolAllowCoreThreadTimeout !== undefined &&
            object.poolAllowCoreThreadTimeout !== null
                ? Boolean(object.poolAllowCoreThreadTimeout)
                : undefined;
        message.poolCoreSize =
            object.poolCoreSize !== undefined && object.poolCoreSize !== null
                ? Number(object.poolCoreSize)
                : undefined;
        message.poolQueueCapacity =
            object.poolQueueCapacity !== undefined && object.poolQueueCapacity !== null
                ? Number(object.poolQueueCapacity)
                : undefined;
        message.poolMaxSize =
            object.poolMaxSize !== undefined && object.poolMaxSize !== null
                ? Number(object.poolMaxSize)
                : undefined;
        message.xmx =
            object.xmx !== undefined && object.xmx !== null ? Number(object.xmx) : undefined;
        message.xms =
            object.xms !== undefined && object.xms !== null ? Number(object.xms) : undefined;
        return message;
    },

    toJSON(message: PXFConfig): unknown {
        const obj: any = {};
        message.connectionTimeout !== undefined &&
            (obj.connectionTimeout = message.connectionTimeout);
        message.uploadTimeout !== undefined && (obj.uploadTimeout = message.uploadTimeout);
        message.maxThreads !== undefined && (obj.maxThreads = message.maxThreads);
        message.poolAllowCoreThreadTimeout !== undefined &&
            (obj.poolAllowCoreThreadTimeout = message.poolAllowCoreThreadTimeout);
        message.poolCoreSize !== undefined && (obj.poolCoreSize = message.poolCoreSize);
        message.poolQueueCapacity !== undefined &&
            (obj.poolQueueCapacity = message.poolQueueCapacity);
        message.poolMaxSize !== undefined && (obj.poolMaxSize = message.poolMaxSize);
        message.xmx !== undefined && (obj.xmx = message.xmx);
        message.xms !== undefined && (obj.xms = message.xms);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PXFConfig>, I>>(object: I): PXFConfig {
        const message = { ...basePXFConfig } as PXFConfig;
        message.connectionTimeout = object.connectionTimeout ?? undefined;
        message.uploadTimeout = object.uploadTimeout ?? undefined;
        message.maxThreads = object.maxThreads ?? undefined;
        message.poolAllowCoreThreadTimeout = object.poolAllowCoreThreadTimeout ?? undefined;
        message.poolCoreSize = object.poolCoreSize ?? undefined;
        message.poolQueueCapacity = object.poolQueueCapacity ?? undefined;
        message.poolMaxSize = object.poolMaxSize ?? undefined;
        message.xmx = object.xmx ?? undefined;
        message.xms = object.xms ?? undefined;
        return message;
    },
};

const basePXFConfigSet: object = {};

export const PXFConfigSet = {
    encode(message: PXFConfigSet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.effectiveConfig !== undefined) {
            PXFConfig.encode(message.effectiveConfig, writer.uint32(10).fork()).ldelim();
        }
        if (message.userConfig !== undefined) {
            PXFConfig.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
        }
        if (message.defaultConfig !== undefined) {
            PXFConfig.encode(message.defaultConfig, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PXFConfigSet {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePXFConfigSet } as PXFConfigSet;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.effectiveConfig = PXFConfig.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.userConfig = PXFConfig.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.defaultConfig = PXFConfig.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PXFConfigSet {
        const message = { ...basePXFConfigSet } as PXFConfigSet;
        message.effectiveConfig =
            object.effectiveConfig !== undefined && object.effectiveConfig !== null
                ? PXFConfig.fromJSON(object.effectiveConfig)
                : undefined;
        message.userConfig =
            object.userConfig !== undefined && object.userConfig !== null
                ? PXFConfig.fromJSON(object.userConfig)
                : undefined;
        message.defaultConfig =
            object.defaultConfig !== undefined && object.defaultConfig !== null
                ? PXFConfig.fromJSON(object.defaultConfig)
                : undefined;
        return message;
    },

    toJSON(message: PXFConfigSet): unknown {
        const obj: any = {};
        message.effectiveConfig !== undefined &&
            (obj.effectiveConfig = message.effectiveConfig
                ? PXFConfig.toJSON(message.effectiveConfig)
                : undefined);
        message.userConfig !== undefined &&
            (obj.userConfig = message.userConfig
                ? PXFConfig.toJSON(message.userConfig)
                : undefined);
        message.defaultConfig !== undefined &&
            (obj.defaultConfig = message.defaultConfig
                ? PXFConfig.toJSON(message.defaultConfig)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PXFConfigSet>, I>>(object: I): PXFConfigSet {
        const message = { ...basePXFConfigSet } as PXFConfigSet;
        message.effectiveConfig =
            object.effectiveConfig !== undefined && object.effectiveConfig !== null
                ? PXFConfig.fromPartial(object.effectiveConfig)
                : undefined;
        message.userConfig =
            object.userConfig !== undefined && object.userConfig !== null
                ? PXFConfig.fromPartial(object.userConfig)
                : undefined;
        message.defaultConfig =
            object.defaultConfig !== undefined && object.defaultConfig !== null
                ? PXFConfig.fromPartial(object.defaultConfig)
                : undefined;
        return message;
    },
};

const basePXFDatasourceS3: object = { accessKey: '', secretKey: '', endpoint: '' };

export const PXFDatasourceS3 = {
    encode(message: PXFDatasourceS3, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.accessKey !== '') {
            writer.uint32(10).string(message.accessKey);
        }
        if (message.secretKey !== '') {
            writer.uint32(18).string(message.secretKey);
        }
        if (message.fastUpload !== undefined) {
            BoolValue.encode({ value: message.fastUpload! }, writer.uint32(26).fork()).ldelim();
        }
        if (message.endpoint !== '') {
            writer.uint32(34).string(message.endpoint);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PXFDatasourceS3 {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePXFDatasourceS3 } as PXFDatasourceS3;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accessKey = reader.string();
                    break;
                case 2:
                    message.secretKey = reader.string();
                    break;
                case 3:
                    message.fastUpload = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 4:
                    message.endpoint = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PXFDatasourceS3 {
        const message = { ...basePXFDatasourceS3 } as PXFDatasourceS3;
        message.accessKey =
            object.accessKey !== undefined && object.accessKey !== null
                ? String(object.accessKey)
                : '';
        message.secretKey =
            object.secretKey !== undefined && object.secretKey !== null
                ? String(object.secretKey)
                : '';
        message.fastUpload =
            object.fastUpload !== undefined && object.fastUpload !== null
                ? Boolean(object.fastUpload)
                : undefined;
        message.endpoint =
            object.endpoint !== undefined && object.endpoint !== null
                ? String(object.endpoint)
                : '';
        return message;
    },

    toJSON(message: PXFDatasourceS3): unknown {
        const obj: any = {};
        message.accessKey !== undefined && (obj.accessKey = message.accessKey);
        message.secretKey !== undefined && (obj.secretKey = message.secretKey);
        message.fastUpload !== undefined && (obj.fastUpload = message.fastUpload);
        message.endpoint !== undefined && (obj.endpoint = message.endpoint);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PXFDatasourceS3>, I>>(object: I): PXFDatasourceS3 {
        const message = { ...basePXFDatasourceS3 } as PXFDatasourceS3;
        message.accessKey = object.accessKey ?? '';
        message.secretKey = object.secretKey ?? '';
        message.fastUpload = object.fastUpload ?? undefined;
        message.endpoint = object.endpoint ?? '';
        return message;
    },
};

const basePXFDatasourceJDBC: object = { driver: '', url: '', user: '', password: '' };

export const PXFDatasourceJDBC = {
    encode(message: PXFDatasourceJDBC, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.driver !== '') {
            writer.uint32(10).string(message.driver);
        }
        if (message.url !== '') {
            writer.uint32(18).string(message.url);
        }
        if (message.user !== '') {
            writer.uint32(26).string(message.user);
        }
        if (message.password !== '') {
            writer.uint32(34).string(message.password);
        }
        if (message.statementBatchSize !== undefined) {
            Int64Value.encode(
                { value: message.statementBatchSize! },
                writer.uint32(42).fork(),
            ).ldelim();
        }
        if (message.statementFetchSize !== undefined) {
            Int64Value.encode(
                { value: message.statementFetchSize! },
                writer.uint32(50).fork(),
            ).ldelim();
        }
        if (message.statementQueryTimeout !== undefined) {
            Int64Value.encode(
                { value: message.statementQueryTimeout! },
                writer.uint32(58).fork(),
            ).ldelim();
        }
        if (message.poolEnabled !== undefined) {
            BoolValue.encode({ value: message.poolEnabled! }, writer.uint32(66).fork()).ldelim();
        }
        if (message.poolMaximumSize !== undefined) {
            Int64Value.encode(
                { value: message.poolMaximumSize! },
                writer.uint32(74).fork(),
            ).ldelim();
        }
        if (message.poolConnectionTimeout !== undefined) {
            Int64Value.encode(
                { value: message.poolConnectionTimeout! },
                writer.uint32(82).fork(),
            ).ldelim();
        }
        if (message.poolIdleTimeout !== undefined) {
            Int64Value.encode(
                { value: message.poolIdleTimeout! },
                writer.uint32(90).fork(),
            ).ldelim();
        }
        if (message.poolMinimumIdle !== undefined) {
            Int64Value.encode(
                { value: message.poolMinimumIdle! },
                writer.uint32(98).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PXFDatasourceJDBC {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePXFDatasourceJDBC } as PXFDatasourceJDBC;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.driver = reader.string();
                    break;
                case 2:
                    message.url = reader.string();
                    break;
                case 3:
                    message.user = reader.string();
                    break;
                case 4:
                    message.password = reader.string();
                    break;
                case 5:
                    message.statementBatchSize = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 6:
                    message.statementFetchSize = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 7:
                    message.statementQueryTimeout = Int64Value.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 8:
                    message.poolEnabled = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 9:
                    message.poolMaximumSize = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 10:
                    message.poolConnectionTimeout = Int64Value.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 11:
                    message.poolIdleTimeout = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 12:
                    message.poolMinimumIdle = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PXFDatasourceJDBC {
        const message = { ...basePXFDatasourceJDBC } as PXFDatasourceJDBC;
        message.driver =
            object.driver !== undefined && object.driver !== null ? String(object.driver) : '';
        message.url = object.url !== undefined && object.url !== null ? String(object.url) : '';
        message.user = object.user !== undefined && object.user !== null ? String(object.user) : '';
        message.password =
            object.password !== undefined && object.password !== null
                ? String(object.password)
                : '';
        message.statementBatchSize =
            object.statementBatchSize !== undefined && object.statementBatchSize !== null
                ? Number(object.statementBatchSize)
                : undefined;
        message.statementFetchSize =
            object.statementFetchSize !== undefined && object.statementFetchSize !== null
                ? Number(object.statementFetchSize)
                : undefined;
        message.statementQueryTimeout =
            object.statementQueryTimeout !== undefined && object.statementQueryTimeout !== null
                ? Number(object.statementQueryTimeout)
                : undefined;
        message.poolEnabled =
            object.poolEnabled !== undefined && object.poolEnabled !== null
                ? Boolean(object.poolEnabled)
                : undefined;
        message.poolMaximumSize =
            object.poolMaximumSize !== undefined && object.poolMaximumSize !== null
                ? Number(object.poolMaximumSize)
                : undefined;
        message.poolConnectionTimeout =
            object.poolConnectionTimeout !== undefined && object.poolConnectionTimeout !== null
                ? Number(object.poolConnectionTimeout)
                : undefined;
        message.poolIdleTimeout =
            object.poolIdleTimeout !== undefined && object.poolIdleTimeout !== null
                ? Number(object.poolIdleTimeout)
                : undefined;
        message.poolMinimumIdle =
            object.poolMinimumIdle !== undefined && object.poolMinimumIdle !== null
                ? Number(object.poolMinimumIdle)
                : undefined;
        return message;
    },

    toJSON(message: PXFDatasourceJDBC): unknown {
        const obj: any = {};
        message.driver !== undefined && (obj.driver = message.driver);
        message.url !== undefined && (obj.url = message.url);
        message.user !== undefined && (obj.user = message.user);
        message.password !== undefined && (obj.password = message.password);
        message.statementBatchSize !== undefined &&
            (obj.statementBatchSize = message.statementBatchSize);
        message.statementFetchSize !== undefined &&
            (obj.statementFetchSize = message.statementFetchSize);
        message.statementQueryTimeout !== undefined &&
            (obj.statementQueryTimeout = message.statementQueryTimeout);
        message.poolEnabled !== undefined && (obj.poolEnabled = message.poolEnabled);
        message.poolMaximumSize !== undefined && (obj.poolMaximumSize = message.poolMaximumSize);
        message.poolConnectionTimeout !== undefined &&
            (obj.poolConnectionTimeout = message.poolConnectionTimeout);
        message.poolIdleTimeout !== undefined && (obj.poolIdleTimeout = message.poolIdleTimeout);
        message.poolMinimumIdle !== undefined && (obj.poolMinimumIdle = message.poolMinimumIdle);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PXFDatasourceJDBC>, I>>(object: I): PXFDatasourceJDBC {
        const message = { ...basePXFDatasourceJDBC } as PXFDatasourceJDBC;
        message.driver = object.driver ?? '';
        message.url = object.url ?? '';
        message.user = object.user ?? '';
        message.password = object.password ?? '';
        message.statementBatchSize = object.statementBatchSize ?? undefined;
        message.statementFetchSize = object.statementFetchSize ?? undefined;
        message.statementQueryTimeout = object.statementQueryTimeout ?? undefined;
        message.poolEnabled = object.poolEnabled ?? undefined;
        message.poolMaximumSize = object.poolMaximumSize ?? undefined;
        message.poolConnectionTimeout = object.poolConnectionTimeout ?? undefined;
        message.poolIdleTimeout = object.poolIdleTimeout ?? undefined;
        message.poolMinimumIdle = object.poolMinimumIdle ?? undefined;
        return message;
    },
};

const basePXFDatasourceCore: object = { defaultFs: '', securityAuthToLocal: '' };

export const PXFDatasourceCore = {
    encode(message: PXFDatasourceCore, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.defaultFs !== '') {
            writer.uint32(10).string(message.defaultFs);
        }
        if (message.securityAuthToLocal !== '') {
            writer.uint32(18).string(message.securityAuthToLocal);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PXFDatasourceCore {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePXFDatasourceCore } as PXFDatasourceCore;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.defaultFs = reader.string();
                    break;
                case 2:
                    message.securityAuthToLocal = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PXFDatasourceCore {
        const message = { ...basePXFDatasourceCore } as PXFDatasourceCore;
        message.defaultFs =
            object.defaultFs !== undefined && object.defaultFs !== null
                ? String(object.defaultFs)
                : '';
        message.securityAuthToLocal =
            object.securityAuthToLocal !== undefined && object.securityAuthToLocal !== null
                ? String(object.securityAuthToLocal)
                : '';
        return message;
    },

    toJSON(message: PXFDatasourceCore): unknown {
        const obj: any = {};
        message.defaultFs !== undefined && (obj.defaultFs = message.defaultFs);
        message.securityAuthToLocal !== undefined &&
            (obj.securityAuthToLocal = message.securityAuthToLocal);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PXFDatasourceCore>, I>>(object: I): PXFDatasourceCore {
        const message = { ...basePXFDatasourceCore } as PXFDatasourceCore;
        message.defaultFs = object.defaultFs ?? '';
        message.securityAuthToLocal = object.securityAuthToLocal ?? '';
        return message;
    },
};

const basePXFDatasourceKerberos: object = {
    primary: '',
    realm: '',
    kdcServers: '',
    adminServer: '',
    defaultDomain: '',
    keytabBase64: '',
};

export const PXFDatasourceKerberos = {
    encode(message: PXFDatasourceKerberos, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.enable !== undefined) {
            BoolValue.encode({ value: message.enable! }, writer.uint32(10).fork()).ldelim();
        }
        if (message.primary !== '') {
            writer.uint32(18).string(message.primary);
        }
        if (message.realm !== '') {
            writer.uint32(26).string(message.realm);
        }
        for (const v of message.kdcServers) {
            writer.uint32(34).string(v!);
        }
        if (message.adminServer !== '') {
            writer.uint32(42).string(message.adminServer);
        }
        if (message.defaultDomain !== '') {
            writer.uint32(50).string(message.defaultDomain);
        }
        if (message.keytabBase64 !== '') {
            writer.uint32(58).string(message.keytabBase64);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PXFDatasourceKerberos {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePXFDatasourceKerberos } as PXFDatasourceKerberos;
        message.kdcServers = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.enable = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 2:
                    message.primary = reader.string();
                    break;
                case 3:
                    message.realm = reader.string();
                    break;
                case 4:
                    message.kdcServers.push(reader.string());
                    break;
                case 5:
                    message.adminServer = reader.string();
                    break;
                case 6:
                    message.defaultDomain = reader.string();
                    break;
                case 7:
                    message.keytabBase64 = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PXFDatasourceKerberos {
        const message = { ...basePXFDatasourceKerberos } as PXFDatasourceKerberos;
        message.enable =
            object.enable !== undefined && object.enable !== null
                ? Boolean(object.enable)
                : undefined;
        message.primary =
            object.primary !== undefined && object.primary !== null ? String(object.primary) : '';
        message.realm =
            object.realm !== undefined && object.realm !== null ? String(object.realm) : '';
        message.kdcServers = (object.kdcServers ?? []).map((e: any) => String(e));
        message.adminServer =
            object.adminServer !== undefined && object.adminServer !== null
                ? String(object.adminServer)
                : '';
        message.defaultDomain =
            object.defaultDomain !== undefined && object.defaultDomain !== null
                ? String(object.defaultDomain)
                : '';
        message.keytabBase64 =
            object.keytabBase64 !== undefined && object.keytabBase64 !== null
                ? String(object.keytabBase64)
                : '';
        return message;
    },

    toJSON(message: PXFDatasourceKerberos): unknown {
        const obj: any = {};
        message.enable !== undefined && (obj.enable = message.enable);
        message.primary !== undefined && (obj.primary = message.primary);
        message.realm !== undefined && (obj.realm = message.realm);
        if (message.kdcServers) {
            obj.kdcServers = message.kdcServers.map((e) => e);
        } else {
            obj.kdcServers = [];
        }
        message.adminServer !== undefined && (obj.adminServer = message.adminServer);
        message.defaultDomain !== undefined && (obj.defaultDomain = message.defaultDomain);
        message.keytabBase64 !== undefined && (obj.keytabBase64 = message.keytabBase64);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PXFDatasourceKerberos>, I>>(
        object: I,
    ): PXFDatasourceKerberos {
        const message = { ...basePXFDatasourceKerberos } as PXFDatasourceKerberos;
        message.enable = object.enable ?? undefined;
        message.primary = object.primary ?? '';
        message.realm = object.realm ?? '';
        message.kdcServers = object.kdcServers?.map((e) => e) || [];
        message.adminServer = object.adminServer ?? '';
        message.defaultDomain = object.defaultDomain ?? '';
        message.keytabBase64 = object.keytabBase64 ?? '';
        return message;
    },
};

const basePXFDatasourceHDFSDfsNamenode: object = {
    rpcAddress: '',
    serviceRpcAddress: '',
    httpAddress: '',
    httpsAddress: '',
};

export const PXFDatasourceHDFSDfsNamenode = {
    encode(
        message: PXFDatasourceHDFSDfsNamenode,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.rpcAddress !== '') {
            writer.uint32(10).string(message.rpcAddress);
        }
        if (message.serviceRpcAddress !== '') {
            writer.uint32(18).string(message.serviceRpcAddress);
        }
        if (message.httpAddress !== '') {
            writer.uint32(26).string(message.httpAddress);
        }
        if (message.httpsAddress !== '') {
            writer.uint32(34).string(message.httpsAddress);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PXFDatasourceHDFSDfsNamenode {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePXFDatasourceHDFSDfsNamenode } as PXFDatasourceHDFSDfsNamenode;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rpcAddress = reader.string();
                    break;
                case 2:
                    message.serviceRpcAddress = reader.string();
                    break;
                case 3:
                    message.httpAddress = reader.string();
                    break;
                case 4:
                    message.httpsAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PXFDatasourceHDFSDfsNamenode {
        const message = { ...basePXFDatasourceHDFSDfsNamenode } as PXFDatasourceHDFSDfsNamenode;
        message.rpcAddress =
            object.rpcAddress !== undefined && object.rpcAddress !== null
                ? String(object.rpcAddress)
                : '';
        message.serviceRpcAddress =
            object.serviceRpcAddress !== undefined && object.serviceRpcAddress !== null
                ? String(object.serviceRpcAddress)
                : '';
        message.httpAddress =
            object.httpAddress !== undefined && object.httpAddress !== null
                ? String(object.httpAddress)
                : '';
        message.httpsAddress =
            object.httpsAddress !== undefined && object.httpsAddress !== null
                ? String(object.httpsAddress)
                : '';
        return message;
    },

    toJSON(message: PXFDatasourceHDFSDfsNamenode): unknown {
        const obj: any = {};
        message.rpcAddress !== undefined && (obj.rpcAddress = message.rpcAddress);
        message.serviceRpcAddress !== undefined &&
            (obj.serviceRpcAddress = message.serviceRpcAddress);
        message.httpAddress !== undefined && (obj.httpAddress = message.httpAddress);
        message.httpsAddress !== undefined && (obj.httpsAddress = message.httpsAddress);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PXFDatasourceHDFSDfsNamenode>, I>>(
        object: I,
    ): PXFDatasourceHDFSDfsNamenode {
        const message = { ...basePXFDatasourceHDFSDfsNamenode } as PXFDatasourceHDFSDfsNamenode;
        message.rpcAddress = object.rpcAddress ?? '';
        message.serviceRpcAddress = object.serviceRpcAddress ?? '';
        message.httpAddress = object.httpAddress ?? '';
        message.httpsAddress = object.httpsAddress ?? '';
        return message;
    },
};

const basePXFDatasourceHDFSDfs: object = { nameservices: '' };

export const PXFDatasourceHDFSDfs = {
    encode(message: PXFDatasourceHDFSDfs, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.haAutomaticFailoverEnabled !== undefined) {
            BoolValue.encode(
                { value: message.haAutomaticFailoverEnabled! },
                writer.uint32(10).fork(),
            ).ldelim();
        }
        if (message.blockAccessTokenEnabled !== undefined) {
            BoolValue.encode(
                { value: message.blockAccessTokenEnabled! },
                writer.uint32(18).fork(),
            ).ldelim();
        }
        if (message.useDatanodeHostname !== undefined) {
            BoolValue.encode(
                { value: message.useDatanodeHostname! },
                writer.uint32(26).fork(),
            ).ldelim();
        }
        Object.entries(message.namenodes).forEach(([key, value]) => {
            PXFDatasourceHDFSDfs_NamenodesEntry.encode(
                { key: key as any, value },
                writer.uint32(34).fork(),
            ).ldelim();
        });
        if (message.nameservices !== '') {
            writer.uint32(42).string(message.nameservices);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PXFDatasourceHDFSDfs {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePXFDatasourceHDFSDfs } as PXFDatasourceHDFSDfs;
        message.namenodes = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.haAutomaticFailoverEnabled = BoolValue.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 2:
                    message.blockAccessTokenEnabled = BoolValue.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 3:
                    message.useDatanodeHostname = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 4:
                    const entry4 = PXFDatasourceHDFSDfs_NamenodesEntry.decode(
                        reader,
                        reader.uint32(),
                    );
                    if (entry4.value !== undefined) {
                        message.namenodes[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.nameservices = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PXFDatasourceHDFSDfs {
        const message = { ...basePXFDatasourceHDFSDfs } as PXFDatasourceHDFSDfs;
        message.haAutomaticFailoverEnabled =
            object.haAutomaticFailoverEnabled !== undefined &&
            object.haAutomaticFailoverEnabled !== null
                ? Boolean(object.haAutomaticFailoverEnabled)
                : undefined;
        message.blockAccessTokenEnabled =
            object.blockAccessTokenEnabled !== undefined && object.blockAccessTokenEnabled !== null
                ? Boolean(object.blockAccessTokenEnabled)
                : undefined;
        message.useDatanodeHostname =
            object.useDatanodeHostname !== undefined && object.useDatanodeHostname !== null
                ? Boolean(object.useDatanodeHostname)
                : undefined;
        message.namenodes = Object.entries(object.namenodes ?? {}).reduce<{
            [key: string]: PXFDatasourceHDFSDfsNamenode;
        }>((acc, [key, value]) => {
            acc[key] = PXFDatasourceHDFSDfsNamenode.fromJSON(value);
            return acc;
        }, {});
        message.nameservices =
            object.nameservices !== undefined && object.nameservices !== null
                ? String(object.nameservices)
                : '';
        return message;
    },

    toJSON(message: PXFDatasourceHDFSDfs): unknown {
        const obj: any = {};
        message.haAutomaticFailoverEnabled !== undefined &&
            (obj.haAutomaticFailoverEnabled = message.haAutomaticFailoverEnabled);
        message.blockAccessTokenEnabled !== undefined &&
            (obj.blockAccessTokenEnabled = message.blockAccessTokenEnabled);
        message.useDatanodeHostname !== undefined &&
            (obj.useDatanodeHostname = message.useDatanodeHostname);
        obj.namenodes = {};
        if (message.namenodes) {
            Object.entries(message.namenodes).forEach(([k, v]) => {
                obj.namenodes[k] = PXFDatasourceHDFSDfsNamenode.toJSON(v);
            });
        }
        message.nameservices !== undefined && (obj.nameservices = message.nameservices);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PXFDatasourceHDFSDfs>, I>>(
        object: I,
    ): PXFDatasourceHDFSDfs {
        const message = { ...basePXFDatasourceHDFSDfs } as PXFDatasourceHDFSDfs;
        message.haAutomaticFailoverEnabled = object.haAutomaticFailoverEnabled ?? undefined;
        message.blockAccessTokenEnabled = object.blockAccessTokenEnabled ?? undefined;
        message.useDatanodeHostname = object.useDatanodeHostname ?? undefined;
        message.namenodes = Object.entries(object.namenodes ?? {}).reduce<{
            [key: string]: PXFDatasourceHDFSDfsNamenode;
        }>((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = PXFDatasourceHDFSDfsNamenode.fromPartial(value);
            }
            return acc;
        }, {});
        message.nameservices = object.nameservices ?? '';
        return message;
    },
};

const basePXFDatasourceHDFSDfs_NamenodesEntry: object = { key: '' };

export const PXFDatasourceHDFSDfs_NamenodesEntry = {
    encode(
        message: PXFDatasourceHDFSDfs_NamenodesEntry,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            PXFDatasourceHDFSDfsNamenode.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PXFDatasourceHDFSDfs_NamenodesEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...basePXFDatasourceHDFSDfs_NamenodesEntry,
        } as PXFDatasourceHDFSDfs_NamenodesEntry;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = PXFDatasourceHDFSDfsNamenode.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PXFDatasourceHDFSDfs_NamenodesEntry {
        const message = {
            ...basePXFDatasourceHDFSDfs_NamenodesEntry,
        } as PXFDatasourceHDFSDfs_NamenodesEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null
                ? PXFDatasourceHDFSDfsNamenode.fromJSON(object.value)
                : undefined;
        return message;
    },

    toJSON(message: PXFDatasourceHDFSDfs_NamenodesEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined &&
            (obj.value = message.value
                ? PXFDatasourceHDFSDfsNamenode.toJSON(message.value)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PXFDatasourceHDFSDfs_NamenodesEntry>, I>>(
        object: I,
    ): PXFDatasourceHDFSDfs_NamenodesEntry {
        const message = {
            ...basePXFDatasourceHDFSDfs_NamenodesEntry,
        } as PXFDatasourceHDFSDfs_NamenodesEntry;
        message.key = object.key ?? '';
        message.value =
            object.value !== undefined && object.value !== null
                ? PXFDatasourceHDFSDfsNamenode.fromPartial(object.value)
                : undefined;
        return message;
    },
};

const basePXFDatasourceHDFSYarnHaRm: object = {
    resourcemanagerAddress: '',
    resourcemanagerSchedulerAddress: '',
    resourcemanagerResourceTrackerAddress: '',
    resourcemanagerAdminAddress: '',
    resourcemanagerWebappAddress: '',
    resourcemanagerWebappHttpsAddress: '',
};

export const PXFDatasourceHDFSYarnHaRm = {
    encode(
        message: PXFDatasourceHDFSYarnHaRm,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.resourcemanagerAddress !== '') {
            writer.uint32(10).string(message.resourcemanagerAddress);
        }
        if (message.resourcemanagerSchedulerAddress !== '') {
            writer.uint32(18).string(message.resourcemanagerSchedulerAddress);
        }
        if (message.resourcemanagerResourceTrackerAddress !== '') {
            writer.uint32(26).string(message.resourcemanagerResourceTrackerAddress);
        }
        if (message.resourcemanagerAdminAddress !== '') {
            writer.uint32(34).string(message.resourcemanagerAdminAddress);
        }
        if (message.resourcemanagerWebappAddress !== '') {
            writer.uint32(42).string(message.resourcemanagerWebappAddress);
        }
        if (message.resourcemanagerWebappHttpsAddress !== '') {
            writer.uint32(50).string(message.resourcemanagerWebappHttpsAddress);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PXFDatasourceHDFSYarnHaRm {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePXFDatasourceHDFSYarnHaRm } as PXFDatasourceHDFSYarnHaRm;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resourcemanagerAddress = reader.string();
                    break;
                case 2:
                    message.resourcemanagerSchedulerAddress = reader.string();
                    break;
                case 3:
                    message.resourcemanagerResourceTrackerAddress = reader.string();
                    break;
                case 4:
                    message.resourcemanagerAdminAddress = reader.string();
                    break;
                case 5:
                    message.resourcemanagerWebappAddress = reader.string();
                    break;
                case 6:
                    message.resourcemanagerWebappHttpsAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PXFDatasourceHDFSYarnHaRm {
        const message = { ...basePXFDatasourceHDFSYarnHaRm } as PXFDatasourceHDFSYarnHaRm;
        message.resourcemanagerAddress =
            object.resourcemanagerAddress !== undefined && object.resourcemanagerAddress !== null
                ? String(object.resourcemanagerAddress)
                : '';
        message.resourcemanagerSchedulerAddress =
            object.resourcemanagerSchedulerAddress !== undefined &&
            object.resourcemanagerSchedulerAddress !== null
                ? String(object.resourcemanagerSchedulerAddress)
                : '';
        message.resourcemanagerResourceTrackerAddress =
            object.resourcemanagerResourceTrackerAddress !== undefined &&
            object.resourcemanagerResourceTrackerAddress !== null
                ? String(object.resourcemanagerResourceTrackerAddress)
                : '';
        message.resourcemanagerAdminAddress =
            object.resourcemanagerAdminAddress !== undefined &&
            object.resourcemanagerAdminAddress !== null
                ? String(object.resourcemanagerAdminAddress)
                : '';
        message.resourcemanagerWebappAddress =
            object.resourcemanagerWebappAddress !== undefined &&
            object.resourcemanagerWebappAddress !== null
                ? String(object.resourcemanagerWebappAddress)
                : '';
        message.resourcemanagerWebappHttpsAddress =
            object.resourcemanagerWebappHttpsAddress !== undefined &&
            object.resourcemanagerWebappHttpsAddress !== null
                ? String(object.resourcemanagerWebappHttpsAddress)
                : '';
        return message;
    },

    toJSON(message: PXFDatasourceHDFSYarnHaRm): unknown {
        const obj: any = {};
        message.resourcemanagerAddress !== undefined &&
            (obj.resourcemanagerAddress = message.resourcemanagerAddress);
        message.resourcemanagerSchedulerAddress !== undefined &&
            (obj.resourcemanagerSchedulerAddress = message.resourcemanagerSchedulerAddress);
        message.resourcemanagerResourceTrackerAddress !== undefined &&
            (obj.resourcemanagerResourceTrackerAddress =
                message.resourcemanagerResourceTrackerAddress);
        message.resourcemanagerAdminAddress !== undefined &&
            (obj.resourcemanagerAdminAddress = message.resourcemanagerAdminAddress);
        message.resourcemanagerWebappAddress !== undefined &&
            (obj.resourcemanagerWebappAddress = message.resourcemanagerWebappAddress);
        message.resourcemanagerWebappHttpsAddress !== undefined &&
            (obj.resourcemanagerWebappHttpsAddress = message.resourcemanagerWebappHttpsAddress);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PXFDatasourceHDFSYarnHaRm>, I>>(
        object: I,
    ): PXFDatasourceHDFSYarnHaRm {
        const message = { ...basePXFDatasourceHDFSYarnHaRm } as PXFDatasourceHDFSYarnHaRm;
        message.resourcemanagerAddress = object.resourcemanagerAddress ?? '';
        message.resourcemanagerSchedulerAddress = object.resourcemanagerSchedulerAddress ?? '';
        message.resourcemanagerResourceTrackerAddress =
            object.resourcemanagerResourceTrackerAddress ?? '';
        message.resourcemanagerAdminAddress = object.resourcemanagerAdminAddress ?? '';
        message.resourcemanagerWebappAddress = object.resourcemanagerWebappAddress ?? '';
        message.resourcemanagerWebappHttpsAddress = object.resourcemanagerWebappHttpsAddress ?? '';
        return message;
    },
};

const basePXFDatasourceHDFSYarn: object = { resourcemanagerClusterId: '' };

export const PXFDatasourceHDFSYarn = {
    encode(message: PXFDatasourceHDFSYarn, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.resourcemanagerHaEnabled !== undefined) {
            BoolValue.encode(
                { value: message.resourcemanagerHaEnabled! },
                writer.uint32(10).fork(),
            ).ldelim();
        }
        if (message.resourcemanagerHaAutoFailoverEnabled !== undefined) {
            BoolValue.encode(
                { value: message.resourcemanagerHaAutoFailoverEnabled! },
                writer.uint32(18).fork(),
            ).ldelim();
        }
        if (message.resourcemanagerHaAutoFailoverEmbedded !== undefined) {
            BoolValue.encode(
                { value: message.resourcemanagerHaAutoFailoverEmbedded! },
                writer.uint32(26).fork(),
            ).ldelim();
        }
        if (message.resourcemanagerClusterId !== '') {
            writer.uint32(34).string(message.resourcemanagerClusterId);
        }
        Object.entries(message.haRm).forEach(([key, value]) => {
            PXFDatasourceHDFSYarn_HaRmEntry.encode(
                { key: key as any, value },
                writer.uint32(42).fork(),
            ).ldelim();
        });
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PXFDatasourceHDFSYarn {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePXFDatasourceHDFSYarn } as PXFDatasourceHDFSYarn;
        message.haRm = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resourcemanagerHaEnabled = BoolValue.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 2:
                    message.resourcemanagerHaAutoFailoverEnabled = BoolValue.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 3:
                    message.resourcemanagerHaAutoFailoverEmbedded = BoolValue.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 4:
                    message.resourcemanagerClusterId = reader.string();
                    break;
                case 5:
                    const entry5 = PXFDatasourceHDFSYarn_HaRmEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.haRm[entry5.key] = entry5.value;
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PXFDatasourceHDFSYarn {
        const message = { ...basePXFDatasourceHDFSYarn } as PXFDatasourceHDFSYarn;
        message.resourcemanagerHaEnabled =
            object.resourcemanagerHaEnabled !== undefined &&
            object.resourcemanagerHaEnabled !== null
                ? Boolean(object.resourcemanagerHaEnabled)
                : undefined;
        message.resourcemanagerHaAutoFailoverEnabled =
            object.resourcemanagerHaAutoFailoverEnabled !== undefined &&
            object.resourcemanagerHaAutoFailoverEnabled !== null
                ? Boolean(object.resourcemanagerHaAutoFailoverEnabled)
                : undefined;
        message.resourcemanagerHaAutoFailoverEmbedded =
            object.resourcemanagerHaAutoFailoverEmbedded !== undefined &&
            object.resourcemanagerHaAutoFailoverEmbedded !== null
                ? Boolean(object.resourcemanagerHaAutoFailoverEmbedded)
                : undefined;
        message.resourcemanagerClusterId =
            object.resourcemanagerClusterId !== undefined &&
            object.resourcemanagerClusterId !== null
                ? String(object.resourcemanagerClusterId)
                : '';
        message.haRm = Object.entries(object.haRm ?? {}).reduce<{
            [key: string]: PXFDatasourceHDFSYarnHaRm;
        }>((acc, [key, value]) => {
            acc[key] = PXFDatasourceHDFSYarnHaRm.fromJSON(value);
            return acc;
        }, {});
        return message;
    },

    toJSON(message: PXFDatasourceHDFSYarn): unknown {
        const obj: any = {};
        message.resourcemanagerHaEnabled !== undefined &&
            (obj.resourcemanagerHaEnabled = message.resourcemanagerHaEnabled);
        message.resourcemanagerHaAutoFailoverEnabled !== undefined &&
            (obj.resourcemanagerHaAutoFailoverEnabled =
                message.resourcemanagerHaAutoFailoverEnabled);
        message.resourcemanagerHaAutoFailoverEmbedded !== undefined &&
            (obj.resourcemanagerHaAutoFailoverEmbedded =
                message.resourcemanagerHaAutoFailoverEmbedded);
        message.resourcemanagerClusterId !== undefined &&
            (obj.resourcemanagerClusterId = message.resourcemanagerClusterId);
        obj.haRm = {};
        if (message.haRm) {
            Object.entries(message.haRm).forEach(([k, v]) => {
                obj.haRm[k] = PXFDatasourceHDFSYarnHaRm.toJSON(v);
            });
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PXFDatasourceHDFSYarn>, I>>(
        object: I,
    ): PXFDatasourceHDFSYarn {
        const message = { ...basePXFDatasourceHDFSYarn } as PXFDatasourceHDFSYarn;
        message.resourcemanagerHaEnabled = object.resourcemanagerHaEnabled ?? undefined;
        message.resourcemanagerHaAutoFailoverEnabled =
            object.resourcemanagerHaAutoFailoverEnabled ?? undefined;
        message.resourcemanagerHaAutoFailoverEmbedded =
            object.resourcemanagerHaAutoFailoverEmbedded ?? undefined;
        message.resourcemanagerClusterId = object.resourcemanagerClusterId ?? '';
        message.haRm = Object.entries(object.haRm ?? {}).reduce<{
            [key: string]: PXFDatasourceHDFSYarnHaRm;
        }>((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = PXFDatasourceHDFSYarnHaRm.fromPartial(value);
            }
            return acc;
        }, {});
        return message;
    },
};

const basePXFDatasourceHDFSYarn_HaRmEntry: object = { key: '' };

export const PXFDatasourceHDFSYarn_HaRmEntry = {
    encode(
        message: PXFDatasourceHDFSYarn_HaRmEntry,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            PXFDatasourceHDFSYarnHaRm.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PXFDatasourceHDFSYarn_HaRmEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...basePXFDatasourceHDFSYarn_HaRmEntry,
        } as PXFDatasourceHDFSYarn_HaRmEntry;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = PXFDatasourceHDFSYarnHaRm.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PXFDatasourceHDFSYarn_HaRmEntry {
        const message = {
            ...basePXFDatasourceHDFSYarn_HaRmEntry,
        } as PXFDatasourceHDFSYarn_HaRmEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null
                ? PXFDatasourceHDFSYarnHaRm.fromJSON(object.value)
                : undefined;
        return message;
    },

    toJSON(message: PXFDatasourceHDFSYarn_HaRmEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined &&
            (obj.value = message.value
                ? PXFDatasourceHDFSYarnHaRm.toJSON(message.value)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PXFDatasourceHDFSYarn_HaRmEntry>, I>>(
        object: I,
    ): PXFDatasourceHDFSYarn_HaRmEntry {
        const message = {
            ...basePXFDatasourceHDFSYarn_HaRmEntry,
        } as PXFDatasourceHDFSYarn_HaRmEntry;
        message.key = object.key ?? '';
        message.value =
            object.value !== undefined && object.value !== null
                ? PXFDatasourceHDFSYarnHaRm.fromPartial(object.value)
                : undefined;
        return message;
    },
};

const basePXFDatasourceHDFS: object = { username: '', zkHosts: '' };

export const PXFDatasourceHDFS = {
    encode(message: PXFDatasourceHDFS, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.core !== undefined) {
            PXFDatasourceCore.encode(message.core, writer.uint32(10).fork()).ldelim();
        }
        if (message.kerberos !== undefined) {
            PXFDatasourceKerberos.encode(message.kerberos, writer.uint32(18).fork()).ldelim();
        }
        if (message.userImpersonation !== undefined) {
            BoolValue.encode(
                { value: message.userImpersonation! },
                writer.uint32(26).fork(),
            ).ldelim();
        }
        if (message.username !== '') {
            writer.uint32(34).string(message.username);
        }
        if (message.saslConnectionRetries !== undefined) {
            Int64Value.encode(
                { value: message.saslConnectionRetries! },
                writer.uint32(42).fork(),
            ).ldelim();
        }
        for (const v of message.zkHosts) {
            writer.uint32(50).string(v!);
        }
        if (message.dfs !== undefined) {
            PXFDatasourceHDFSDfs.encode(message.dfs, writer.uint32(58).fork()).ldelim();
        }
        if (message.yarn !== undefined) {
            PXFDatasourceHDFSYarn.encode(message.yarn, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PXFDatasourceHDFS {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePXFDatasourceHDFS } as PXFDatasourceHDFS;
        message.zkHosts = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.core = PXFDatasourceCore.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.kerberos = PXFDatasourceKerberos.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.userImpersonation = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 4:
                    message.username = reader.string();
                    break;
                case 5:
                    message.saslConnectionRetries = Int64Value.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 6:
                    message.zkHosts.push(reader.string());
                    break;
                case 7:
                    message.dfs = PXFDatasourceHDFSDfs.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.yarn = PXFDatasourceHDFSYarn.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PXFDatasourceHDFS {
        const message = { ...basePXFDatasourceHDFS } as PXFDatasourceHDFS;
        message.core =
            object.core !== undefined && object.core !== null
                ? PXFDatasourceCore.fromJSON(object.core)
                : undefined;
        message.kerberos =
            object.kerberos !== undefined && object.kerberos !== null
                ? PXFDatasourceKerberos.fromJSON(object.kerberos)
                : undefined;
        message.userImpersonation =
            object.userImpersonation !== undefined && object.userImpersonation !== null
                ? Boolean(object.userImpersonation)
                : undefined;
        message.username =
            object.username !== undefined && object.username !== null
                ? String(object.username)
                : '';
        message.saslConnectionRetries =
            object.saslConnectionRetries !== undefined && object.saslConnectionRetries !== null
                ? Number(object.saslConnectionRetries)
                : undefined;
        message.zkHosts = (object.zkHosts ?? []).map((e: any) => String(e));
        message.dfs =
            object.dfs !== undefined && object.dfs !== null
                ? PXFDatasourceHDFSDfs.fromJSON(object.dfs)
                : undefined;
        message.yarn =
            object.yarn !== undefined && object.yarn !== null
                ? PXFDatasourceHDFSYarn.fromJSON(object.yarn)
                : undefined;
        return message;
    },

    toJSON(message: PXFDatasourceHDFS): unknown {
        const obj: any = {};
        message.core !== undefined &&
            (obj.core = message.core ? PXFDatasourceCore.toJSON(message.core) : undefined);
        message.kerberos !== undefined &&
            (obj.kerberos = message.kerberos
                ? PXFDatasourceKerberos.toJSON(message.kerberos)
                : undefined);
        message.userImpersonation !== undefined &&
            (obj.userImpersonation = message.userImpersonation);
        message.username !== undefined && (obj.username = message.username);
        message.saslConnectionRetries !== undefined &&
            (obj.saslConnectionRetries = message.saslConnectionRetries);
        if (message.zkHosts) {
            obj.zkHosts = message.zkHosts.map((e) => e);
        } else {
            obj.zkHosts = [];
        }
        message.dfs !== undefined &&
            (obj.dfs = message.dfs ? PXFDatasourceHDFSDfs.toJSON(message.dfs) : undefined);
        message.yarn !== undefined &&
            (obj.yarn = message.yarn ? PXFDatasourceHDFSYarn.toJSON(message.yarn) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PXFDatasourceHDFS>, I>>(object: I): PXFDatasourceHDFS {
        const message = { ...basePXFDatasourceHDFS } as PXFDatasourceHDFS;
        message.core =
            object.core !== undefined && object.core !== null
                ? PXFDatasourceCore.fromPartial(object.core)
                : undefined;
        message.kerberos =
            object.kerberos !== undefined && object.kerberos !== null
                ? PXFDatasourceKerberos.fromPartial(object.kerberos)
                : undefined;
        message.userImpersonation = object.userImpersonation ?? undefined;
        message.username = object.username ?? '';
        message.saslConnectionRetries = object.saslConnectionRetries ?? undefined;
        message.zkHosts = object.zkHosts?.map((e) => e) || [];
        message.dfs =
            object.dfs !== undefined && object.dfs !== null
                ? PXFDatasourceHDFSDfs.fromPartial(object.dfs)
                : undefined;
        message.yarn =
            object.yarn !== undefined && object.yarn !== null
                ? PXFDatasourceHDFSYarn.fromPartial(object.yarn)
                : undefined;
        return message;
    },
};

const basePXFDatasourceHive: object = {
    username: '',
    zkHosts: '',
    metastoreUris: '',
    metastoreKerberosPrincipal: '',
    authKerberosPrincipal: '',
};

export const PXFDatasourceHive = {
    encode(message: PXFDatasourceHive, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.core !== undefined) {
            PXFDatasourceCore.encode(message.core, writer.uint32(10).fork()).ldelim();
        }
        if (message.kerberos !== undefined) {
            PXFDatasourceKerberos.encode(message.kerberos, writer.uint32(18).fork()).ldelim();
        }
        if (message.userImpersonation !== undefined) {
            BoolValue.encode(
                { value: message.userImpersonation! },
                writer.uint32(26).fork(),
            ).ldelim();
        }
        if (message.username !== '') {
            writer.uint32(34).string(message.username);
        }
        if (message.saslConnectionRetries !== undefined) {
            Int64Value.encode(
                { value: message.saslConnectionRetries! },
                writer.uint32(42).fork(),
            ).ldelim();
        }
        for (const v of message.zkHosts) {
            writer.uint32(50).string(v!);
        }
        if (message.ppd !== undefined) {
            BoolValue.encode({ value: message.ppd! }, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.metastoreUris) {
            writer.uint32(66).string(v!);
        }
        if (message.metastoreKerberosPrincipal !== '') {
            writer.uint32(74).string(message.metastoreKerberosPrincipal);
        }
        if (message.authKerberosPrincipal !== '') {
            writer.uint32(82).string(message.authKerberosPrincipal);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PXFDatasourceHive {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePXFDatasourceHive } as PXFDatasourceHive;
        message.zkHosts = [];
        message.metastoreUris = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.core = PXFDatasourceCore.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.kerberos = PXFDatasourceKerberos.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.userImpersonation = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 4:
                    message.username = reader.string();
                    break;
                case 5:
                    message.saslConnectionRetries = Int64Value.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 6:
                    message.zkHosts.push(reader.string());
                    break;
                case 7:
                    message.ppd = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 8:
                    message.metastoreUris.push(reader.string());
                    break;
                case 9:
                    message.metastoreKerberosPrincipal = reader.string();
                    break;
                case 10:
                    message.authKerberosPrincipal = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PXFDatasourceHive {
        const message = { ...basePXFDatasourceHive } as PXFDatasourceHive;
        message.core =
            object.core !== undefined && object.core !== null
                ? PXFDatasourceCore.fromJSON(object.core)
                : undefined;
        message.kerberos =
            object.kerberos !== undefined && object.kerberos !== null
                ? PXFDatasourceKerberos.fromJSON(object.kerberos)
                : undefined;
        message.userImpersonation =
            object.userImpersonation !== undefined && object.userImpersonation !== null
                ? Boolean(object.userImpersonation)
                : undefined;
        message.username =
            object.username !== undefined && object.username !== null
                ? String(object.username)
                : '';
        message.saslConnectionRetries =
            object.saslConnectionRetries !== undefined && object.saslConnectionRetries !== null
                ? Number(object.saslConnectionRetries)
                : undefined;
        message.zkHosts = (object.zkHosts ?? []).map((e: any) => String(e));
        message.ppd =
            object.ppd !== undefined && object.ppd !== null ? Boolean(object.ppd) : undefined;
        message.metastoreUris = (object.metastoreUris ?? []).map((e: any) => String(e));
        message.metastoreKerberosPrincipal =
            object.metastoreKerberosPrincipal !== undefined &&
            object.metastoreKerberosPrincipal !== null
                ? String(object.metastoreKerberosPrincipal)
                : '';
        message.authKerberosPrincipal =
            object.authKerberosPrincipal !== undefined && object.authKerberosPrincipal !== null
                ? String(object.authKerberosPrincipal)
                : '';
        return message;
    },

    toJSON(message: PXFDatasourceHive): unknown {
        const obj: any = {};
        message.core !== undefined &&
            (obj.core = message.core ? PXFDatasourceCore.toJSON(message.core) : undefined);
        message.kerberos !== undefined &&
            (obj.kerberos = message.kerberos
                ? PXFDatasourceKerberos.toJSON(message.kerberos)
                : undefined);
        message.userImpersonation !== undefined &&
            (obj.userImpersonation = message.userImpersonation);
        message.username !== undefined && (obj.username = message.username);
        message.saslConnectionRetries !== undefined &&
            (obj.saslConnectionRetries = message.saslConnectionRetries);
        if (message.zkHosts) {
            obj.zkHosts = message.zkHosts.map((e) => e);
        } else {
            obj.zkHosts = [];
        }
        message.ppd !== undefined && (obj.ppd = message.ppd);
        if (message.metastoreUris) {
            obj.metastoreUris = message.metastoreUris.map((e) => e);
        } else {
            obj.metastoreUris = [];
        }
        message.metastoreKerberosPrincipal !== undefined &&
            (obj.metastoreKerberosPrincipal = message.metastoreKerberosPrincipal);
        message.authKerberosPrincipal !== undefined &&
            (obj.authKerberosPrincipal = message.authKerberosPrincipal);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PXFDatasourceHive>, I>>(object: I): PXFDatasourceHive {
        const message = { ...basePXFDatasourceHive } as PXFDatasourceHive;
        message.core =
            object.core !== undefined && object.core !== null
                ? PXFDatasourceCore.fromPartial(object.core)
                : undefined;
        message.kerberos =
            object.kerberos !== undefined && object.kerberos !== null
                ? PXFDatasourceKerberos.fromPartial(object.kerberos)
                : undefined;
        message.userImpersonation = object.userImpersonation ?? undefined;
        message.username = object.username ?? '';
        message.saslConnectionRetries = object.saslConnectionRetries ?? undefined;
        message.zkHosts = object.zkHosts?.map((e) => e) || [];
        message.ppd = object.ppd ?? undefined;
        message.metastoreUris = object.metastoreUris?.map((e) => e) || [];
        message.metastoreKerberosPrincipal = object.metastoreKerberosPrincipal ?? '';
        message.authKerberosPrincipal = object.authKerberosPrincipal ?? '';
        return message;
    },
};

const basePXFDatasource: object = { name: '' };

export const PXFDatasource = {
    encode(message: PXFDatasource, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.s3 !== undefined) {
            PXFDatasourceS3.encode(message.s3, writer.uint32(18).fork()).ldelim();
        }
        if (message.jdbc !== undefined) {
            PXFDatasourceJDBC.encode(message.jdbc, writer.uint32(26).fork()).ldelim();
        }
        if (message.hdfs !== undefined) {
            PXFDatasourceHDFS.encode(message.hdfs, writer.uint32(34).fork()).ldelim();
        }
        if (message.hive !== undefined) {
            PXFDatasourceHive.encode(message.hive, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PXFDatasource {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePXFDatasource } as PXFDatasource;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.s3 = PXFDatasourceS3.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.jdbc = PXFDatasourceJDBC.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.hdfs = PXFDatasourceHDFS.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.hive = PXFDatasourceHive.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PXFDatasource {
        const message = { ...basePXFDatasource } as PXFDatasource;
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.s3 =
            object.s3 !== undefined && object.s3 !== null
                ? PXFDatasourceS3.fromJSON(object.s3)
                : undefined;
        message.jdbc =
            object.jdbc !== undefined && object.jdbc !== null
                ? PXFDatasourceJDBC.fromJSON(object.jdbc)
                : undefined;
        message.hdfs =
            object.hdfs !== undefined && object.hdfs !== null
                ? PXFDatasourceHDFS.fromJSON(object.hdfs)
                : undefined;
        message.hive =
            object.hive !== undefined && object.hive !== null
                ? PXFDatasourceHive.fromJSON(object.hive)
                : undefined;
        return message;
    },

    toJSON(message: PXFDatasource): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        message.s3 !== undefined &&
            (obj.s3 = message.s3 ? PXFDatasourceS3.toJSON(message.s3) : undefined);
        message.jdbc !== undefined &&
            (obj.jdbc = message.jdbc ? PXFDatasourceJDBC.toJSON(message.jdbc) : undefined);
        message.hdfs !== undefined &&
            (obj.hdfs = message.hdfs ? PXFDatasourceHDFS.toJSON(message.hdfs) : undefined);
        message.hive !== undefined &&
            (obj.hive = message.hive ? PXFDatasourceHive.toJSON(message.hive) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PXFDatasource>, I>>(object: I): PXFDatasource {
        const message = { ...basePXFDatasource } as PXFDatasource;
        message.name = object.name ?? '';
        message.s3 =
            object.s3 !== undefined && object.s3 !== null
                ? PXFDatasourceS3.fromPartial(object.s3)
                : undefined;
        message.jdbc =
            object.jdbc !== undefined && object.jdbc !== null
                ? PXFDatasourceJDBC.fromPartial(object.jdbc)
                : undefined;
        message.hdfs =
            object.hdfs !== undefined && object.hdfs !== null
                ? PXFDatasourceHDFS.fromPartial(object.hdfs)
                : undefined;
        message.hive =
            object.hive !== undefined && object.hive !== null
                ? PXFDatasourceHive.fromPartial(object.hive)
                : undefined;
        return message;
    },
};

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

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
