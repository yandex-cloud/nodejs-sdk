/* eslint-disable */
import { messageTypeRegistry } from '../../../../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Int64Value } from '../../../../../../google/protobuf/wrappers';

export const protobufPackage = 'yandex.cloud.ai.assistants.v1.searchindex';

/** Normalization strategy for relevance scores from different indices */
export enum NormalizationStrategy {
    NORMALIZATION_STRATEGY_UNSPECIFIED = 0,
    /** MIN_MAX - https://en.wikipedia.org/wiki/Feature_scaling#Rescaling_(min-max_normalization) */
    MIN_MAX = 1,
    /** L2 - https://en.wikipedia.org/wiki/Cosine_similarity#L2-normalized_Euclidean_distance */
    L2 = 2,
    UNRECOGNIZED = -1,
}

export function normalizationStrategyFromJSON(object: any): NormalizationStrategy {
    switch (object) {
        case 0:
        case 'NORMALIZATION_STRATEGY_UNSPECIFIED':
            return NormalizationStrategy.NORMALIZATION_STRATEGY_UNSPECIFIED;
        case 1:
        case 'MIN_MAX':
            return NormalizationStrategy.MIN_MAX;
        case 2:
        case 'L2':
            return NormalizationStrategy.L2;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return NormalizationStrategy.UNRECOGNIZED;
    }
}

export function normalizationStrategyToJSON(object: NormalizationStrategy): string {
    switch (object) {
        case NormalizationStrategy.NORMALIZATION_STRATEGY_UNSPECIFIED:
            return 'NORMALIZATION_STRATEGY_UNSPECIFIED';
        case NormalizationStrategy.MIN_MAX:
            return 'MIN_MAX';
        case NormalizationStrategy.L2:
            return 'L2';
        default:
            return 'UNKNOWN';
    }
}

/** Defines a chunking strategy where chunks are created with a fixed maximum chunk size and an overlap between consecutive chunks. */
export interface StaticChunkingStrategy {
    $type: 'yandex.cloud.ai.assistants.v1.searchindex.StaticChunkingStrategy';
    /**
     * The maximum number of tokens allowed in a single chunk.
     * Constraints: must be within the range [100, 2048].
     * Default value: 800
     */
    maxChunkSizeTokens: number;
    /**
     * The number of tokens that should overlap between consecutive chunks.
     * This allows for some context from the previous chunk to be included in the next chunk.
     * Constraints: must be less than or equal to half of `max_chunk_size_tokens`.
     * Default value: 400
     */
    chunkOverlapTokens: number;
}

/**
 * Defines a general strategy for chunking text into smaller segments.
 * Currently, only StaticChunkingStrategy is supported.
 */
export interface ChunkingStrategy {
    $type: 'yandex.cloud.ai.assistants.v1.searchindex.ChunkingStrategy';
    staticStrategy?: StaticChunkingStrategy | undefined;
}

export interface MeanCombinationStrategy {
    $type: 'yandex.cloud.ai.assistants.v1.searchindex.MeanCombinationStrategy';
    /** Technique for averaging relevance scores from different indices. Default is ARITHMETIC */
    meanEvaluationTechnique: MeanCombinationStrategy_MeanEvaluationTechnique;
    /**
     * Weights used for evaluating the weighted mean of relevance scores. The sum of the values must equal 1.0
     * If not provided, all scores are given equal weight
     */
    weights: number[];
}

export enum MeanCombinationStrategy_MeanEvaluationTechnique {
    MEAN_EVALUATION_TECHNIQUE_UNSPECIFIED = 0,
    /** ARITHMETIC - https://en.wikipedia.org/wiki/Arithmetic_mean */
    ARITHMETIC = 1,
    /** GEOMETRIC - https://en.wikipedia.org/wiki/Geometric_mean */
    GEOMETRIC = 2,
    /** HARMONIC - https://en.wikipedia.org/wiki/Harmonic_mean */
    HARMONIC = 3,
    UNRECOGNIZED = -1,
}

