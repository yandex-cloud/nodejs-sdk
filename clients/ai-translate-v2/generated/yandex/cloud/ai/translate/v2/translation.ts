/* eslint-disable */
import { messageTypeRegistry } from '../../../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.ai.translate.v2';

export interface TranslatedText {
    $type: 'yandex.cloud.ai.translate.v2.TranslatedText';
    /** Translated text. */
    text: string;
    /**
     * The language code of the source text.
     * Specified in [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) format (for example, `` en ``).
     */
    detectedLanguageCode: string;
}

export interface Language {
    $type: 'yandex.cloud.ai.translate.v2.Language';
    /**
     * The language code.
     * Specified in [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) format (for example, `` en ``).
     */
    code: string;
    /** The name of the language (for example, `` English ``). */
    name: string;
}

const baseTranslatedText: object = {
    $type: 'yandex.cloud.ai.translate.v2.TranslatedText',
    text: '',
    detectedLanguageCode: '',
};

export const TranslatedText = {
    $type: 'yandex.cloud.ai.translate.v2.TranslatedText' as const,

    encode(message: TranslatedText, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.text !== '') {
            writer.uint32(10).string(message.text);
        }
        if (message.detectedLanguageCode !== '') {
            writer.uint32(18).string(message.detectedLanguageCode);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): TranslatedText {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTranslatedText } as TranslatedText;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.text = reader.string();
                    break;
                case 2:
                    message.detectedLanguageCode = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): TranslatedText {
        const message = { ...baseTranslatedText } as TranslatedText;
        message.text = object.text !== undefined && object.text !== null ? String(object.text) : '';
        message.detectedLanguageCode =
            object.detectedLanguageCode !== undefined && object.detectedLanguageCode !== null
                ? String(object.detectedLanguageCode)
                : '';
        return message;
    },

    toJSON(message: TranslatedText): unknown {
        const obj: any = {};
        message.text !== undefined && (obj.text = message.text);
        message.detectedLanguageCode !== undefined &&
            (obj.detectedLanguageCode = message.detectedLanguageCode);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<TranslatedText>, I>>(object: I): TranslatedText {
        const message = { ...baseTranslatedText } as TranslatedText;
        message.text = object.text ?? '';
        message.detectedLanguageCode = object.detectedLanguageCode ?? '';
        return message;
    },
};

messageTypeRegistry.set(TranslatedText.$type, TranslatedText);

const baseLanguage: object = { $type: 'yandex.cloud.ai.translate.v2.Language', code: '', name: '' };

export const Language = {
    $type: 'yandex.cloud.ai.translate.v2.Language' as const,

    encode(message: Language, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.code !== '') {
            writer.uint32(10).string(message.code);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Language {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseLanguage } as Language;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.code = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Language {
        const message = { ...baseLanguage } as Language;
        message.code = object.code !== undefined && object.code !== null ? String(object.code) : '';
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        return message;
    },

    toJSON(message: Language): unknown {
        const obj: any = {};
        message.code !== undefined && (obj.code = message.code);
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Language>, I>>(object: I): Language {
        const message = { ...baseLanguage } as Language;
        message.code = object.code ?? '';
        message.name = object.name ?? '';
        return message;
    },
};

messageTypeRegistry.set(Language.$type, Language);

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

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
