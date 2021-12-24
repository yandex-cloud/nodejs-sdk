/* eslint-disable */
import { messageTypeRegistry } from "../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "yandex.cloud.apploadbalancer.v1";

/** A TLS validation context resource. */
export interface ValidationContext {
  $type: "yandex.cloud.apploadbalancer.v1.ValidationContext";
  trustedCaId: string | undefined;
  /** X.509 certificate contents in PEM format. */
  trustedCaBytes: string | undefined;
}

const baseValidationContext: object = {
  $type: "yandex.cloud.apploadbalancer.v1.ValidationContext",
};

export const ValidationContext = {
  $type: "yandex.cloud.apploadbalancer.v1.ValidationContext" as const,

  encode(
    message: ValidationContext,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.trustedCaId !== undefined) {
      writer.uint32(10).string(message.trustedCaId);
    }
    if (message.trustedCaBytes !== undefined) {
      writer.uint32(18).string(message.trustedCaBytes);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValidationContext {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseValidationContext } as ValidationContext;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.trustedCaId = reader.string();
          break;
        case 2:
          message.trustedCaBytes = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ValidationContext {
    const message = { ...baseValidationContext } as ValidationContext;
    message.trustedCaId =
      object.trustedCaId !== undefined && object.trustedCaId !== null
        ? String(object.trustedCaId)
        : undefined;
    message.trustedCaBytes =
      object.trustedCaBytes !== undefined && object.trustedCaBytes !== null
        ? String(object.trustedCaBytes)
        : undefined;
    return message;
  },

  toJSON(message: ValidationContext): unknown {
    const obj: any = {};
    message.trustedCaId !== undefined &&
      (obj.trustedCaId = message.trustedCaId);
    message.trustedCaBytes !== undefined &&
      (obj.trustedCaBytes = message.trustedCaBytes);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ValidationContext>, I>>(
    object: I
  ): ValidationContext {
    const message = { ...baseValidationContext } as ValidationContext;
    message.trustedCaId = object.trustedCaId ?? undefined;
    message.trustedCaBytes = object.trustedCaBytes ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(ValidationContext.$type, ValidationContext);

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
