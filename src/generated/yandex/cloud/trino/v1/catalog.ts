/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.trino.v1';

/** Connector configuration. Exactly one connector type must be specified. */
export interface Connector {
    /** Hive connector configuration. */
    hive?: HiveConnector | undefined;
    /** Iceberg connector configuration. */
    iceberg?: IcebergConnector | undefined;
    /** Delta Lake connector configuration. */
    deltaLake?: DeltaLakeConnector | undefined;
    /** PostgreSQL connector configuration. */
    postgresql?: PostgresqlConnector | undefined;
    /** ClickHouse connector configuration. */
    clickhouse?: ClickhouseConnector | undefined;
    /** TPC-H connector for synthetic benchmarking. */
    tpch?: TPCHConnector | undefined;
    /** TPC-DS connector for synthetic benchmarking. */
    tpcds?: TPCDSConnector | undefined;
    /** Oracle connector configuration for connecting to Oracle Database instances. */
    oracle?: OracleConnector | undefined;
    /** SQLServer connector configuration for connecting to SQLServer Database instances. */
    sqlserver?: SQLServerConnector | undefined;
}

/** Catalog is a logical Trino catalog backed by a specific connector. */
export interface Catalog {
    /** ID of the catalog. */
    id: string;
    /** Name of the catalog. */
    name: string;
    /** Connector backing this catalog. */
    connector?: Connector;
    /** Description of the catalog. */
    description: string;
    /** Labels associated with the catalog. */
    labels: { [key: string]: string };
}

export interface Catalog_LabelsEntry {
    key: string;
    value: string;
}

/** CatalogSpec defines the desired state of a new catalog. */
export interface CatalogSpec {
    /**
     * Name of the catalog.
     * Must be unique within a Trino cluster.
     */
    name: string;
    /** Connector backing this catalog. */
    connector?: Connector;
    /** Description of the catalog. */
    description: string;
    /** Labels associated with the catalog. */
    labels: { [key: string]: string };
}

export interface CatalogSpec_LabelsEntry {
    key: string;
    value: string;
}

/**
 * CatalogUpdateSpec defines changes to an existing catalog.
 * Fields are optional and only provided fields will be updated.
 */
export interface CatalogUpdateSpec {
    /** New name of the catalog. */
    name: string;
    /**
     * Updated connector configuration.
     * If specified, replaces the existing connector.
     */
    connector?: Connector;
    /** Description of the catalog. */
    description: string;
    /** Labels associated with the catalog. */
    labels: { [key: string]: string };
}

export interface CatalogUpdateSpec_LabelsEntry {
    key: string;
    value: string;
}

/** Metastore configuration. */
export interface Metastore {
    hive?: Metastore_HiveMetastore | undefined;
}

/** Configuration of Hive's metastore type. */
export interface Metastore_HiveMetastore {
    /** URI or cluster ID of the Hive Metastore. */
    uri: string | undefined;
}

/** Configuration of file system used by a connector. */
export interface FileSystem {
    s3?: FileSystem_S3FileSystem | undefined;
    externalS3?: FileSystem_ExternalS3FileSystem | undefined;
}

/**
 * Describes YandexCloud native S3 file system.
 * Currently does not require configuration.
 */
export interface FileSystem_S3FileSystem {}

/** Describes External S3 compatible file system. */
export interface FileSystem_ExternalS3FileSystem {
    awsAccessKey: string;
    awsSecretKey: string;
    awsEndpoint: string;
    awsRegion: string;
}

export interface HiveConnector {
    /** Metastore configuration. */
    metastore?: Metastore;
    /** File system configuration. */
    filesystem?: FileSystem;
    /** Additional properties. */
    additionalProperties: { [key: string]: string };
}

export interface HiveConnector_AdditionalPropertiesEntry {
    key: string;
    value: string;
}

export interface IcebergConnector {
    /** Metastore configuration. */
    metastore?: Metastore;
    /** File system configuration. */
    filesystem?: FileSystem;
    /** Additional properties. */
    additionalProperties: { [key: string]: string };
}

export interface IcebergConnector_AdditionalPropertiesEntry {
    key: string;
    value: string;
}

export interface DeltaLakeConnector {
    /** Metastore configuration. */
    metastore?: Metastore;
    /** File system configuration. */
    filesystem?: FileSystem;
    /** Additional properties. */
    additionalProperties: { [key: string]: string };
}

export interface DeltaLakeConnector_AdditionalPropertiesEntry {
    key: string;
    value: string;
}

export interface PostgresqlConnection {
    onPremise?: PostgresqlConnection_OnPremise | undefined;
    connectionManager?: PostgresqlConnection_ConnectionManager | undefined;
}

export interface PostgresqlConnection_OnPremise {
    /** Connection to the Postgresql. */
    connectionUrl: string;
    /** Name of the Postgresql user. */
    userName: string;
    /** Password of the Postgresql user. */
    password: string;
}

export interface PostgresqlConnection_ConnectionManager {
    /** Connection ID. */
    connectionId: string;
    /** Database. */
    database: string;
    /** Additional connection properties. */
    connectionProperties: { [key: string]: string };
}

export interface PostgresqlConnection_ConnectionManager_ConnectionPropertiesEntry {
    key: string;
    value: string;
}

export interface PostgresqlConnector {
    /** Connection configuration. */
    connection?: PostgresqlConnection;
    /** Additional properties. */
    additionalProperties: { [key: string]: string };
}

export interface PostgresqlConnector_AdditionalPropertiesEntry {
    key: string;
    value: string;
}

export interface ClickhouseConnection {
    onPremise?: ClickhouseConnection_OnPremise | undefined;
    connectionManager?: ClickhouseConnection_ConnectionManager | undefined;
}

export interface ClickhouseConnection_OnPremise {
    /** Connection to the Clickhouse. */
    connectionUrl: string;
    /** Name of the Clickhouse user. */
    userName: string;
    /** Password of the Clickhouse user. */
    password: string;
}

export interface ClickhouseConnection_ConnectionManager {
    /** Connection ID. */
    connectionId: string;
    /** Database. */
    database: string;
    /** Additional connection properties. */
    connectionProperties: { [key: string]: string };
}

export interface ClickhouseConnection_ConnectionManager_ConnectionPropertiesEntry {
    key: string;
    value: string;
}

export interface ClickhouseConnector {
    /** Connection configuration. */
    connection?: ClickhouseConnection;
    /** Additional properties. */
    additionalProperties: { [key: string]: string };
}

export interface ClickhouseConnector_AdditionalPropertiesEntry {
    key: string;
    value: string;
}

export interface TPCHConnector {
    /** Additional properties. */
    additionalProperties: { [key: string]: string };
}

export interface TPCHConnector_AdditionalPropertiesEntry {
    key: string;
    value: string;
}

export interface TPCDSConnector {
    /** Additional properties. */
    additionalProperties: { [key: string]: string };
}

export interface TPCDSConnector_AdditionalPropertiesEntry {
    key: string;
    value: string;
}

export interface OracleConnection {
    onPremise?: OracleConnection_OnPremise | undefined;
}

export interface OracleConnection_OnPremise {
    /** Connection to the Oracle. */
    connectionUrl: string;
    /** Name of the Oracle user. */
    userName: string;
    /** Password of the Oracle user. */
    password: string;
}

export interface OracleConnector {
    /** Connection configuration. */
    connection?: OracleConnection;
    /** Additional properties. */
    additionalProperties: { [key: string]: string };
}

export interface OracleConnector_AdditionalPropertiesEntry {
    key: string;
    value: string;
}

export interface SQLServerConnection {
    onPremise?: SQLServerConnection_OnPremise | undefined;
}

export interface SQLServerConnection_OnPremise {
    /** Connection to the SQLServer. */
    connectionUrl: string;
    /** Name of the SQLServer user. */
    userName: string;
    /** Password of the SQLServer user. */
    password: string;
}

export interface SQLServerConnector {
    /** Connection configuration. */
    connection?: SQLServerConnection;
    /** Additional properties. */
    additionalProperties: { [key: string]: string };
}

export interface SQLServerConnector_AdditionalPropertiesEntry {
    key: string;
    value: string;
}

const baseConnector: object = {};

