/* eslint-disable */
import { messageTypeRegistry } from "../../../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { ObjectStorage } from "../../../../../../yandex/cloud/loadtesting/api/v1/test/object_storage";

export const protobufPackage = "yandex.cloud.loadtesting.api.v1.test";

/** Variant-like structure for referencing files in different sources. */
export interface FilePointer {
  $type: "yandex.cloud.loadtesting.api.v1.test.FilePointer";
  /** Reference to a file in Object Storage. */
  objectStorage?: ObjectStorage | undefined;
}

const baseFilePointer: object = {
  $type: "yandex.cloud.loadtesting.api.v1.test.FilePointer",
};

export const FilePointer = {
  $type: "yandex.cloud.loadtesting.api.v1.test.FilePointer" as const,

  encode(
    message: FilePointer,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.objectStorage !== undefined) {
      ObjectStorage.encode(
        message.objectStorage,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FilePointer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFilePointer } as FilePointer;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.objectStorage = ObjectStorage.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FilePointer {
    const message = { ...baseFilePointer } as FilePointer;
    message.objectStorage =
      object.objectStorage !== undefined && object.objectStorage !== null
        ? ObjectStorage.fromJSON(object.objectStorage)
        : undefined;
    return message;
  },

  toJSON(message: FilePointer): unknown {
    const obj: any = {};
    message.objectStorage !== undefined &&
      (obj.objectStorage = message.objectStorage
        ? ObjectStorage.toJSON(message.objectStorage)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<FilePointer>, I>>(
    object: I
  ): FilePointer {
    const message = { ...baseFilePointer } as FilePointer;
    message.objectStorage =
      object.objectStorage !== undefined && object.objectStorage !== null
        ? ObjectStorage.fromPartial(object.objectStorage)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(FilePointer.$type, FilePointer);

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
