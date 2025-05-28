/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Image } from '../../../../../yandex/cloud/ai/vision/v2/image';

export const protobufPackage = 'yandex.cloud.ai.vision.v2';

/** Description of single label */
export interface Label {
    /** Label name */
    name: string;
    /** human readable description of label */
    description: string;
}

/** Image annotation for specific label */
export interface ClassAnnotation {
    /** list of annotated labels */
    label?: Label;
    /** confidence for each label */
    confidence: number;
}

/** Specification of model used for annotation */
export interface ClassifierSpecification {
    /** List of labels, annotated by service */
    labels: Label[];
    /** type of annotation: exclusive (multi-class) or non-exclusive (multi-label) */
    classificationType: ClassifierSpecification_ClassificationType;
}

export enum ClassifierSpecification_ClassificationType {
    CLASSIFICATION_TYPE_UNSPECIFIED = 0,
    MULTI_LABEL = 1,
    MULTI_CLASS = 2,
    UNRECOGNIZED = -1,
}

export function classifierSpecification_ClassificationTypeFromJSON(
    object: any,
): ClassifierSpecification_ClassificationType {
    switch (object) {
        case 0:
        case 'CLASSIFICATION_TYPE_UNSPECIFIED':
            return ClassifierSpecification_ClassificationType.CLASSIFICATION_TYPE_UNSPECIFIED;
        case 1:
        case 'MULTI_LABEL':
            return ClassifierSpecification_ClassificationType.MULTI_LABEL;
        case 2:
        case 'MULTI_CLASS':
            return ClassifierSpecification_ClassificationType.MULTI_CLASS;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return ClassifierSpecification_ClassificationType.UNRECOGNIZED;
    }
}

export function classifierSpecification_ClassificationTypeToJSON(
    object: ClassifierSpecification_ClassificationType,
): string {
    switch (object) {
        case ClassifierSpecification_ClassificationType.CLASSIFICATION_TYPE_UNSPECIFIED:
            return 'CLASSIFICATION_TYPE_UNSPECIFIED';
        case ClassifierSpecification_ClassificationType.MULTI_LABEL:
            return 'MULTI_LABEL';
        case ClassifierSpecification_ClassificationType.MULTI_CLASS:
            return 'MULTI_CLASS';
        default:
            return 'UNKNOWN';
    }
}

/**  */
export interface AnnotationResponse {
    /** internal service requestId */
    requestId: string;
    /** class specification */
    classifierSpecification?: ClassifierSpecification;
    /** annotations for each class */
    annotations: ClassAnnotation[];
}

/** request for annotation */
export interface AnnotationRequest {
    /** image to annotate */
    image?: Image;
}

const baseLabel: object = { name: '', description: '' };

