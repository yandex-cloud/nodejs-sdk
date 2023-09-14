/* eslint-disable */
import { messageTypeRegistry } from "../../../../../typeRegistry";
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
  handleUnaryCall,
  ClientUnaryCall,
  ServiceError,
} from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { TextAnnotation } from "../../../../../yandex/cloud/ai/ocr/v1/ocr";
import { Operation } from "../../../../../yandex/cloud/operation/operation";

export const protobufPackage = "yandex.cloud.ai.ocr.v1";

export interface RecognizeTextRequest {
  $type: "yandex.cloud.ai.ocr.v1.RecognizeTextRequest";
  /** Bytes with data */
  content: Buffer | undefined;
  /**
   * Specifications of the ([MIME type](https://en.wikipedia.org/wiki/Media_type)). Each specification contains the file to analyze and features to use for analysis. Restrictions:
   * * Supported file formats: `JPEG`, `PNG`, `WEBP`, `PDF`.
   * * Maximum file size: 20 MB.
   * * Image size should not exceed 20M pixels (length x width).
   * * The number of pages in a PDF file should not exceed 200 (each page counts as 1 request).
   */
  mimeType: string;
  /**
   * List of the languages to recognize text.
   * Specified in [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) format (for example, `ru`).
   */
  languageCodes: string[];
  /**
   * Model to use for text detection. The maximum string length is 50 characters. Possible values:
   * * `page` (default): this model is suitable for detecting multiple text entries in an image.
   * * `passport`: passport, the main double-page spread.
   * * `driver-license-front`: driver's license, the front side.
   * * `driver-license-back`: driver's license, the reverse side.
   * * `vehicle-registration-front`: front side of the vehicle registration certificate.
   * * `vehicle-registration-back`: back side of the vehicle registration certificate.
   */
  model: string;
}

export interface RecognizeTextResponse {
  $type: "yandex.cloud.ai.ocr.v1.RecognizeTextResponse";
  /** Recognized text blocks in this page or text from entities. */
  textAnnotation?: TextAnnotation;
  /** Page number in PDF file. */
  page: number;
}

export interface GetRecognitionRequest {
  $type: "yandex.cloud.ai.ocr.v1.GetRecognitionRequest";
  /** Operation ID of async recognition request. */
  operationId: string;
}

const baseRecognizeTextRequest: object = {
  $type: "yandex.cloud.ai.ocr.v1.RecognizeTextRequest",
  mimeType: "",
  languageCodes: "",
  model: "",
};