export function meanCombinationStrategy_MeanEvaluationTechniqueFromJSON(
    object: any,
): MeanCombinationStrategy_MeanEvaluationTechnique {
    switch (object) {
        case 0:
        case 'MEAN_EVALUATION_TECHNIQUE_UNSPECIFIED':
            return MeanCombinationStrategy_MeanEvaluationTechnique.MEAN_EVALUATION_TECHNIQUE_UNSPECIFIED;
        case 1:
        case 'ARITHMETIC':
            return MeanCombinationStrategy_MeanEvaluationTechnique.ARITHMETIC;
        case 2:
        case 'GEOMETRIC':
            return MeanCombinationStrategy_MeanEvaluationTechnique.GEOMETRIC;
        case 3:
        case 'HARMONIC':
            return MeanCombinationStrategy_MeanEvaluationTechnique.HARMONIC;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return MeanCombinationStrategy_MeanEvaluationTechnique.UNRECOGNIZED;
    }
}

export function meanCombinationStrategy_MeanEvaluationTechniqueToJSON(
    object: MeanCombinationStrategy_MeanEvaluationTechnique,
): string {
    switch (object) {
        case MeanCombinationStrategy_MeanEvaluationTechnique.MEAN_EVALUATION_TECHNIQUE_UNSPECIFIED:
            return 'MEAN_EVALUATION_TECHNIQUE_UNSPECIFIED';
        case MeanCombinationStrategy_MeanEvaluationTechnique.ARITHMETIC:
            return 'ARITHMETIC';
        case MeanCombinationStrategy_MeanEvaluationTechnique.GEOMETRIC:
            return 'GEOMETRIC';
        case MeanCombinationStrategy_MeanEvaluationTechnique.HARMONIC:
            return 'HARMONIC';
        default:
            return 'UNKNOWN';
    }
}

/** https://plg.uwaterloo.ca/~gvcormac/cormacksigir09-rrf.pdf */
export interface ReciprocalRankFusionCombinationStrategy {
    $type: 'yandex.cloud.ai.assistants.v1.searchindex.ReciprocalRankFusionCombinationStrategy';
    /** The parameter k for RRFscore. Default is 60 */
    k?: number;
}

/** Combination strategy for merging rankings from different indices */
export interface CombinationStrategy {
    $type: 'yandex.cloud.ai.assistants.v1.searchindex.CombinationStrategy';
    meanCombination?: MeanCombinationStrategy | undefined;
    rrfCombination?: ReciprocalRankFusionCombinationStrategy | undefined;
}

export interface NgramTokenizer {
    $type: 'yandex.cloud.ai.assistants.v1.searchindex.NgramTokenizer';
    /** Minimum length of characters in a gram. Defaults to 3 */
    minGram?: number;
    /** Maximum length of characters in a gram. Defaults to 4 */
    maxGram?: number;
}

const baseStaticChunkingStrategy: object = {
    $type: 'yandex.cloud.ai.assistants.v1.searchindex.StaticChunkingStrategy',
    maxChunkSizeTokens: 0,
    chunkOverlapTokens: 0,
};