export const Label = {
    encode(message: Label, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(18).string(message.description);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Label {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseLabel } as Label;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Label {
        const message = { ...baseLabel } as Label;
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        return message;
    },

    toJSON(message: Label): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Label>, I>>(object: I): Label {
        const message = { ...baseLabel } as Label;
        message.name = object.name ?? '';
        message.description = object.description ?? '';
        return message;
    },
};

const baseClassAnnotation: object = { confidence: 0 };

export const ClassAnnotation = {
    encode(message: ClassAnnotation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.label !== undefined) {
            Label.encode(message.label, writer.uint32(10).fork()).ldelim();
        }
        if (message.confidence !== 0) {
            writer.uint32(17).double(message.confidence);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ClassAnnotation {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseClassAnnotation } as ClassAnnotation;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.label = Label.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.confidence = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ClassAnnotation {
        const message = { ...baseClassAnnotation } as ClassAnnotation;
        message.label =
            object.label !== undefined && object.label !== null
                ? Label.fromJSON(object.label)
                : undefined;
        message.confidence =
            object.confidence !== undefined && object.confidence !== null
                ? Number(object.confidence)
                : 0;
        return message;
    },

    toJSON(message: ClassAnnotation): unknown {
        const obj: any = {};
        message.label !== undefined &&
            (obj.label = message.label ? Label.toJSON(message.label) : undefined);
        message.confidence !== undefined && (obj.confidence = message.confidence);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ClassAnnotation>, I>>(object: I): ClassAnnotation {
        const message = { ...baseClassAnnotation } as ClassAnnotation;
        message.label =
            object.label !== undefined && object.label !== null
                ? Label.fromPartial(object.label)
                : undefined;
        message.confidence = object.confidence ?? 0;
        return message;
    },
};

const baseClassifierSpecification: object = { classificationType: 0 };

export const ClassifierSpecification = {
    encode(message: ClassifierSpecification, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.labels) {
            Label.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.classificationType !== 0) {
            writer.uint32(16).int32(message.classificationType);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ClassifierSpecification {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseClassifierSpecification } as ClassifierSpecification;
        message.labels = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.labels.push(Label.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.classificationType = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ClassifierSpecification {
        const message = { ...baseClassifierSpecification } as ClassifierSpecification;
        message.labels = (object.labels ?? []).map((e: any) => Label.fromJSON(e));
        message.classificationType =
            object.classificationType !== undefined && object.classificationType !== null
                ? classifierSpecification_ClassificationTypeFromJSON(object.classificationType)
                : 0;
        return message;
    },

    toJSON(message: ClassifierSpecification): unknown {
        const obj: any = {};
        if (message.labels) {
            obj.labels = message.labels.map((e) => (e ? Label.toJSON(e) : undefined));
        } else {
            obj.labels = [];
        }
        message.classificationType !== undefined &&
            (obj.classificationType = classifierSpecification_ClassificationTypeToJSON(
                message.classificationType,
            ));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ClassifierSpecification>, I>>(
        object: I,
    ): ClassifierSpecification {
        const message = { ...baseClassifierSpecification } as ClassifierSpecification;
        message.labels = object.labels?.map((e) => Label.fromPartial(e)) || [];
        message.classificationType = object.classificationType ?? 0;
        return message;
    },
};

const baseAnnotationResponse: object = { requestId: '' };

export const AnnotationResponse = {
    encode(message: AnnotationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.requestId !== '') {
            writer.uint32(10).string(message.requestId);
        }
        if (message.classifierSpecification !== undefined) {
            ClassifierSpecification.encode(
                message.classifierSpecification,
                writer.uint32(18).fork(),
            ).ldelim();
        }
        for (const v of message.annotations) {
            ClassAnnotation.encode(v!, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): AnnotationResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAnnotationResponse } as AnnotationResponse;
        message.annotations = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.requestId = reader.string();
                    break;
                case 2:
                    message.classifierSpecification = ClassifierSpecification.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 3:
                    message.annotations.push(ClassAnnotation.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): AnnotationResponse {
        const message = { ...baseAnnotationResponse } as AnnotationResponse;
        message.requestId =
            object.requestId !== undefined && object.requestId !== null
                ? String(object.requestId)
                : '';
        message.classifierSpecification =
            object.classifierSpecification !== undefined && object.classifierSpecification !== null
                ? ClassifierSpecification.fromJSON(object.classifierSpecification)
                : undefined;
        message.annotations = (object.annotations ?? []).map((e: any) =>
            ClassAnnotation.fromJSON(e),
        );
        return message;
    },

    toJSON(message: AnnotationResponse): unknown {
        const obj: any = {};
        message.requestId !== undefined && (obj.requestId = message.requestId);
        message.classifierSpecification !== undefined &&
            (obj.classifierSpecification = message.classifierSpecification
                ? ClassifierSpecification.toJSON(message.classifierSpecification)
                : undefined);
        if (message.annotations) {
            obj.annotations = message.annotations.map((e) =>
                e ? ClassAnnotation.toJSON(e) : undefined,
            );
        } else {
            obj.annotations = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<AnnotationResponse>, I>>(
        object: I,
    ): AnnotationResponse {
        const message = { ...baseAnnotationResponse } as AnnotationResponse;
        message.requestId = object.requestId ?? '';
        message.classifierSpecification =
            object.classifierSpecification !== undefined && object.classifierSpecification !== null
                ? ClassifierSpecification.fromPartial(object.classifierSpecification)
                : undefined;
        message.annotations = object.annotations?.map((e) => ClassAnnotation.fromPartial(e)) || [];
        return message;
    },
};

const baseAnnotationRequest: object = {};

export const AnnotationRequest = {
    encode(message: AnnotationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.image !== undefined) {
            Image.encode(message.image, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): AnnotationRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAnnotationRequest } as AnnotationRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.image = Image.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): AnnotationRequest {
        const message = { ...baseAnnotationRequest } as AnnotationRequest;
        message.image =
            object.image !== undefined && object.image !== null
                ? Image.fromJSON(object.image)
                : undefined;
        return message;
    },

    toJSON(message: AnnotationRequest): unknown {
        const obj: any = {};
        message.image !== undefined &&
            (obj.image = message.image ? Image.toJSON(message.image) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<AnnotationRequest>, I>>(object: I): AnnotationRequest {
        const message = { ...baseAnnotationRequest } as AnnotationRequest;
        message.image =
            object.image !== undefined && object.image !== null
                ? Image.fromPartial(object.image)
                : undefined;
        return message;
    },
};

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

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
