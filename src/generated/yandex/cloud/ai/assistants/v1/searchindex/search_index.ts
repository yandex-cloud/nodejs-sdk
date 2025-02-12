/* eslint-disable */
import { messageTypeRegistry } from '../../../../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { ExpirationConfig } from '../../../../../../yandex/cloud/ai/common/common';
import {
    ChunkingStrategy,
    NormalizationStrategy,
    CombinationStrategy,
    NgramTokenizer,
    normalizationStrategyFromJSON,
    normalizationStrategyToJSON,
} from '../../../../../../yandex/cloud/ai/assistants/v1/searchindex/common';
import { Timestamp } from '../../../../../../google/protobuf/timestamp';

export const protobufPackage = 'yandex.cloud.ai.assistants.v1.searchindex';

/** Represents a search index used to store and query data, either using traditional keyword-based text search or vector-based search mechanisms. */
export interface SearchIndex {
    $type: 'yandex.cloud.ai.assistants.v1.searchindex.SearchIndex';
    /** Unique identifier of the search index. */
    id: string;
    /** ID of the folder that the search index belongs to. */
    folderId: string;
    /** Name of the search index. */
    name: string;
    /** Description of the search index. */
    description: string;
    /** Identifier of the subject who created this search index. */
    createdBy: string;
    /** Timestamp representing when the search index was created. */
    createdAt?: Date;
    /** Identifier of the subject who last updated this search index. */
    updatedBy: string;
    /** Timestamp representing the last time this search index was updated. */
    updatedAt?: Date;
    /** Configuration for the expiration of the search index, defining when and how the search index will expire. */
    expirationConfig?: ExpirationConfig;
    /** Timestamp representing when the search index will expire. */
    expiresAt?: Date;
    /** Set of key-value pairs that can be used to organize and categorize the search index. */
    labels: { [key: string]: string };
    /**
     * Keyword-based text search index configuration.
     * This type of index is used for traditional text search, where documents are indexed based on their keywords.
     */
    textSearchIndex?: TextSearchIndex | undefined;
    /**
     * Vector-based search index configuration.
     * This type is used for vector search, where documents are indexed using vector embeddings.
     */
    vectorSearchIndex?: VectorSearchIndex | undefined;
    /**
     * Hybrid (vector-based + keyword-based) search index configuration
     * This type is used for hybrid search, where documents are indexed using both keyword-based and vector-based search mechanisms.
     */
    hybridSearchIndex?: HybridSearchIndex | undefined;
}

export interface SearchIndex_LabelsEntry {
    $type: 'yandex.cloud.ai.assistants.v1.searchindex.SearchIndex.LabelsEntry';
    key: string;
    value: string;
}

/** Defines the configuration for a traditional keyword-based text search index. */
export interface TextSearchIndex {
    $type: 'yandex.cloud.ai.assistants.v1.searchindex.TextSearchIndex';
    /**
     * Chunking strategy used to split text into smaller chunks before indexing.
     * In the case of text search, tokens are individual text characters.
     */
    chunkingStrategy?: ChunkingStrategy;
    /** Tokenizer that generates n-grams. */
    ngramTokenizer?: NgramTokenizer | undefined;
}

/** Defines the configuration for a vector-based search index. This type uses embeddings to represent documents and queries. */
export interface VectorSearchIndex {
    $type: 'yandex.cloud.ai.assistants.v1.searchindex.VectorSearchIndex';
    /** The [ID of the model](/docs/foundation-models/concepts/embeddings) to be used for obtaining document text embeddings. */
    docEmbedderUri: string;
    /** The [ID of the model](/docs/foundation-models/concepts/embeddings) to be used for obtaining query text embeddings. */
    queryEmbedderUri: string;
    /**
     * Chunking strategy used to split text into smaller chunks before indexing.
     * In the case of vector search, tokens are produced by the tokenizer from the embedding model.
     */
    chunkingStrategy?: ChunkingStrategy;
}

