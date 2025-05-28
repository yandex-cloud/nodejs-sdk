/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Int64Value } from '../../../../../../google/protobuf/wrappers';

export const protobufPackage = 'yandex.cloud.mdb.elasticsearch.v1.config';

/**
 * Elasticsearch 7.x supported configuration options are listed here.
 *
 * Detailed description for each set of options is available in [Elasticsearch documentation](https://www.elastic.co/guide/en/elasticsearch/reference/current/index.html).
 *
 * Any options that are not listed here are not supported.
 */
export interface ElasticsearchConfig7 {
    /**
     * The maximum number of clauses a boolean query can contain.
     *
     * The limit is in place to prevent searches from becoming too large and taking up too much CPU and memory.
     * It affects not only Elasticsearch's `bool` query, but many other queries that are implicitly converted to `bool` query by Elastcsearch.
     *
     * Default value: `1024`.
     *
     * See in-depth description in [Elasticsearch documentation](https://www.elastic.co/guide/en/elasticsearch/reference/current/search-settings.html).
     */
    maxClauseCount?: number;
    /**
     * The maximum percentage or absolute value (10%, 512mb) of heap space that is allocated to field data cache.
     *
     * All the field values that are placed in this cache, get loaded to memory in order to provide fast document based access to those values.
     * Building the field data cache for a field can be an expensive operations, so its recommended to have enough memory for this cache, and to keep it loaded.
     *
     * Default value: unbounded.
     *
     * See in-depth description in [Elasticsearch documentation](https://www.elastic.co/guide/en/elasticsearch/reference/current/modules-fielddata.html).
     */
    fielddataCacheSize: string;
    /**
     * Remote hosts for reindex have to be explicitly allowed in elasticsearch.yml using the reindex.remote.whitelist property.
     * It can be set to a comma delimited list of allowed remote host and port combinations.
     * Scheme is ignored, only the host and port are used.
     */
    reindexRemoteWhitelist: string;
    /**
     * List of paths to PEM encoded certificate files that should be trusted.
     *
     * See in-depth description in [Elasticsearch documentation](https://www.elastic.co/guide/en/elasticsearch/reference/current/docs-reindex.html#reindex-ssl)
     */
    reindexSslCaPath: string;
}

/** Elasticsearch 7.x data node configuration. */
export interface ElasticsearchConfigSet7 {
    /** Effective settings for an Elasticsearch cluster (a combination of settings defined in [user_config] and [default_config]). */
    effectiveConfig?: ElasticsearchConfig7;
    /** User-defined settings for an Elasticsearch cluster. */
    userConfig?: ElasticsearchConfig7;
    /** Default settings for an Elasticsearch cluster. */
    defaultConfig?: ElasticsearchConfig7;
}

const baseElasticsearchConfig7: object = {
    fielddataCacheSize: '',
    reindexRemoteWhitelist: '',
    reindexSslCaPath: '',
};

