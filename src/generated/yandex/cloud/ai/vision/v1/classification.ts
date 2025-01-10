/* eslint-disable */
import { messageTypeRegistry } from '../../../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.ai.vision.v1';

export interface ClassAnnotation {
    $type: 'yandex.cloud.ai.vision.v1.ClassAnnotation';
    /**
     * Properties extracted by a specified model.
     *
     * For example, if you ask to evaluate the image quality,
     * the service could return such properties as `good` and `bad`.
     */
    properties: Property[];
}

export interface Property {
    $type: 'yandex.cloud.ai.vision.v1.Property';
    /** Property name. */
    name: string;
    /** Probability of the property, from 0 to 1. */
    probability: number;
}

const baseClassAnnotation: object = { $type: 'yandex.cloud.ai.vision.v1.ClassAnnotation' };

export const ClassAnnotation = {
    $type: 'yandex.cloud.ai.vision.v1.ClassAnnotation' as const,

    encode(message: ClassAnnotation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.properties) {
            Property.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ClassAnnotation {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseClassAnnotation } as ClassAnnotation;
        message.properties = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.properties.push(Property.decode(reader, reader.uint32()));
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
        message.properties = (object.properties ?? []).map((e: any) => Property.fromJSON(e));
        return message;
    },

    toJSON(message: ClassAnnotation): unknown {
        const obj: any = {};
        if (message.properties) {
            obj.properties = message.properties.map((e) => (e ? Property.toJSON(e) : undefined));
        } else {
            obj.properties = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ClassAnnotation>, I>>(object: I): ClassAnnotation {
        const message = { ...baseClassAnnotation } as ClassAnnotation;
        message.properties = object.properties?.map((e) => Property.fromPartial(e)) || [];
        return message;
    },
};

messageTypeRegistry.set(ClassAnnotation.$type, ClassAnnotation);

const baseProperty: object = {
    $type: 'yandex.cloud.ai.vision.v1.Property',
    name: '',
    probability: 0,
};

export const Property = {
    $type: 'yandex.cloud.ai.vision.v1.Property' as const,

    encode(message: Property, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.probability !== 0) {
            writer.uint32(17).double(message.probability);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Property {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseProperty } as Property;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.probability = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Property {
        const message = { ...baseProperty } as Property;
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.probability =
            object.probability !== undefined && object.probability !== null
                ? Number(object.probability)
                : 0;
        return message;
    },

    toJSON(message: Property): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        message.probability !== undefined && (obj.probability = message.probability);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Property>, I>>(object: I): Property {
        const message = { ...baseProperty } as Property;
        message.name = object.name ?? '';
        message.probability = object.probability ?? 0;
        return message;
    },
};

messageTypeRegistry.set(Property.$type, Property);

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin
    ? T
    : T extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T extends ReadonlyArray<infer U>
    ? ReadonlyArray<DeepPartial<U>>
    : T extends {}
    ? { [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]> }
    : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
    ? P
    : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
              Exclude<keyof I, KeysOfUnion<P> | '$type'>,
              never
          >;

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