export const StaticChunkingStrategy = {
    $type: 'yandex.cloud.ai.assistants.v1.searchindex.StaticChunkingStrategy' as const,

    encode(message: StaticChunkingStrategy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.maxChunkSizeTokens !== 0) {
            writer.uint32(8).int64(message.maxChunkSizeTokens);
        }
        if (message.chunkOverlapTokens !== 0) {
            writer.uint32(16).int64(message.chunkOverlapTokens);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): StaticChunkingStrategy {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseStaticChunkingStrategy } as StaticChunkingStrategy;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.maxChunkSizeTokens = longToNumber(reader.int64() as Long);
                    break;
                case 2:
                    message.chunkOverlapTokens = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): StaticChunkingStrategy {
        const message = { ...baseStaticChunkingStrategy } as StaticChunkingStrategy;
        message.maxChunkSizeTokens =
            object.maxChunkSizeTokens !== undefined && object.maxChunkSizeTokens !== null
                ? Number(object.maxChunkSizeTokens)
                : 0;
        message.chunkOverlapTokens =
            object.chunkOverlapTokens !== undefined && object.chunkOverlapTokens !== null
                ? Number(object.chunkOverlapTokens)
                : 0;
        return message;
    },

    toJSON(message: StaticChunkingStrategy): unknown {
        const obj: any = {};
        message.maxChunkSizeTokens !== undefined &&
            (obj.maxChunkSizeTokens = Math.round(message.maxChunkSizeTokens));
        message.chunkOverlapTokens !== undefined &&
            (obj.chunkOverlapTokens = Math.round(message.chunkOverlapTokens));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<StaticChunkingStrategy>, I>>(
        object: I,
    ): StaticChunkingStrategy {
        const message = { ...baseStaticChunkingStrategy } as StaticChunkingStrategy;
        message.maxChunkSizeTokens = object.maxChunkSizeTokens ?? 0;
        message.chunkOverlapTokens = object.chunkOverlapTokens ?? 0;
        return message;
    },
};

messageTypeRegistry.set(StaticChunkingStrategy.$type, StaticChunkingStrategy);

const baseChunkingStrategy: object = {
    $type: 'yandex.cloud.ai.assistants.v1.searchindex.ChunkingStrategy',
};