export const RecognizeTextRequest = {
  $type: "yandex.cloud.ai.ocr.v1.RecognizeTextRequest" as const,

  encode(
    message: RecognizeTextRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.content !== undefined) {
      writer.uint32(10).bytes(message.content);
    }
    if (message.mimeType !== "") {
      writer.uint32(18).string(message.mimeType);
    }
    for (const v of message.languageCodes) {
      writer.uint32(26).string(v!);
    }
    if (message.model !== "") {
      writer.uint32(34).string(message.model);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RecognizeTextRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRecognizeTextRequest } as RecognizeTextRequest;
    message.languageCodes = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.content = reader.bytes() as Buffer;
          break;
        case 2:
          message.mimeType = reader.string();
          break;
        case 3:
          message.languageCodes.push(reader.string());
          break;
        case 4:
          message.model = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RecognizeTextRequest {
    const message = { ...baseRecognizeTextRequest } as RecognizeTextRequest;
    message.content =
      object.content !== undefined && object.content !== null
        ? Buffer.from(bytesFromBase64(object.content))
        : undefined;
    message.mimeType =
      object.mimeType !== undefined && object.mimeType !== null
        ? String(object.mimeType)
        : "";
    message.languageCodes = (object.languageCodes ?? []).map((e: any) =>
      String(e)
    );
    message.model =
      object.model !== undefined && object.model !== null
        ? String(object.model)
        : "";
    return message;
  },

  toJSON(message: RecognizeTextRequest): unknown {
    const obj: any = {};
    message.content !== undefined &&
      (obj.content =
        message.content !== undefined
          ? base64FromBytes(message.content)
          : undefined);
    message.mimeType !== undefined && (obj.mimeType = message.mimeType);
    if (message.languageCodes) {
      obj.languageCodes = message.languageCodes.map((e) => e);
    } else {
      obj.languageCodes = [];
    }
    message.model !== undefined && (obj.model = message.model);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RecognizeTextRequest>, I>>(
    object: I
  ): RecognizeTextRequest {
    const message = { ...baseRecognizeTextRequest } as RecognizeTextRequest;
    message.content = object.content ?? undefined;
    message.mimeType = object.mimeType ?? "";
    message.languageCodes = object.languageCodes?.map((e) => e) || [];
    message.model = object.model ?? "";
    return message;
  },
};

messageTypeRegistry.set(RecognizeTextRequest.$type, RecognizeTextRequest);

const baseRecognizeTextResponse: object = {
  $type: "yandex.cloud.ai.ocr.v1.RecognizeTextResponse",
  page: 0,
};

export const RecognizeTextResponse = {
  $type: "yandex.cloud.ai.ocr.v1.RecognizeTextResponse" as const,

  encode(
    message: RecognizeTextResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.textAnnotation !== undefined) {
      TextAnnotation.encode(
        message.textAnnotation,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.page !== 0) {
      writer.uint32(16).int64(message.page);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RecognizeTextResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRecognizeTextResponse } as RecognizeTextResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.textAnnotation = TextAnnotation.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.page = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RecognizeTextResponse {
    const message = { ...baseRecognizeTextResponse } as RecognizeTextResponse;
    message.textAnnotation =
      object.textAnnotation !== undefined && object.textAnnotation !== null
        ? TextAnnotation.fromJSON(object.textAnnotation)
        : undefined;
    message.page =
      object.page !== undefined && object.page !== null
        ? Number(object.page)
        : 0;
    return message;
  },

  toJSON(message: RecognizeTextResponse): unknown {
    const obj: any = {};
    message.textAnnotation !== undefined &&
      (obj.textAnnotation = message.textAnnotation
        ? TextAnnotation.toJSON(message.textAnnotation)
        : undefined);
    message.page !== undefined && (obj.page = Math.round(message.page));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RecognizeTextResponse>, I>>(
    object: I
  ): RecognizeTextResponse {
    const message = { ...baseRecognizeTextResponse } as RecognizeTextResponse;
    message.textAnnotation =
      object.textAnnotation !== undefined && object.textAnnotation !== null
        ? TextAnnotation.fromPartial(object.textAnnotation)
        : undefined;
    message.page = object.page ?? 0;
    return message;
  },
};

messageTypeRegistry.set(RecognizeTextResponse.$type, RecognizeTextResponse);

const baseGetRecognitionRequest: object = {
  $type: "yandex.cloud.ai.ocr.v1.GetRecognitionRequest",
  operationId: "",
};

export const GetRecognitionRequest = {
  $type: "yandex.cloud.ai.ocr.v1.GetRecognitionRequest" as const,

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

/** A set of methods for the Vision OCR service. */
export const TextRecognitionServiceService = {
  /** To send the image for text recognition. */
  recognize: {
    path: "/yandex.cloud.ai.ocr.v1.TextRecognitionService/Recognize",
    requestStream: false,
    responseStream: true,
    requestSerialize: (value: RecognizeTextRequest) =>
      Buffer.from(RecognizeTextRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => RecognizeTextRequest.decode(value),
    responseSerialize: (value: RecognizeTextResponse) =>
      Buffer.from(RecognizeTextResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => RecognizeTextResponse.decode(value),
  },
} as const;

export interface TextRecognitionServiceServer
  extends UntypedServiceImplementation {
  /** To send the image for text recognition. */
  recognize: handleServerStreamingCall<
    RecognizeTextRequest,
    RecognizeTextResponse
  >;
}

export interface TextRecognitionServiceClient extends Client {
  /** To send the image for text recognition. */
  recognize(
    request: RecognizeTextRequest,
    options?: Partial<CallOptions>
  ): ClientReadableStream<RecognizeTextResponse>;
  recognize(
    request: RecognizeTextRequest,
    metadata?: Metadata,
    options?: Partial<CallOptions>
  ): ClientReadableStream<RecognizeTextResponse>;
}

export const TextRecognitionServiceClient = makeGenericClientConstructor(
  TextRecognitionServiceService,
  "yandex.cloud.ai.ocr.v1.TextRecognitionService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): TextRecognitionServiceClient;
  service: typeof TextRecognitionServiceService;
};

/** A set of methods for managing operations for asynchronous API requests. */
export const TextRecognitionAsyncServiceService = {
  /** To send the image for asynchronous text recognition. */
  recognize: {
    path: "/yandex.cloud.ai.ocr.v1.TextRecognitionAsyncService/Recognize",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: RecognizeTextRequest) =>
      Buffer.from(RecognizeTextRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => RecognizeTextRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** To get recognition results. */
  getRecognition: {
    path: "/yandex.cloud.ai.ocr.v1.TextRecognitionAsyncService/GetRecognition",
    requestStream: false,
    responseStream: true,
    requestSerialize: (value: GetRecognitionRequest) =>
      Buffer.from(GetRecognitionRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetRecognitionRequest.decode(value),
    responseSerialize: (value: RecognizeTextResponse) =>
      Buffer.from(RecognizeTextResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => RecognizeTextResponse.decode(value),
  },
} as const;

export interface TextRecognitionAsyncServiceServer
  extends UntypedServiceImplementation {
  /** To send the image for asynchronous text recognition. */
  recognize: handleUnaryCall<RecognizeTextRequest, Operation>;
  /** To get recognition results. */
  getRecognition: handleServerStreamingCall<
    GetRecognitionRequest,
    RecognizeTextResponse
  >;
}

export interface TextRecognitionAsyncServiceClient extends Client {
  /** To send the image for asynchronous text recognition. */
  recognize(
    request: RecognizeTextRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  recognize(
    request: RecognizeTextRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  recognize(
    request: RecognizeTextRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** To get recognition results. */
  getRecognition(
    request: GetRecognitionRequest,
    options?: Partial<CallOptions>
  ): ClientReadableStream<RecognizeTextResponse>;
  getRecognition(
    request: GetRecognitionRequest,
    metadata?: Metadata,
    options?: Partial<CallOptions>
  ): ClientReadableStream<RecognizeTextResponse>;
}

export const TextRecognitionAsyncServiceClient = makeGenericClientConstructor(
  TextRecognitionAsyncServiceService,
  "yandex.cloud.ai.ocr.v1.TextRecognitionAsyncService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): TextRecognitionAsyncServiceClient;
  service: typeof TextRecognitionAsyncServiceService;
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

const atob: (b64: string) => string =
  globalThis.atob ||
  ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string =
  globalThis.btoa ||
  ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  for (const byte of arr) {
    bin.push(String.fromCharCode(byte));
  }
  return btoa(bin.join(""));
}

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

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
