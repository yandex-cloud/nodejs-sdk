/* eslint-disable */
import { messageTypeRegistry } from "../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "yandex.cloud.datasphere.v1";

/** User code python execution's error details */
export interface NodeExecutionErrorDetails {
  $type: "yandex.cloud.datasphere.v1.NodeExecutionErrorDetails";
  /** Error name */
  errorName: string;
  /** Error message */
  errorMessage: string;
  /** Error traceback */
  traceback: string[];
}

const baseNodeExecutionErrorDetails: object = {
  $type: "yandex.cloud.datasphere.v1.NodeExecutionErrorDetails",
  errorName: "",
  errorMessage: "",
  traceback: "",
};

export const NodeExecutionErrorDetails = {
  $type: "yandex.cloud.datasphere.v1.NodeExecutionErrorDetails" as const,

  encode(
    message: NodeExecutionErrorDetails,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.errorName !== "") {
      writer.uint32(10).string(message.errorName);
    }
    if (message.errorMessage !== "") {
      writer.uint32(18).string(message.errorMessage);
    }
    for (const v of message.traceback) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): NodeExecutionErrorDetails {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseNodeExecutionErrorDetails,
    } as NodeExecutionErrorDetails;
    message.traceback = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.errorName = reader.string();
          break;
        case 2:
          message.errorMessage = reader.string();
          break;
        case 3:
          message.traceback.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NodeExecutionErrorDetails {
    const message = {
      ...baseNodeExecutionErrorDetails,
    } as NodeExecutionErrorDetails;
    message.errorName =
      object.errorName !== undefined && object.errorName !== null
        ? String(object.errorName)
        : "";
    message.errorMessage =
      object.errorMessage !== undefined && object.errorMessage !== null
        ? String(object.errorMessage)
        : "";
    message.traceback = (object.traceback ?? []).map((e: any) => String(e));
    return message;
  },

  toJSON(message: NodeExecutionErrorDetails): unknown {
    const obj: any = {};
    message.errorName !== undefined && (obj.errorName = message.errorName);
    message.errorMessage !== undefined &&
      (obj.errorMessage = message.errorMessage);
    if (message.traceback) {
      obj.traceback = message.traceback.map((e) => e);
    } else {
      obj.traceback = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<NodeExecutionErrorDetails>, I>>(
    object: I
  ): NodeExecutionErrorDetails {
    const message = {
      ...baseNodeExecutionErrorDetails,
    } as NodeExecutionErrorDetails;
    message.errorName = object.errorName ?? "";
    message.errorMessage = object.errorMessage ?? "";
    message.traceback = object.traceback?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(
  NodeExecutionErrorDetails.$type,
  NodeExecutionErrorDetails
);

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
