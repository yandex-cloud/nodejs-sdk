/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.speechsense.v1.analysis';

export interface RecognitionClassifierResult {
    /** Start time of the audio segment used for classification */
    startTimeMs: number;
    /** End time of the audio segment used for classification */
    endTimeMs: number;
    /** Name of the triggered classifier */
    classifier: string;
    /** List of highlights, i.e. parts of phrase that determine the result of the classification */
    highlights: PhraseHighlight[];
    /** Classifier predictions */
    labels: RecognitionClassifierLabel[];
}

export interface PhraseHighlight {
    /** Text transcription of the highlighted audio segment */
    text: string;
    /** offset in symbols from the beginning of whole phrase where highlight begins */
    offset: number;
    /** count of symbols in highlighted text */
    count: number;
}

export interface RecognitionClassifierLabel {
    /** The label of the class predicted by the classifier */
    label: string;
    /** The prediction confidence */
    confidence: number;
}

const baseRecognitionClassifierResult: object = { startTimeMs: 0, endTimeMs: 0, classifier: '' };

export const RecognitionClassifierResult = {
    encode(
        message: RecognitionClassifierResult,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.startTimeMs !== 0) {
            writer.uint32(8).int64(message.startTimeMs);
        }
        if (message.endTimeMs !== 0) {
            writer.uint32(16).int64(message.endTimeMs);
        }
        if (message.classifier !== '') {
            writer.uint32(26).string(message.classifier);
        }
        for (const v of message.highlights) {
            PhraseHighlight.encode(v!, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.labels) {
            RecognitionClassifierLabel.encode(v!, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): RecognitionClassifierResult {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRecognitionClassifierResult } as RecognitionClassifierResult;
        message.highlights = [];
        message.labels = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.startTimeMs = longToNumber(reader.int64() as Long);
                    break;
                case 2:
                    message.endTimeMs = longToNumber(reader.int64() as Long);
                    break;
                case 3:
                    message.classifier = reader.string();
                    break;
                case 4:
                    message.highlights.push(PhraseHighlight.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.labels.push(RecognitionClassifierLabel.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): RecognitionClassifierResult {
        const message = { ...baseRecognitionClassifierResult } as RecognitionClassifierResult;
        message.startTimeMs =
            object.startTimeMs !== undefined && object.startTimeMs !== null
                ? Number(object.startTimeMs)
                : 0;
        message.endTimeMs =
            object.endTimeMs !== undefined && object.endTimeMs !== null
                ? Number(object.endTimeMs)
                : 0;
        message.classifier =
            object.classifier !== undefined && object.classifier !== null
                ? String(object.classifier)
                : '';
        message.highlights = (object.highlights ?? []).map((e: any) => PhraseHighlight.fromJSON(e));
        message.labels = (object.labels ?? []).map((e: any) =>
            RecognitionClassifierLabel.fromJSON(e),
        );
        return message;
    },

    toJSON(message: RecognitionClassifierResult): unknown {
        const obj: any = {};
        message.startTimeMs !== undefined && (obj.startTimeMs = Math.round(message.startTimeMs));
        message.endTimeMs !== undefined && (obj.endTimeMs = Math.round(message.endTimeMs));
        message.classifier !== undefined && (obj.classifier = message.classifier);
        if (message.highlights) {
            obj.highlights = message.highlights.map((e) =>
                e ? PhraseHighlight.toJSON(e) : undefined,
            );
        } else {
            obj.highlights = [];
        }
        if (message.labels) {
            obj.labels = message.labels.map((e) =>
                e ? RecognitionClassifierLabel.toJSON(e) : undefined,
            );
        } else {
            obj.labels = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<RecognitionClassifierResult>, I>>(
        object: I,
    ): RecognitionClassifierResult {
        const message = { ...baseRecognitionClassifierResult } as RecognitionClassifierResult;
        message.startTimeMs = object.startTimeMs ?? 0;
        message.endTimeMs = object.endTimeMs ?? 0;
        message.classifier = object.classifier ?? '';
        message.highlights = object.highlights?.map((e) => PhraseHighlight.fromPartial(e)) || [];
        message.labels = object.labels?.map((e) => RecognitionClassifierLabel.fromPartial(e)) || [];
        return message;
    },
};

const basePhraseHighlight: object = { text: '', offset: 0, count: 0 };

export const PhraseHighlight = {
    encode(message: PhraseHighlight, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.text !== '') {
            writer.uint32(10).string(message.text);
        }
        if (message.offset !== 0) {
            writer.uint32(16).int64(message.offset);
        }
        if (message.count !== 0) {
            writer.uint32(24).int64(message.count);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PhraseHighlight {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePhraseHighlight } as PhraseHighlight;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.text = reader.string();
                    break;
                case 2:
                    message.offset = longToNumber(reader.int64() as Long);
                    break;
                case 3:
                    message.count = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PhraseHighlight {
        const message = { ...basePhraseHighlight } as PhraseHighlight;
        message.text = object.text !== undefined && object.text !== null ? String(object.text) : '';
        message.offset =
            object.offset !== undefined && object.offset !== null ? Number(object.offset) : 0;
        message.count =
            object.count !== undefined && object.count !== null ? Number(object.count) : 0;
        return message;
    },

    toJSON(message: PhraseHighlight): unknown {
        const obj: any = {};
        message.text !== undefined && (obj.text = message.text);
        message.offset !== undefined && (obj.offset = Math.round(message.offset));
        message.count !== undefined && (obj.count = Math.round(message.count));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PhraseHighlight>, I>>(object: I): PhraseHighlight {
        const message = { ...basePhraseHighlight } as PhraseHighlight;
        message.text = object.text ?? '';
        message.offset = object.offset ?? 0;
        message.count = object.count ?? 0;
        return message;
    },
};

const baseRecognitionClassifierLabel: object = { label: '', confidence: 0 };

export const RecognitionClassifierLabel = {
    encode(
        message: RecognitionClassifierLabel,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.label !== '') {
            writer.uint32(10).string(message.label);
        }
        if (message.confidence !== 0) {
            writer.uint32(17).double(message.confidence);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): RecognitionClassifierLabel {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRecognitionClassifierLabel } as RecognitionClassifierLabel;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.label = reader.string();
                    break;
                case 2:
                    message.confidence = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): RecognitionClassifierLabel {
        const message = { ...baseRecognitionClassifierLabel } as RecognitionClassifierLabel;
        message.label =
            object.label !== undefined && object.label !== null ? String(object.label) : '';
        message.confidence =
            object.confidence !== undefined && object.confidence !== null
                ? Number(object.confidence)
                : 0;
        return message;
    },

    toJSON(message: RecognitionClassifierLabel): unknown {
        const obj: any = {};
        message.label !== undefined && (obj.label = message.label);
        message.confidence !== undefined && (obj.confidence = message.confidence);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<RecognitionClassifierLabel>, I>>(
        object: I,
    ): RecognitionClassifierLabel {
        const message = { ...baseRecognitionClassifierLabel } as RecognitionClassifierLabel;
        message.label = object.label ?? '';
        message.confidence = object.confidence ?? 0;
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
