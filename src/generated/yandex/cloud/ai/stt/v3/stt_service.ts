/* eslint-disable */
import { messageTypeRegistry } from "../../../../../typeRegistry";
import Long from "long";
import {
  makeGenericClientConstructor,
  ChannelCredentials,
  ChannelOptions,
  UntypedServiceImplementation,
  handleBidiStreamingCall,
  Client,
  ClientDuplexStream,
  CallOptions,
  Metadata,
  handleUnaryCall,
  handleServerStreamingCall,
  ClientUnaryCall,
  ClientReadableStream,
  ServiceError,
} from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import {
  StreamingRequest,
  StreamingResponse,
  RecognizeFileRequest,
} from "../../../../../yandex/cloud/ai/stt/v3/stt";
import { Operation } from "../../../../../yandex/cloud/operation/operation";

export const protobufPackage = "speechkit.stt.v3";

export interface GetRecognitionRequest {
  $type: "speechkit.stt.v3.GetRecognitionRequest";
  operationId: string;
}

const baseGetRecognitionRequest: object = {
  $type: "speechkit.stt.v3.GetRecognitionRequest",
  operationId: "",
};

export const GetRecognitionRequest = {
  $type: "speechkit.stt.v3.GetRecognitionRequest" as const,

  encode(
    message: GetRecognitionRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.operationId !== "") {
      writer.uint32(10).string(message.operationId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetRecognitionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetRecognitionRequest } as GetRecognitionRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operationId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetRecognitionRequest {
    const message = { ...baseGetRecognitionRequest } as GetRecognitionRequest;
    message.operationId =
      object.operationId !== undefined && object.operationId !== null
        ? String(object.operationId)
        : "";
    return message;
  },

  toJSON(message: GetRecognitionRequest): unknown {
    const obj: any = {};
    message.operationId !== undefined &&
      (obj.operationId = message.operationId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetRecognitionRequest>, I>>(
    object: I
  ): GetRecognitionRequest {
    const message = { ...baseGetRecognitionRequest } as GetRecognitionRequest;
    message.operationId = object.operationId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetRecognitionRequest.$type, GetRecognitionRequest);

/** A set of methods for voice recognition. */
export const RecognizerService = {
  /** Expects audio in real-time */
  recognizeStreaming: {
    path: "/speechkit.stt.v3.Recognizer/RecognizeStreaming",
    requestStream: true,
    responseStream: true,
    requestSerialize: (value: StreamingRequest) =>
      Buffer.from(StreamingRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => StreamingRequest.decode(value),
    responseSerialize: (value: StreamingResponse) =>
      Buffer.from(StreamingResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => StreamingResponse.decode(value),
  },
} as const;

export interface RecognizerServer extends UntypedServiceImplementation {
  /** Expects audio in real-time */
  recognizeStreaming: handleBidiStreamingCall<
    StreamingRequest,
    StreamingResponse
  >;
}

export interface RecognizerClient extends Client {
  /** Expects audio in real-time */
  recognizeStreaming(): ClientDuplexStream<StreamingRequest, StreamingResponse>;
  recognizeStreaming(
    options: Partial<CallOptions>
  ): ClientDuplexStream<StreamingRequest, StreamingResponse>;
  recognizeStreaming(
    metadata: Metadata,
    options?: Partial<CallOptions>
  ): ClientDuplexStream<StreamingRequest, StreamingResponse>;
}

export const RecognizerClient = makeGenericClientConstructor(
  RecognizerService,
  "speechkit.stt.v3.Recognizer"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): RecognizerClient;
  service: typeof RecognizerService;
};

/** A set of methods for async voice recognition. */
export const AsyncRecognizerService = {
  recognizeFile: {
    path: "/speechkit.stt.v3.AsyncRecognizer/RecognizeFile",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: RecognizeFileRequest) =>
      Buffer.from(RecognizeFileRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => RecognizeFileRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  getRecognition: {
    path: "/speechkit.stt.v3.AsyncRecognizer/GetRecognition",
    requestStream: false,
    responseStream: true,
    requestSerialize: (value: GetRecognitionRequest) =>
      Buffer.from(GetRecognitionRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetRecognitionRequest.decode(value),
    responseSerialize: (value: StreamingResponse) =>
      Buffer.from(StreamingResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => StreamingResponse.decode(value),
  },
} as const;

export interface AsyncRecognizerServer extends UntypedServiceImplementation {
  recognizeFile: handleUnaryCall<RecognizeFileRequest, Operation>;
  getRecognition: handleServerStreamingCall<
    GetRecognitionRequest,
    StreamingResponse
  >;
}

export interface AsyncRecognizerClient extends Client {
  recognizeFile(
    request: RecognizeFileRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  recognizeFile(
    request: RecognizeFileRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  recognizeFile(
    request: RecognizeFileRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  getRecognition(
    request: GetRecognitionRequest,
    options?: Partial<CallOptions>
  ): ClientReadableStream<StreamingResponse>;
  getRecognition(
    request: GetRecognitionRequest,
    metadata?: Metadata,
    options?: Partial<CallOptions>
  ): ClientReadableStream<StreamingResponse>;
}

export const AsyncRecognizerClient = makeGenericClientConstructor(
  AsyncRecognizerService,
  "speechkit.stt.v3.AsyncRecognizer"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): AsyncRecognizerClient;
  service: typeof AsyncRecognizerService;
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
