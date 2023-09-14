/* eslint-disable */
import { messageTypeRegistry } from "../../../../../typeRegistry";
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
import { Status } from "../../../../../google/rpc/status";
import { TextAnnotation } from "../../../../../yandex/cloud/ai/vision/v1/text_detection";
import { ClassAnnotation } from "../../../../../yandex/cloud/ai/vision/v1/classification";
import { FaceAnnotation } from "../../../../../yandex/cloud/ai/vision/v1/face_detection";
import { ImageCopySearchAnnotation } from "../../../../../yandex/cloud/ai/vision/v1/image_copy_search";

export const protobufPackage = "yandex.cloud.ai.vision.v1";

export interface BatchAnalyzeRequest {
  $type: "yandex.cloud.ai.vision.v1.BatchAnalyzeRequest";
  /**
   * A list of specifications. Each specification contains the file to analyze and features to use for analysis.
   *
   * Restrictions:
   * * Supported file formats: `JPEG`, `PNG`.
   * * Maximum file size: 1 MB.
   * * Image size should not exceed 20M pixels (length x width).
   */
  analyzeSpecs: AnalyzeSpec[];
  /**
   * ID of the folder to which you have access.
   * Required for authorization with a user account (see [yandex.cloud.iam.v1.UserAccount] resource).
   * Don't specify this field if you make the request on behalf of a service account.
   */
  folderId: string;
}

export interface AnalyzeSpec {
  $type: "yandex.cloud.ai.vision.v1.AnalyzeSpec";
  /**
   * Image content, represented as a stream of bytes.
   * Note: As with all bytes fields, protobuffers use a pure binary representation, whereas JSON representations use base64.
   */
  content: Buffer | undefined;
  signature: string | undefined;
  /**
   * Requested features to use for analysis.
   *
   * Max count of requested features for one file is 8.
   */
  features: Feature[];
  /** [MIME type](https://en.wikipedia.org/wiki/Media_type) of content (for example, `` application/pdf ``). */
  mimeType: string;
}

export interface Feature {
  $type: "yandex.cloud.ai.vision.v1.Feature";
  /** Type of requested feature. */
  type: Feature_Type;
  /** Required for the `CLASSIFICATION` type. Specifies configuration for the classification feature. */
  classificationConfig?: FeatureClassificationConfig | undefined;
  /** Required for the `TEXT_DETECTION` type. Specifies configuration for the text detection (OCR) feature. */
  textDetectionConfig?: FeatureTextDetectionConfig | undefined;
}

export enum Feature_Type {
  TYPE_UNSPECIFIED = 0,
  /** TEXT_DETECTION - Text detection (OCR) feature. */
  TEXT_DETECTION = 1,
  /** CLASSIFICATION - Classification feature. */
  CLASSIFICATION = 2,
  /** FACE_DETECTION - Face detection feature. */
  FACE_DETECTION = 3,
  /** IMAGE_COPY_SEARCH - Image copy search. */
  IMAGE_COPY_SEARCH = 4,
  UNRECOGNIZED = -1,
}

export function feature_TypeFromJSON(object: any): Feature_Type {
  switch (object) {
    case 0:
    case "TYPE_UNSPECIFIED":
      return Feature_Type.TYPE_UNSPECIFIED;
    case 1:
    case "TEXT_DETECTION":
      return Feature_Type.TEXT_DETECTION;
    case 2:
    case "CLASSIFICATION":
      return Feature_Type.CLASSIFICATION;
    case 3:
    case "FACE_DETECTION":
      return Feature_Type.FACE_DETECTION;
    case 4:
    case "IMAGE_COPY_SEARCH":
      return Feature_Type.IMAGE_COPY_SEARCH;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Feature_Type.UNRECOGNIZED;
  }
}

export function feature_TypeToJSON(object: Feature_Type): string {
  switch (object) {
    case Feature_Type.TYPE_UNSPECIFIED:
      return "TYPE_UNSPECIFIED";
    case Feature_Type.TEXT_DETECTION:
      return "TEXT_DETECTION";
    case Feature_Type.CLASSIFICATION:
      return "CLASSIFICATION";
    case Feature_Type.FACE_DETECTION:
      return "FACE_DETECTION";
    case Feature_Type.IMAGE_COPY_SEARCH:
      return "IMAGE_COPY_SEARCH";
    default:
      return "UNKNOWN";
  }
}

