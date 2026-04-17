/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Int64Value, StringValue } from '../../../../../../google/protobuf/wrappers';

export const protobufPackage = 'yandex.cloud.mdb.opensearch.v1.config';

/** OpenSearch server configuration settings. */
export interface OpenSearchConfig2 {
    /**
     * Defines the maximum product of fields and terms that are queryable simultaneously.
     *
     * Default value: **1024**.
     *
     * Change of the setting is applied with restart.
     *
     * For details, see [OpenSearch documentation](https://docs.opensearch.org/latest/install-and-configure/configuring-opensearch/index-settings/#dynamic-cluster-level-index-settings).
     */
    maxClauseCount?: number;
    /**
     * The maximum size of the field data cache.
     * May be specified as an absolute value (for example, 8GB) or a percentage of the node heap (for example, 50%).
     * This setting is dynamic. If you don't specify this setting, the maximum size is 35%.
     * This value should be smaller than the **indices.breaker.fielddata.limit**
     *
     * Change of the setting is applied with restart.
     *
     * For details, see [OpenSearch documentation](https://docs.opensearch.org/latest/install-and-configure/configuring-opensearch/index-settings/#dynamic-cluster-level-index-settings).
     */
    fielddataCacheSize: string;
    /**
     * The maximum number of aggregation buckets allowed in a single response. Default is 65535
     *
     * Default value: **65535**.
     *
     * Change of the setting is applied with restart.
     *
     * For details, see [OpenSearch documentation](https://docs.opensearch.org/latest/install-and-configure/configuring-opensearch/search-settings).
     */
    searchMaxBuckets?: number;
    /**
     * Allowed remote hosts
     *
     * Change of the setting is applied with restart.
     *
     * For details, see [OpenSearch documentation](https://docs.opensearch.org/latest/api-reference/document-apis/reindex/#remote-cluster-allow-list).
     */
    reindexRemoteWhitelist: string;
    /**
     * Sets the maximum length allowed for HTTP URLs in the initial request line. URLs exceeding this limit will be rejected. Default is **4kb**.
     *
     * Default value: **4kb**.
     *
     * Change of the setting is applied with restart.
     *
     * For details, see [OpenSearch documentation](https://docs.opensearch.org/latest/install-and-configure/configuring-opensearch/network-settings/#advanced-http-settings).
     */
    httpMaxInitialLineLength?: string;
}

export interface OpenSearchConfigSet2 {
    /** Effective configuration (a combination of user-defined configuration and default configuration). */
    effectiveConfig?: OpenSearchConfig2;
    /** User-defined configuration. */
    userConfig?: OpenSearchConfig2;
    /** Default configuration. */
    defaultConfig?: OpenSearchConfig2;
}

const baseOpenSearchConfig2: object = { fielddataCacheSize: '', reindexRemoteWhitelist: '' };

