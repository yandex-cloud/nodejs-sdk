/* eslint-disable */
import { messageTypeRegistry } from "../../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "yandex.cloud.ai.vision.v2";

export interface Image {
  $type: "yandex.cloud.ai.vision.v2.Image";
  /** bytes with data */
  content: Buffer | undefined;
  /** type of data */
  imageType: Image_ImageType;
}

/** type of image */
export enum Image_ImageType {
  IMAGE_TYPE_UNSPECIFIED = 0,
  JPEG = 1,
  PNG = 2,
  UNRECOGNIZED = -1,
}

export function image_ImageTypeFromJSON(object: any): Image_ImageType {
  switch (object) {
    case 0:
    case "IMAGE_TYPE_UNSPECIFIED":
      return Image_ImageType.IMAGE_TYPE_UNSPECIFIED;
    case 1:
    case "JPEG":
      return Image_ImageType.JPEG;
    case 2:
    case "PNG":
      return Image_ImageType.PNG;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Image_ImageType.UNRECOGNIZED;
  }
}

export function image_ImageTypeToJSON(object: Image_ImageType): string {
  switch (object) {
    case Image_ImageType.IMAGE_TYPE_UNSPECIFIED:
      return "IMAGE_TYPE_UNSPECIFIED";
    case Image_ImageType.JPEG:
      return "JPEG";
    case Image_ImageType.PNG:
      return "PNG";
    default:
      return "UNKNOWN";
  }
}

const baseImage: object = {
  $type: "yandex.cloud.ai.vision.v2.Image",
  imageType: 0,
};

export const Image = {
  $type: "yandex.cloud.ai.vision.v2.Image" as const,

  encode(message: Image, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.content !== undefined) {
      writer.uint32(10).bytes(message.content);
    }
    if (message.imageType !== 0) {
      writer.uint32(16).int32(message.imageType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Image {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseImage } as Image;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.content = reader.bytes() as Buffer;
          break;
        case 2:
          message.imageType = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Image {
    const message = { ...baseImage } as Image;
    message.content =
      object.content !== undefined && object.content !== null
        ? Buffer.from(bytesFromBase64(object.content))
        : undefined;
    message.imageType =
      object.imageType !== undefined && object.imageType !== null
        ? image_ImageTypeFromJSON(object.imageType)
        : 0;
    return message;
  },

  toJSON(message: Image): unknown {
    const obj: any = {};
    message.content !== undefined &&
      (obj.content =
        message.content !== undefined
          ? base64FromBytes(message.content)
          : undefined);
    message.imageType !== undefined &&
      (obj.imageType = image_ImageTypeToJSON(message.imageType));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Image>, I>>(object: I): Image {
    const message = { ...baseImage } as Image;
    message.content = object.content ?? undefined;
    message.imageType = object.imageType ?? 0;
    return message;
  },
};

messageTypeRegistry.set(Image.$type, Image);

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