export interface FeatureClassificationConfig {
  $type: "yandex.cloud.ai.vision.v1.FeatureClassificationConfig";
  /** Model to use for image classification. */
  model: string;
}

export interface FeatureTextDetectionConfig {
  $type: "yandex.cloud.ai.vision.v1.FeatureTextDetectionConfig";
  /**
   * List of the languages to recognize text.
   * Specified in [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) format (for example, `ru`).
   */
  languageCodes: string[];
  /**
   * Model to use for text detection.
   * Possible values:
   * * `page` (default): this model is suitable for detecting multiple text entries in an image.
   * * `line`: this model is suitable for cropped images with one line of text.
   */
  model: string;
}

export interface BatchAnalyzeResponse {
  $type: "yandex.cloud.ai.vision.v1.BatchAnalyzeResponse";
  /**
   * Request results.
   * Results have the same order as specifications in the request.
   */
  results: AnalyzeResult[];
}

export interface AnalyzeResult {
  $type: "yandex.cloud.ai.vision.v1.AnalyzeResult";
  /**
   * Results for each requested feature.
   * Feature results have the same order as in the request.
   */
  results: FeatureResult[];
  /** Return error in case of error with file processing. */
  error?: Status;
}

export interface FeatureResult {
  $type: "yandex.cloud.ai.vision.v1.FeatureResult";
  /** Text detection (OCR) result. */
  textDetection?: TextAnnotation | undefined;
  /** Classification result. */
  classification?: ClassAnnotation | undefined;
  /** Face detection result. */
  faceDetection?: FaceAnnotation | undefined;
  /** Image Copy Search result. */
  imageCopySearch?: ImageCopySearchAnnotation | undefined;
  /** Return error in case of error during the specified feature processing. */
  error?: Status;
}

const baseBatchAnalyzeRequest: object = {
  $type: "yandex.cloud.ai.vision.v1.BatchAnalyzeRequest",
  folderId: "",
};

