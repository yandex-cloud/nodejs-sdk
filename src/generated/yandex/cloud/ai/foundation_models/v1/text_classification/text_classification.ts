/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.ai.foundation_models.v1.text_classification';

/** A pair of text labels and their corresponding confidence values. */
export interface ClassificationLabel {
    /** A class name label. */
    label: string;
    /** The probability of classifying text into a specific class. */
    confidence: number;
}

/** Description of a sample for the classification task. */
export interface ClassificationSample {
    /** Text sample. */
    text: string;
    /** Expected label for a given text. */
    label: string;
}

const baseClassificationLabel: object = { label: '', confidence: 0 };

export const ClassificationLabel = {
    encode(message: ClassificationLabel, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.label !== '') {
            writer.uint32(10).string(message.label);
        }
        if (message.confidence !== 0) {
            writer.uint32(17).double(message.confidence);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ClassificationLabel {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseClassificationLabel } as ClassificationLabel;
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

    fromJSON(object: any): ClassificationLabel {
        const message = { ...baseClassificationLabel } as ClassificationLabel;
        message.label =
            object.label !== undefined && object.label !== null ? String(object.label) : '';
        message.confidence =
            object.confidence !== undefined && object.confidence !== null
                ? Number(object.confidence)
                : 0;
        return message;
    },

    toJSON(message: ClassificationLabel): unknown {
        const obj: any = {};
        message.label !== undefined && (obj.label = message.label);
        message.confidence !== undefined && (obj.confidence = message.confidence);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ClassificationLabel>, I>>(
        object: I,
    ): ClassificationLabel {
        const message = { ...baseClassificationLabel } as ClassificationLabel;
        message.label = object.label ?? '';
        message.confidence = object.confidence ?? 0;
        return message;
    },
};

const baseClassificationSample: object = { text: '', label: '' };

export const ClassificationSample = {
    encode(message: ClassificationSample, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.text !== '') {
            writer.uint32(10).string(message.text);
        }
        if (message.label !== '') {
            writer.uint32(18).string(message.label);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ClassificationSample {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseClassificationSample } as ClassificationSample;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.text = reader.string();
                    break;
                case 2:
                    message.label = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ClassificationSample {
        const message = { ...baseClassificationSample } as ClassificationSample;
        message.text = object.text !== undefined && object.text !== null ? String(object.text) : '';
        message.label =
            object.label !== undefined && object.label !== null ? String(object.label) : '';
        return message;
    },

    toJSON(message: ClassificationSample): unknown {
        const obj: any = {};
        message.text !== undefined && (obj.text = message.text);
        message.label !== undefined && (obj.label = message.label);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ClassificationSample>, I>>(
        object: I,
    ): ClassificationSample {
        const message = { ...baseClassificationSample } as ClassificationSample;
        message.text = object.text ?? '';
        message.label = object.label ?? '';
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
