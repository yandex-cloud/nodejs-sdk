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
import {
    ClassificationLabel,
    ClassificationSample,
} from '../../../../../../yandex/cloud/ai/foundation_models/v1/text_classification/text_classification';

export const protobufPackage = 'yandex.cloud.ai.foundation_models.v1.text_classification';

/**
 * Request for the service to classify text with tuned model.
 *
 * The names of the classes between which the model will be distributing requests must be specified during model tuning;
 * therefore, they are not provided in the request.
 *
 * For examples of usage, see [step-by-step guides](/docs/foundation-models/operations/classifier/additionally-trained).
 */
export interface TextClassificationRequest {
    /** The [URI](/docs/foundation-models/concepts/classifier/models) of your tuned classifier model. */
    modelUri: string;
    /** Text for classification. */
    text: string;
}

/** Response with classifier predictions. */
export interface TextClassificationResponse {
    /**
     * The classification results with the `confidence`` values
     * for the probability of classifying the request text into each class.
     */
    predictions: ClassificationLabel[];
    /** The model version changes with each new releases. */
    modelVersion: string;
    /** Number of input tokens */
    inputTokens: number;
}

/**
 * Request for the service to classify text.
 * For examples of usage, see [step-by-step guides](/docs/foundation-models/operations/classifier/readymade).
 */
export interface FewShotTextClassificationRequest {
    /** The [URI](/docs/foundation-models/concepts/classifier/models) of the classifier model. */
    modelUri: string;
    /** Text description of the classification task. */
    taskDescription: string;
    /**
     * List of available labels for the classification result.
     * Give meaningful names to label classes: this is essential for correct classification results.
     * For example, use ``chemistry`` and ``physics`` rather than ``chm`` and ``phs`` for class names.
     */
    labels: string[];
    /** Text for classification. */
    text: string;
    /** Optional set of text samples with expected labels that may be used as an additional hint for the classifier. */
    samples: ClassificationSample[];
}

/** Response containing classifier predictions. */
export interface FewShotTextClassificationResponse {
    /**
     * The classification results with the `confidence`` values
     * for the probability of classifying the request text into each class.
     */
    predictions: ClassificationLabel[];
    /** The model version changes with each new releases. */
    modelVersion: string;
    /** Number of input tokens */
    inputTokens: number;
}

const baseTextClassificationRequest: object = { modelUri: '', text: '' };

export const TextClassificationRequest = {
    encode(
        message: TextClassificationRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.modelUri !== '') {
            writer.uint32(10).string(message.modelUri);
        }
        if (message.text !== '') {
            writer.uint32(18).string(message.text);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): TextClassificationRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTextClassificationRequest } as TextClassificationRequest;
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

    fromJSON(object: any): TextClassificationRequest {
        const message = { ...baseTextClassificationRequest } as TextClassificationRequest;
        message.modelUri =
            object.modelUri !== undefined && object.modelUri !== null
                ? String(object.modelUri)
                : '';
        message.text = object.text !== undefined && object.text !== null ? String(object.text) : '';
        return message;
    },

    toJSON(message: TextClassificationRequest): unknown {
        const obj: any = {};
        message.modelUri !== undefined && (obj.modelUri = message.modelUri);
        message.text !== undefined && (obj.text = message.text);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<TextClassificationRequest>, I>>(
        object: I,
    ): TextClassificationRequest {
        const message = { ...baseTextClassificationRequest } as TextClassificationRequest;
        message.modelUri = object.modelUri ?? '';
        message.text = object.text ?? '';
        return message;
    },
};

const baseTextClassificationResponse: object = { modelVersion: '', inputTokens: 0 };

export const TextClassificationResponse = {
    encode(
        message: TextClassificationResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.predictions) {
            ClassificationLabel.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.modelVersion !== '') {
            writer.uint32(18).string(message.modelVersion);
        }
        if (message.inputTokens !== 0) {
            writer.uint32(24).int64(message.inputTokens);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): TextClassificationResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTextClassificationResponse } as TextClassificationResponse;
        message.predictions = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.predictions.push(ClassificationLabel.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.modelVersion = reader.string();
                    break;
                case 3:
                    message.inputTokens = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): TextClassificationResponse {
        const message = { ...baseTextClassificationResponse } as TextClassificationResponse;
        message.predictions = (object.predictions ?? []).map((e: any) =>
            ClassificationLabel.fromJSON(e),
        );
        message.modelVersion =
            object.modelVersion !== undefined && object.modelVersion !== null
                ? String(object.modelVersion)
                : '';
        message.inputTokens =
            object.inputTokens !== undefined && object.inputTokens !== null
                ? Number(object.inputTokens)
                : 0;
        return message;
    },

    toJSON(message: TextClassificationResponse): unknown {
        const obj: any = {};
        if (message.predictions) {
            obj.predictions = message.predictions.map((e) =>
                e ? ClassificationLabel.toJSON(e) : undefined,
            );
        } else {
            obj.predictions = [];
        }
        message.modelVersion !== undefined && (obj.modelVersion = message.modelVersion);
        message.inputTokens !== undefined && (obj.inputTokens = Math.round(message.inputTokens));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<TextClassificationResponse>, I>>(
        object: I,
    ): TextClassificationResponse {
        const message = { ...baseTextClassificationResponse } as TextClassificationResponse;
        message.predictions =
            object.predictions?.map((e) => ClassificationLabel.fromPartial(e)) || [];
        message.modelVersion = object.modelVersion ?? '';
        message.inputTokens = object.inputTokens ?? 0;
        return message;
    },
};