export const Connector = {
    encode(message: Connector, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.hive !== undefined) {
            HiveConnector.encode(message.hive, writer.uint32(10).fork()).ldelim();
        }
        if (message.iceberg !== undefined) {
            IcebergConnector.encode(message.iceberg, writer.uint32(18).fork()).ldelim();
        }
        if (message.deltaLake !== undefined) {
            DeltaLakeConnector.encode(message.deltaLake, writer.uint32(26).fork()).ldelim();
        }
        if (message.postgresql !== undefined) {
            PostgresqlConnector.encode(message.postgresql, writer.uint32(34).fork()).ldelim();
        }
        if (message.clickhouse !== undefined) {
            ClickhouseConnector.encode(message.clickhouse, writer.uint32(42).fork()).ldelim();
        }
        if (message.tpch !== undefined) {
            TPCHConnector.encode(message.tpch, writer.uint32(50).fork()).ldelim();
        }
        if (message.tpcds !== undefined) {
            TPCDSConnector.encode(message.tpcds, writer.uint32(58).fork()).ldelim();
        }
        if (message.oracle !== undefined) {
            OracleConnector.encode(message.oracle, writer.uint32(66).fork()).ldelim();
        }
        if (message.sqlserver !== undefined) {
            SQLServerConnector.encode(message.sqlserver, writer.uint32(74).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Connector {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseConnector } as Connector;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hive = HiveConnector.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.iceberg = IcebergConnector.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.deltaLake = DeltaLakeConnector.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.postgresql = PostgresqlConnector.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.clickhouse = ClickhouseConnector.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.tpch = TPCHConnector.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.tpcds = TPCDSConnector.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.oracle = OracleConnector.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.sqlserver = SQLServerConnector.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Connector {
        const message = { ...baseConnector } as Connector;
        message.hive =
            object.hive !== undefined && object.hive !== null
                ? HiveConnector.fromJSON(object.hive)
                : undefined;
        message.iceberg =
            object.iceberg !== undefined && object.iceberg !== null
                ? IcebergConnector.fromJSON(object.iceberg)
                : undefined;
        message.deltaLake =
            object.deltaLake !== undefined && object.deltaLake !== null
                ? DeltaLakeConnector.fromJSON(object.deltaLake)
                : undefined;
        message.postgresql =
            object.postgresql !== undefined && object.postgresql !== null
                ? PostgresqlConnector.fromJSON(object.postgresql)
                : undefined;
        message.clickhouse =
            object.clickhouse !== undefined && object.clickhouse !== null
                ? ClickhouseConnector.fromJSON(object.clickhouse)
                : undefined;
        message.tpch =
            object.tpch !== undefined && object.tpch !== null
                ? TPCHConnector.fromJSON(object.tpch)
                : undefined;
        message.tpcds =
            object.tpcds !== undefined && object.tpcds !== null
                ? TPCDSConnector.fromJSON(object.tpcds)
                : undefined;
        message.oracle =
            object.oracle !== undefined && object.oracle !== null
                ? OracleConnector.fromJSON(object.oracle)
                : undefined;
        message.sqlserver =
            object.sqlserver !== undefined && object.sqlserver !== null
                ? SQLServerConnector.fromJSON(object.sqlserver)
                : undefined;
        return message;
    },

    toJSON(message: Connector): unknown {
        const obj: any = {};
        message.hive !== undefined &&
            (obj.hive = message.hive ? HiveConnector.toJSON(message.hive) : undefined);
        message.iceberg !== undefined &&
            (obj.iceberg = message.iceberg ? IcebergConnector.toJSON(message.iceberg) : undefined);
        message.deltaLake !== undefined &&
            (obj.deltaLake = message.deltaLake
                ? DeltaLakeConnector.toJSON(message.deltaLake)
                : undefined);
        message.postgresql !== undefined &&
            (obj.postgresql = message.postgresql
                ? PostgresqlConnector.toJSON(message.postgresql)
                : undefined);
        message.clickhouse !== undefined &&
            (obj.clickhouse = message.clickhouse
                ? ClickhouseConnector.toJSON(message.clickhouse)
                : undefined);
        message.tpch !== undefined &&
            (obj.tpch = message.tpch ? TPCHConnector.toJSON(message.tpch) : undefined);
        message.tpcds !== undefined &&
            (obj.tpcds = message.tpcds ? TPCDSConnector.toJSON(message.tpcds) : undefined);
        message.oracle !== undefined &&
            (obj.oracle = message.oracle ? OracleConnector.toJSON(message.oracle) : undefined);
        message.sqlserver !== undefined &&
            (obj.sqlserver = message.sqlserver
                ? SQLServerConnector.toJSON(message.sqlserver)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Connector>, I>>(object: I): Connector {
        const message = { ...baseConnector } as Connector;
        message.hive =
            object.hive !== undefined && object.hive !== null
                ? HiveConnector.fromPartial(object.hive)
                : undefined;
        message.iceberg =
            object.iceberg !== undefined && object.iceberg !== null
                ? IcebergConnector.fromPartial(object.iceberg)
                : undefined;
        message.deltaLake =
            object.deltaLake !== undefined && object.deltaLake !== null
                ? DeltaLakeConnector.fromPartial(object.deltaLake)
                : undefined;
        message.postgresql =
            object.postgresql !== undefined && object.postgresql !== null
                ? PostgresqlConnector.fromPartial(object.postgresql)
                : undefined;
        message.clickhouse =
            object.clickhouse !== undefined && object.clickhouse !== null
                ? ClickhouseConnector.fromPartial(object.clickhouse)
                : undefined;
        message.tpch =
            object.tpch !== undefined && object.tpch !== null
                ? TPCHConnector.fromPartial(object.tpch)
                : undefined;
        message.tpcds =
            object.tpcds !== undefined && object.tpcds !== null
                ? TPCDSConnector.fromPartial(object.tpcds)
                : undefined;
        message.oracle =
            object.oracle !== undefined && object.oracle !== null
                ? OracleConnector.fromPartial(object.oracle)
                : undefined;
        message.sqlserver =
            object.sqlserver !== undefined && object.sqlserver !== null
                ? SQLServerConnector.fromPartial(object.sqlserver)
                : undefined;
        return message;
    },
};

const baseCatalog: object = { id: '', name: '', description: '' };

export const Catalog = {
    encode(message: Catalog, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.connector !== undefined) {
            Connector.encode(message.connector, writer.uint32(26).fork()).ldelim();
        }
        if (message.description !== '') {
            writer.uint32(34).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            Catalog_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(42).fork(),
            ).ldelim();
        });
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Catalog {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCatalog } as Catalog;
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.connector = Connector.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.description = reader.string();
                    break;
                case 5:
                    const entry5 = Catalog_LabelsEntry.decode(reader, reader.uint32());
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

    fromJSON(object: any): Catalog {
        const message = { ...baseCatalog } as Catalog;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.connector =
            object.connector !== undefined && object.connector !== null
                ? Connector.fromJSON(object.connector)
                : undefined;
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                acc[key] = String(value);
                return acc;
            },
            {},
        );
        return message;
    },

    toJSON(message: Catalog): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.name !== undefined && (obj.name = message.name);
        message.connector !== undefined &&
            (obj.connector = message.connector ? Connector.toJSON(message.connector) : undefined);
        message.description !== undefined && (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Catalog>, I>>(object: I): Catalog {
        const message = { ...baseCatalog } as Catalog;
        message.id = object.id ?? '';
        message.name = object.name ?? '';
        message.connector =
            object.connector !== undefined && object.connector !== null
                ? Connector.fromPartial(object.connector)
                : undefined;
        message.description = object.description ?? '';
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                if (value !== undefined) {
                    acc[key] = String(value);
                }
                return acc;
            },
            {},
        );
        return message;
    },
};

const baseCatalog_LabelsEntry: object = { key: '', value: '' };

export const Catalog_LabelsEntry = {
    encode(message: Catalog_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Catalog_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCatalog_LabelsEntry } as Catalog_LabelsEntry;
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

    fromJSON(object: any): Catalog_LabelsEntry {
        const message = { ...baseCatalog_LabelsEntry } as Catalog_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: Catalog_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Catalog_LabelsEntry>, I>>(
        object: I,
    ): Catalog_LabelsEntry {
        const message = { ...baseCatalog_LabelsEntry } as Catalog_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseCatalogSpec: object = { name: '', description: '' };

export const CatalogSpec = {
    encode(message: CatalogSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.connector !== undefined) {
            Connector.encode(message.connector, writer.uint32(18).fork()).ldelim();
        }
        if (message.description !== '') {
            writer.uint32(26).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            CatalogSpec_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(34).fork(),
            ).ldelim();
        });
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CatalogSpec {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCatalogSpec } as CatalogSpec;
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.connector = Connector.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 4:
                    const entry4 = CatalogSpec_LabelsEntry.decode(reader, reader.uint32());
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CatalogSpec {
        const message = { ...baseCatalogSpec } as CatalogSpec;
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.connector =
            object.connector !== undefined && object.connector !== null
                ? Connector.fromJSON(object.connector)
                : undefined;
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                acc[key] = String(value);
                return acc;
            },
            {},
        );
        return message;
    },

    toJSON(message: CatalogSpec): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        message.connector !== undefined &&
            (obj.connector = message.connector ? Connector.toJSON(message.connector) : undefined);
        message.description !== undefined && (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CatalogSpec>, I>>(object: I): CatalogSpec {
        const message = { ...baseCatalogSpec } as CatalogSpec;
        message.name = object.name ?? '';
        message.connector =
            object.connector !== undefined && object.connector !== null
                ? Connector.fromPartial(object.connector)
                : undefined;
        message.description = object.description ?? '';
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                if (value !== undefined) {
                    acc[key] = String(value);
                }
                return acc;
            },
            {},
        );
        return message;
    },
};

const baseCatalogSpec_LabelsEntry: object = { key: '', value: '' };

export const CatalogSpec_LabelsEntry = {
    encode(message: CatalogSpec_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CatalogSpec_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCatalogSpec_LabelsEntry } as CatalogSpec_LabelsEntry;
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

    fromJSON(object: any): CatalogSpec_LabelsEntry {
        const message = { ...baseCatalogSpec_LabelsEntry } as CatalogSpec_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: CatalogSpec_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CatalogSpec_LabelsEntry>, I>>(
        object: I,
    ): CatalogSpec_LabelsEntry {
        const message = { ...baseCatalogSpec_LabelsEntry } as CatalogSpec_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseCatalogUpdateSpec: object = { name: '', description: '' };

export const CatalogUpdateSpec = {
    encode(message: CatalogUpdateSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.connector !== undefined) {
            Connector.encode(message.connector, writer.uint32(18).fork()).ldelim();
        }
        if (message.description !== '') {
            writer.uint32(26).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            CatalogUpdateSpec_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(34).fork(),
            ).ldelim();
        });
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CatalogUpdateSpec {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCatalogUpdateSpec } as CatalogUpdateSpec;
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.connector = Connector.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 4:
                    const entry4 = CatalogUpdateSpec_LabelsEntry.decode(reader, reader.uint32());
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CatalogUpdateSpec {
        const message = { ...baseCatalogUpdateSpec } as CatalogUpdateSpec;
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.connector =
            object.connector !== undefined && object.connector !== null
                ? Connector.fromJSON(object.connector)
                : undefined;
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                acc[key] = String(value);
                return acc;
            },
            {},
        );
        return message;
    },

    toJSON(message: CatalogUpdateSpec): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        message.connector !== undefined &&
            (obj.connector = message.connector ? Connector.toJSON(message.connector) : undefined);
        message.description !== undefined && (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CatalogUpdateSpec>, I>>(object: I): CatalogUpdateSpec {
        const message = { ...baseCatalogUpdateSpec } as CatalogUpdateSpec;
        message.name = object.name ?? '';
        message.connector =
            object.connector !== undefined && object.connector !== null
                ? Connector.fromPartial(object.connector)
                : undefined;
        message.description = object.description ?? '';
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                if (value !== undefined) {
                    acc[key] = String(value);
                }
                return acc;
            },
            {},
        );
        return message;
    },
};

