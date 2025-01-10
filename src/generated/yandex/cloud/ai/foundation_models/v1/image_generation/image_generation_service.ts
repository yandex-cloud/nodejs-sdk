/* eslint-disable */
import { messageTypeRegistry } from '../../../../../../typeRegistry';
import Long from 'long';
import {
    makeGenericClientConstructor,
    ChannelCredentials,
    ChannelOptions,
    UntypedServiceImplementation,
    handleUnaryCall,
    Client,
    ClientUnaryCall,
    Metadata,
    CallOptions,
    ServiceError,
} from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
import {
    ImageGenerationOptions,
    Message,
} from '../../../../../../yandex/cloud/ai/foundation_models/v1/image_generation/image_generation';
import { Operation } from '../../../../../../yandex/cloud/operation/operation';

export const protobufPackage = 'yandex.cloud.ai.foundation_models.v1.image_generation';

/**
 * Request for the service to generate an image.
 *
 * For examples of usage, see [step-by-step guide](/docs/foundation-models/operations/yandexart/request).
 */
export interface ImageGenerationRequest {
    $type: 'yandex.cloud.ai.foundation_models.v1.image_generation.ImageGenerationRequest';
    /** The [model URI](/docs/foundation-models/concepts/yandexart/models) to be used for image generation. */
    modelUri: string;
    /** A list of messages representing the context for the image generation model. */
    messages: Message[];
    /** Image generation options. */
    generationOptions?: ImageGenerationOptions;
}

/** Response containing generated image. */
export interface ImageGenerationResponse {
    $type: 'yandex.cloud.ai.foundation_models.v1.image_generation.ImageGenerationResponse';
    /** The image is serialized as an array of bytes encoded in [Base64](https://en.wikipedia.org/wiki/Base64). */
    image: Buffer;
    /** The model version changes with each new releases. */
    modelVersion: string;
}

const baseImageGenerationRequest: object = {
    $type: 'yandex.cloud.ai.foundation_models.v1.image_generation.ImageGenerationRequest',
    modelUri: '',
};

