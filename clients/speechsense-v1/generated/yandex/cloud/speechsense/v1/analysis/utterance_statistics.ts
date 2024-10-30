/* eslint-disable */
import { messageTypeRegistry } from '../../../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import {
    AudioSegmentBoundaries,
    DescriptiveStatistics,
} from '../../../../../yandex/cloud/speechsense/v1/analysis/statistics_common';

export const protobufPackage = 'yandex.cloud.speechsense.v1.analysis';

export interface UtteranceStatistics {
    $type: 'yandex.cloud.speechsense.v1.analysis.UtteranceStatistics';
    speakerTag: string;
    /** Audio segment boundaries */
    speechBoundaries?: AudioSegmentBoundaries;
    /** Total speech duration */
    totalSpeechMs: number;
    /** Speech ratio within audio segment */
    speechRatio: number;
    /** Total silence duration */
    totalSilenceMs: number;
    /** Silence ratio within audio segment */
    silenceRatio: number;
    /** Number of words in recognized speech */
    wordsCount: number;
    /** Number of letters in recognized speech */
    lettersCount: number;
    /** Descriptive statistics for words per second distribution */
    wordsPerSecond?: DescriptiveStatistics;
    /** Descriptive statistics for letters per second distribution */
    lettersPerSecond?: DescriptiveStatistics;
}

const baseUtteranceStatistics: object = {
    $type: 'yandex.cloud.speechsense.v1.analysis.UtteranceStatistics',
    speakerTag: '',
    totalSpeechMs: 0,
    speechRatio: 0,
    totalSilenceMs: 0,
    silenceRatio: 0,
    wordsCount: 0,
    lettersCount: 0,
};

