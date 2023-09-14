/* eslint-disable */
import { messageTypeRegistry } from "../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "yandex.cloud.containerregistry.v1";

/** A Repository resource. For more information, see [Repository](/docs/container-registry/concepts/repository). */
export interface Repository {
  $type: "yandex.cloud.containerregistry.v1.Repository";
  /**
   * Name of the repository.
   * The name is unique within the registry.
   */
  name: string;
  /** Output only. ID of the repository. */
  id: string;
}

const baseRepository: object = {
  $type: "yandex.cloud.containerregistry.v1.Repository",
  name: "",
  id: "",
};

export const Repository = {
  $type: "yandex.cloud.containerregistry.v1.Repository" as const,

  encode(
    message: Repository,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Repository {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRepository } as Repository;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Repository {
    const message = { ...baseRepository } as Repository;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.id =
      object.id !== undefined && object.id !== null ? String(object.id) : "";
    return message;
  },

  toJSON(message: Repository): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Repository>, I>>(
    object: I
  ): Repository {
    const message = { ...baseRepository } as Repository;
    message.name = object.name ?? "";
    message.id = object.id ?? "";
    return message;
  },
};

messageTypeRegistry.set(Repository.$type, Repository);

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
