/* eslint-disable */
import { messageTypeRegistry } from '../../../../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.ai.foundation_models.v1.image_generation';

/** The text descriptions and weights that the model uses to generate an image. */
export interface Message {
    $type: 'yandex.cloud.ai.foundation_models.v1.image_generation.Message';
    /** Text describing the image. */
    text: string;
    /** Message weight. Negative values indicate negative messages. */
    weight: number;
}

export interface AspectRatio {
    $type: 'yandex.cloud.ai.foundation_models.v1.image_generation.AspectRatio';
    /** Weight of width in image. */
    widthRatio: number;
    /** Weight of height in image. */
    heightRatio: number;
}

export interface ImageGenerationOptions {
    $type: 'yandex.cloud.ai.foundation_models.v1.image_generation.ImageGenerationOptions';
    /**
     * The [MIME type](https://en.wikipedia.org/wiki/Media_type) of generated image format.
     * For possible specifications, see [documentation](/docs/foundation-models/concepts).
     */
    mimeType: string;
    /** Seed for image generation. It serves as a starting point for image generation from noise. */
    seed: number;
    /** Aspect ratio of generated image. */
    aspectRatio?: AspectRatio;
}

const baseMessage: object = {
    $type: 'yandex.cloud.ai.foundation_models.v1.image_generation.Message',
    text: '',
    weight: 0,
};

export const Message = {
    $type: 'yandex.cloud.ai.foundation_models.v1.image_generation.Message' as const,

    encode(message: Message, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.text !== '') {
            writer.uint32(10).string(message.text);
        }
        if (message.weight !== 0) {
            writer.uint32(17).double(message.weight);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Message {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMessage } as Message;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.text = reader.string();
                    break;
                case 2:
                    message.weight = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Message {
        const message = { ...baseMessage } as Message;
        message.text = object.text !== undefined && object.text !== null ? String(object.text) : '';
        message.weight =
            object.weight !== undefined && object.weight !== null ? Number(object.weight) : 0;
        return message;
    },

    toJSON(message: Message): unknown {
        const obj: any = {};
        message.text !== undefined && (obj.text = message.text);
        message.weight !== undefined && (obj.weight = message.weight);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Message>, I>>(object: I): Message {
        const message = { ...baseMessage } as Message;
        message.text = object.text ?? '';
        message.weight = object.weight ?? 0;
        return message;
    },
};

messageTypeRegistry.set(Message.$type, Message);

const baseAspectRatio: object = {
    $type: 'yandex.cloud.ai.foundation_models.v1.image_generation.AspectRatio',
    widthRatio: 0,
    heightRatio: 0,
};

export const AspectRatio = {
    $type: 'yandex.cloud.ai.foundation_models.v1.image_generation.AspectRatio' as const,

    encode(message: AspectRatio, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.widthRatio !== 0) {
            writer.uint32(8).int64(message.widthRatio);
        }
        if (message.heightRatio !== 0) {
            writer.uint32(16).int64(message.heightRatio);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): AspectRatio {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAspectRatio } as AspectRatio;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.widthRatio = longToNumber(reader.int64() as Long);
                    break;
                case 2:
                    message.heightRatio = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): AspectRatio {
        const message = { ...baseAspectRatio } as AspectRatio;
        message.widthRatio =
            object.widthRatio !== undefined && object.widthRatio !== null
                ? Number(object.widthRatio)
                : 0;
        message.heightRatio =
            object.heightRatio !== undefined && object.heightRatio !== null
                ? Number(object.heightRatio)
                : 0;
        return message;
    },

    toJSON(message: AspectRatio): unknown {
        const obj: any = {};
        message.widthRatio !== undefined && (obj.widthRatio = Math.round(message.widthRatio));
        message.heightRatio !== undefined && (obj.heightRatio = Math.round(message.heightRatio));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<AspectRatio>, I>>(object: I): AspectRatio {
        const message = { ...baseAspectRatio } as AspectRatio;
        message.widthRatio = object.widthRatio ?? 0;
        message.heightRatio = object.heightRatio ?? 0;
        return message;
    },
};

messageTypeRegistry.set(AspectRatio.$type, AspectRatio);

const baseImageGenerationOptions: object = {
    $type: 'yandex.cloud.ai.foundation_models.v1.image_generation.ImageGenerationOptions',
    mimeType: '',
    seed: 0,
};

export const ImageGenerationOptions = {
    $type: 'yandex.cloud.ai.foundation_models.v1.image_generation.ImageGenerationOptions' as const,

    encode(message: ImageGenerationOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.mimeType !== '') {
            writer.uint32(10).string(message.mimeType);
        }
        if (message.seed !== 0) {
            writer.uint32(16).int64(message.seed);
        }
        if (message.aspectRatio !== undefined) {
            AspectRatio.encode(message.aspectRatio, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ImageGenerationOptions {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseImageGenerationOptions } as ImageGenerationOptions;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mimeType = reader.string();
                    break;
                case 2:
                    message.seed = longToNumber(reader.int64() as Long);
                    break;
                case 3:
                    message.aspectRatio = AspectRatio.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ImageGenerationOptions {
        const message = { ...baseImageGenerationOptions } as ImageGenerationOptions;
        message.mimeType =
            object.mimeType !== undefined && object.mimeType !== null
                ? String(object.mimeType)
                : '';
        message.seed = object.seed !== undefined && object.seed !== null ? Number(object.seed) : 0;
        message.aspectRatio =
            object.aspectRatio !== undefined && object.aspectRatio !== null
                ? AspectRatio.fromJSON(object.aspectRatio)
                : undefined;
        return message;
    },

    toJSON(message: ImageGenerationOptions): unknown {
        const obj: any = {};
        message.mimeType !== undefined && (obj.mimeType = message.mimeType);
        message.seed !== undefined && (obj.seed = Math.round(message.seed));
        message.aspectRatio !== undefined &&
            (obj.aspectRatio = message.aspectRatio
                ? AspectRatio.toJSON(message.aspectRatio)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ImageGenerationOptions>, I>>(
        object: I,
    ): ImageGenerationOptions {
        const message = { ...baseImageGenerationOptions } as ImageGenerationOptions;
        message.mimeType = object.mimeType ?? '';
        message.seed = object.seed ?? 0;
        message.aspectRatio =
            object.aspectRatio !== undefined && object.aspectRatio !== null
                ? AspectRatio.fromPartial(object.aspectRatio)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(ImageGenerationOptions.$type, ImageGenerationOptions);

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
