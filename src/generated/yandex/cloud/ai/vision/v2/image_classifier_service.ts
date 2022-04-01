/* eslint-disable */
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
  AnnotationRequest,
  AnnotationResponse,
} from "../../../../../yandex/cloud/ai/vision/v2/image_classifier";

export const protobufPackage = "yandex.cloud.ai.vision.v2";

export const ImageClassifierServiceService = {
  annotate: {
    path: "/yandex.cloud.ai.vision.v2.ImageClassifierService/Annotate",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: AnnotationRequest) =>
      Buffer.from(AnnotationRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => AnnotationRequest.decode(value),
    responseSerialize: (value: AnnotationResponse) =>
      Buffer.from(AnnotationResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => AnnotationResponse.decode(value),
  },
} as const;

export interface ImageClassifierServiceServer
  extends UntypedServiceImplementation {
  annotate: handleUnaryCall<AnnotationRequest, AnnotationResponse>;
}

export interface ImageClassifierServiceClient extends Client {
  annotate(
    request: AnnotationRequest,
    callback: (error: ServiceError | null, response: AnnotationResponse) => void
  ): ClientUnaryCall;
  annotate(
    request: AnnotationRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: AnnotationResponse) => void
  ): ClientUnaryCall;
  annotate(
    request: AnnotationRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: AnnotationResponse) => void
  ): ClientUnaryCall;
}

export const ImageClassifierServiceClient = makeGenericClientConstructor(
  ImageClassifierServiceService,
  "yandex.cloud.ai.vision.v2.ImageClassifierService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): ImageClassifierServiceClient;
  service: typeof ImageClassifierServiceService;
};

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