export const ChunkingStrategy = {
    $type: 'yandex.cloud.ai.assistants.v1.searchindex.ChunkingStrategy' as const,

    encode(message: ChunkingStrategy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.staticStrategy !== undefined) {
            StaticChunkingStrategy.encode(
                message.staticStrategy,
                writer.uint32(10).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ChunkingStrategy {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseChunkingStrategy } as ChunkingStrategy;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.staticStrategy = StaticChunkingStrategy.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ChunkingStrategy {
        const message = { ...baseChunkingStrategy } as ChunkingStrategy;
        message.staticStrategy =
            object.staticStrategy !== undefined && object.staticStrategy !== null
                ? StaticChunkingStrategy.fromJSON(object.staticStrategy)
                : undefined;
        return message;
    },

    toJSON(message: ChunkingStrategy): unknown {
        const obj: any = {};
        message.staticStrategy !== undefined &&
            (obj.staticStrategy = message.staticStrategy
                ? StaticChunkingStrategy.toJSON(message.staticStrategy)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ChunkingStrategy>, I>>(object: I): ChunkingStrategy {
        const message = { ...baseChunkingStrategy } as ChunkingStrategy;
        message.staticStrategy =
            object.staticStrategy !== undefined && object.staticStrategy !== null
                ? StaticChunkingStrategy.fromPartial(object.staticStrategy)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(ChunkingStrategy.$type, ChunkingStrategy);

const baseMeanCombinationStrategy: object = {
    $type: 'yandex.cloud.ai.assistants.v1.searchindex.MeanCombinationStrategy',
    meanEvaluationTechnique: 0,
    weights: 0,
};

export const MeanCombinationStrategy = {
    $type: 'yandex.cloud.ai.assistants.v1.searchindex.MeanCombinationStrategy' as const,

    encode(message: MeanCombinationStrategy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.meanEvaluationTechnique !== 0) {
            writer.uint32(8).int32(message.meanEvaluationTechnique);
        }
        writer.uint32(18).fork();
        for (const v of message.weights) {
            writer.double(v);
        }
        writer.ldelim();
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MeanCombinationStrategy {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMeanCombinationStrategy } as MeanCombinationStrategy;
        message.weights = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.meanEvaluationTechnique = reader.int32() as any;
                    break;
                case 2:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.weights.push(reader.double());
                        }
                    } else {
                        message.weights.push(reader.double());
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): MeanCombinationStrategy {
        const message = { ...baseMeanCombinationStrategy } as MeanCombinationStrategy;
        message.meanEvaluationTechnique =
            object.meanEvaluationTechnique !== undefined && object.meanEvaluationTechnique !== null
                ? meanCombinationStrategy_MeanEvaluationTechniqueFromJSON(
                      object.meanEvaluationTechnique,
                  )
                : 0;
        message.weights = (object.weights ?? []).map((e: any) => Number(e));
        return message;
    },

    toJSON(message: MeanCombinationStrategy): unknown {
        const obj: any = {};
        message.meanEvaluationTechnique !== undefined &&
            (obj.meanEvaluationTechnique = meanCombinationStrategy_MeanEvaluationTechniqueToJSON(
                message.meanEvaluationTechnique,
            ));
        if (message.weights) {
            obj.weights = message.weights.map((e) => e);
        } else {
            obj.weights = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<MeanCombinationStrategy>, I>>(
        object: I,
    ): MeanCombinationStrategy {
        const message = { ...baseMeanCombinationStrategy } as MeanCombinationStrategy;
        message.meanEvaluationTechnique = object.meanEvaluationTechnique ?? 0;
        message.weights = object.weights?.map((e) => e) || [];
        return message;
    },
};

messageTypeRegistry.set(MeanCombinationStrategy.$type, MeanCombinationStrategy);

const baseReciprocalRankFusionCombinationStrategy: object = {
    $type: 'yandex.cloud.ai.assistants.v1.searchindex.ReciprocalRankFusionCombinationStrategy',
};

export const ReciprocalRankFusionCombinationStrategy = {
    $type: 'yandex.cloud.ai.assistants.v1.searchindex.ReciprocalRankFusionCombinationStrategy' as const,

    encode(
        message: ReciprocalRankFusionCombinationStrategy,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.k !== undefined) {
            Int64Value.encode(
                { $type: 'google.protobuf.Int64Value', value: message.k! },
                writer.uint32(10).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): ReciprocalRankFusionCombinationStrategy {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseReciprocalRankFusionCombinationStrategy,
        } as ReciprocalRankFusionCombinationStrategy;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.k = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ReciprocalRankFusionCombinationStrategy {
        const message = {
            ...baseReciprocalRankFusionCombinationStrategy,
        } as ReciprocalRankFusionCombinationStrategy;
        message.k = object.k !== undefined && object.k !== null ? Number(object.k) : undefined;
        return message;
    },

    toJSON(message: ReciprocalRankFusionCombinationStrategy): unknown {
        const obj: any = {};
        message.k !== undefined && (obj.k = message.k);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ReciprocalRankFusionCombinationStrategy>, I>>(
        object: I,
    ): ReciprocalRankFusionCombinationStrategy {
        const message = {
            ...baseReciprocalRankFusionCombinationStrategy,
        } as ReciprocalRankFusionCombinationStrategy;
        message.k = object.k ?? undefined;
        return message;
    },
};

messageTypeRegistry.set(
    ReciprocalRankFusionCombinationStrategy.$type,
    ReciprocalRankFusionCombinationStrategy,
);

const baseCombinationStrategy: object = {
    $type: 'yandex.cloud.ai.assistants.v1.searchindex.CombinationStrategy',
};

export const CombinationStrategy = {
    $type: 'yandex.cloud.ai.assistants.v1.searchindex.CombinationStrategy' as const,

    encode(message: CombinationStrategy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.meanCombination !== undefined) {
            MeanCombinationStrategy.encode(
                message.meanCombination,
                writer.uint32(10).fork(),
            ).ldelim();
        }
        if (message.rrfCombination !== undefined) {
            ReciprocalRankFusionCombinationStrategy.encode(
                message.rrfCombination,
                writer.uint32(18).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CombinationStrategy {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCombinationStrategy } as CombinationStrategy;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.meanCombination = MeanCombinationStrategy.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 2:
                    message.rrfCombination = ReciprocalRankFusionCombinationStrategy.decode(
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

    fromJSON(object: any): CombinationStrategy {
        const message = { ...baseCombinationStrategy } as CombinationStrategy;
        message.meanCombination =
            object.meanCombination !== undefined && object.meanCombination !== null
                ? MeanCombinationStrategy.fromJSON(object.meanCombination)
                : undefined;
        message.rrfCombination =
            object.rrfCombination !== undefined && object.rrfCombination !== null
                ? ReciprocalRankFusionCombinationStrategy.fromJSON(object.rrfCombination)
                : undefined;
        return message;
    },

    toJSON(message: CombinationStrategy): unknown {
        const obj: any = {};
        message.meanCombination !== undefined &&
            (obj.meanCombination = message.meanCombination
                ? MeanCombinationStrategy.toJSON(message.meanCombination)
                : undefined);
        message.rrfCombination !== undefined &&
            (obj.rrfCombination = message.rrfCombination
                ? ReciprocalRankFusionCombinationStrategy.toJSON(message.rrfCombination)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CombinationStrategy>, I>>(
        object: I,
    ): CombinationStrategy {
        const message = { ...baseCombinationStrategy } as CombinationStrategy;
        message.meanCombination =
            object.meanCombination !== undefined && object.meanCombination !== null
                ? MeanCombinationStrategy.fromPartial(object.meanCombination)
                : undefined;
        message.rrfCombination =
            object.rrfCombination !== undefined && object.rrfCombination !== null
                ? ReciprocalRankFusionCombinationStrategy.fromPartial(object.rrfCombination)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(CombinationStrategy.$type, CombinationStrategy);

const baseNgramTokenizer: object = {
    $type: 'yandex.cloud.ai.assistants.v1.searchindex.NgramTokenizer',
};

export const NgramTokenizer = {
    $type: 'yandex.cloud.ai.assistants.v1.searchindex.NgramTokenizer' as const,

    encode(message: NgramTokenizer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.minGram !== undefined) {
            Int64Value.encode(
                { $type: 'google.protobuf.Int64Value', value: message.minGram! },
                writer.uint32(10).fork(),
            ).ldelim();
        }
        if (message.maxGram !== undefined) {
            Int64Value.encode(
                { $type: 'google.protobuf.Int64Value', value: message.maxGram! },
                writer.uint32(18).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): NgramTokenizer {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseNgramTokenizer } as NgramTokenizer;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.minGram = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 2:
                    message.maxGram = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): NgramTokenizer {
        const message = { ...baseNgramTokenizer } as NgramTokenizer;
        message.minGram =
            object.minGram !== undefined && object.minGram !== null
                ? Number(object.minGram)
                : undefined;
        message.maxGram =
            object.maxGram !== undefined && object.maxGram !== null
                ? Number(object.maxGram)
                : undefined;
        return message;
    },

    toJSON(message: NgramTokenizer): unknown {
        const obj: any = {};
        message.minGram !== undefined && (obj.minGram = message.minGram);
        message.maxGram !== undefined && (obj.maxGram = message.maxGram);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<NgramTokenizer>, I>>(object: I): NgramTokenizer {
        const message = { ...baseNgramTokenizer } as NgramTokenizer;
        message.minGram = object.minGram ?? undefined;
        message.maxGram = object.maxGram ?? undefined;
        return message;
    },
};

messageTypeRegistry.set(NgramTokenizer.$type, NgramTokenizer);

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
    if (typeof globalThis !== 'undefined') return globalThis;
    if (typeof self !== 'undefined') return self;
    if (typeof window !== 'undefined') return window;
    if (typeof global !== 'undefined') return global;
    throw 'Unable to locate global object';
})();

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

function longToNumber(long: Long): number {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER');
    }
    return long.toNumber();
}

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