/** Defines the configuration for a hybrid (vector-based + keyword-based) search index. This type uses both embeddings and keyword-based search to represent documents and queries. */
export interface HybridSearchIndex {
    $type: 'yandex.cloud.ai.assistants.v1.searchindex.HybridSearchIndex';
    /** Configuration for a traditional keyword-based text search index. */
    textSearchIndex?: TextSearchIndex;
    /** Configuration for a vector-based search index. */
    vectorSearchIndex?: VectorSearchIndex;
    /**
     * Common chunking strategy that applies to both text and vector search indexes.
     * If provided, it overrides the individual chunking strategies in both `text_search_index` and `vector_search_index`.
     * In this case, both text and vector search will use token-based chunking, where tokens are produced by the tokenizer of the embedding model.
     */
    chunkingStrategy?: ChunkingStrategy;
    /** Normalization strategy for relevance scores from different indices. Default is MIN_MAX_STRATEGY */
    normalizationStrategy: NormalizationStrategy;
    /** Combination strategy for merging rankings from different indices. Default is arithmetic mean */
    combinationStrategy?: CombinationStrategy;
}

const baseSearchIndex: object = {
    $type: 'yandex.cloud.ai.assistants.v1.searchindex.SearchIndex',
    id: '',
    folderId: '',
    name: '',
    description: '',
    createdBy: '',
    updatedBy: '',
};