export const OpenSearchConfig2: {
    encode(message: OpenSearchConfig2, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OpenSearchConfig2;
    fromJSON(object: any): OpenSearchConfig2;
    toJSON(message: OpenSearchConfig2): unknown;
    fromPartial<I extends Exact<DeepPartial<OpenSearchConfig2>, I>>(object: I): OpenSearchConfig2;
} = {
    encode(message: OpenSearchConfig2, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.maxClauseCount !== undefined) {
            Int64Value.encode(
                { value: message.maxClauseCount! },
                writer.uint32(26).fork(),
            ).ldelim();
        }
        if (message.fielddataCacheSize !== '') {
            writer.uint32(34).string(message.fielddataCacheSize);
        }
        if (message.searchMaxBuckets !== undefined) {
            Int64Value.encode(
                { value: message.searchMaxBuckets! },
                writer.uint32(42).fork(),
            ).ldelim();
        }
        if (message.reindexRemoteWhitelist !== '') {
            writer.uint32(50).string(message.reindexRemoteWhitelist);
        }
        if (message.httpMaxInitialLineLength !== undefined) {
            StringValue.encode(
                { value: message.httpMaxInitialLineLength! },
                writer.uint32(66).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): OpenSearchConfig2 {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseOpenSearchConfig2 } as OpenSearchConfig2;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 3:
                    message.maxClauseCount = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 4:
                    message.fielddataCacheSize = reader.string();
                    break;
                case 5:
                    message.searchMaxBuckets = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 6:
                    message.reindexRemoteWhitelist = reader.string();
                    break;
                case 8:
                    message.httpMaxInitialLineLength = StringValue.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): OpenSearchConfig2 {
        const message = { ...baseOpenSearchConfig2 } as OpenSearchConfig2;
        message.maxClauseCount =
            object.max_clause_count !== undefined && object.max_clause_count !== null
                ? Number(object.max_clause_count)
                : undefined;
        message.fielddataCacheSize =
            object.fielddata_cache_size !== undefined && object.fielddata_cache_size !== null
                ? String(object.fielddata_cache_size)
                : '';
        message.searchMaxBuckets =
            object.search_max_buckets !== undefined && object.search_max_buckets !== null
                ? Number(object.search_max_buckets)
                : undefined;
        message.reindexRemoteWhitelist =
            object.reindex_remote_whitelist !== undefined &&
            object.reindex_remote_whitelist !== null
                ? String(object.reindex_remote_whitelist)
                : '';
        message.httpMaxInitialLineLength =
            object.http_max_initial_line_length !== undefined &&
            object.http_max_initial_line_length !== null
                ? String(object.http_max_initial_line_length)
                : undefined;
        return message;
    },

    toJSON(message: OpenSearchConfig2): unknown {
        const obj: any = {};
        message.maxClauseCount !== undefined && (obj.max_clause_count = message.maxClauseCount);
        message.fielddataCacheSize !== undefined &&
            (obj.fielddata_cache_size = message.fielddataCacheSize);
        message.searchMaxBuckets !== undefined &&
            (obj.search_max_buckets = message.searchMaxBuckets);
        message.reindexRemoteWhitelist !== undefined &&
            (obj.reindex_remote_whitelist = message.reindexRemoteWhitelist);
        message.httpMaxInitialLineLength !== undefined &&
            (obj.http_max_initial_line_length = message.httpMaxInitialLineLength);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<OpenSearchConfig2>, I>>(object: I): OpenSearchConfig2 {
        const message = { ...baseOpenSearchConfig2 } as OpenSearchConfig2;
        message.maxClauseCount = object.maxClauseCount ?? undefined;
        message.fielddataCacheSize = object.fielddataCacheSize ?? '';
        message.searchMaxBuckets = object.searchMaxBuckets ?? undefined;
        message.reindexRemoteWhitelist = object.reindexRemoteWhitelist ?? '';
        message.httpMaxInitialLineLength = object.httpMaxInitialLineLength ?? undefined;
        return message;
    },
};

const baseOpenSearchConfigSet2: object = {};

export const OpenSearchConfigSet2: {
    encode(message: OpenSearchConfigSet2, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OpenSearchConfigSet2;
    fromJSON(object: any): OpenSearchConfigSet2;
    toJSON(message: OpenSearchConfigSet2): unknown;
    fromPartial<I extends Exact<DeepPartial<OpenSearchConfigSet2>, I>>(object: I): OpenSearchConfigSet2;
} = {
    encode(message: OpenSearchConfigSet2, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.effectiveConfig !== undefined) {
            OpenSearchConfig2.encode(message.effectiveConfig, writer.uint32(10).fork()).ldelim();
        }
        if (message.userConfig !== undefined) {
            OpenSearchConfig2.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
        }
        if (message.defaultConfig !== undefined) {
            OpenSearchConfig2.encode(message.defaultConfig, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): OpenSearchConfigSet2 {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseOpenSearchConfigSet2 } as OpenSearchConfigSet2;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.effectiveConfig = OpenSearchConfig2.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.userConfig = OpenSearchConfig2.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.defaultConfig = OpenSearchConfig2.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): OpenSearchConfigSet2 {
        const message = { ...baseOpenSearchConfigSet2 } as OpenSearchConfigSet2;
        message.effectiveConfig =
            object.effectiveConfig !== undefined && object.effectiveConfig !== null
                ? OpenSearchConfig2.fromJSON(object.effectiveConfig)
                : undefined;
        message.userConfig =
            object.userConfig !== undefined && object.userConfig !== null
                ? OpenSearchConfig2.fromJSON(object.userConfig)
                : undefined;
        message.defaultConfig =
            object.defaultConfig !== undefined && object.defaultConfig !== null
                ? OpenSearchConfig2.fromJSON(object.defaultConfig)
                : undefined;
        return message;
    },

    toJSON(message: OpenSearchConfigSet2): unknown {
        const obj: any = {};
        message.effectiveConfig !== undefined &&
            (obj.effectiveConfig = message.effectiveConfig
                ? OpenSearchConfig2.toJSON(message.effectiveConfig)
                : undefined);
        message.userConfig !== undefined &&
            (obj.userConfig = message.userConfig
                ? OpenSearchConfig2.toJSON(message.userConfig)
                : undefined);
        message.defaultConfig !== undefined &&
            (obj.defaultConfig = message.defaultConfig
                ? OpenSearchConfig2.toJSON(message.defaultConfig)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<OpenSearchConfigSet2>, I>>(
        object: I,
    ): OpenSearchConfigSet2 {
        const message = { ...baseOpenSearchConfigSet2 } as OpenSearchConfigSet2;
        message.effectiveConfig =
            object.effectiveConfig !== undefined && object.effectiveConfig !== null
                ? OpenSearchConfig2.fromPartial(object.effectiveConfig)
                : undefined;
        message.userConfig =
            object.userConfig !== undefined && object.userConfig !== null
                ? OpenSearchConfig2.fromPartial(object.userConfig)
                : undefined;
        message.defaultConfig =
            object.defaultConfig !== undefined && object.defaultConfig !== null
                ? OpenSearchConfig2.fromPartial(object.defaultConfig)
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
