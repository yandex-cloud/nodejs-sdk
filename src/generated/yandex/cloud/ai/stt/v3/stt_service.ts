/* eslint-disable */
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
} from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import {
  StreamingRequest,
  StreamingResponse,
} from "../../../../../yandex/cloud/ai/stt/v3/stt";

export const protobufPackage = "speechkit.stt.v3";

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

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