export const BatchAnalyzeRequest = {
  $type: "yandex.cloud.ai.vision.v1.BatchAnalyzeRequest" as const,

  encode(
    message: BatchAnalyzeRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.analyzeSpecs) {
      AnalyzeSpec.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.folderId !== "") {
      writer.uint32(18).string(message.folderId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BatchAnalyzeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBatchAnalyzeRequest } as BatchAnalyzeRequest;
    message.analyzeSpecs = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.analyzeSpecs.push(
            AnalyzeSpec.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.folderId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BatchAnalyzeRequest {
    const message = { ...baseBatchAnalyzeRequest } as BatchAnalyzeRequest;
    message.analyzeSpecs = (object.analyzeSpecs ?? []).map((e: any) =>
      AnalyzeSpec.fromJSON(e)
    );
    message.folderId =
      object.folderId !== undefined && object.folderId !== null
        ? String(object.folderId)
        : "";
    return message;
  },

  toJSON(message: BatchAnalyzeRequest): unknown {
    const obj: any = {};
    if (message.analyzeSpecs) {
      obj.analyzeSpecs = message.analyzeSpecs.map((e) =>
        e ? AnalyzeSpec.toJSON(e) : undefined
      );
    } else {
      obj.analyzeSpecs = [];
    }
    message.folderId !== undefined && (obj.folderId = message.folderId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BatchAnalyzeRequest>, I>>(
    object: I
  ): BatchAnalyzeRequest {
    const message = { ...baseBatchAnalyzeRequest } as BatchAnalyzeRequest;
    message.analyzeSpecs =
      object.analyzeSpecs?.map((e) => AnalyzeSpec.fromPartial(e)) || [];
    message.folderId = object.folderId ?? "";
    return message;
  },
};

messageTypeRegistry.set(BatchAnalyzeRequest.$type, BatchAnalyzeRequest);

const baseAnalyzeSpec: object = {
  $type: "yandex.cloud.ai.vision.v1.AnalyzeSpec",
  mimeType: "",
};

export const AnalyzeSpec = {
  $type: "yandex.cloud.ai.vision.v1.AnalyzeSpec" as const,

  encode(
    message: AnalyzeSpec,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.content !== undefined) {
      writer.uint32(10).bytes(message.content);
    }
    if (message.signature !== undefined) {
      writer.uint32(42).string(message.signature);
    }
    for (const v of message.features) {
      Feature.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.mimeType !== "") {
      writer.uint32(34).string(message.mimeType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AnalyzeSpec {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAnalyzeSpec } as AnalyzeSpec;
    message.features = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.content = reader.bytes() as Buffer;
          break;
        case 5:
          message.signature = reader.string();
          break;
        case 3:
          message.features.push(Feature.decode(reader, reader.uint32()));
          break;
        case 4:
          message.mimeType = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AnalyzeSpec {
    const message = { ...baseAnalyzeSpec } as AnalyzeSpec;
    message.content =
      object.content !== undefined && object.content !== null
        ? Buffer.from(bytesFromBase64(object.content))
        : undefined;
    message.signature =
      object.signature !== undefined && object.signature !== null
        ? String(object.signature)
        : undefined;
    message.features = (object.features ?? []).map((e: any) =>
      Feature.fromJSON(e)
    );
    message.mimeType =
      object.mimeType !== undefined && object.mimeType !== null
        ? String(object.mimeType)
        : "";
    return message;
  },

  toJSON(message: AnalyzeSpec): unknown {
    const obj: any = {};
    message.content !== undefined &&
      (obj.content =
        message.content !== undefined
          ? base64FromBytes(message.content)
          : undefined);
    message.signature !== undefined && (obj.signature = message.signature);
    if (message.features) {
      obj.features = message.features.map((e) =>
        e ? Feature.toJSON(e) : undefined
      );
    } else {
      obj.features = [];
    }
    message.mimeType !== undefined && (obj.mimeType = message.mimeType);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AnalyzeSpec>, I>>(
    object: I
  ): AnalyzeSpec {
    const message = { ...baseAnalyzeSpec } as AnalyzeSpec;
    message.content = object.content ?? undefined;
    message.signature = object.signature ?? undefined;
    message.features =
      object.features?.map((e) => Feature.fromPartial(e)) || [];
    message.mimeType = object.mimeType ?? "";
    return message;
  },
};

messageTypeRegistry.set(AnalyzeSpec.$type, AnalyzeSpec);

const baseFeature: object = {
  $type: "yandex.cloud.ai.vision.v1.Feature",
  type: 0,
};

export const Feature = {
  $type: "yandex.cloud.ai.vision.v1.Feature" as const,

  encode(
    message: Feature,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.classificationConfig !== undefined) {
      FeatureClassificationConfig.encode(
        message.classificationConfig,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.textDetectionConfig !== undefined) {
      FeatureTextDetectionConfig.encode(
        message.textDetectionConfig,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Feature {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFeature } as Feature;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32() as any;
          break;
        case 2:
          message.classificationConfig = FeatureClassificationConfig.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.textDetectionConfig = FeatureTextDetectionConfig.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Feature {
    const message = { ...baseFeature } as Feature;
    message.type =
      object.type !== undefined && object.type !== null
        ? feature_TypeFromJSON(object.type)
        : 0;
    message.classificationConfig =
      object.classificationConfig !== undefined &&
      object.classificationConfig !== null
        ? FeatureClassificationConfig.fromJSON(object.classificationConfig)
        : undefined;
    message.textDetectionConfig =
      object.textDetectionConfig !== undefined &&
      object.textDetectionConfig !== null
        ? FeatureTextDetectionConfig.fromJSON(object.textDetectionConfig)
        : undefined;
    return message;
  },

  toJSON(message: Feature): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = feature_TypeToJSON(message.type));
    message.classificationConfig !== undefined &&
      (obj.classificationConfig = message.classificationConfig
        ? FeatureClassificationConfig.toJSON(message.classificationConfig)
        : undefined);
    message.textDetectionConfig !== undefined &&
      (obj.textDetectionConfig = message.textDetectionConfig
        ? FeatureTextDetectionConfig.toJSON(message.textDetectionConfig)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Feature>, I>>(object: I): Feature {
    const message = { ...baseFeature } as Feature;
    message.type = object.type ?? 0;
    message.classificationConfig =
      object.classificationConfig !== undefined &&
      object.classificationConfig !== null
        ? FeatureClassificationConfig.fromPartial(object.classificationConfig)
        : undefined;
    message.textDetectionConfig =
      object.textDetectionConfig !== undefined &&
      object.textDetectionConfig !== null
        ? FeatureTextDetectionConfig.fromPartial(object.textDetectionConfig)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(Feature.$type, Feature);

const baseFeatureClassificationConfig: object = {
  $type: "yandex.cloud.ai.vision.v1.FeatureClassificationConfig",
  model: "",
};

export const FeatureClassificationConfig = {
  $type: "yandex.cloud.ai.vision.v1.FeatureClassificationConfig" as const,

  encode(
    message: FeatureClassificationConfig,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.model !== "") {
      writer.uint32(10).string(message.model);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): FeatureClassificationConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseFeatureClassificationConfig,
    } as FeatureClassificationConfig;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.model = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FeatureClassificationConfig {
    const message = {
      ...baseFeatureClassificationConfig,
    } as FeatureClassificationConfig;
    message.model =
      object.model !== undefined && object.model !== null
        ? String(object.model)
        : "";
    return message;
  },

  toJSON(message: FeatureClassificationConfig): unknown {
    const obj: any = {};
    message.model !== undefined && (obj.model = message.model);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<FeatureClassificationConfig>, I>>(
    object: I
  ): FeatureClassificationConfig {
    const message = {
      ...baseFeatureClassificationConfig,
    } as FeatureClassificationConfig;
    message.model = object.model ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  FeatureClassificationConfig.$type,
  FeatureClassificationConfig
);

const baseFeatureTextDetectionConfig: object = {
  $type: "yandex.cloud.ai.vision.v1.FeatureTextDetectionConfig",
  languageCodes: "",
  model: "",
};

export const FeatureTextDetectionConfig = {
  $type: "yandex.cloud.ai.vision.v1.FeatureTextDetectionConfig" as const,

  encode(
    message: FeatureTextDetectionConfig,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.languageCodes) {
      writer.uint32(10).string(v!);
    }
    if (message.model !== "") {
      writer.uint32(18).string(message.model);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): FeatureTextDetectionConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseFeatureTextDetectionConfig,
    } as FeatureTextDetectionConfig;
    message.languageCodes = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.languageCodes.push(reader.string());
          break;
        case 2:
          message.model = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FeatureTextDetectionConfig {
    const message = {
      ...baseFeatureTextDetectionConfig,
    } as FeatureTextDetectionConfig;
    message.languageCodes = (object.languageCodes ?? []).map((e: any) =>
      String(e)
    );
    message.model =
      object.model !== undefined && object.model !== null
        ? String(object.model)
        : "";
    return message;
  },

  toJSON(message: FeatureTextDetectionConfig): unknown {
    const obj: any = {};
    if (message.languageCodes) {
      obj.languageCodes = message.languageCodes.map((e) => e);
    } else {
      obj.languageCodes = [];
    }
    message.model !== undefined && (obj.model = message.model);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<FeatureTextDetectionConfig>, I>>(
    object: I
  ): FeatureTextDetectionConfig {
    const message = {
      ...baseFeatureTextDetectionConfig,
    } as FeatureTextDetectionConfig;
    message.languageCodes = object.languageCodes?.map((e) => e) || [];
    message.model = object.model ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  FeatureTextDetectionConfig.$type,
  FeatureTextDetectionConfig
);

const baseBatchAnalyzeResponse: object = {
  $type: "yandex.cloud.ai.vision.v1.BatchAnalyzeResponse",
};

export const BatchAnalyzeResponse = {
  $type: "yandex.cloud.ai.vision.v1.BatchAnalyzeResponse" as const,

  encode(
    message: BatchAnalyzeResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.results) {
      AnalyzeResult.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): BatchAnalyzeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBatchAnalyzeResponse } as BatchAnalyzeResponse;
    message.results = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.results.push(AnalyzeResult.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BatchAnalyzeResponse {
    const message = { ...baseBatchAnalyzeResponse } as BatchAnalyzeResponse;
    message.results = (object.results ?? []).map((e: any) =>
      AnalyzeResult.fromJSON(e)
    );
    return message;
  },

  toJSON(message: BatchAnalyzeResponse): unknown {
    const obj: any = {};
    if (message.results) {
      obj.results = message.results.map((e) =>
        e ? AnalyzeResult.toJSON(e) : undefined
      );
    } else {
      obj.results = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BatchAnalyzeResponse>, I>>(
    object: I
  ): BatchAnalyzeResponse {
    const message = { ...baseBatchAnalyzeResponse } as BatchAnalyzeResponse;
    message.results =
      object.results?.map((e) => AnalyzeResult.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(BatchAnalyzeResponse.$type, BatchAnalyzeResponse);

const baseAnalyzeResult: object = {
  $type: "yandex.cloud.ai.vision.v1.AnalyzeResult",
};

export const AnalyzeResult = {
  $type: "yandex.cloud.ai.vision.v1.AnalyzeResult" as const,

  encode(
    message: AnalyzeResult,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.results) {
      FeatureResult.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.error !== undefined) {
      Status.encode(message.error, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AnalyzeResult {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAnalyzeResult } as AnalyzeResult;
    message.results = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.results.push(FeatureResult.decode(reader, reader.uint32()));
          break;
        case 1:
          message.error = Status.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AnalyzeResult {
    const message = { ...baseAnalyzeResult } as AnalyzeResult;
    message.results = (object.results ?? []).map((e: any) =>
      FeatureResult.fromJSON(e)
    );
    message.error =
      object.error !== undefined && object.error !== null
        ? Status.fromJSON(object.error)
        : undefined;
    return message;
  },

  toJSON(message: AnalyzeResult): unknown {
    const obj: any = {};
    if (message.results) {
      obj.results = message.results.map((e) =>
        e ? FeatureResult.toJSON(e) : undefined
      );
    } else {
      obj.results = [];
    }
    message.error !== undefined &&
      (obj.error = message.error ? Status.toJSON(message.error) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AnalyzeResult>, I>>(
    object: I
  ): AnalyzeResult {
    const message = { ...baseAnalyzeResult } as AnalyzeResult;
    message.results =
      object.results?.map((e) => FeatureResult.fromPartial(e)) || [];
    message.error =
      object.error !== undefined && object.error !== null
        ? Status.fromPartial(object.error)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(AnalyzeResult.$type, AnalyzeResult);

const baseFeatureResult: object = {
  $type: "yandex.cloud.ai.vision.v1.FeatureResult",
};

export const FeatureResult = {
  $type: "yandex.cloud.ai.vision.v1.FeatureResult" as const,

  encode(
    message: FeatureResult,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.textDetection !== undefined) {
      TextAnnotation.encode(
        message.textDetection,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.classification !== undefined) {
      ClassAnnotation.encode(
        message.classification,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.faceDetection !== undefined) {
      FaceAnnotation.encode(
        message.faceDetection,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.imageCopySearch !== undefined) {
      ImageCopySearchAnnotation.encode(
        message.imageCopySearch,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.error !== undefined) {
      Status.encode(message.error, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FeatureResult {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFeatureResult } as FeatureResult;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.textDetection = TextAnnotation.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.classification = ClassAnnotation.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.faceDetection = FaceAnnotation.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.imageCopySearch = ImageCopySearchAnnotation.decode(
            reader,
            reader.uint32()
          );
          break;
        case 1:
          message.error = Status.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FeatureResult {
    const message = { ...baseFeatureResult } as FeatureResult;
    message.textDetection =
      object.textDetection !== undefined && object.textDetection !== null
        ? TextAnnotation.fromJSON(object.textDetection)
        : undefined;
    message.classification =
      object.classification !== undefined && object.classification !== null
        ? ClassAnnotation.fromJSON(object.classification)
        : undefined;
    message.faceDetection =
      object.faceDetection !== undefined && object.faceDetection !== null
        ? FaceAnnotation.fromJSON(object.faceDetection)
        : undefined;
    message.imageCopySearch =
      object.imageCopySearch !== undefined && object.imageCopySearch !== null
        ? ImageCopySearchAnnotation.fromJSON(object.imageCopySearch)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? Status.fromJSON(object.error)
        : undefined;
    return message;
  },

  toJSON(message: FeatureResult): unknown {
    const obj: any = {};
    message.textDetection !== undefined &&
      (obj.textDetection = message.textDetection
        ? TextAnnotation.toJSON(message.textDetection)
        : undefined);
    message.classification !== undefined &&
      (obj.classification = message.classification
        ? ClassAnnotation.toJSON(message.classification)
        : undefined);
    message.faceDetection !== undefined &&
      (obj.faceDetection = message.faceDetection
        ? FaceAnnotation.toJSON(message.faceDetection)
        : undefined);
    message.imageCopySearch !== undefined &&
      (obj.imageCopySearch = message.imageCopySearch
        ? ImageCopySearchAnnotation.toJSON(message.imageCopySearch)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? Status.toJSON(message.error) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<FeatureResult>, I>>(
    object: I
  ): FeatureResult {
    const message = { ...baseFeatureResult } as FeatureResult;
    message.textDetection =
      object.textDetection !== undefined && object.textDetection !== null
        ? TextAnnotation.fromPartial(object.textDetection)
        : undefined;
    message.classification =
      object.classification !== undefined && object.classification !== null
        ? ClassAnnotation.fromPartial(object.classification)
        : undefined;
    message.faceDetection =
      object.faceDetection !== undefined && object.faceDetection !== null
        ? FaceAnnotation.fromPartial(object.faceDetection)
        : undefined;
    message.imageCopySearch =
      object.imageCopySearch !== undefined && object.imageCopySearch !== null
        ? ImageCopySearchAnnotation.fromPartial(object.imageCopySearch)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? Status.fromPartial(object.error)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(FeatureResult.$type, FeatureResult);

/** A set of methods for the Vision service. */
export const VisionServiceService = {
  /** Analyzes a batch of images and returns results with annotations. */
  batchAnalyze: {
    path: "/yandex.cloud.ai.vision.v1.VisionService/BatchAnalyze",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: BatchAnalyzeRequest) =>
      Buffer.from(BatchAnalyzeRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => BatchAnalyzeRequest.decode(value),
    responseSerialize: (value: BatchAnalyzeResponse) =>
      Buffer.from(BatchAnalyzeResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => BatchAnalyzeResponse.decode(value),
  },
} as const;

export interface VisionServiceServer extends UntypedServiceImplementation {
  /** Analyzes a batch of images and returns results with annotations. */
  batchAnalyze: handleUnaryCall<BatchAnalyzeRequest, BatchAnalyzeResponse>;
}

export interface VisionServiceClient extends Client {
  /** Analyzes a batch of images and returns results with annotations. */
  batchAnalyze(
    request: BatchAnalyzeRequest,
    callback: (
      error: ServiceError | null,
      response: BatchAnalyzeResponse
    ) => void
  ): ClientUnaryCall;
  batchAnalyze(
    request: BatchAnalyzeRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: BatchAnalyzeResponse
    ) => void
  ): ClientUnaryCall;
  batchAnalyze(
    request: BatchAnalyzeRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: BatchAnalyzeResponse
    ) => void
  ): ClientUnaryCall;
}

export const VisionServiceClient = makeGenericClientConstructor(
  VisionServiceService,
  "yandex.cloud.ai.vision.v1.VisionService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): VisionServiceClient;
  service: typeof VisionServiceService;
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

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
