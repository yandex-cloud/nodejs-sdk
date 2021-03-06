// autogenerated file

import * as grpc from 'grpc';
import { util } from 'protobufjs';
import Long = util.Long;
import * as events from 'events';
import { Session } from '../../../../index.js';

import * as rpc from '../../../../contrib/google/rpc';

export interface ClassAnnotation {
    /**
     * Properties extracted by a specified model.
     *
     * For example, if you ask to evaluate the image quality,
     * the service could return such properties as `good` and `bad`.
     */
    properties?: Property[];
}

export interface Property {
    /**
     * Property name.
     */
    name?: string;

    /**
     * Probability of the property, from 0 to 1.
     */
    probability?: number;
}

export interface FaceAnnotation {
    /**
     * An array of detected faces for the specified image.
     */
    faces?: Face[];
}

export interface Face {
    /**
     * Area on the image where the face is located.
     */
    boundingBox?: Polygon;
}

export interface ImageCopySearchAnnotation {
    /**
     * Number of image copies
     */
    copyCount?: Long;

    /**
     * Top relevance result of image copy search
     */
    topResults?: CopyMatch[];
}

export interface CopyMatch {
    /**
     * url of image
     */
    imageUrl?: string;

    /**
     * url of page that contains image
     */
    pageUrl?: string;

    /**
     * page title that contains image
     */
    title?: string;

    /**
     * image description
     */
    description?: string;
}

export interface Polygon {
    /**
     * The bounding polygon vertices.
     */
    vertices?: Vertex[];
}

export interface Vertex {
    /**
     * X coordinate in pixels.
     */
    x?: Long;

    /**
     * Y coordinate in pixels.
     */
    y?: Long;
}

export interface TextAnnotation {
    /**
     * Pages of the recognized file.
     *
     * For JPEG and PNG files contains only 1 page.
     */
    pages?: Page[];
}

export interface Page {
    /**
     * Page width in pixels.
     */
    width?: Long;

    /**
     * Page height in pixels.
     */
    height?: Long;

    /**
     * Recognized text blocks in this page.
     */
    blocks?: Block[];

    /**
     * Recognized entities
     */
    entities?: Entity[];
}

export interface Entity {
    /**
     * Entity name
     */
    name?: string;

    /**
     * Recognized entity text
     */
    text?: string;
}

export interface Block {
    /**
     * Area on the page where the text block is located.
     */
    boundingBox?: Polygon;

    /**
     * Recognized lines in this block.
     */
    lines?: Line[];
}

export interface Line {
    /**
     * Area on the page where the line is located.
     */
    boundingBox?: Polygon;

    /**
     * Recognized words in this line.
     */
    words?: Word[];

    /**
     * Confidence of the OCR results for the line. Range [0, 1].
     */
    confidence?: number;
}

export interface Word {
    /**
     * Area on the page where the word is located.
     */
    boundingBox?: Polygon;

    /**
     * Recognized word value.
     */
    text?: string;

    /**
     * Confidence of the OCR results for the word. Range [0, 1].
     */
    confidence?: number;

    /**
     * A list of detected languages together with confidence.
     */
    languages?: Word.DetectedLanguage[];

    /**
     * Id of recognized word in entities array
     */
    entityIndex?: Long;
}

export namespace Word {
    export interface DetectedLanguage {
        /**
         * Detected language code.
         */
        languageCode?: string;

        /**
         * Confidence of detected language. Range [0, 1].
         */
        confidence?: number;
    }
}

/**
 * A set of methods for the Yandex Vision service.
 */
export class VisionService {
    constructor(session?: Session);
    /**
     * Analyzes a batch of images and returns results with annotations.
     */
    batchAnalyze(request: BatchAnalyzeRequest): Promise<BatchAnalyzeResponse>;
}

export interface BatchAnalyzeRequest {
    /**
     * A list of specifications. Each specification contains the file to analyze and features to use for analysis.
     *
     * Restrictions:
     * * Supported file formats: JPEG, PNG.
     * * Maximum file size: 1 MB.
     * * Image size should not exceed 20M pixels (length x width).
     */
    analyzeSpecs?: AnalyzeSpec[];

    /**
     * ID of the folder to which you have access.
     * Required for authorization with a user account (see [yandex.cloud.iam.v1.UserAccount] resource).
     * Don't specify this field if you make the request on behalf of a service account.
     */
    folderId?: string;
}

export interface AnalyzeSpec {
    /**
     * Image content, represented as a stream of bytes.
     * Note: As with all bytes fields, protobuffers use a pure binary representation, whereas JSON representations use base64.
     */
    content?: Buffer;

    signature?: string;

    /**
     * Requested features to use for analysis.
     *
     * Max count of requested features for one file is 8.
     */
    features?: Feature[];

    /**
     * [MIME type](https://en.wikipedia.org/wiki/Media_type) of content (for example, `` application/pdf ``).
     */
    mimeType?: string;
}

export interface Feature {
    /**
     * Type of requested feature.
     */
    type?: Feature.Type;

    /**
     * Required for the `CLASSIFICATION` type. Specifies configuration for the classification feature.
     */
    classificationConfig?: FeatureClassificationConfig;

    /**
     * Required for the `TEXT_DETECTION` type. Specifies configuration for the text detection (OCR) feature.
     */
    textDetectionConfig?: FeatureTextDetectionConfig;
}

export namespace Feature {
    export enum Type {
        TYPE_UNSPECIFIED = 0,

        /**
         * Text detection (OCR) feature.
         */
        TEXT_DETECTION = 1,

        /**
         * Classification feature.
         */
        CLASSIFICATION = 2,

        /**
         * Face detection feature.
         */
        FACE_DETECTION = 3,

        /**
         * Image copy search.
         */
        IMAGE_COPY_SEARCH = 4,
    }
}

export interface FeatureClassificationConfig {
    /**
     * Model to use for image classification.
     */
    model?: string;
}

export interface FeatureTextDetectionConfig {
    /**
     * List of the languages to recognize text.
     * Specified in [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) format (for example, `` ru ``).
     */
    languageCodes?: string[];

    /**
     * Model to use for text detection.
     * Possible values:
     * * page (default) — this model is suitable for detecting multiple text entries in an image.
     * * line — this model is suitable for cropped images with one line of text.
     */
    model?: string;
}

export interface BatchAnalyzeResponse {
    /**
     * Request results.
     * Results have the same order as specifications in the request.
     */
    results?: AnalyzeResult[];
}

export interface AnalyzeResult {
    /**
     * Results for each requested feature.
     * Feature results have the same order as in the request.
     */
    results?: FeatureResult[];

    /**
     * Return error in case of error with file processing.
     */
    error?: rpc.Status;
}

export interface FeatureResult {
    /**
     * Text detection (OCR) result.
     */
    textDetection?: TextAnnotation;

    /**
     * Classification result.
     */
    classification?: ClassAnnotation;

    /**
     * Face detection result.
     */
    faceDetection?: FaceAnnotation;

    /**
     * Image Copy Search result.
     */
    imageCopySearch?: ImageCopySearchAnnotation;

    /**
     * Return error in case of error during the specified feature processing.
     */
    error?: rpc.Status;
}