export const ElasticsearchConfig7 = {
    encode(message: ElasticsearchConfig7, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.maxClauseCount !== undefined) {
            Int64Value.encode(
                { value: message.maxClauseCount! },
                writer.uint32(26).fork(),
            ).ldelim();
        }
        if (message.fielddataCacheSize !== '') {
            writer.uint32(34).string(message.fielddataCacheSize);
        }
        if (message.reindexRemoteWhitelist !== '') {
            writer.uint32(50).string(message.reindexRemoteWhitelist);
        }
        if (message.reindexSslCaPath !== '') {
            writer.uint32(58).string(message.reindexSslCaPath);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ElasticsearchConfig7 {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseElasticsearchConfig7 } as ElasticsearchConfig7;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 3:
                    message.maxClauseCount = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 4:
                    message.fielddataCacheSize = reader.string();
                    break;
                case 6:
                    message.reindexRemoteWhitelist = reader.string();
                    break;
                case 7:
                    message.reindexSslCaPath = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ElasticsearchConfig7 {
        const message = { ...baseElasticsearchConfig7 } as ElasticsearchConfig7;
        message.maxClauseCount =
            object.maxClauseCount !== undefined && object.maxClauseCount !== null
                ? Number(object.maxClauseCount)
                : undefined;
        message.fielddataCacheSize =
            object.fielddataCacheSize !== undefined && object.fielddataCacheSize !== null
                ? String(object.fielddataCacheSize)
                : '';
        message.reindexRemoteWhitelist =
            object.reindexRemoteWhitelist !== undefined && object.reindexRemoteWhitelist !== null
                ? String(object.reindexRemoteWhitelist)
                : '';
        message.reindexSslCaPath =
            object.reindexSslCaPath !== undefined && object.reindexSslCaPath !== null
                ? String(object.reindexSslCaPath)
                : '';
        return message;
    },

    toJSON(message: ElasticsearchConfig7): unknown {
        const obj: any = {};
        message.maxClauseCount !== undefined && (obj.maxClauseCount = message.maxClauseCount);
        message.fielddataCacheSize !== undefined &&
            (obj.fielddataCacheSize = message.fielddataCacheSize);
        message.reindexRemoteWhitelist !== undefined &&
            (obj.reindexRemoteWhitelist = message.reindexRemoteWhitelist);
        message.reindexSslCaPath !== undefined && (obj.reindexSslCaPath = message.reindexSslCaPath);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ElasticsearchConfig7>, I>>(
        object: I,
    ): ElasticsearchConfig7 {
        const message = { ...baseElasticsearchConfig7 } as ElasticsearchConfig7;
        message.maxClauseCount = object.maxClauseCount ?? undefined;
        message.fielddataCacheSize = object.fielddataCacheSize ?? '';
        message.reindexRemoteWhitelist = object.reindexRemoteWhitelist ?? '';
        message.reindexSslCaPath = object.reindexSslCaPath ?? '';
        return message;
    },
};

const baseElasticsearchConfigSet7: object = {};

export const ElasticsearchConfigSet7 = {
    encode(message: ElasticsearchConfigSet7, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.effectiveConfig !== undefined) {
            ElasticsearchConfig7.encode(message.effectiveConfig, writer.uint32(10).fork()).ldelim();
        }
        if (message.userConfig !== undefined) {
            ElasticsearchConfig7.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
        }
        if (message.defaultConfig !== undefined) {
            ElasticsearchConfig7.encode(message.defaultConfig, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ElasticsearchConfigSet7 {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseElasticsearchConfigSet7 } as ElasticsearchConfigSet7;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.effectiveConfig = ElasticsearchConfig7.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.userConfig = ElasticsearchConfig7.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.defaultConfig = ElasticsearchConfig7.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ElasticsearchConfigSet7 {
        const message = { ...baseElasticsearchConfigSet7 } as ElasticsearchConfigSet7;
        message.effectiveConfig =
            object.effectiveConfig !== undefined && object.effectiveConfig !== null
                ? ElasticsearchConfig7.fromJSON(object.effectiveConfig)
                : undefined;
        message.userConfig =
            object.userConfig !== undefined && object.userConfig !== null
                ? ElasticsearchConfig7.fromJSON(object.userConfig)
                : undefined;
        message.defaultConfig =
            object.defaultConfig !== undefined && object.defaultConfig !== null
                ? ElasticsearchConfig7.fromJSON(object.defaultConfig)
                : undefined;
        return message;
    },

    toJSON(message: ElasticsearchConfigSet7): unknown {
        const obj: any = {};
        message.effectiveConfig !== undefined &&
            (obj.effectiveConfig = message.effectiveConfig
                ? ElasticsearchConfig7.toJSON(message.effectiveConfig)
                : undefined);
        message.userConfig !== undefined &&
            (obj.userConfig = message.userConfig
                ? ElasticsearchConfig7.toJSON(message.userConfig)
                : undefined);
        message.defaultConfig !== undefined &&
            (obj.defaultConfig = message.defaultConfig
                ? ElasticsearchConfig7.toJSON(message.defaultConfig)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ElasticsearchConfigSet7>, I>>(
        object: I,
    ): ElasticsearchConfigSet7 {
        const message = { ...baseElasticsearchConfigSet7 } as ElasticsearchConfigSet7;
        message.effectiveConfig =
            object.effectiveConfig !== undefined && object.effectiveConfig !== null
                ? ElasticsearchConfig7.fromPartial(object.effectiveConfig)
                : undefined;
        message.userConfig =
            object.userConfig !== undefined && object.userConfig !== null
                ? ElasticsearchConfig7.fromPartial(object.userConfig)
                : undefined;
        message.defaultConfig =
            object.defaultConfig !== undefined && object.defaultConfig !== null
                ? ElasticsearchConfig7.fromPartial(object.defaultConfig)
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