const baseFewShotTextClassificationRequest: object = {
    modelUri: '',
    taskDescription: '',
    labels: '',
    text: '',
};

export const FewShotTextClassificationRequest = {
    encode(
        message: FewShotTextClassificationRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.modelUri !== '') {
            writer.uint32(10).string(message.modelUri);
        }
        if (message.taskDescription !== '') {
            writer.uint32(18).string(message.taskDescription);
        }
        for (const v of message.labels) {
            writer.uint32(26).string(v!);
        }
        if (message.text !== '') {
            writer.uint32(34).string(message.text);
        }
        for (const v of message.samples) {
            ClassificationSample.encode(v!, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): FewShotTextClassificationRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseFewShotTextClassificationRequest,
        } as FewShotTextClassificationRequest;
        message.labels = [];
        message.samples = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.modelUri = reader.string();
                    break;
                case 2:
                    message.taskDescription = reader.string();
                    break;
                case 3:
                    message.labels.push(reader.string());
                    break;
                case 4:
                    message.text = reader.string();
                    break;
                case 5:
                    message.samples.push(ClassificationSample.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): FewShotTextClassificationRequest {
        const message = {
            ...baseFewShotTextClassificationRequest,
        } as FewShotTextClassificationRequest;
        message.modelUri =
            object.modelUri !== undefined && object.modelUri !== null
                ? String(object.modelUri)
                : '';
        message.taskDescription =
            object.taskDescription !== undefined && object.taskDescription !== null
                ? String(object.taskDescription)
                : '';
        message.labels = (object.labels ?? []).map((e: any) => String(e));
        message.text = object.text !== undefined && object.text !== null ? String(object.text) : '';
        message.samples = (object.samples ?? []).map((e: any) => ClassificationSample.fromJSON(e));
        return message;
    },

    toJSON(message: FewShotTextClassificationRequest): unknown {
        const obj: any = {};
        message.modelUri !== undefined && (obj.modelUri = message.modelUri);
        message.taskDescription !== undefined && (obj.taskDescription = message.taskDescription);
        if (message.labels) {
            obj.labels = message.labels.map((e) => e);
        } else {
            obj.labels = [];
        }
        message.text !== undefined && (obj.text = message.text);
        if (message.samples) {
            obj.samples = message.samples.map((e) =>
                e ? ClassificationSample.toJSON(e) : undefined,
            );
        } else {
            obj.samples = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<FewShotTextClassificationRequest>, I>>(
        object: I,
    ): FewShotTextClassificationRequest {
        const message = {
            ...baseFewShotTextClassificationRequest,
        } as FewShotTextClassificationRequest;
        message.modelUri = object.modelUri ?? '';
        message.taskDescription = object.taskDescription ?? '';
        message.labels = object.labels?.map((e) => e) || [];
        message.text = object.text ?? '';
        message.samples = object.samples?.map((e) => ClassificationSample.fromPartial(e)) || [];
        return message;
    },
};

const baseFewShotTextClassificationResponse: object = { modelVersion: '', inputTokens: 0 };

export const FewShotTextClassificationResponse = {
    encode(
        message: FewShotTextClassificationResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.predictions) {
            ClassificationLabel.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.modelVersion !== '') {
            writer.uint32(18).string(message.modelVersion);
        }
        if (message.inputTokens !== 0) {
            writer.uint32(24).int64(message.inputTokens);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): FewShotTextClassificationResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseFewShotTextClassificationResponse,
        } as FewShotTextClassificationResponse;
        message.predictions = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.predictions.push(ClassificationLabel.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.modelVersion = reader.string();
                    break;
                case 3:
                    message.inputTokens = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): FewShotTextClassificationResponse {
        const message = {
            ...baseFewShotTextClassificationResponse,
        } as FewShotTextClassificationResponse;
        message.predictions = (object.predictions ?? []).map((e: any) =>
            ClassificationLabel.fromJSON(e),
        );
        message.modelVersion =
            object.modelVersion !== undefined && object.modelVersion !== null
                ? String(object.modelVersion)
                : '';
        message.inputTokens =
            object.inputTokens !== undefined && object.inputTokens !== null
                ? Number(object.inputTokens)
                : 0;
        return message;
    },

    toJSON(message: FewShotTextClassificationResponse): unknown {
        const obj: any = {};
        if (message.predictions) {
            obj.predictions = message.predictions.map((e) =>
                e ? ClassificationLabel.toJSON(e) : undefined,
            );
        } else {
            obj.predictions = [];
        }
        message.modelVersion !== undefined && (obj.modelVersion = message.modelVersion);
        message.inputTokens !== undefined && (obj.inputTokens = Math.round(message.inputTokens));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<FewShotTextClassificationResponse>, I>>(
        object: I,
    ): FewShotTextClassificationResponse {
        const message = {
            ...baseFewShotTextClassificationResponse,
        } as FewShotTextClassificationResponse;
        message.predictions =
            object.predictions?.map((e) => ClassificationLabel.fromPartial(e)) || [];
        message.modelVersion = object.modelVersion ?? '';
        message.inputTokens = object.inputTokens ?? 0;
        return message;
    },
};

/** Service for classifying the text requests provided in prompts. */
export const TextClassificationServiceService = {
    /**
     * RPC method to classify text with tuned model.
     *
     * The names of the classes between which the model will be distributing requests
     * must be specified during model tuning and are not provided in the request.
     */
    classify: {
        path: '/yandex.cloud.ai.foundation_models.v1.text_classification.TextClassificationService/Classify',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: TextClassificationRequest) =>
            Buffer.from(TextClassificationRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => TextClassificationRequest.decode(value),
        responseSerialize: (value: TextClassificationResponse) =>
            Buffer.from(TextClassificationResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => TextClassificationResponse.decode(value),
    },
    /**
     * RPC method for binary and multi-class classification.
     *
     * You can provide up to 20 classes for few-shot text classification
     * with optional examples.
     */
    fewShotClassify: {
        path: '/yandex.cloud.ai.foundation_models.v1.text_classification.TextClassificationService/FewShotClassify',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: FewShotTextClassificationRequest) =>
            Buffer.from(FewShotTextClassificationRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => FewShotTextClassificationRequest.decode(value),
        responseSerialize: (value: FewShotTextClassificationResponse) =>
            Buffer.from(FewShotTextClassificationResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => FewShotTextClassificationResponse.decode(value),
    },
} as const;

export interface TextClassificationServiceServer extends UntypedServiceImplementation {
    /**
     * RPC method to classify text with tuned model.
     *
     * The names of the classes between which the model will be distributing requests
     * must be specified during model tuning and are not provided in the request.
     */
    classify: handleUnaryCall<TextClassificationRequest, TextClassificationResponse>;
    /**
     * RPC method for binary and multi-class classification.
     *
     * You can provide up to 20 classes for few-shot text classification
     * with optional examples.
     */
    fewShotClassify: handleUnaryCall<
        FewShotTextClassificationRequest,
        FewShotTextClassificationResponse
    >;
}

export interface TextClassificationServiceClient extends Client {
    /**
     * RPC method to classify text with tuned model.
     *
     * The names of the classes between which the model will be distributing requests
     * must be specified during model tuning and are not provided in the request.
     */
    classify(
        request: TextClassificationRequest,
        callback: (error: ServiceError | null, response: TextClassificationResponse) => void,
    ): ClientUnaryCall;
    classify(
        request: TextClassificationRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: TextClassificationResponse) => void,
    ): ClientUnaryCall;
    classify(
        request: TextClassificationRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: TextClassificationResponse) => void,
    ): ClientUnaryCall;
    /**
     * RPC method for binary and multi-class classification.
     *
     * You can provide up to 20 classes for few-shot text classification
     * with optional examples.
     */
    fewShotClassify(
        request: FewShotTextClassificationRequest,
        callback: (error: ServiceError | null, response: FewShotTextClassificationResponse) => void,
    ): ClientUnaryCall;
    fewShotClassify(
        request: FewShotTextClassificationRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: FewShotTextClassificationResponse) => void,
    ): ClientUnaryCall;
    fewShotClassify(
        request: FewShotTextClassificationRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: FewShotTextClassificationResponse) => void,
    ): ClientUnaryCall;
}

export const TextClassificationServiceClient = makeGenericClientConstructor(
    TextClassificationServiceService,
    'yandex.cloud.ai.foundation_models.v1.text_classification.TextClassificationService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): TextClassificationServiceClient;
    service: typeof TextClassificationServiceService;
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