export const SearchIndex = {
    $type: 'yandex.cloud.ai.assistants.v1.searchindex.SearchIndex' as const,

    encode(message: SearchIndex, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.folderId !== '') {
            writer.uint32(18).string(message.folderId);
        }
        if (message.name !== '') {
            writer.uint32(26).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(34).string(message.description);
        }
        if (message.createdBy !== '') {
            writer.uint32(42).string(message.createdBy);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(50).fork()).ldelim();
        }
        if (message.updatedBy !== '') {
            writer.uint32(58).string(message.updatedBy);
        }
        if (message.updatedAt !== undefined) {
            Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(66).fork()).ldelim();
        }
        if (message.expirationConfig !== undefined) {
            ExpirationConfig.encode(message.expirationConfig, writer.uint32(74).fork()).ldelim();
        }
        if (message.expiresAt !== undefined) {
            Timestamp.encode(toTimestamp(message.expiresAt), writer.uint32(82).fork()).ldelim();
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            SearchIndex_LabelsEntry.encode(
                {
                    $type: 'yandex.cloud.ai.assistants.v1.searchindex.SearchIndex.LabelsEntry',
                    key: key as any,
                    value,
                },
                writer.uint32(90).fork(),
            ).ldelim();
        });
        if (message.textSearchIndex !== undefined) {
            TextSearchIndex.encode(message.textSearchIndex, writer.uint32(98).fork()).ldelim();
        }
        if (message.vectorSearchIndex !== undefined) {
            VectorSearchIndex.encode(message.vectorSearchIndex, writer.uint32(106).fork()).ldelim();
        }
        if (message.hybridSearchIndex !== undefined) {
            HybridSearchIndex.encode(message.hybridSearchIndex, writer.uint32(114).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SearchIndex {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSearchIndex } as SearchIndex;
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.folderId = reader.string();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.description = reader.string();
                    break;
                case 5:
                    message.createdBy = reader.string();
                    break;
                case 6:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.updatedBy = reader.string();
                    break;
                case 8:
                    message.updatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.expirationConfig = ExpirationConfig.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.expiresAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 11:
                    const entry11 = SearchIndex_LabelsEntry.decode(reader, reader.uint32());
                    if (entry11.value !== undefined) {
                        message.labels[entry11.key] = entry11.value;
                    }
                    break;
                case 12:
                    message.textSearchIndex = TextSearchIndex.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.vectorSearchIndex = VectorSearchIndex.decode(reader, reader.uint32());
                    break;
                case 14:
                    message.hybridSearchIndex = HybridSearchIndex.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): SearchIndex {
        const message = { ...baseSearchIndex } as SearchIndex;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : '';
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        message.createdBy =
            object.createdBy !== undefined && object.createdBy !== null
                ? String(object.createdBy)
                : '';
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        message.updatedBy =
            object.updatedBy !== undefined && object.updatedBy !== null
                ? String(object.updatedBy)
                : '';
        message.updatedAt =
            object.updatedAt !== undefined && object.updatedAt !== null
                ? fromJsonTimestamp(object.updatedAt)
                : undefined;
        message.expirationConfig =
            object.expirationConfig !== undefined && object.expirationConfig !== null
                ? ExpirationConfig.fromJSON(object.expirationConfig)
                : undefined;
        message.expiresAt =
            object.expiresAt !== undefined && object.expiresAt !== null
                ? fromJsonTimestamp(object.expiresAt)
                : undefined;
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                acc[key] = String(value);
                return acc;
            },
            {},
        );
        message.textSearchIndex =
            object.textSearchIndex !== undefined && object.textSearchIndex !== null
                ? TextSearchIndex.fromJSON(object.textSearchIndex)
                : undefined;
        message.vectorSearchIndex =
            object.vectorSearchIndex !== undefined && object.vectorSearchIndex !== null
                ? VectorSearchIndex.fromJSON(object.vectorSearchIndex)
                : undefined;
        message.hybridSearchIndex =
            object.hybridSearchIndex !== undefined && object.hybridSearchIndex !== null
                ? HybridSearchIndex.fromJSON(object.hybridSearchIndex)
                : undefined;
        return message;
    },

    toJSON(message: SearchIndex): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        message.createdBy !== undefined && (obj.createdBy = message.createdBy);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.updatedBy !== undefined && (obj.updatedBy = message.updatedBy);
        message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt.toISOString());
        message.expirationConfig !== undefined &&
            (obj.expirationConfig = message.expirationConfig
                ? ExpirationConfig.toJSON(message.expirationConfig)
                : undefined);
        message.expiresAt !== undefined && (obj.expiresAt = message.expiresAt.toISOString());
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.textSearchIndex !== undefined &&
            (obj.textSearchIndex = message.textSearchIndex
                ? TextSearchIndex.toJSON(message.textSearchIndex)
                : undefined);
        message.vectorSearchIndex !== undefined &&
            (obj.vectorSearchIndex = message.vectorSearchIndex
                ? VectorSearchIndex.toJSON(message.vectorSearchIndex)
                : undefined);
        message.hybridSearchIndex !== undefined &&
            (obj.hybridSearchIndex = message.hybridSearchIndex
                ? HybridSearchIndex.toJSON(message.hybridSearchIndex)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SearchIndex>, I>>(object: I): SearchIndex {
        const message = { ...baseSearchIndex } as SearchIndex;
        message.id = object.id ?? '';
        message.folderId = object.folderId ?? '';
        message.name = object.name ?? '';
        message.description = object.description ?? '';
        message.createdBy = object.createdBy ?? '';
        message.createdAt = object.createdAt ?? undefined;
        message.updatedBy = object.updatedBy ?? '';
        message.updatedAt = object.updatedAt ?? undefined;
        message.expirationConfig =
            object.expirationConfig !== undefined && object.expirationConfig !== null
                ? ExpirationConfig.fromPartial(object.expirationConfig)
                : undefined;
        message.expiresAt = object.expiresAt ?? undefined;
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                if (value !== undefined) {
                    acc[key] = String(value);
                }
                return acc;
            },
            {},
        );
        message.textSearchIndex =
            object.textSearchIndex !== undefined && object.textSearchIndex !== null
                ? TextSearchIndex.fromPartial(object.textSearchIndex)
                : undefined;
        message.vectorSearchIndex =
            object.vectorSearchIndex !== undefined && object.vectorSearchIndex !== null
                ? VectorSearchIndex.fromPartial(object.vectorSearchIndex)
                : undefined;
        message.hybridSearchIndex =
            object.hybridSearchIndex !== undefined && object.hybridSearchIndex !== null
                ? HybridSearchIndex.fromPartial(object.hybridSearchIndex)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(SearchIndex.$type, SearchIndex);

