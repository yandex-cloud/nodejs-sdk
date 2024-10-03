/* eslint-disable */
import { messageTypeRegistry } from "../../../../../../typeRegistry";
import Long from "long";
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
} from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import {
  ClassificationLabel,
  ClassificationSample,
} from "../../../../../../yandex/cloud/ai/foundation_models/v1/text_classification/text_classification";

export const protobufPackage =
  "yandex.cloud.ai.foundation_models.v1.text_classification";

/** Request for the service to classify text. */
export interface TextClassificationRequest {
  $type: "yandex.cloud.ai.foundation_models.v1.text_classification.TextClassificationRequest";
  /** The identifier of the classification model. */
  modelUri: string;
  /** Text for classification. */
  text: string;
}

/** Response containing classifier predictions. */
export interface TextClassificationResponse {
  $type: "yandex.cloud.ai.foundation_models.v1.text_classification.TextClassificationResponse";
  /** Result of classification - a list of label-confidence pairs. */
  predictions: ClassificationLabel[];
  /** Model version (changes with model releases). */
  modelVersion: string;
}

/** Request for the service to classify text. */
export interface FewShotTextClassificationRequest {
  $type: "yandex.cloud.ai.foundation_models.v1.text_classification.FewShotTextClassificationRequest";
  /** The identifier of the classification model. */
  modelUri: string;
  /** Text description of the classification task. */
  taskDescription: string;
  /** List of available labels for the classification result. */
  labels: string[];
  /** Text for classification. */
  text: string;
  /** Optional set of text samples with expected labels that may be used as an additional hint for the classifier. */
  samples: ClassificationSample[];
}

/** Response containing classifier predictions. */
export interface FewShotTextClassificationResponse {
  $type: "yandex.cloud.ai.foundation_models.v1.text_classification.FewShotTextClassificationResponse";
  /** Result of classification - a list of label-confidence pairs. */
  predictions: ClassificationLabel[];
  /** Model version (changes with model releases). */
  modelVersion: string;
}

const baseTextClassificationRequest: object = {
  $type:
    "yandex.cloud.ai.foundation_models.v1.text_classification.TextClassificationRequest",
  modelUri: "",
  text: "",
};