export const UtteranceStatistics = {
    $type: 'yandex.cloud.speechsense.v1.analysis.UtteranceStatistics' as const,

    encode(message: UtteranceStatistics, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.speakerTag !== '') {
            writer.uint32(10).string(message.speakerTag);
        }
        if (message.speechBoundaries !== undefined) {
            AudioSegmentBoundaries.encode(
                message.speechBoundaries,
                writer.uint32(18).fork(),
            ).ldelim();
        }
        if (message.totalSpeechMs !== 0) {
            writer.uint32(24).int64(message.totalSpeechMs);
        }
        if (message.speechRatio !== 0) {
            writer.uint32(33).double(message.speechRatio);
        }
        if (message.totalSilenceMs !== 0) {
            writer.uint32(40).int64(message.totalSilenceMs);
        }
        if (message.silenceRatio !== 0) {
            writer.uint32(49).double(message.silenceRatio);
        }
        if (message.wordsCount !== 0) {
            writer.uint32(56).int64(message.wordsCount);
        }
        if (message.lettersCount !== 0) {
            writer.uint32(64).int64(message.lettersCount);
        }
        if (message.wordsPerSecond !== undefined) {
            DescriptiveStatistics.encode(message.wordsPerSecond, writer.uint32(74).fork()).ldelim();
        }
        if (message.lettersPerSecond !== undefined) {
            DescriptiveStatistics.encode(
                message.lettersPerSecond,
                writer.uint32(82).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UtteranceStatistics {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUtteranceStatistics } as UtteranceStatistics;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.speakerTag = reader.string();
                    break;
                case 2:
                    message.speechBoundaries = AudioSegmentBoundaries.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 3:
                    message.totalSpeechMs = longToNumber(reader.int64() as Long);
                    break;
                case 4:
                    message.speechRatio = reader.double();
                    break;
                case 5:
                    message.totalSilenceMs = longToNumber(reader.int64() as Long);
                    break;
                case 6:
                    message.silenceRatio = reader.double();
                    break;
                case 7:
                    message.wordsCount = longToNumber(reader.int64() as Long);
                    break;
                case 8:
                    message.lettersCount = longToNumber(reader.int64() as Long);
                    break;
                case 9:
                    message.wordsPerSecond = DescriptiveStatistics.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.lettersPerSecond = DescriptiveStatistics.decode(
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

    fromJSON(object: any): UtteranceStatistics {
        const message = { ...baseUtteranceStatistics } as UtteranceStatistics;
        message.speakerTag =
            object.speakerTag !== undefined && object.speakerTag !== null
                ? String(object.speakerTag)
                : '';
        message.speechBoundaries =
            object.speechBoundaries !== undefined && object.speechBoundaries !== null
                ? AudioSegmentBoundaries.fromJSON(object.speechBoundaries)
                : undefined;
        message.totalSpeechMs =
            object.totalSpeechMs !== undefined && object.totalSpeechMs !== null
                ? Number(object.totalSpeechMs)
                : 0;
        message.speechRatio =
            object.speechRatio !== undefined && object.speechRatio !== null
                ? Number(object.speechRatio)
                : 0;
        message.totalSilenceMs =
            object.totalSilenceMs !== undefined && object.totalSilenceMs !== null
                ? Number(object.totalSilenceMs)
                : 0;
        message.silenceRatio =
            object.silenceRatio !== undefined && object.silenceRatio !== null
                ? Number(object.silenceRatio)
                : 0;
        message.wordsCount =
            object.wordsCount !== undefined && object.wordsCount !== null
                ? Number(object.wordsCount)
                : 0;
        message.lettersCount =
            object.lettersCount !== undefined && object.lettersCount !== null
                ? Number(object.lettersCount)
                : 0;
        message.wordsPerSecond =
            object.wordsPerSecond !== undefined && object.wordsPerSecond !== null
                ? DescriptiveStatistics.fromJSON(object.wordsPerSecond)
                : undefined;
        message.lettersPerSecond =
            object.lettersPerSecond !== undefined && object.lettersPerSecond !== null
                ? DescriptiveStatistics.fromJSON(object.lettersPerSecond)
                : undefined;
        return message;
    },

    toJSON(message: UtteranceStatistics): unknown {
        const obj: any = {};
        message.speakerTag !== undefined && (obj.speakerTag = message.speakerTag);
        message.speechBoundaries !== undefined &&
            (obj.speechBoundaries = message.speechBoundaries
                ? AudioSegmentBoundaries.toJSON(message.speechBoundaries)
                : undefined);
        message.totalSpeechMs !== undefined &&
            (obj.totalSpeechMs = Math.round(message.totalSpeechMs));
        message.speechRatio !== undefined && (obj.speechRatio = message.speechRatio);
        message.totalSilenceMs !== undefined &&
            (obj.totalSilenceMs = Math.round(message.totalSilenceMs));
        message.silenceRatio !== undefined && (obj.silenceRatio = message.silenceRatio);
        message.wordsCount !== undefined && (obj.wordsCount = Math.round(message.wordsCount));
        message.lettersCount !== undefined && (obj.lettersCount = Math.round(message.lettersCount));
        message.wordsPerSecond !== undefined &&
            (obj.wordsPerSecond = message.wordsPerSecond
                ? DescriptiveStatistics.toJSON(message.wordsPerSecond)
                : undefined);
        message.lettersPerSecond !== undefined &&
            (obj.lettersPerSecond = message.lettersPerSecond
                ? DescriptiveStatistics.toJSON(message.lettersPerSecond)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UtteranceStatistics>, I>>(
        object: I,
    ): UtteranceStatistics {
        const message = { ...baseUtteranceStatistics } as UtteranceStatistics;
        message.speakerTag = object.speakerTag ?? '';
        message.speechBoundaries =
            object.speechBoundaries !== undefined && object.speechBoundaries !== null
                ? AudioSegmentBoundaries.fromPartial(object.speechBoundaries)
                : undefined;
        message.totalSpeechMs = object.totalSpeechMs ?? 0;
        message.speechRatio = object.speechRatio ?? 0;
        message.totalSilenceMs = object.totalSilenceMs ?? 0;
        message.silenceRatio = object.silenceRatio ?? 0;
        message.wordsCount = object.wordsCount ?? 0;
        message.lettersCount = object.lettersCount ?? 0;
        message.wordsPerSecond =
            object.wordsPerSecond !== undefined && object.wordsPerSecond !== null
                ? DescriptiveStatistics.fromPartial(object.wordsPerSecond)
                : undefined;
        message.lettersPerSecond =
            object.lettersPerSecond !== undefined && object.lettersPerSecond !== null
                ? DescriptiveStatistics.fromPartial(object.lettersPerSecond)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(UtteranceStatistics.$type, UtteranceStatistics);

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