const baseSearchIndex_LabelsEntry: object = {
    $type: 'yandex.cloud.ai.assistants.v1.searchindex.SearchIndex.LabelsEntry',
    key: '',
    value: '',
};

export const SearchIndex_LabelsEntry = {
    $type: 'yandex.cloud.ai.assistants.v1.searchindex.SearchIndex.LabelsEntry' as const,

    encode(message: SearchIndex_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SearchIndex_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSearchIndex_LabelsEntry } as SearchIndex_LabelsEntry;
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

    fromJSON(object: any): SearchIndex_LabelsEntry {
        const message = { ...baseSearchIndex_LabelsEntry } as SearchIndex_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: SearchIndex_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SearchIndex_LabelsEntry>, I>>(
        object: I,
    ): SearchIndex_LabelsEntry {
        const message = { ...baseSearchIndex_LabelsEntry } as SearchIndex_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

messageTypeRegistry.set(SearchIndex_LabelsEntry.$type, SearchIndex_LabelsEntry);

const baseTextSearchIndex: object = {
    $type: 'yandex.cloud.ai.assistants.v1.searchindex.TextSearchIndex',
};

export const TextSearchIndex = {
    $type: 'yandex.cloud.ai.assistants.v1.searchindex.TextSearchIndex' as const,

    encode(message: TextSearchIndex, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.chunkingStrategy !== undefined) {
            ChunkingStrategy.encode(message.chunkingStrategy, writer.uint32(10).fork()).ldelim();
        }
        if (message.ngramTokenizer !== undefined) {
            NgramTokenizer.encode(message.ngramTokenizer, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): TextSearchIndex {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTextSearchIndex } as TextSearchIndex;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chunkingStrategy = ChunkingStrategy.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.ngramTokenizer = NgramTokenizer.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): TextSearchIndex {
        const message = { ...baseTextSearchIndex } as TextSearchIndex;
        message.chunkingStrategy =
            object.chunkingStrategy !== undefined && object.chunkingStrategy !== null
                ? ChunkingStrategy.fromJSON(object.chunkingStrategy)
                : undefined;
        message.ngramTokenizer =
            object.ngramTokenizer !== undefined && object.ngramTokenizer !== null
                ? NgramTokenizer.fromJSON(object.ngramTokenizer)
                : undefined;
        return message;
    },

    toJSON(message: TextSearchIndex): unknown {
        const obj: any = {};
        message.chunkingStrategy !== undefined &&
            (obj.chunkingStrategy = message.chunkingStrategy
                ? ChunkingStrategy.toJSON(message.chunkingStrategy)
                : undefined);
        message.ngramTokenizer !== undefined &&
            (obj.ngramTokenizer = message.ngramTokenizer
                ? NgramTokenizer.toJSON(message.ngramTokenizer)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<TextSearchIndex>, I>>(object: I): TextSearchIndex {
        const message = { ...baseTextSearchIndex } as TextSearchIndex;
        message.chunkingStrategy =
            object.chunkingStrategy !== undefined && object.chunkingStrategy !== null
                ? ChunkingStrategy.fromPartial(object.chunkingStrategy)
                : undefined;
        message.ngramTokenizer =
            object.ngramTokenizer !== undefined && object.ngramTokenizer !== null
                ? NgramTokenizer.fromPartial(object.ngramTokenizer)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(TextSearchIndex.$type, TextSearchIndex);

const baseVectorSearchIndex: object = {
    $type: 'yandex.cloud.ai.assistants.v1.searchindex.VectorSearchIndex',
    docEmbedderUri: '',
    queryEmbedderUri: '',
};

export const VectorSearchIndex = {
    $type: 'yandex.cloud.ai.assistants.v1.searchindex.VectorSearchIndex' as const,

    encode(message: VectorSearchIndex, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.docEmbedderUri !== '') {
            writer.uint32(10).string(message.docEmbedderUri);
        }
        if (message.queryEmbedderUri !== '') {
            writer.uint32(18).string(message.queryEmbedderUri);
        }
        if (message.chunkingStrategy !== undefined) {
            ChunkingStrategy.encode(message.chunkingStrategy, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): VectorSearchIndex {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseVectorSearchIndex } as VectorSearchIndex;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.docEmbedderUri = reader.string();
                    break;
                case 2:
                    message.queryEmbedderUri = reader.string();
                    break;
                case 3:
                    message.chunkingStrategy = ChunkingStrategy.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): VectorSearchIndex {
        const message = { ...baseVectorSearchIndex } as VectorSearchIndex;
        message.docEmbedderUri =
            object.docEmbedderUri !== undefined && object.docEmbedderUri !== null
                ? String(object.docEmbedderUri)
                : '';
        message.queryEmbedderUri =
            object.queryEmbedderUri !== undefined && object.queryEmbedderUri !== null
                ? String(object.queryEmbedderUri)
                : '';
        message.chunkingStrategy =
            object.chunkingStrategy !== undefined && object.chunkingStrategy !== null
                ? ChunkingStrategy.fromJSON(object.chunkingStrategy)
                : undefined;
        return message;
    },

    toJSON(message: VectorSearchIndex): unknown {
        const obj: any = {};
        message.docEmbedderUri !== undefined && (obj.docEmbedderUri = message.docEmbedderUri);
        message.queryEmbedderUri !== undefined && (obj.queryEmbedderUri = message.queryEmbedderUri);
        message.chunkingStrategy !== undefined &&
            (obj.chunkingStrategy = message.chunkingStrategy
                ? ChunkingStrategy.toJSON(message.chunkingStrategy)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<VectorSearchIndex>, I>>(object: I): VectorSearchIndex {
        const message = { ...baseVectorSearchIndex } as VectorSearchIndex;
        message.docEmbedderUri = object.docEmbedderUri ?? '';
        message.queryEmbedderUri = object.queryEmbedderUri ?? '';
        message.chunkingStrategy =
            object.chunkingStrategy !== undefined && object.chunkingStrategy !== null
                ? ChunkingStrategy.fromPartial(object.chunkingStrategy)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(VectorSearchIndex.$type, VectorSearchIndex);

const baseHybridSearchIndex: object = {
    $type: 'yandex.cloud.ai.assistants.v1.searchindex.HybridSearchIndex',
    normalizationStrategy: 0,
};

export const HybridSearchIndex = {
    $type: 'yandex.cloud.ai.assistants.v1.searchindex.HybridSearchIndex' as const,

    encode(message: HybridSearchIndex, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.textSearchIndex !== undefined) {
            TextSearchIndex.encode(message.textSearchIndex, writer.uint32(10).fork()).ldelim();
        }
        if (message.vectorSearchIndex !== undefined) {
            VectorSearchIndex.encode(message.vectorSearchIndex, writer.uint32(18).fork()).ldelim();
        }
        if (message.chunkingStrategy !== undefined) {
            ChunkingStrategy.encode(message.chunkingStrategy, writer.uint32(26).fork()).ldelim();
        }
        if (message.normalizationStrategy !== 0) {
            writer.uint32(32).int32(message.normalizationStrategy);
        }
        if (message.combinationStrategy !== undefined) {
            CombinationStrategy.encode(
                message.combinationStrategy,
                writer.uint32(42).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): HybridSearchIndex {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseHybridSearchIndex } as HybridSearchIndex;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.textSearchIndex = TextSearchIndex.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.vectorSearchIndex = VectorSearchIndex.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.chunkingStrategy = ChunkingStrategy.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.normalizationStrategy = reader.int32() as any;
                    break;
                case 5:
                    message.combinationStrategy = CombinationStrategy.decode(
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

    fromJSON(object: any): HybridSearchIndex {
        const message = { ...baseHybridSearchIndex } as HybridSearchIndex;
        message.textSearchIndex =
            object.textSearchIndex !== undefined && object.textSearchIndex !== null
                ? TextSearchIndex.fromJSON(object.textSearchIndex)
                : undefined;
        message.vectorSearchIndex =
            object.vectorSearchIndex !== undefined && object.vectorSearchIndex !== null
                ? VectorSearchIndex.fromJSON(object.vectorSearchIndex)
                : undefined;
        message.chunkingStrategy =
            object.chunkingStrategy !== undefined && object.chunkingStrategy !== null
                ? ChunkingStrategy.fromJSON(object.chunkingStrategy)
                : undefined;
        message.normalizationStrategy =
            object.normalizationStrategy !== undefined && object.normalizationStrategy !== null
                ? normalizationStrategyFromJSON(object.normalizationStrategy)
                : 0;
        message.combinationStrategy =
            object.combinationStrategy !== undefined && object.combinationStrategy !== null
                ? CombinationStrategy.fromJSON(object.combinationStrategy)
                : undefined;
        return message;
    },

    toJSON(message: HybridSearchIndex): unknown {
        const obj: any = {};
        message.textSearchIndex !== undefined &&
            (obj.textSearchIndex = message.textSearchIndex
                ? TextSearchIndex.toJSON(message.textSearchIndex)
                : undefined);
        message.vectorSearchIndex !== undefined &&
            (obj.vectorSearchIndex = message.vectorSearchIndex
                ? VectorSearchIndex.toJSON(message.vectorSearchIndex)
                : undefined);
        message.chunkingStrategy !== undefined &&
            (obj.chunkingStrategy = message.chunkingStrategy
                ? ChunkingStrategy.toJSON(message.chunkingStrategy)
                : undefined);
        message.normalizationStrategy !== undefined &&
            (obj.normalizationStrategy = normalizationStrategyToJSON(
                message.normalizationStrategy,
            ));
        message.combinationStrategy !== undefined &&
            (obj.combinationStrategy = message.combinationStrategy
                ? CombinationStrategy.toJSON(message.combinationStrategy)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<HybridSearchIndex>, I>>(object: I): HybridSearchIndex {
        const message = { ...baseHybridSearchIndex } as HybridSearchIndex;
        message.textSearchIndex =
            object.textSearchIndex !== undefined && object.textSearchIndex !== null
                ? TextSearchIndex.fromPartial(object.textSearchIndex)
                : undefined;
        message.vectorSearchIndex =
            object.vectorSearchIndex !== undefined && object.vectorSearchIndex !== null
                ? VectorSearchIndex.fromPartial(object.vectorSearchIndex)
                : undefined;
        message.chunkingStrategy =
            object.chunkingStrategy !== undefined && object.chunkingStrategy !== null
                ? ChunkingStrategy.fromPartial(object.chunkingStrategy)
                : undefined;
        message.normalizationStrategy = object.normalizationStrategy ?? 0;
        message.combinationStrategy =
            object.combinationStrategy !== undefined && object.combinationStrategy !== null
                ? CombinationStrategy.fromPartial(object.combinationStrategy)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(HybridSearchIndex.$type, HybridSearchIndex);

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin
    ? T
    : T extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T extends ReadonlyArray<infer U>
    ? ReadonlyArray<DeepPartial<U>>
    : T extends {}
    ? { [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]> }
    : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
    ? P
    : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
              Exclude<keyof I, KeysOfUnion<P> | '$type'>,
              never
          >;

function toTimestamp(date: Date): Timestamp {
    const seconds = date.getTime() / 1_000;
    const nanos = (date.getTime() % 1_000) * 1_000_000;
    return { $type: 'google.protobuf.Timestamp', seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
    let millis = t.seconds * 1_000;
    millis += t.nanos / 1_000_000;
    return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
    if (o instanceof Date) {
        return o;
    } else if (typeof o === 'string') {
        return new Date(o);
    } else {
        return fromTimestamp(Timestamp.fromJSON(o));
    }
}

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