export const TextClassificationRequest = {
  $type:
    "yandex.cloud.ai.foundation_models.v1.text_classification.TextClassificationRequest" as const,

  encode(
    message: TextClassificationRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.modelUri !== "") {
      writer.uint32(10).string(message.modelUri);
    }
    if (message.text !== "") {
      writer.uint32(18).string(message.text);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TextClassificationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTextClassificationRequest,
    } as TextClassificationRequest;
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
    const message = {
      ...baseTextClassificationRequest,
    } as TextClassificationRequest;
    message.modelUri =
      object.modelUri !== undefined && object.modelUri !== null
        ? String(object.modelUri)
        : "";
    message.text =
      object.text !== undefined && object.text !== null
        ? String(object.text)
        : "";
    return message;
  },

  toJSON(message: TextClassificationRequest): unknown {
    const obj: any = {};
    message.modelUri !== undefined && (obj.modelUri = message.modelUri);
    message.text !== undefined && (obj.text = message.text);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TextClassificationRequest>, I>>(
    object: I
  ): TextClassificationRequest {
    const message = {
      ...baseTextClassificationRequest,
    } as TextClassificationRequest;
    message.modelUri = object.modelUri ?? "";
    message.text = object.text ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  TextClassificationRequest.$type,
  TextClassificationRequest
);

const baseTextClassificationResponse: object = {
  $type:
    "yandex.cloud.ai.foundation_models.v1.text_classification.TextClassificationResponse",
  modelVersion: "",
};

export const TextClassificationResponse = {
  $type:
    "yandex.cloud.ai.foundation_models.v1.text_classification.TextClassificationResponse" as const,

  encode(
    message: TextClassificationResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.predictions) {
      ClassificationLabel.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.modelVersion !== "") {
      writer.uint32(18).string(message.modelVersion);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TextClassificationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTextClassificationResponse,
    } as TextClassificationResponse;
    message.predictions = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.predictions.push(
            ClassificationLabel.decode(reader, reader.uint32())
          );
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

  fromJSON(object: any): TextClassificationResponse {
    const message = {
      ...baseTextClassificationResponse,
    } as TextClassificationResponse;
    message.predictions = (object.predictions ?? []).map((e: any) =>
      ClassificationLabel.fromJSON(e)
    );
    message.modelVersion =
      object.modelVersion !== undefined && object.modelVersion !== null
        ? String(object.modelVersion)
        : "";
    return message;
  },

  toJSON(message: TextClassificationResponse): unknown {
    const obj: any = {};
    if (message.predictions) {
      obj.predictions = message.predictions.map((e) =>
        e ? ClassificationLabel.toJSON(e) : undefined
      );
    } else {
      obj.predictions = [];
    }
    message.modelVersion !== undefined &&
      (obj.modelVersion = message.modelVersion);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TextClassificationResponse>, I>>(
    object: I
  ): TextClassificationResponse {
    const message = {
      ...baseTextClassificationResponse,
    } as TextClassificationResponse;
    message.predictions =
      object.predictions?.map((e) => ClassificationLabel.fromPartial(e)) || [];
    message.modelVersion = object.modelVersion ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  TextClassificationResponse.$type,
  TextClassificationResponse
);

const baseFewShotTextClassificationRequest: object = {
  $type:
    "yandex.cloud.ai.foundation_models.v1.text_classification.FewShotTextClassificationRequest",
  modelUri: "",
  taskDescription: "",
  labels: "",
  text: "",
};

export const FewShotTextClassificationRequest = {
  $type:
    "yandex.cloud.ai.foundation_models.v1.text_classification.FewShotTextClassificationRequest" as const,

  encode(
    message: FewShotTextClassificationRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.modelUri !== "") {
      writer.uint32(10).string(message.modelUri);
    }
    if (message.taskDescription !== "") {
      writer.uint32(18).string(message.taskDescription);
    }
    for (const v of message.labels) {
      writer.uint32(26).string(v!);
    }
    if (message.text !== "") {
      writer.uint32(34).string(message.text);
    }
    for (const v of message.samples) {
      ClassificationSample.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): FewShotTextClassificationRequest {
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
          message.samples.push(
            ClassificationSample.decode(reader, reader.uint32())
          );
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
        : "";
    message.taskDescription =
      object.taskDescription !== undefined && object.taskDescription !== null
        ? String(object.taskDescription)
        : "";
    message.labels = (object.labels ?? []).map((e: any) => String(e));
    message.text =
      object.text !== undefined && object.text !== null
        ? String(object.text)
        : "";
    message.samples = (object.samples ?? []).map((e: any) =>
      ClassificationSample.fromJSON(e)
    );
    return message;
  },

  toJSON(message: FewShotTextClassificationRequest): unknown {
    const obj: any = {};
    message.modelUri !== undefined && (obj.modelUri = message.modelUri);
    message.taskDescription !== undefined &&
      (obj.taskDescription = message.taskDescription);
    if (message.labels) {
      obj.labels = message.labels.map((e) => e);
    } else {
      obj.labels = [];
    }
    message.text !== undefined && (obj.text = message.text);
    if (message.samples) {
      obj.samples = message.samples.map((e) =>
        e ? ClassificationSample.toJSON(e) : undefined
      );
    } else {
      obj.samples = [];
    }
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<FewShotTextClassificationRequest>, I>
  >(object: I): FewShotTextClassificationRequest {
    const message = {
      ...baseFewShotTextClassificationRequest,
    } as FewShotTextClassificationRequest;
    message.modelUri = object.modelUri ?? "";
    message.taskDescription = object.taskDescription ?? "";
    message.labels = object.labels?.map((e) => e) || [];
    message.text = object.text ?? "";
    message.samples =
      object.samples?.map((e) => ClassificationSample.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(
  FewShotTextClassificationRequest.$type,
  FewShotTextClassificationRequest
);

const baseFewShotTextClassificationResponse: object = {
  $type:
    "yandex.cloud.ai.foundation_models.v1.text_classification.FewShotTextClassificationResponse",
  modelVersion: "",
};

export const FewShotTextClassificationResponse = {
  $type:
    "yandex.cloud.ai.foundation_models.v1.text_classification.FewShotTextClassificationResponse" as const,

  encode(
    message: FewShotTextClassificationResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.predictions) {
      ClassificationLabel.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.modelVersion !== "") {
      writer.uint32(18).string(message.modelVersion);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): FewShotTextClassificationResponse {
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
          message.predictions.push(
            ClassificationLabel.decode(reader, reader.uint32())
          );
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

  fromJSON(object: any): FewShotTextClassificationResponse {
    const message = {
      ...baseFewShotTextClassificationResponse,
    } as FewShotTextClassificationResponse;
    message.predictions = (object.predictions ?? []).map((e: any) =>
      ClassificationLabel.fromJSON(e)
    );
    message.modelVersion =
      object.modelVersion !== undefined && object.modelVersion !== null
        ? String(object.modelVersion)
        : "";
    return message;
  },

  toJSON(message: FewShotTextClassificationResponse): unknown {
    const obj: any = {};
    if (message.predictions) {
      obj.predictions = message.predictions.map((e) =>
        e ? ClassificationLabel.toJSON(e) : undefined
      );
    } else {
      obj.predictions = [];
    }
    message.modelVersion !== undefined &&
      (obj.modelVersion = message.modelVersion);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<FewShotTextClassificationResponse>, I>
  >(object: I): FewShotTextClassificationResponse {
    const message = {
      ...baseFewShotTextClassificationResponse,
    } as FewShotTextClassificationResponse;
    message.predictions =
      object.predictions?.map((e) => ClassificationLabel.fromPartial(e)) || [];
    message.modelVersion = object.modelVersion ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  FewShotTextClassificationResponse.$type,
  FewShotTextClassificationResponse
);

/** Service for classifying text from input text. */
export const TextClassificationServiceService = {
  /** RPC method for text classification. */
  classify: {
    path: "/yandex.cloud.ai.foundation_models.v1.text_classification.TextClassificationService/Classify",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: TextClassificationRequest) =>
      Buffer.from(TextClassificationRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      TextClassificationRequest.decode(value),
    responseSerialize: (value: TextClassificationResponse) =>
      Buffer.from(TextClassificationResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      TextClassificationResponse.decode(value),
  },
  /** RPC method for few-shot text classification. */
  fewShotClassify: {
    path: "/yandex.cloud.ai.foundation_models.v1.text_classification.TextClassificationService/FewShotClassify",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: FewShotTextClassificationRequest) =>
      Buffer.from(FewShotTextClassificationRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      FewShotTextClassificationRequest.decode(value),
    responseSerialize: (value: FewShotTextClassificationResponse) =>
      Buffer.from(FewShotTextClassificationResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      FewShotTextClassificationResponse.decode(value),
  },
} as const;

export interface TextClassificationServiceServer
  extends UntypedServiceImplementation {
  /** RPC method for text classification. */
  classify: handleUnaryCall<
    TextClassificationRequest,
    TextClassificationResponse
  >;
  /** RPC method for few-shot text classification. */
  fewShotClassify: handleUnaryCall<
    FewShotTextClassificationRequest,
    FewShotTextClassificationResponse
  >;
}

export interface TextClassificationServiceClient extends Client {
  /** RPC method for text classification. */
  classify(
    request: TextClassificationRequest,
    callback: (
      error: ServiceError | null,
      response: TextClassificationResponse
    ) => void
  ): ClientUnaryCall;
  classify(
    request: TextClassificationRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: TextClassificationResponse
    ) => void
  ): ClientUnaryCall;
  classify(
    request: TextClassificationRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: TextClassificationResponse
    ) => void
  ): ClientUnaryCall;
  /** RPC method for few-shot text classification. */
  fewShotClassify(
    request: FewShotTextClassificationRequest,
    callback: (
      error: ServiceError | null,
      response: FewShotTextClassificationResponse
    ) => void
  ): ClientUnaryCall;
  fewShotClassify(
    request: FewShotTextClassificationRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: FewShotTextClassificationResponse
    ) => void
  ): ClientUnaryCall;
  fewShotClassify(
    request: FewShotTextClassificationRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: FewShotTextClassificationResponse
    ) => void
  ): ClientUnaryCall;
}

export const TextClassificationServiceClient = makeGenericClientConstructor(
  TextClassificationServiceService,
  "yandex.cloud.ai.foundation_models.v1.text_classification.TextClassificationService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): TextClassificationServiceClient;
  service: typeof TextClassificationServiceService;
};

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P> | "$type">,
        never
      >;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