export const ImageGenerationRequest = {
    $type: 'yandex.cloud.ai.foundation_models.v1.image_generation.ImageGenerationRequest' as const,

    encode(message: ImageGenerationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.modelUri !== '') {
            writer.uint32(10).string(message.modelUri);
        }
        for (const v of message.messages) {
            Message.encode(v!, writer.uint32(18).fork()).ldelim();
        }
        if (message.generationOptions !== undefined) {
            ImageGenerationOptions.encode(
                message.generationOptions,
                writer.uint32(26).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ImageGenerationRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseImageGenerationRequest } as ImageGenerationRequest;
        message.messages = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.modelUri = reader.string();
                    break;
                case 2:
                    message.messages.push(Message.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.generationOptions = ImageGenerationOptions.decode(
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

    fromJSON(object: any): ImageGenerationRequest {
        const message = { ...baseImageGenerationRequest } as ImageGenerationRequest;
        message.modelUri =
            object.modelUri !== undefined && object.modelUri !== null
                ? String(object.modelUri)
                : '';
        message.messages = (object.messages ?? []).map((e: any) => Message.fromJSON(e));
        message.generationOptions =
            object.generationOptions !== undefined && object.generationOptions !== null
                ? ImageGenerationOptions.fromJSON(object.generationOptions)
                : undefined;
        return message;
    },

    toJSON(message: ImageGenerationRequest): unknown {
        const obj: any = {};
        message.modelUri !== undefined && (obj.modelUri = message.modelUri);
        if (message.messages) {
            obj.messages = message.messages.map((e) => (e ? Message.toJSON(e) : undefined));
        } else {
            obj.messages = [];
        }
        message.generationOptions !== undefined &&
            (obj.generationOptions = message.generationOptions
                ? ImageGenerationOptions.toJSON(message.generationOptions)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ImageGenerationRequest>, I>>(
        object: I,
    ): ImageGenerationRequest {
        const message = { ...baseImageGenerationRequest } as ImageGenerationRequest;
        message.modelUri = object.modelUri ?? '';
        message.messages = object.messages?.map((e) => Message.fromPartial(e)) || [];
        message.generationOptions =
            object.generationOptions !== undefined && object.generationOptions !== null
                ? ImageGenerationOptions.fromPartial(object.generationOptions)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(ImageGenerationRequest.$type, ImageGenerationRequest);

const baseImageGenerationResponse: object = {
    $type: 'yandex.cloud.ai.foundation_models.v1.image_generation.ImageGenerationResponse',
    modelVersion: '',
};

export const ImageGenerationResponse = {
    $type: 'yandex.cloud.ai.foundation_models.v1.image_generation.ImageGenerationResponse' as const,

    encode(message: ImageGenerationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.image.length !== 0) {
            writer.uint32(10).bytes(message.image);
        }
        if (message.modelVersion !== '') {
            writer.uint32(18).string(message.modelVersion);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ImageGenerationResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseImageGenerationResponse } as ImageGenerationResponse;
        message.image = Buffer.alloc(0);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.image = reader.bytes() as Buffer;
                    break;
                case 2:
                    message.modelVersion = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ImageGenerationResponse {
        const message = { ...baseImageGenerationResponse } as ImageGenerationResponse;
        message.image =
            object.image !== undefined && object.image !== null
                ? Buffer.from(bytesFromBase64(object.image))
                : Buffer.alloc(0);
        message.modelVersion =
            object.modelVersion !== undefined && object.modelVersion !== null
                ? String(object.modelVersion)
                : '';
        return message;
    },

    toJSON(message: ImageGenerationResponse): unknown {
        const obj: any = {};
        message.image !== undefined &&
            (obj.image = base64FromBytes(
                message.image !== undefined ? message.image : Buffer.alloc(0),
            ));
        message.modelVersion !== undefined && (obj.modelVersion = message.modelVersion);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ImageGenerationResponse>, I>>(
        object: I,
    ): ImageGenerationResponse {
        const message = { ...baseImageGenerationResponse } as ImageGenerationResponse;
        message.image = object.image ?? Buffer.alloc(0);
        message.modelVersion = object.modelVersion ?? '';
        return message;
    },
};

messageTypeRegistry.set(ImageGenerationResponse.$type, ImageGenerationResponse);

/** Service for creating images based on a text description. */
export const ImageGenerationAsyncServiceService = {
    /** A method for generating an image based on a textual description. */
    generate: {
        path: '/yandex.cloud.ai.foundation_models.v1.image_generation.ImageGenerationAsyncService/Generate',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ImageGenerationRequest) =>
            Buffer.from(ImageGenerationRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ImageGenerationRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
} as const;

export interface ImageGenerationAsyncServiceServer extends UntypedServiceImplementation {
    /** A method for generating an image based on a textual description. */
    generate: handleUnaryCall<ImageGenerationRequest, Operation>;
}

export interface ImageGenerationAsyncServiceClient extends Client {
    /** A method for generating an image based on a textual description. */
    generate(
        request: ImageGenerationRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    generate(
        request: ImageGenerationRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    generate(
        request: ImageGenerationRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
}

export const ImageGenerationAsyncServiceClient = makeGenericClientConstructor(
    ImageGenerationAsyncServiceService,
    'yandex.cloud.ai.foundation_models.v1.image_generation.ImageGenerationAsyncService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): ImageGenerationAsyncServiceClient;
    service: typeof ImageGenerationAsyncServiceService;
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

const atob: (b64: string) => string =
    globalThis.atob || ((b64) => globalThis.Buffer.from(b64, 'base64').toString('binary'));
function bytesFromBase64(b64: string): Uint8Array {
    const bin = atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
        arr[i] = bin.charCodeAt(i);
    }
    return arr;
}

const btoa: (bin: string) => string =
    globalThis.btoa || ((bin) => globalThis.Buffer.from(bin, 'binary').toString('base64'));
function base64FromBytes(arr: Uint8Array): string {
    const bin: string[] = [];
    for (const byte of arr) {
        bin.push(String.fromCharCode(byte));
    }
    return btoa(bin.join(''));
}

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
