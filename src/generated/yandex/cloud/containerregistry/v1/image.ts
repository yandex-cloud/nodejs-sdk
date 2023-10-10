/* eslint-disable */
import { messageTypeRegistry } from "../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Blob } from "../../../../yandex/cloud/containerregistry/v1/blob";
import { Timestamp } from "../../../../google/protobuf/timestamp";

export const protobufPackage = "yandex.cloud.containerregistry.v1";

/** An Image resource. For more information, see [Docker image](/docs/container-registry/concepts/docker-image). */
export interface Image {
  $type: "yandex.cloud.containerregistry.v1.Image";
  /** Output only. ID of the Docker image. */
  id: string;
  /**
   * Name of the Docker image.
   * The name is unique within the registry.
   */
  name: string;
  /** Content-addressable identifier of the Docker image. */
  digest: string;
  /** Compressed size of the Docker image, specified in bytes. */
  compressedSize: number;
  /** Configuration of the Docker image. */
  config?: Blob;
  /** Layers of the Docker image. */
  layers: Blob[];
  /**
   * Tags of the Docker image.
   *
   * Each tag is unique within the repository.
   */
  tags: string[];
  /** Output only. Creation timestamp in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
  createdAt?: Date;
}

const baseImage: object = {
  $type: "yandex.cloud.containerregistry.v1.Image",
  id: "",
  name: "",
  digest: "",
  compressedSize: 0,
  tags: "",
};

export const Image = {
  $type: "yandex.cloud.containerregistry.v1.Image" as const,

  encode(message: Image, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.digest !== "") {
      writer.uint32(26).string(message.digest);
    }
    if (message.compressedSize !== 0) {
      writer.uint32(32).int64(message.compressedSize);
    }
    if (message.config !== undefined) {
      Blob.encode(message.config, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.layers) {
      Blob.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.tags) {
      writer.uint32(58).string(v!);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.createdAt),
        writer.uint32(66).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Image {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseImage } as Image;
    message.layers = [];
    message.tags = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.digest = reader.string();
          break;
        case 4:
          message.compressedSize = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.config = Blob.decode(reader, reader.uint32());
          break;
        case 6:
          message.layers.push(Blob.decode(reader, reader.uint32()));
          break;
        case 7:
          message.tags.push(reader.string());
          break;
        case 8:
          message.createdAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
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
    message.id =
      object.id !== undefined && object.id !== null ? String(object.id) : "";
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.digest =
      object.digest !== undefined && object.digest !== null
        ? String(object.digest)
        : "";
    message.compressedSize =
      object.compressedSize !== undefined && object.compressedSize !== null
        ? Number(object.compressedSize)
        : 0;
    message.config =
      object.config !== undefined && object.config !== null
        ? Blob.fromJSON(object.config)
        : undefined;
    message.layers = (object.layers ?? []).map((e: any) => Blob.fromJSON(e));
    message.tags = (object.tags ?? []).map((e: any) => String(e));
    message.createdAt =
      object.createdAt !== undefined && object.createdAt !== null
        ? fromJsonTimestamp(object.createdAt)
        : undefined;
    return message;
  },

  toJSON(message: Image): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.digest !== undefined && (obj.digest = message.digest);
    message.compressedSize !== undefined &&
      (obj.compressedSize = Math.round(message.compressedSize));
    message.config !== undefined &&
      (obj.config = message.config ? Blob.toJSON(message.config) : undefined);
    if (message.layers) {
      obj.layers = message.layers.map((e) => (e ? Blob.toJSON(e) : undefined));
    } else {
      obj.layers = [];
    }
    if (message.tags) {
      obj.tags = message.tags.map((e) => e);
    } else {
      obj.tags = [];
    }
    message.createdAt !== undefined &&
      (obj.createdAt = message.createdAt.toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Image>, I>>(object: I): Image {
    const message = { ...baseImage } as Image;
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.digest = object.digest ?? "";
    message.compressedSize = object.compressedSize ?? 0;
    message.config =
      object.config !== undefined && object.config !== null
        ? Blob.fromPartial(object.config)
        : undefined;
    message.layers = object.layers?.map((e) => Blob.fromPartial(e)) || [];
    message.tags = object.tags?.map((e) => e) || [];
    message.createdAt = object.createdAt ?? undefined;
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

function toTimestamp(date: Date): Timestamp {
  const seconds = date.getTime() / 1_000;
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { $type: "google.protobuf.Timestamp", seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

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
