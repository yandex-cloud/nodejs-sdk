/* eslint-disable */
import Long from "long";
import {
  makeGenericClientConstructor,
  ChannelCredentials,
  ChannelOptions,
  UntypedServiceImplementation,
  handleServerStreamingCall,
  Client,
  CallOptions,
  ClientReadableStream,
  Metadata,
} from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import {
  UtteranceSynthesisRequest,
  UtteranceSynthesisResponse,
} from "../../../../../yandex/cloud/ai/tts/v3/tts";

export const protobufPackage = "speechkit.tts.v3";

/** A set of methods for voice synthesis. */
export const SynthesizerService = {
  /** Synthesizing text into speech. */
  utteranceSynthesis: {
    path: "/speechkit.tts.v3.Synthesizer/UtteranceSynthesis",
    requestStream: false,
    responseStream: true,
    requestSerialize: (value: UtteranceSynthesisRequest) =>
      Buffer.from(UtteranceSynthesisRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      UtteranceSynthesisRequest.decode(value),
    responseSerialize: (value: UtteranceSynthesisResponse) =>
      Buffer.from(UtteranceSynthesisResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      UtteranceSynthesisResponse.decode(value),
  },
} as const;

export interface SynthesizerServer extends UntypedServiceImplementation {
  /** Synthesizing text into speech. */
  utteranceSynthesis: handleServerStreamingCall<
    UtteranceSynthesisRequest,
    UtteranceSynthesisResponse
  >;
}

export interface SynthesizerClient extends Client {
  /** Synthesizing text into speech. */
  utteranceSynthesis(
    request: UtteranceSynthesisRequest,
    options?: Partial<CallOptions>
  ): ClientReadableStream<UtteranceSynthesisResponse>;
  utteranceSynthesis(
    request: UtteranceSynthesisRequest,
    metadata?: Metadata,
    options?: Partial<CallOptions>
  ): ClientReadableStream<UtteranceSynthesisResponse>;
}

export const SynthesizerClient = makeGenericClientConstructor(
  SynthesizerService,
  "speechkit.tts.v3.Synthesizer"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): SynthesizerClient;
  service: typeof SynthesizerService;
};

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