const baseCatalogUpdateSpec_LabelsEntry: object = { key: '', value: '' };

export const CatalogUpdateSpec_LabelsEntry = {
    encode(
        message: CatalogUpdateSpec_LabelsEntry,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CatalogUpdateSpec_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCatalogUpdateSpec_LabelsEntry } as CatalogUpdateSpec_LabelsEntry;
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

    fromJSON(object: any): CatalogUpdateSpec_LabelsEntry {
        const message = { ...baseCatalogUpdateSpec_LabelsEntry } as CatalogUpdateSpec_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: CatalogUpdateSpec_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CatalogUpdateSpec_LabelsEntry>, I>>(
        object: I,
    ): CatalogUpdateSpec_LabelsEntry {
        const message = { ...baseCatalogUpdateSpec_LabelsEntry } as CatalogUpdateSpec_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseMetastore: object = {};

export const Metastore = {
    encode(message: Metastore, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.hive !== undefined) {
            Metastore_HiveMetastore.encode(message.hive, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Metastore {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMetastore } as Metastore;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hive = Metastore_HiveMetastore.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Metastore {
        const message = { ...baseMetastore } as Metastore;
        message.hive =
            object.hive !== undefined && object.hive !== null
                ? Metastore_HiveMetastore.fromJSON(object.hive)
                : undefined;
        return message;
    },

    toJSON(message: Metastore): unknown {
        const obj: any = {};
        message.hive !== undefined &&
            (obj.hive = message.hive ? Metastore_HiveMetastore.toJSON(message.hive) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Metastore>, I>>(object: I): Metastore {
        const message = { ...baseMetastore } as Metastore;
        message.hive =
            object.hive !== undefined && object.hive !== null
                ? Metastore_HiveMetastore.fromPartial(object.hive)
                : undefined;
        return message;
    },
};

const baseMetastore_HiveMetastore: object = {};

export const Metastore_HiveMetastore = {
    encode(message: Metastore_HiveMetastore, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.uri !== undefined) {
            writer.uint32(10).string(message.uri);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Metastore_HiveMetastore {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMetastore_HiveMetastore } as Metastore_HiveMetastore;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.uri = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Metastore_HiveMetastore {
        const message = { ...baseMetastore_HiveMetastore } as Metastore_HiveMetastore;
        message.uri =
            object.uri !== undefined && object.uri !== null ? String(object.uri) : undefined;
        return message;
    },

    toJSON(message: Metastore_HiveMetastore): unknown {
        const obj: any = {};
        message.uri !== undefined && (obj.uri = message.uri);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Metastore_HiveMetastore>, I>>(
        object: I,
    ): Metastore_HiveMetastore {
        const message = { ...baseMetastore_HiveMetastore } as Metastore_HiveMetastore;
        message.uri = object.uri ?? undefined;
        return message;
    },
};

const baseFileSystem: object = {};

export const FileSystem = {
    encode(message: FileSystem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.s3 !== undefined) {
            FileSystem_S3FileSystem.encode(message.s3, writer.uint32(10).fork()).ldelim();
        }
        if (message.externalS3 !== undefined) {
            FileSystem_ExternalS3FileSystem.encode(
                message.externalS3,
                writer.uint32(18).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): FileSystem {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseFileSystem } as FileSystem;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.s3 = FileSystem_S3FileSystem.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.externalS3 = FileSystem_ExternalS3FileSystem.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): FileSystem {
        const message = { ...baseFileSystem } as FileSystem;
        message.s3 =
            object.s3 !== undefined && object.s3 !== null
                ? FileSystem_S3FileSystem.fromJSON(object.s3)
                : undefined;
        message.externalS3 =
            object.externalS3 !== undefined && object.externalS3 !== null
                ? FileSystem_ExternalS3FileSystem.fromJSON(object.externalS3)
                : undefined;
        return message;
    },

    toJSON(message: FileSystem): unknown {
        const obj: any = {};
        message.s3 !== undefined &&
            (obj.s3 = message.s3 ? FileSystem_S3FileSystem.toJSON(message.s3) : undefined);
        message.externalS3 !== undefined &&
            (obj.externalS3 = message.externalS3
                ? FileSystem_ExternalS3FileSystem.toJSON(message.externalS3)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<FileSystem>, I>>(object: I): FileSystem {
        const message = { ...baseFileSystem } as FileSystem;
        message.s3 =
            object.s3 !== undefined && object.s3 !== null
                ? FileSystem_S3FileSystem.fromPartial(object.s3)
                : undefined;
        message.externalS3 =
            object.externalS3 !== undefined && object.externalS3 !== null
                ? FileSystem_ExternalS3FileSystem.fromPartial(object.externalS3)
                : undefined;
        return message;
    },
};

const baseFileSystem_S3FileSystem: object = {};

export const FileSystem_S3FileSystem = {
    encode(_: FileSystem_S3FileSystem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): FileSystem_S3FileSystem {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseFileSystem_S3FileSystem } as FileSystem_S3FileSystem;
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

    fromJSON(_: any): FileSystem_S3FileSystem {
        const message = { ...baseFileSystem_S3FileSystem } as FileSystem_S3FileSystem;
        return message;
    },

    toJSON(_: FileSystem_S3FileSystem): unknown {
        const obj: any = {};
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<FileSystem_S3FileSystem>, I>>(
        _: I,
    ): FileSystem_S3FileSystem {
        const message = { ...baseFileSystem_S3FileSystem } as FileSystem_S3FileSystem;
        return message;
    },
};

const baseFileSystem_ExternalS3FileSystem: object = {
    awsAccessKey: '',
    awsSecretKey: '',
    awsEndpoint: '',
    awsRegion: '',
};

export const FileSystem_ExternalS3FileSystem = {
    encode(
        message: FileSystem_ExternalS3FileSystem,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.awsAccessKey !== '') {
            writer.uint32(10).string(message.awsAccessKey);
        }
        if (message.awsSecretKey !== '') {
            writer.uint32(18).string(message.awsSecretKey);
        }
        if (message.awsEndpoint !== '') {
            writer.uint32(26).string(message.awsEndpoint);
        }
        if (message.awsRegion !== '') {
            writer.uint32(34).string(message.awsRegion);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): FileSystem_ExternalS3FileSystem {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseFileSystem_ExternalS3FileSystem,
        } as FileSystem_ExternalS3FileSystem;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.awsAccessKey = reader.string();
                    break;
                case 2:
                    message.awsSecretKey = reader.string();
                    break;
                case 3:
                    message.awsEndpoint = reader.string();
                    break;
                case 4:
                    message.awsRegion = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): FileSystem_ExternalS3FileSystem {
        const message = {
            ...baseFileSystem_ExternalS3FileSystem,
        } as FileSystem_ExternalS3FileSystem;
        message.awsAccessKey =
            object.awsAccessKey !== undefined && object.awsAccessKey !== null
                ? String(object.awsAccessKey)
                : '';
        message.awsSecretKey =
            object.awsSecretKey !== undefined && object.awsSecretKey !== null
                ? String(object.awsSecretKey)
                : '';
        message.awsEndpoint =
            object.awsEndpoint !== undefined && object.awsEndpoint !== null
                ? String(object.awsEndpoint)
                : '';
        message.awsRegion =
            object.awsRegion !== undefined && object.awsRegion !== null
                ? String(object.awsRegion)
                : '';
        return message;
    },

    toJSON(message: FileSystem_ExternalS3FileSystem): unknown {
        const obj: any = {};
        message.awsAccessKey !== undefined && (obj.awsAccessKey = message.awsAccessKey);
        message.awsSecretKey !== undefined && (obj.awsSecretKey = message.awsSecretKey);
        message.awsEndpoint !== undefined && (obj.awsEndpoint = message.awsEndpoint);
        message.awsRegion !== undefined && (obj.awsRegion = message.awsRegion);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<FileSystem_ExternalS3FileSystem>, I>>(
        object: I,
    ): FileSystem_ExternalS3FileSystem {
        const message = {
            ...baseFileSystem_ExternalS3FileSystem,
        } as FileSystem_ExternalS3FileSystem;
        message.awsAccessKey = object.awsAccessKey ?? '';
        message.awsSecretKey = object.awsSecretKey ?? '';
        message.awsEndpoint = object.awsEndpoint ?? '';
        message.awsRegion = object.awsRegion ?? '';
        return message;
    },
};

const baseHiveConnector: object = {};

export const HiveConnector = {
    encode(message: HiveConnector, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.metastore !== undefined) {
            Metastore.encode(message.metastore, writer.uint32(10).fork()).ldelim();
        }
        if (message.filesystem !== undefined) {
            FileSystem.encode(message.filesystem, writer.uint32(18).fork()).ldelim();
        }
        Object.entries(message.additionalProperties).forEach(([key, value]) => {
            HiveConnector_AdditionalPropertiesEntry.encode(
                { key: key as any, value },
                writer.uint32(26).fork(),
            ).ldelim();
        });
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): HiveConnector {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseHiveConnector } as HiveConnector;
        message.additionalProperties = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.metastore = Metastore.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.filesystem = FileSystem.decode(reader, reader.uint32());
                    break;
                case 3:
                    const entry3 = HiveConnector_AdditionalPropertiesEntry.decode(
                        reader,
                        reader.uint32(),
                    );
                    if (entry3.value !== undefined) {
                        message.additionalProperties[entry3.key] = entry3.value;
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): HiveConnector {
        const message = { ...baseHiveConnector } as HiveConnector;
        message.metastore =
            object.metastore !== undefined && object.metastore !== null
                ? Metastore.fromJSON(object.metastore)
                : undefined;
        message.filesystem =
            object.filesystem !== undefined && object.filesystem !== null
                ? FileSystem.fromJSON(object.filesystem)
                : undefined;
        message.additionalProperties = Object.entries(object.additionalProperties ?? {}).reduce<{
            [key: string]: string;
        }>((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
        }, {});
        return message;
    },

    toJSON(message: HiveConnector): unknown {
        const obj: any = {};
        message.metastore !== undefined &&
            (obj.metastore = message.metastore ? Metastore.toJSON(message.metastore) : undefined);
        message.filesystem !== undefined &&
            (obj.filesystem = message.filesystem
                ? FileSystem.toJSON(message.filesystem)
                : undefined);
        obj.additionalProperties = {};
        if (message.additionalProperties) {
            Object.entries(message.additionalProperties).forEach(([k, v]) => {
                obj.additionalProperties[k] = v;
            });
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<HiveConnector>, I>>(object: I): HiveConnector {
        const message = { ...baseHiveConnector } as HiveConnector;
        message.metastore =
            object.metastore !== undefined && object.metastore !== null
                ? Metastore.fromPartial(object.metastore)
                : undefined;
        message.filesystem =
            object.filesystem !== undefined && object.filesystem !== null
                ? FileSystem.fromPartial(object.filesystem)
                : undefined;
        message.additionalProperties = Object.entries(object.additionalProperties ?? {}).reduce<{
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

const baseHiveConnector_AdditionalPropertiesEntry: object = { key: '', value: '' };

export const HiveConnector_AdditionalPropertiesEntry = {
    encode(
        message: HiveConnector_AdditionalPropertiesEntry,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): HiveConnector_AdditionalPropertiesEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseHiveConnector_AdditionalPropertiesEntry,
        } as HiveConnector_AdditionalPropertiesEntry;
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

    fromJSON(object: any): HiveConnector_AdditionalPropertiesEntry {
        const message = {
            ...baseHiveConnector_AdditionalPropertiesEntry,
        } as HiveConnector_AdditionalPropertiesEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: HiveConnector_AdditionalPropertiesEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<HiveConnector_AdditionalPropertiesEntry>, I>>(
        object: I,
    ): HiveConnector_AdditionalPropertiesEntry {
        const message = {
            ...baseHiveConnector_AdditionalPropertiesEntry,
        } as HiveConnector_AdditionalPropertiesEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseIcebergConnector: object = {};

export const IcebergConnector = {
    encode(message: IcebergConnector, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.metastore !== undefined) {
            Metastore.encode(message.metastore, writer.uint32(10).fork()).ldelim();
        }
        if (message.filesystem !== undefined) {
            FileSystem.encode(message.filesystem, writer.uint32(18).fork()).ldelim();
        }
        Object.entries(message.additionalProperties).forEach(([key, value]) => {
            IcebergConnector_AdditionalPropertiesEntry.encode(
                { key: key as any, value },
                writer.uint32(26).fork(),
            ).ldelim();
        });
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): IcebergConnector {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseIcebergConnector } as IcebergConnector;
        message.additionalProperties = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.metastore = Metastore.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.filesystem = FileSystem.decode(reader, reader.uint32());
                    break;
                case 3:
                    const entry3 = IcebergConnector_AdditionalPropertiesEntry.decode(
                        reader,
                        reader.uint32(),
                    );
                    if (entry3.value !== undefined) {
                        message.additionalProperties[entry3.key] = entry3.value;
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): IcebergConnector {
        const message = { ...baseIcebergConnector } as IcebergConnector;
        message.metastore =
            object.metastore !== undefined && object.metastore !== null
                ? Metastore.fromJSON(object.metastore)
                : undefined;
        message.filesystem =
            object.filesystem !== undefined && object.filesystem !== null
                ? FileSystem.fromJSON(object.filesystem)
                : undefined;
        message.additionalProperties = Object.entries(object.additionalProperties ?? {}).reduce<{
            [key: string]: string;
        }>((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
        }, {});
        return message;
    },

    toJSON(message: IcebergConnector): unknown {
        const obj: any = {};
        message.metastore !== undefined &&
            (obj.metastore = message.metastore ? Metastore.toJSON(message.metastore) : undefined);
        message.filesystem !== undefined &&
            (obj.filesystem = message.filesystem
                ? FileSystem.toJSON(message.filesystem)
                : undefined);
        obj.additionalProperties = {};
        if (message.additionalProperties) {
            Object.entries(message.additionalProperties).forEach(([k, v]) => {
                obj.additionalProperties[k] = v;
            });
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<IcebergConnector>, I>>(object: I): IcebergConnector {
        const message = { ...baseIcebergConnector } as IcebergConnector;
        message.metastore =
            object.metastore !== undefined && object.metastore !== null
                ? Metastore.fromPartial(object.metastore)
                : undefined;
        message.filesystem =
            object.filesystem !== undefined && object.filesystem !== null
                ? FileSystem.fromPartial(object.filesystem)
                : undefined;
        message.additionalProperties = Object.entries(object.additionalProperties ?? {}).reduce<{
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

const baseIcebergConnector_AdditionalPropertiesEntry: object = { key: '', value: '' };

export const IcebergConnector_AdditionalPropertiesEntry = {
    encode(
        message: IcebergConnector_AdditionalPropertiesEntry,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): IcebergConnector_AdditionalPropertiesEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseIcebergConnector_AdditionalPropertiesEntry,
        } as IcebergConnector_AdditionalPropertiesEntry;
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

    fromJSON(object: any): IcebergConnector_AdditionalPropertiesEntry {
        const message = {
            ...baseIcebergConnector_AdditionalPropertiesEntry,
        } as IcebergConnector_AdditionalPropertiesEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: IcebergConnector_AdditionalPropertiesEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<IcebergConnector_AdditionalPropertiesEntry>, I>>(
        object: I,
    ): IcebergConnector_AdditionalPropertiesEntry {
        const message = {
            ...baseIcebergConnector_AdditionalPropertiesEntry,
        } as IcebergConnector_AdditionalPropertiesEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseDeltaLakeConnector: object = {};

export const DeltaLakeConnector = {
    encode(message: DeltaLakeConnector, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.metastore !== undefined) {
            Metastore.encode(message.metastore, writer.uint32(10).fork()).ldelim();
        }
        if (message.filesystem !== undefined) {
            FileSystem.encode(message.filesystem, writer.uint32(18).fork()).ldelim();
        }
        Object.entries(message.additionalProperties).forEach(([key, value]) => {
            DeltaLakeConnector_AdditionalPropertiesEntry.encode(
                { key: key as any, value },
                writer.uint32(26).fork(),
            ).ldelim();
        });
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeltaLakeConnector {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeltaLakeConnector } as DeltaLakeConnector;
        message.additionalProperties = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.metastore = Metastore.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.filesystem = FileSystem.decode(reader, reader.uint32());
                    break;
                case 3:
                    const entry3 = DeltaLakeConnector_AdditionalPropertiesEntry.decode(
                        reader,
                        reader.uint32(),
                    );
                    if (entry3.value !== undefined) {
                        message.additionalProperties[entry3.key] = entry3.value;
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeltaLakeConnector {
        const message = { ...baseDeltaLakeConnector } as DeltaLakeConnector;
        message.metastore =
            object.metastore !== undefined && object.metastore !== null
                ? Metastore.fromJSON(object.metastore)
                : undefined;
        message.filesystem =
            object.filesystem !== undefined && object.filesystem !== null
                ? FileSystem.fromJSON(object.filesystem)
                : undefined;
        message.additionalProperties = Object.entries(object.additionalProperties ?? {}).reduce<{
            [key: string]: string;
        }>((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
        }, {});
        return message;
    },

    toJSON(message: DeltaLakeConnector): unknown {
        const obj: any = {};
        message.metastore !== undefined &&
            (obj.metastore = message.metastore ? Metastore.toJSON(message.metastore) : undefined);
        message.filesystem !== undefined &&
            (obj.filesystem = message.filesystem
                ? FileSystem.toJSON(message.filesystem)
                : undefined);
        obj.additionalProperties = {};
        if (message.additionalProperties) {
            Object.entries(message.additionalProperties).forEach(([k, v]) => {
                obj.additionalProperties[k] = v;
            });
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeltaLakeConnector>, I>>(
        object: I,
    ): DeltaLakeConnector {
        const message = { ...baseDeltaLakeConnector } as DeltaLakeConnector;
        message.metastore =
            object.metastore !== undefined && object.metastore !== null
                ? Metastore.fromPartial(object.metastore)
                : undefined;
        message.filesystem =
            object.filesystem !== undefined && object.filesystem !== null
                ? FileSystem.fromPartial(object.filesystem)
                : undefined;
        message.additionalProperties = Object.entries(object.additionalProperties ?? {}).reduce<{
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

const baseDeltaLakeConnector_AdditionalPropertiesEntry: object = { key: '', value: '' };

export const DeltaLakeConnector_AdditionalPropertiesEntry = {
    encode(
        message: DeltaLakeConnector_AdditionalPropertiesEntry,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): DeltaLakeConnector_AdditionalPropertiesEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeltaLakeConnector_AdditionalPropertiesEntry,
        } as DeltaLakeConnector_AdditionalPropertiesEntry;
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

    fromJSON(object: any): DeltaLakeConnector_AdditionalPropertiesEntry {
        const message = {
            ...baseDeltaLakeConnector_AdditionalPropertiesEntry,
        } as DeltaLakeConnector_AdditionalPropertiesEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: DeltaLakeConnector_AdditionalPropertiesEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeltaLakeConnector_AdditionalPropertiesEntry>, I>>(
        object: I,
    ): DeltaLakeConnector_AdditionalPropertiesEntry {
        const message = {
            ...baseDeltaLakeConnector_AdditionalPropertiesEntry,
        } as DeltaLakeConnector_AdditionalPropertiesEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const basePostgresqlConnection: object = {};

export const PostgresqlConnection = {
    encode(message: PostgresqlConnection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.onPremise !== undefined) {
            PostgresqlConnection_OnPremise.encode(
                message.onPremise,
                writer.uint32(10).fork(),
            ).ldelim();
        }
        if (message.connectionManager !== undefined) {
            PostgresqlConnection_ConnectionManager.encode(
                message.connectionManager,
                writer.uint32(18).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PostgresqlConnection {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePostgresqlConnection } as PostgresqlConnection;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.onPremise = PostgresqlConnection_OnPremise.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 2:
                    message.connectionManager = PostgresqlConnection_ConnectionManager.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PostgresqlConnection {
        const message = { ...basePostgresqlConnection } as PostgresqlConnection;
        message.onPremise =
            object.onPremise !== undefined && object.onPremise !== null
                ? PostgresqlConnection_OnPremise.fromJSON(object.onPremise)
                : undefined;
        message.connectionManager =
            object.connectionManager !== undefined && object.connectionManager !== null
                ? PostgresqlConnection_ConnectionManager.fromJSON(object.connectionManager)
                : undefined;
        return message;
    },

    toJSON(message: PostgresqlConnection): unknown {
        const obj: any = {};
        message.onPremise !== undefined &&
            (obj.onPremise = message.onPremise
                ? PostgresqlConnection_OnPremise.toJSON(message.onPremise)
                : undefined);
        message.connectionManager !== undefined &&
            (obj.connectionManager = message.connectionManager
                ? PostgresqlConnection_ConnectionManager.toJSON(message.connectionManager)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PostgresqlConnection>, I>>(
        object: I,
    ): PostgresqlConnection {
        const message = { ...basePostgresqlConnection } as PostgresqlConnection;
        message.onPremise =
            object.onPremise !== undefined && object.onPremise !== null
                ? PostgresqlConnection_OnPremise.fromPartial(object.onPremise)
                : undefined;
        message.connectionManager =
            object.connectionManager !== undefined && object.connectionManager !== null
                ? PostgresqlConnection_ConnectionManager.fromPartial(object.connectionManager)
                : undefined;
        return message;
    },
};

const basePostgresqlConnection_OnPremise: object = {
    connectionUrl: '',
    userName: '',
    password: '',
};

export const PostgresqlConnection_OnPremise = {
    encode(
        message: PostgresqlConnection_OnPremise,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.connectionUrl !== '') {
            writer.uint32(10).string(message.connectionUrl);
        }
        if (message.userName !== '') {
            writer.uint32(18).string(message.userName);
        }
        if (message.password !== '') {
            writer.uint32(26).string(message.password);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PostgresqlConnection_OnPremise {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePostgresqlConnection_OnPremise } as PostgresqlConnection_OnPremise;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connectionUrl = reader.string();
                    break;
                case 2:
                    message.userName = reader.string();
                    break;
                case 3:
                    message.password = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PostgresqlConnection_OnPremise {
        const message = { ...basePostgresqlConnection_OnPremise } as PostgresqlConnection_OnPremise;
        message.connectionUrl =
            object.connectionUrl !== undefined && object.connectionUrl !== null
                ? String(object.connectionUrl)
                : '';
        message.userName =
            object.userName !== undefined && object.userName !== null
                ? String(object.userName)
                : '';
        message.password =
            object.password !== undefined && object.password !== null
                ? String(object.password)
                : '';
        return message;
    },

    toJSON(message: PostgresqlConnection_OnPremise): unknown {
        const obj: any = {};
        message.connectionUrl !== undefined && (obj.connectionUrl = message.connectionUrl);
        message.userName !== undefined && (obj.userName = message.userName);
        message.password !== undefined && (obj.password = message.password);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PostgresqlConnection_OnPremise>, I>>(
        object: I,
    ): PostgresqlConnection_OnPremise {
        const message = { ...basePostgresqlConnection_OnPremise } as PostgresqlConnection_OnPremise;
        message.connectionUrl = object.connectionUrl ?? '';
        message.userName = object.userName ?? '';
        message.password = object.password ?? '';
        return message;
    },
};

const basePostgresqlConnection_ConnectionManager: object = { connectionId: '', database: '' };

export const PostgresqlConnection_ConnectionManager = {
    encode(
        message: PostgresqlConnection_ConnectionManager,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.connectionId !== '') {
            writer.uint32(10).string(message.connectionId);
        }
        if (message.database !== '') {
            writer.uint32(18).string(message.database);
        }
        Object.entries(message.connectionProperties).forEach(([key, value]) => {
            PostgresqlConnection_ConnectionManager_ConnectionPropertiesEntry.encode(
                { key: key as any, value },
                writer.uint32(26).fork(),
            ).ldelim();
        });
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): PostgresqlConnection_ConnectionManager {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...basePostgresqlConnection_ConnectionManager,
        } as PostgresqlConnection_ConnectionManager;
        message.connectionProperties = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connectionId = reader.string();
                    break;
                case 2:
                    message.database = reader.string();
                    break;
                case 3:
                    const entry3 =
                        PostgresqlConnection_ConnectionManager_ConnectionPropertiesEntry.decode(
                            reader,
                            reader.uint32(),
                        );
                    if (entry3.value !== undefined) {
                        message.connectionProperties[entry3.key] = entry3.value;
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PostgresqlConnection_ConnectionManager {
        const message = {
            ...basePostgresqlConnection_ConnectionManager,
        } as PostgresqlConnection_ConnectionManager;
        message.connectionId =
            object.connectionId !== undefined && object.connectionId !== null
                ? String(object.connectionId)
                : '';
        message.database =
            object.database !== undefined && object.database !== null
                ? String(object.database)
                : '';
        message.connectionProperties = Object.entries(object.connectionProperties ?? {}).reduce<{
            [key: string]: string;
        }>((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
        }, {});
        return message;
    },

    toJSON(message: PostgresqlConnection_ConnectionManager): unknown {
        const obj: any = {};
        message.connectionId !== undefined && (obj.connectionId = message.connectionId);
        message.database !== undefined && (obj.database = message.database);
        obj.connectionProperties = {};
        if (message.connectionProperties) {
            Object.entries(message.connectionProperties).forEach(([k, v]) => {
                obj.connectionProperties[k] = v;
            });
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PostgresqlConnection_ConnectionManager>, I>>(
        object: I,
    ): PostgresqlConnection_ConnectionManager {
        const message = {
            ...basePostgresqlConnection_ConnectionManager,
        } as PostgresqlConnection_ConnectionManager;
        message.connectionId = object.connectionId ?? '';
        message.database = object.database ?? '';
        message.connectionProperties = Object.entries(object.connectionProperties ?? {}).reduce<{
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

const basePostgresqlConnection_ConnectionManager_ConnectionPropertiesEntry: object = {
    key: '',
    value: '',
};

export const PostgresqlConnection_ConnectionManager_ConnectionPropertiesEntry = {
    encode(
        message: PostgresqlConnection_ConnectionManager_ConnectionPropertiesEntry,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): PostgresqlConnection_ConnectionManager_ConnectionPropertiesEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...basePostgresqlConnection_ConnectionManager_ConnectionPropertiesEntry,
        } as PostgresqlConnection_ConnectionManager_ConnectionPropertiesEntry;
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

    fromJSON(object: any): PostgresqlConnection_ConnectionManager_ConnectionPropertiesEntry {
        const message = {
            ...basePostgresqlConnection_ConnectionManager_ConnectionPropertiesEntry,
        } as PostgresqlConnection_ConnectionManager_ConnectionPropertiesEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: PostgresqlConnection_ConnectionManager_ConnectionPropertiesEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<
        I extends Exact<
            DeepPartial<PostgresqlConnection_ConnectionManager_ConnectionPropertiesEntry>,
            I
        >,
    >(object: I): PostgresqlConnection_ConnectionManager_ConnectionPropertiesEntry {
        const message = {
            ...basePostgresqlConnection_ConnectionManager_ConnectionPropertiesEntry,
        } as PostgresqlConnection_ConnectionManager_ConnectionPropertiesEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const basePostgresqlConnector: object = {};

export const PostgresqlConnector = {
    encode(message: PostgresqlConnector, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.connection !== undefined) {
            PostgresqlConnection.encode(message.connection, writer.uint32(10).fork()).ldelim();
        }
        Object.entries(message.additionalProperties).forEach(([key, value]) => {
            PostgresqlConnector_AdditionalPropertiesEntry.encode(
                { key: key as any, value },
                writer.uint32(18).fork(),
            ).ldelim();
        });
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PostgresqlConnector {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePostgresqlConnector } as PostgresqlConnector;
        message.additionalProperties = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connection = PostgresqlConnection.decode(reader, reader.uint32());
                    break;
                case 2:
                    const entry2 = PostgresqlConnector_AdditionalPropertiesEntry.decode(
                        reader,
                        reader.uint32(),
                    );
                    if (entry2.value !== undefined) {
                        message.additionalProperties[entry2.key] = entry2.value;
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PostgresqlConnector {
        const message = { ...basePostgresqlConnector } as PostgresqlConnector;
        message.connection =
            object.connection !== undefined && object.connection !== null
                ? PostgresqlConnection.fromJSON(object.connection)
                : undefined;
        message.additionalProperties = Object.entries(object.additionalProperties ?? {}).reduce<{
            [key: string]: string;
        }>((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
        }, {});
        return message;
    },

    toJSON(message: PostgresqlConnector): unknown {
        const obj: any = {};
        message.connection !== undefined &&
            (obj.connection = message.connection
                ? PostgresqlConnection.toJSON(message.connection)
                : undefined);
        obj.additionalProperties = {};
        if (message.additionalProperties) {
            Object.entries(message.additionalProperties).forEach(([k, v]) => {
                obj.additionalProperties[k] = v;
            });
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PostgresqlConnector>, I>>(
        object: I,
    ): PostgresqlConnector {
        const message = { ...basePostgresqlConnector } as PostgresqlConnector;
        message.connection =
            object.connection !== undefined && object.connection !== null
                ? PostgresqlConnection.fromPartial(object.connection)
                : undefined;
        message.additionalProperties = Object.entries(object.additionalProperties ?? {}).reduce<{
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

const basePostgresqlConnector_AdditionalPropertiesEntry: object = { key: '', value: '' };

export const PostgresqlConnector_AdditionalPropertiesEntry = {
    encode(
        message: PostgresqlConnector_AdditionalPropertiesEntry,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): PostgresqlConnector_AdditionalPropertiesEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...basePostgresqlConnector_AdditionalPropertiesEntry,
        } as PostgresqlConnector_AdditionalPropertiesEntry;
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

    fromJSON(object: any): PostgresqlConnector_AdditionalPropertiesEntry {
        const message = {
            ...basePostgresqlConnector_AdditionalPropertiesEntry,
        } as PostgresqlConnector_AdditionalPropertiesEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: PostgresqlConnector_AdditionalPropertiesEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PostgresqlConnector_AdditionalPropertiesEntry>, I>>(
        object: I,
    ): PostgresqlConnector_AdditionalPropertiesEntry {
        const message = {
            ...basePostgresqlConnector_AdditionalPropertiesEntry,
        } as PostgresqlConnector_AdditionalPropertiesEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseClickhouseConnection: object = {};

export const ClickhouseConnection = {
    encode(message: ClickhouseConnection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.onPremise !== undefined) {
            ClickhouseConnection_OnPremise.encode(
                message.onPremise,
                writer.uint32(10).fork(),
            ).ldelim();
        }
        if (message.connectionManager !== undefined) {
            ClickhouseConnection_ConnectionManager.encode(
                message.connectionManager,
                writer.uint32(18).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ClickhouseConnection {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseClickhouseConnection } as ClickhouseConnection;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.onPremise = ClickhouseConnection_OnPremise.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 2:
                    message.connectionManager = ClickhouseConnection_ConnectionManager.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ClickhouseConnection {
        const message = { ...baseClickhouseConnection } as ClickhouseConnection;
        message.onPremise =
            object.onPremise !== undefined && object.onPremise !== null
                ? ClickhouseConnection_OnPremise.fromJSON(object.onPremise)
                : undefined;
        message.connectionManager =
            object.connectionManager !== undefined && object.connectionManager !== null
                ? ClickhouseConnection_ConnectionManager.fromJSON(object.connectionManager)
                : undefined;
        return message;
    },

    toJSON(message: ClickhouseConnection): unknown {
        const obj: any = {};
        message.onPremise !== undefined &&
            (obj.onPremise = message.onPremise
                ? ClickhouseConnection_OnPremise.toJSON(message.onPremise)
                : undefined);
        message.connectionManager !== undefined &&
            (obj.connectionManager = message.connectionManager
                ? ClickhouseConnection_ConnectionManager.toJSON(message.connectionManager)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ClickhouseConnection>, I>>(
        object: I,
    ): ClickhouseConnection {
        const message = { ...baseClickhouseConnection } as ClickhouseConnection;
        message.onPremise =
            object.onPremise !== undefined && object.onPremise !== null
                ? ClickhouseConnection_OnPremise.fromPartial(object.onPremise)
                : undefined;
        message.connectionManager =
            object.connectionManager !== undefined && object.connectionManager !== null
                ? ClickhouseConnection_ConnectionManager.fromPartial(object.connectionManager)
                : undefined;
        return message;
    },
};

const baseClickhouseConnection_OnPremise: object = {
    connectionUrl: '',
    userName: '',
    password: '',
};

export const ClickhouseConnection_OnPremise = {
    encode(
        message: ClickhouseConnection_OnPremise,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.connectionUrl !== '') {
            writer.uint32(10).string(message.connectionUrl);
        }
        if (message.userName !== '') {
            writer.uint32(18).string(message.userName);
        }
        if (message.password !== '') {
            writer.uint32(26).string(message.password);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ClickhouseConnection_OnPremise {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseClickhouseConnection_OnPremise } as ClickhouseConnection_OnPremise;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connectionUrl = reader.string();
                    break;
                case 2:
                    message.userName = reader.string();
                    break;
                case 3:
                    message.password = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ClickhouseConnection_OnPremise {
        const message = { ...baseClickhouseConnection_OnPremise } as ClickhouseConnection_OnPremise;
        message.connectionUrl =
            object.connectionUrl !== undefined && object.connectionUrl !== null
                ? String(object.connectionUrl)
                : '';
        message.userName =
            object.userName !== undefined && object.userName !== null
                ? String(object.userName)
                : '';
        message.password =
            object.password !== undefined && object.password !== null
                ? String(object.password)
                : '';
        return message;
    },

    toJSON(message: ClickhouseConnection_OnPremise): unknown {
        const obj: any = {};
        message.connectionUrl !== undefined && (obj.connectionUrl = message.connectionUrl);
        message.userName !== undefined && (obj.userName = message.userName);
        message.password !== undefined && (obj.password = message.password);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ClickhouseConnection_OnPremise>, I>>(
        object: I,
    ): ClickhouseConnection_OnPremise {
        const message = { ...baseClickhouseConnection_OnPremise } as ClickhouseConnection_OnPremise;
        message.connectionUrl = object.connectionUrl ?? '';
        message.userName = object.userName ?? '';
        message.password = object.password ?? '';
        return message;
    },
};

const baseClickhouseConnection_ConnectionManager: object = { connectionId: '', database: '' };

export const ClickhouseConnection_ConnectionManager = {
    encode(
        message: ClickhouseConnection_ConnectionManager,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.connectionId !== '') {
            writer.uint32(10).string(message.connectionId);
        }
        if (message.database !== '') {
            writer.uint32(18).string(message.database);
        }
        Object.entries(message.connectionProperties).forEach(([key, value]) => {
            ClickhouseConnection_ConnectionManager_ConnectionPropertiesEntry.encode(
                { key: key as any, value },
                writer.uint32(26).fork(),
            ).ldelim();
        });
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): ClickhouseConnection_ConnectionManager {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseClickhouseConnection_ConnectionManager,
        } as ClickhouseConnection_ConnectionManager;
        message.connectionProperties = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connectionId = reader.string();
                    break;
                case 2:
                    message.database = reader.string();
                    break;
                case 3:
                    const entry3 =
                        ClickhouseConnection_ConnectionManager_ConnectionPropertiesEntry.decode(
                            reader,
                            reader.uint32(),
                        );
                    if (entry3.value !== undefined) {
                        message.connectionProperties[entry3.key] = entry3.value;
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ClickhouseConnection_ConnectionManager {
        const message = {
            ...baseClickhouseConnection_ConnectionManager,
        } as ClickhouseConnection_ConnectionManager;
        message.connectionId =
            object.connectionId !== undefined && object.connectionId !== null
                ? String(object.connectionId)
                : '';
        message.database =
            object.database !== undefined && object.database !== null
                ? String(object.database)
                : '';
        message.connectionProperties = Object.entries(object.connectionProperties ?? {}).reduce<{
            [key: string]: string;
        }>((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
        }, {});
        return message;
    },

    toJSON(message: ClickhouseConnection_ConnectionManager): unknown {
        const obj: any = {};
        message.connectionId !== undefined && (obj.connectionId = message.connectionId);
        message.database !== undefined && (obj.database = message.database);
        obj.connectionProperties = {};
        if (message.connectionProperties) {
            Object.entries(message.connectionProperties).forEach(([k, v]) => {
                obj.connectionProperties[k] = v;
            });
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ClickhouseConnection_ConnectionManager>, I>>(
        object: I,
    ): ClickhouseConnection_ConnectionManager {
        const message = {
            ...baseClickhouseConnection_ConnectionManager,
        } as ClickhouseConnection_ConnectionManager;
        message.connectionId = object.connectionId ?? '';
        message.database = object.database ?? '';
        message.connectionProperties = Object.entries(object.connectionProperties ?? {}).reduce<{
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

const baseClickhouseConnection_ConnectionManager_ConnectionPropertiesEntry: object = {
    key: '',
    value: '',
};

export const ClickhouseConnection_ConnectionManager_ConnectionPropertiesEntry = {
    encode(
        message: ClickhouseConnection_ConnectionManager_ConnectionPropertiesEntry,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): ClickhouseConnection_ConnectionManager_ConnectionPropertiesEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseClickhouseConnection_ConnectionManager_ConnectionPropertiesEntry,
        } as ClickhouseConnection_ConnectionManager_ConnectionPropertiesEntry;
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

    fromJSON(object: any): ClickhouseConnection_ConnectionManager_ConnectionPropertiesEntry {
        const message = {
            ...baseClickhouseConnection_ConnectionManager_ConnectionPropertiesEntry,
        } as ClickhouseConnection_ConnectionManager_ConnectionPropertiesEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: ClickhouseConnection_ConnectionManager_ConnectionPropertiesEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<
        I extends Exact<
            DeepPartial<ClickhouseConnection_ConnectionManager_ConnectionPropertiesEntry>,
            I
        >,
    >(object: I): ClickhouseConnection_ConnectionManager_ConnectionPropertiesEntry {
        const message = {
            ...baseClickhouseConnection_ConnectionManager_ConnectionPropertiesEntry,
        } as ClickhouseConnection_ConnectionManager_ConnectionPropertiesEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseClickhouseConnector: object = {};

export const ClickhouseConnector = {
    encode(message: ClickhouseConnector, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.connection !== undefined) {
            ClickhouseConnection.encode(message.connection, writer.uint32(10).fork()).ldelim();
        }
        Object.entries(message.additionalProperties).forEach(([key, value]) => {
            ClickhouseConnector_AdditionalPropertiesEntry.encode(
                { key: key as any, value },
                writer.uint32(18).fork(),
            ).ldelim();
        });
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ClickhouseConnector {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseClickhouseConnector } as ClickhouseConnector;
        message.additionalProperties = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connection = ClickhouseConnection.decode(reader, reader.uint32());
                    break;
                case 2:
                    const entry2 = ClickhouseConnector_AdditionalPropertiesEntry.decode(
                        reader,
                        reader.uint32(),
                    );
                    if (entry2.value !== undefined) {
                        message.additionalProperties[entry2.key] = entry2.value;
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ClickhouseConnector {
        const message = { ...baseClickhouseConnector } as ClickhouseConnector;
        message.connection =
            object.connection !== undefined && object.connection !== null
                ? ClickhouseConnection.fromJSON(object.connection)
                : undefined;
        message.additionalProperties = Object.entries(object.additionalProperties ?? {}).reduce<{
            [key: string]: string;
        }>((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
        }, {});
        return message;
    },

    toJSON(message: ClickhouseConnector): unknown {
        const obj: any = {};
        message.connection !== undefined &&
            (obj.connection = message.connection
                ? ClickhouseConnection.toJSON(message.connection)
                : undefined);
        obj.additionalProperties = {};
        if (message.additionalProperties) {
            Object.entries(message.additionalProperties).forEach(([k, v]) => {
                obj.additionalProperties[k] = v;
            });
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ClickhouseConnector>, I>>(
        object: I,
    ): ClickhouseConnector {
        const message = { ...baseClickhouseConnector } as ClickhouseConnector;
        message.connection =
            object.connection !== undefined && object.connection !== null
                ? ClickhouseConnection.fromPartial(object.connection)
                : undefined;
        message.additionalProperties = Object.entries(object.additionalProperties ?? {}).reduce<{
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

const baseClickhouseConnector_AdditionalPropertiesEntry: object = { key: '', value: '' };

export const ClickhouseConnector_AdditionalPropertiesEntry = {
    encode(
        message: ClickhouseConnector_AdditionalPropertiesEntry,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): ClickhouseConnector_AdditionalPropertiesEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseClickhouseConnector_AdditionalPropertiesEntry,
        } as ClickhouseConnector_AdditionalPropertiesEntry;
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

    fromJSON(object: any): ClickhouseConnector_AdditionalPropertiesEntry {
        const message = {
            ...baseClickhouseConnector_AdditionalPropertiesEntry,
        } as ClickhouseConnector_AdditionalPropertiesEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: ClickhouseConnector_AdditionalPropertiesEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ClickhouseConnector_AdditionalPropertiesEntry>, I>>(
        object: I,
    ): ClickhouseConnector_AdditionalPropertiesEntry {
        const message = {
            ...baseClickhouseConnector_AdditionalPropertiesEntry,
        } as ClickhouseConnector_AdditionalPropertiesEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseTPCHConnector: object = {};

export const TPCHConnector = {
    encode(message: TPCHConnector, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        Object.entries(message.additionalProperties).forEach(([key, value]) => {
            TPCHConnector_AdditionalPropertiesEntry.encode(
                { key: key as any, value },
                writer.uint32(10).fork(),
            ).ldelim();
        });
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): TPCHConnector {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTPCHConnector } as TPCHConnector;
        message.additionalProperties = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    const entry1 = TPCHConnector_AdditionalPropertiesEntry.decode(
                        reader,
                        reader.uint32(),
                    );
                    if (entry1.value !== undefined) {
                        message.additionalProperties[entry1.key] = entry1.value;
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): TPCHConnector {
        const message = { ...baseTPCHConnector } as TPCHConnector;
        message.additionalProperties = Object.entries(object.additionalProperties ?? {}).reduce<{
            [key: string]: string;
        }>((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
        }, {});
        return message;
    },

    toJSON(message: TPCHConnector): unknown {
        const obj: any = {};
        obj.additionalProperties = {};
        if (message.additionalProperties) {
            Object.entries(message.additionalProperties).forEach(([k, v]) => {
                obj.additionalProperties[k] = v;
            });
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<TPCHConnector>, I>>(object: I): TPCHConnector {
        const message = { ...baseTPCHConnector } as TPCHConnector;
        message.additionalProperties = Object.entries(object.additionalProperties ?? {}).reduce<{
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

const baseTPCHConnector_AdditionalPropertiesEntry: object = { key: '', value: '' };

export const TPCHConnector_AdditionalPropertiesEntry = {
    encode(
        message: TPCHConnector_AdditionalPropertiesEntry,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): TPCHConnector_AdditionalPropertiesEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseTPCHConnector_AdditionalPropertiesEntry,
        } as TPCHConnector_AdditionalPropertiesEntry;
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

    fromJSON(object: any): TPCHConnector_AdditionalPropertiesEntry {
        const message = {
            ...baseTPCHConnector_AdditionalPropertiesEntry,
        } as TPCHConnector_AdditionalPropertiesEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: TPCHConnector_AdditionalPropertiesEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<TPCHConnector_AdditionalPropertiesEntry>, I>>(
        object: I,
    ): TPCHConnector_AdditionalPropertiesEntry {
        const message = {
            ...baseTPCHConnector_AdditionalPropertiesEntry,
        } as TPCHConnector_AdditionalPropertiesEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseTPCDSConnector: object = {};

export const TPCDSConnector = {
    encode(message: TPCDSConnector, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        Object.entries(message.additionalProperties).forEach(([key, value]) => {
            TPCDSConnector_AdditionalPropertiesEntry.encode(
                { key: key as any, value },
                writer.uint32(10).fork(),
            ).ldelim();
        });
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): TPCDSConnector {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTPCDSConnector } as TPCDSConnector;
        message.additionalProperties = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    const entry1 = TPCDSConnector_AdditionalPropertiesEntry.decode(
                        reader,
                        reader.uint32(),
                    );
                    if (entry1.value !== undefined) {
                        message.additionalProperties[entry1.key] = entry1.value;
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): TPCDSConnector {
        const message = { ...baseTPCDSConnector } as TPCDSConnector;
        message.additionalProperties = Object.entries(object.additionalProperties ?? {}).reduce<{
            [key: string]: string;
        }>((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
        }, {});
        return message;
    },

    toJSON(message: TPCDSConnector): unknown {
        const obj: any = {};
        obj.additionalProperties = {};
        if (message.additionalProperties) {
            Object.entries(message.additionalProperties).forEach(([k, v]) => {
                obj.additionalProperties[k] = v;
            });
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<TPCDSConnector>, I>>(object: I): TPCDSConnector {
        const message = { ...baseTPCDSConnector } as TPCDSConnector;
        message.additionalProperties = Object.entries(object.additionalProperties ?? {}).reduce<{
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

const baseTPCDSConnector_AdditionalPropertiesEntry: object = { key: '', value: '' };

export const TPCDSConnector_AdditionalPropertiesEntry = {
    encode(
        message: TPCDSConnector_AdditionalPropertiesEntry,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): TPCDSConnector_AdditionalPropertiesEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseTPCDSConnector_AdditionalPropertiesEntry,
        } as TPCDSConnector_AdditionalPropertiesEntry;
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

    fromJSON(object: any): TPCDSConnector_AdditionalPropertiesEntry {
        const message = {
            ...baseTPCDSConnector_AdditionalPropertiesEntry,
        } as TPCDSConnector_AdditionalPropertiesEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: TPCDSConnector_AdditionalPropertiesEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<TPCDSConnector_AdditionalPropertiesEntry>, I>>(
        object: I,
    ): TPCDSConnector_AdditionalPropertiesEntry {
        const message = {
            ...baseTPCDSConnector_AdditionalPropertiesEntry,
        } as TPCDSConnector_AdditionalPropertiesEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseOracleConnection: object = {};

export const OracleConnection = {
    encode(message: OracleConnection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.onPremise !== undefined) {
            OracleConnection_OnPremise.encode(message.onPremise, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): OracleConnection {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseOracleConnection } as OracleConnection;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.onPremise = OracleConnection_OnPremise.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): OracleConnection {
        const message = { ...baseOracleConnection } as OracleConnection;
        message.onPremise =
            object.onPremise !== undefined && object.onPremise !== null
                ? OracleConnection_OnPremise.fromJSON(object.onPremise)
                : undefined;
        return message;
    },

    toJSON(message: OracleConnection): unknown {
        const obj: any = {};
        message.onPremise !== undefined &&
            (obj.onPremise = message.onPremise
                ? OracleConnection_OnPremise.toJSON(message.onPremise)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<OracleConnection>, I>>(object: I): OracleConnection {
        const message = { ...baseOracleConnection } as OracleConnection;
        message.onPremise =
            object.onPremise !== undefined && object.onPremise !== null
                ? OracleConnection_OnPremise.fromPartial(object.onPremise)
                : undefined;
        return message;
    },
};

const baseOracleConnection_OnPremise: object = { connectionUrl: '', userName: '', password: '' };

export const OracleConnection_OnPremise = {
    encode(
        message: OracleConnection_OnPremise,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.connectionUrl !== '') {
            writer.uint32(10).string(message.connectionUrl);
        }
        if (message.userName !== '') {
            writer.uint32(18).string(message.userName);
        }
        if (message.password !== '') {
            writer.uint32(26).string(message.password);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): OracleConnection_OnPremise {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseOracleConnection_OnPremise } as OracleConnection_OnPremise;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connectionUrl = reader.string();
                    break;
                case 2:
                    message.userName = reader.string();
                    break;
                case 3:
                    message.password = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): OracleConnection_OnPremise {
        const message = { ...baseOracleConnection_OnPremise } as OracleConnection_OnPremise;
        message.connectionUrl =
            object.connectionUrl !== undefined && object.connectionUrl !== null
                ? String(object.connectionUrl)
                : '';
        message.userName =
            object.userName !== undefined && object.userName !== null
                ? String(object.userName)
                : '';
        message.password =
            object.password !== undefined && object.password !== null
                ? String(object.password)
                : '';
        return message;
    },

    toJSON(message: OracleConnection_OnPremise): unknown {
        const obj: any = {};
        message.connectionUrl !== undefined && (obj.connectionUrl = message.connectionUrl);
        message.userName !== undefined && (obj.userName = message.userName);
        message.password !== undefined && (obj.password = message.password);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<OracleConnection_OnPremise>, I>>(
        object: I,
    ): OracleConnection_OnPremise {
        const message = { ...baseOracleConnection_OnPremise } as OracleConnection_OnPremise;
        message.connectionUrl = object.connectionUrl ?? '';
        message.userName = object.userName ?? '';
        message.password = object.password ?? '';
        return message;
    },
};

const baseOracleConnector: object = {};

export const OracleConnector = {
    encode(message: OracleConnector, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.connection !== undefined) {
            OracleConnection.encode(message.connection, writer.uint32(10).fork()).ldelim();
        }
        Object.entries(message.additionalProperties).forEach(([key, value]) => {
            OracleConnector_AdditionalPropertiesEntry.encode(
                { key: key as any, value },
                writer.uint32(18).fork(),
            ).ldelim();
        });
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): OracleConnector {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseOracleConnector } as OracleConnector;
        message.additionalProperties = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connection = OracleConnection.decode(reader, reader.uint32());
                    break;
                case 2:
                    const entry2 = OracleConnector_AdditionalPropertiesEntry.decode(
                        reader,
                        reader.uint32(),
                    );
                    if (entry2.value !== undefined) {
                        message.additionalProperties[entry2.key] = entry2.value;
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): OracleConnector {
        const message = { ...baseOracleConnector } as OracleConnector;
        message.connection =
            object.connection !== undefined && object.connection !== null
                ? OracleConnection.fromJSON(object.connection)
                : undefined;
        message.additionalProperties = Object.entries(object.additionalProperties ?? {}).reduce<{
            [key: string]: string;
        }>((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
        }, {});
        return message;
    },

    toJSON(message: OracleConnector): unknown {
        const obj: any = {};
        message.connection !== undefined &&
            (obj.connection = message.connection
                ? OracleConnection.toJSON(message.connection)
                : undefined);
        obj.additionalProperties = {};
        if (message.additionalProperties) {
            Object.entries(message.additionalProperties).forEach(([k, v]) => {
                obj.additionalProperties[k] = v;
            });
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<OracleConnector>, I>>(object: I): OracleConnector {
        const message = { ...baseOracleConnector } as OracleConnector;
        message.connection =
            object.connection !== undefined && object.connection !== null
                ? OracleConnection.fromPartial(object.connection)
                : undefined;
        message.additionalProperties = Object.entries(object.additionalProperties ?? {}).reduce<{
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

const baseOracleConnector_AdditionalPropertiesEntry: object = { key: '', value: '' };

export const OracleConnector_AdditionalPropertiesEntry = {
    encode(
        message: OracleConnector_AdditionalPropertiesEntry,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): OracleConnector_AdditionalPropertiesEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseOracleConnector_AdditionalPropertiesEntry,
        } as OracleConnector_AdditionalPropertiesEntry;
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

    fromJSON(object: any): OracleConnector_AdditionalPropertiesEntry {
        const message = {
            ...baseOracleConnector_AdditionalPropertiesEntry,
        } as OracleConnector_AdditionalPropertiesEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: OracleConnector_AdditionalPropertiesEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<OracleConnector_AdditionalPropertiesEntry>, I>>(
        object: I,
    ): OracleConnector_AdditionalPropertiesEntry {
        const message = {
            ...baseOracleConnector_AdditionalPropertiesEntry,
        } as OracleConnector_AdditionalPropertiesEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseSQLServerConnection: object = {};

export const SQLServerConnection = {
    encode(message: SQLServerConnection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.onPremise !== undefined) {
            SQLServerConnection_OnPremise.encode(
                message.onPremise,
                writer.uint32(10).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SQLServerConnection {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSQLServerConnection } as SQLServerConnection;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.onPremise = SQLServerConnection_OnPremise.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): SQLServerConnection {
        const message = { ...baseSQLServerConnection } as SQLServerConnection;
        message.onPremise =
            object.onPremise !== undefined && object.onPremise !== null
                ? SQLServerConnection_OnPremise.fromJSON(object.onPremise)
                : undefined;
        return message;
    },

    toJSON(message: SQLServerConnection): unknown {
        const obj: any = {};
        message.onPremise !== undefined &&
            (obj.onPremise = message.onPremise
                ? SQLServerConnection_OnPremise.toJSON(message.onPremise)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SQLServerConnection>, I>>(
        object: I,
    ): SQLServerConnection {
        const message = { ...baseSQLServerConnection } as SQLServerConnection;
        message.onPremise =
            object.onPremise !== undefined && object.onPremise !== null
                ? SQLServerConnection_OnPremise.fromPartial(object.onPremise)
                : undefined;
        return message;
    },
};

const baseSQLServerConnection_OnPremise: object = { connectionUrl: '', userName: '', password: '' };

export const SQLServerConnection_OnPremise = {
    encode(
        message: SQLServerConnection_OnPremise,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.connectionUrl !== '') {
            writer.uint32(10).string(message.connectionUrl);
        }
        if (message.userName !== '') {
            writer.uint32(18).string(message.userName);
        }
        if (message.password !== '') {
            writer.uint32(26).string(message.password);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SQLServerConnection_OnPremise {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSQLServerConnection_OnPremise } as SQLServerConnection_OnPremise;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connectionUrl = reader.string();
                    break;
                case 2:
                    message.userName = reader.string();
                    break;
                case 3:
                    message.password = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): SQLServerConnection_OnPremise {
        const message = { ...baseSQLServerConnection_OnPremise } as SQLServerConnection_OnPremise;
        message.connectionUrl =
            object.connectionUrl !== undefined && object.connectionUrl !== null
                ? String(object.connectionUrl)
                : '';
        message.userName =
            object.userName !== undefined && object.userName !== null
                ? String(object.userName)
                : '';
        message.password =
            object.password !== undefined && object.password !== null
                ? String(object.password)
                : '';
        return message;
    },

    toJSON(message: SQLServerConnection_OnPremise): unknown {
        const obj: any = {};
        message.connectionUrl !== undefined && (obj.connectionUrl = message.connectionUrl);
        message.userName !== undefined && (obj.userName = message.userName);
        message.password !== undefined && (obj.password = message.password);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SQLServerConnection_OnPremise>, I>>(
        object: I,
    ): SQLServerConnection_OnPremise {
        const message = { ...baseSQLServerConnection_OnPremise } as SQLServerConnection_OnPremise;
        message.connectionUrl = object.connectionUrl ?? '';
        message.userName = object.userName ?? '';
        message.password = object.password ?? '';
        return message;
    },
};

const baseSQLServerConnector: object = {};

export const SQLServerConnector = {
    encode(message: SQLServerConnector, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.connection !== undefined) {
            SQLServerConnection.encode(message.connection, writer.uint32(10).fork()).ldelim();
        }
        Object.entries(message.additionalProperties).forEach(([key, value]) => {
            SQLServerConnector_AdditionalPropertiesEntry.encode(
                { key: key as any, value },
                writer.uint32(18).fork(),
            ).ldelim();
        });
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SQLServerConnector {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSQLServerConnector } as SQLServerConnector;
        message.additionalProperties = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connection = SQLServerConnection.decode(reader, reader.uint32());
                    break;
                case 2:
                    const entry2 = SQLServerConnector_AdditionalPropertiesEntry.decode(
                        reader,
                        reader.uint32(),
                    );
                    if (entry2.value !== undefined) {
                        message.additionalProperties[entry2.key] = entry2.value;
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): SQLServerConnector {
        const message = { ...baseSQLServerConnector } as SQLServerConnector;
        message.connection =
            object.connection !== undefined && object.connection !== null
                ? SQLServerConnection.fromJSON(object.connection)
                : undefined;
        message.additionalProperties = Object.entries(object.additionalProperties ?? {}).reduce<{
            [key: string]: string;
        }>((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
        }, {});
        return message;
    },

    toJSON(message: SQLServerConnector): unknown {
        const obj: any = {};
        message.connection !== undefined &&
            (obj.connection = message.connection
                ? SQLServerConnection.toJSON(message.connection)
                : undefined);
        obj.additionalProperties = {};
        if (message.additionalProperties) {
            Object.entries(message.additionalProperties).forEach(([k, v]) => {
                obj.additionalProperties[k] = v;
            });
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SQLServerConnector>, I>>(
        object: I,
    ): SQLServerConnector {
        const message = { ...baseSQLServerConnector } as SQLServerConnector;
        message.connection =
            object.connection !== undefined && object.connection !== null
                ? SQLServerConnection.fromPartial(object.connection)
                : undefined;
        message.additionalProperties = Object.entries(object.additionalProperties ?? {}).reduce<{
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

const baseSQLServerConnector_AdditionalPropertiesEntry: object = { key: '', value: '' };

export const SQLServerConnector_AdditionalPropertiesEntry = {
    encode(
        message: SQLServerConnector_AdditionalPropertiesEntry,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): SQLServerConnector_AdditionalPropertiesEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseSQLServerConnector_AdditionalPropertiesEntry,
        } as SQLServerConnector_AdditionalPropertiesEntry;
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

    fromJSON(object: any): SQLServerConnector_AdditionalPropertiesEntry {
        const message = {
            ...baseSQLServerConnector_AdditionalPropertiesEntry,
        } as SQLServerConnector_AdditionalPropertiesEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: SQLServerConnector_AdditionalPropertiesEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SQLServerConnector_AdditionalPropertiesEntry>, I>>(
        object: I,
    ): SQLServerConnector_AdditionalPropertiesEntry {
        const message = {
            ...baseSQLServerConnector_AdditionalPropertiesEntry,
        } as SQLServerConnector_AdditionalPropertiesEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
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
