/* eslint-disable */
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

export const protobufPackage = 'yandex.cloud.ai.foundation_models.v1';

/** Request for the service to obtain text embeddings. */
export interface TextEmbeddingRequest {
    /** The [model URI](/docs/foundation-models/concepts/embeddings) to be used for obtaining text embeddings. */
    modelUri: string;
    /** The input text for which the embedding is requested. */
    text: string;
}

/** Response containing generated text embedding. */
export interface TextEmbeddingResponse {
    /** A repeated list of double values representing the embedding. */
    embedding: number[];
    /** The number of tokens in the input text. */
    numTokens: number;
    /** The model version changes with each new releases. */
    modelVersion: string;
}

const baseTextEmbeddingRequest: object = { modelUri: '', text: '' };

export const TextEmbeddingRequest = {
    encode(message: TextEmbeddingRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.modelUri !== '') {
            writer.uint32(10).string(message.modelUri);
        }
        if (message.text !== '') {
            writer.uint32(18).string(message.text);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): TextEmbeddingRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTextEmbeddingRequest } as TextEmbeddingRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.modelUri = reader.string();
                    break;
                case 2:
                    message.text = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): TextEmbeddingRequest {
        const message = { ...baseTextEmbeddingRequest } as TextEmbeddingRequest;
        message.modelUri =
            object.modelUri !== undefined && object.modelUri !== null
                ? String(object.modelUri)
                : '';
        message.text = object.text !== undefined && object.text !== null ? String(object.text) : '';
        return message;
    },

    toJSON(message: TextEmbeddingRequest): unknown {
        const obj: any = {};
        message.modelUri !== undefined && (obj.modelUri = message.modelUri);
        message.text !== undefined && (obj.text = message.text);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<TextEmbeddingRequest>, I>>(
        object: I,
    ): TextEmbeddingRequest {
        const message = { ...baseTextEmbeddingRequest } as TextEmbeddingRequest;
        message.modelUri = object.modelUri ?? '';
        message.text = object.text ?? '';
        return message;
    },
};

const baseTextEmbeddingResponse: object = { embedding: 0, numTokens: 0, modelVersion: '' };

export const TextEmbeddingResponse = {
    encode(message: TextEmbeddingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        writer.uint32(10).fork();
        for (const v of message.embedding) {
            writer.double(v);
        }
        writer.ldelim();
        if (message.numTokens !== 0) {
            writer.uint32(16).int64(message.numTokens);
        }
        if (message.modelVersion !== '') {
            writer.uint32(26).string(message.modelVersion);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): TextEmbeddingResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTextEmbeddingResponse } as TextEmbeddingResponse;
        message.embedding = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.embedding.push(reader.double());
                        }
                    } else {
                        message.embedding.push(reader.double());
                    }
                    break;
                case 2:
                    message.numTokens = longToNumber(reader.int64() as Long);
                    break;
                case 3:
                    message.modelVersion = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): TextEmbeddingResponse {
        const message = { ...baseTextEmbeddingResponse } as TextEmbeddingResponse;
        message.embedding = (object.embedding ?? []).map((e: any) => Number(e));
        message.numTokens =
            object.numTokens !== undefined && object.numTokens !== null
                ? Number(object.numTokens)
                : 0;
        message.modelVersion =
            object.modelVersion !== undefined && object.modelVersion !== null
                ? String(object.modelVersion)
                : '';
        return message;
    },

    toJSON(message: TextEmbeddingResponse): unknown {
        const obj: any = {};
        if (message.embedding) {
            obj.embedding = message.embedding.map((e) => e);
        } else {
            obj.embedding = [];
        }
        message.numTokens !== undefined && (obj.numTokens = Math.round(message.numTokens));
        message.modelVersion !== undefined && (obj.modelVersion = message.modelVersion);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<TextEmbeddingResponse>, I>>(
        object: I,
    ): TextEmbeddingResponse {
        const message = { ...baseTextEmbeddingResponse } as TextEmbeddingResponse;
        message.embedding = object.embedding?.map((e) => e) || [];
        message.numTokens = object.numTokens ?? 0;
        message.modelVersion = object.modelVersion ?? '';
        return message;
    },
};

/** Service for obtaining embeddings from input data. */
export const EmbeddingsServiceService = {
    /** A method for obtaining embeddings from text data. */
    textEmbedding: {
        path: '/yandex.cloud.ai.foundation_models.v1.EmbeddingsService/TextEmbedding',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: TextEmbeddingRequest) =>
            Buffer.from(TextEmbeddingRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => TextEmbeddingRequest.decode(value),
        responseSerialize: (value: TextEmbeddingResponse) =>
            Buffer.from(TextEmbeddingResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => TextEmbeddingResponse.decode(value),
    },
} as const;

export interface EmbeddingsServiceServer extends UntypedServiceImplementation {
    /** A method for obtaining embeddings from text data. */
    textEmbedding: handleUnaryCall<TextEmbeddingRequest, TextEmbeddingResponse>;
}

export interface EmbeddingsServiceClient extends Client {
    /** A method for obtaining embeddings from text data. */
    textEmbedding(
        request: TextEmbeddingRequest,
        callback: (error: ServiceError | null, response: TextEmbeddingResponse) => void,
    ): ClientUnaryCall;
    textEmbedding(
        request: TextEmbeddingRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: TextEmbeddingResponse) => void,
    ): ClientUnaryCall;
    textEmbedding(
        request: TextEmbeddingRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: TextEmbeddingResponse) => void,
    ): ClientUnaryCall;
}

export const EmbeddingsServiceClient = makeGenericClientConstructor(
    EmbeddingsServiceService,
    'yandex.cloud.ai.foundation_models.v1.EmbeddingsService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): EmbeddingsServiceClient;
    service: typeof EmbeddingsServiceService;
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
