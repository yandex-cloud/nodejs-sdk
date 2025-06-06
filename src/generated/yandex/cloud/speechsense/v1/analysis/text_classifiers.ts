/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Int64Value } from '../../../../../google/protobuf/wrappers';

export const protobufPackage = 'yandex.cloud.speechsense.v1.analysis';

export interface TextClassifiers {
    classificationResult: ClassificationResult[];
}

export interface ClassificationResult {
    /** Classifier name */
    classifier: string;
    /** Classifier statistics */
    classifierStatistics: ClassifierStatistics[];
}

export interface ClassifierStatistics {
    /** Channel number, null for whole talk */
    channelNumber?: number;
    /** classifier total count */
    totalCount: number;
    /** Represents various histograms build on top of classifiers */
    histograms: Histogram[];
}

export interface Histogram {
    /**
     * histogram count values. For example:
     * if len(count_values) = 2, it means that histogram is 50/50,
     * if len(count_values) = 3 - [0] value represents first third, [1] - second third, [2] - last third, etc.
     */
    countValues: number[];
}

const baseTextClassifiers: object = {};

export const TextClassifiers = {
    encode(message: TextClassifiers, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.classificationResult) {
            ClassificationResult.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): TextClassifiers {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTextClassifiers } as TextClassifiers;
        message.classificationResult = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.classificationResult.push(
                        ClassificationResult.decode(reader, reader.uint32()),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): TextClassifiers {
        const message = { ...baseTextClassifiers } as TextClassifiers;
        message.classificationResult = (object.classificationResult ?? []).map((e: any) =>
            ClassificationResult.fromJSON(e),
        );
        return message;
    },

    toJSON(message: TextClassifiers): unknown {
        const obj: any = {};
        if (message.classificationResult) {
            obj.classificationResult = message.classificationResult.map((e) =>
                e ? ClassificationResult.toJSON(e) : undefined,
            );
        } else {
            obj.classificationResult = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<TextClassifiers>, I>>(object: I): TextClassifiers {
        const message = { ...baseTextClassifiers } as TextClassifiers;
        message.classificationResult =
            object.classificationResult?.map((e) => ClassificationResult.fromPartial(e)) || [];
        return message;
    },
};

const baseClassificationResult: object = { classifier: '' };

export const ClassificationResult = {
    encode(message: ClassificationResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.classifier !== '') {
            writer.uint32(10).string(message.classifier);
        }
        for (const v of message.classifierStatistics) {
            ClassifierStatistics.encode(v!, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ClassificationResult {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseClassificationResult } as ClassificationResult;
        message.classifierStatistics = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.classifier = reader.string();
                    break;
                case 2:
                    message.classifierStatistics.push(
                        ClassifierStatistics.decode(reader, reader.uint32()),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ClassificationResult {
        const message = { ...baseClassificationResult } as ClassificationResult;
        message.classifier =
            object.classifier !== undefined && object.classifier !== null
                ? String(object.classifier)
                : '';
        message.classifierStatistics = (object.classifierStatistics ?? []).map((e: any) =>
            ClassifierStatistics.fromJSON(e),
        );
        return message;
    },

    toJSON(message: ClassificationResult): unknown {
        const obj: any = {};
        message.classifier !== undefined && (obj.classifier = message.classifier);
        if (message.classifierStatistics) {
            obj.classifierStatistics = message.classifierStatistics.map((e) =>
                e ? ClassifierStatistics.toJSON(e) : undefined,
            );
        } else {
            obj.classifierStatistics = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ClassificationResult>, I>>(
        object: I,
    ): ClassificationResult {
        const message = { ...baseClassificationResult } as ClassificationResult;
        message.classifier = object.classifier ?? '';
        message.classifierStatistics =
            object.classifierStatistics?.map((e) => ClassifierStatistics.fromPartial(e)) || [];
        return message;
    },
};

const baseClassifierStatistics: object = { totalCount: 0 };

export const ClassifierStatistics = {
    encode(message: ClassifierStatistics, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.channelNumber !== undefined) {
            Int64Value.encode({ value: message.channelNumber! }, writer.uint32(10).fork()).ldelim();
        }
        if (message.totalCount !== 0) {
            writer.uint32(16).int64(message.totalCount);
        }
        for (const v of message.histograms) {
            Histogram.encode(v!, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ClassifierStatistics {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseClassifierStatistics } as ClassifierStatistics;
        message.histograms = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.channelNumber = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 2:
                    message.totalCount = longToNumber(reader.int64() as Long);
                    break;
                case 3:
                    message.histograms.push(Histogram.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ClassifierStatistics {
        const message = { ...baseClassifierStatistics } as ClassifierStatistics;
        message.channelNumber =
            object.channelNumber !== undefined && object.channelNumber !== null
                ? Number(object.channelNumber)
                : undefined;
        message.totalCount =
            object.totalCount !== undefined && object.totalCount !== null
                ? Number(object.totalCount)
                : 0;
        message.histograms = (object.histograms ?? []).map((e: any) => Histogram.fromJSON(e));
        return message;
    },

    toJSON(message: ClassifierStatistics): unknown {
        const obj: any = {};
        message.channelNumber !== undefined && (obj.channelNumber = message.channelNumber);
        message.totalCount !== undefined && (obj.totalCount = Math.round(message.totalCount));
        if (message.histograms) {
            obj.histograms = message.histograms.map((e) => (e ? Histogram.toJSON(e) : undefined));
        } else {
            obj.histograms = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ClassifierStatistics>, I>>(
        object: I,
    ): ClassifierStatistics {
        const message = { ...baseClassifierStatistics } as ClassifierStatistics;
        message.channelNumber = object.channelNumber ?? undefined;
        message.totalCount = object.totalCount ?? 0;
        message.histograms = object.histograms?.map((e) => Histogram.fromPartial(e)) || [];
        return message;
    },
};

const baseHistogram: object = { countValues: 0 };

export const Histogram = {
    encode(message: Histogram, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        writer.uint32(10).fork();
        for (const v of message.countValues) {
            writer.int64(v);
        }
        writer.ldelim();
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Histogram {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseHistogram } as Histogram;
        message.countValues = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.countValues.push(longToNumber(reader.int64() as Long));
                        }
                    } else {
                        message.countValues.push(longToNumber(reader.int64() as Long));
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Histogram {
        const message = { ...baseHistogram } as Histogram;
        message.countValues = (object.countValues ?? []).map((e: any) => Number(e));
        return message;
    },

    toJSON(message: Histogram): unknown {
        const obj: any = {};
        if (message.countValues) {
            obj.countValues = message.countValues.map((e) => Math.round(e));
        } else {
            obj.countValues = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Histogram>, I>>(object: I): Histogram {
        const message = { ...baseHistogram } as Histogram;
        message.countValues = object.countValues?.map((e) => e) || [];
        return message;
    },
};

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
    ? { [K in keyof T]?: DeepPartial<T[K]> }
    : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
    ? P
    : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;

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
