/* eslint-disable */
import { messageTypeRegistry } from "../../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Polygon } from "../../../../../yandex/cloud/ai/vision/v1/primitives";

export const protobufPackage = "yandex.cloud.ai.vision.v1";

export interface FaceAnnotation {
  $type: "yandex.cloud.ai.vision.v1.FaceAnnotation";
  /** An array of detected faces for the specified image. */
  faces: Face[];
}

export interface Face {
  $type: "yandex.cloud.ai.vision.v1.Face";
  /** Area on the image where the face is located. */
  boundingBox?: Polygon;
}

const baseFaceAnnotation: object = {
  $type: "yandex.cloud.ai.vision.v1.FaceAnnotation",
};

export const FaceAnnotation = {
  $type: "yandex.cloud.ai.vision.v1.FaceAnnotation" as const,

  encode(
    message: FaceAnnotation,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.faces) {
      Face.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FaceAnnotation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFaceAnnotation } as FaceAnnotation;
    message.faces = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.faces.push(Face.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FaceAnnotation {
    const message = { ...baseFaceAnnotation } as FaceAnnotation;
    message.faces = (object.faces ?? []).map((e: any) => Face.fromJSON(e));
    return message;
  },

  toJSON(message: FaceAnnotation): unknown {
    const obj: any = {};
    if (message.faces) {
      obj.faces = message.faces.map((e) => (e ? Face.toJSON(e) : undefined));
    } else {
      obj.faces = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<FaceAnnotation>, I>>(
    object: I
  ): FaceAnnotation {
    const message = { ...baseFaceAnnotation } as FaceAnnotation;
    message.faces = object.faces?.map((e) => Face.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(FaceAnnotation.$type, FaceAnnotation);

const baseFace: object = { $type: "yandex.cloud.ai.vision.v1.Face" };

export const Face = {
  $type: "yandex.cloud.ai.vision.v1.Face" as const,

  encode(message: Face, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.boundingBox !== undefined) {
      Polygon.encode(message.boundingBox, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Face {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFace } as Face;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.boundingBox = Polygon.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Face {
    const message = { ...baseFace } as Face;
    message.boundingBox =
      object.boundingBox !== undefined && object.boundingBox !== null
        ? Polygon.fromJSON(object.boundingBox)
        : undefined;
    return message;
  },

  toJSON(message: Face): unknown {
    const obj: any = {};
    message.boundingBox !== undefined &&
      (obj.boundingBox = message.boundingBox
        ? Polygon.toJSON(message.boundingBox)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Face>, I>>(object: I): Face {
    const message = { ...baseFace } as Face;
    message.boundingBox =
      object.boundingBox !== undefined && object.boundingBox !== null
        ? Polygon.fromPartial(object.boundingBox)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(Face.$type, Face);

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
