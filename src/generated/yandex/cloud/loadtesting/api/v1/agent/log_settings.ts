/* eslint-disable */
import { messageTypeRegistry } from "../../../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "yandex.cloud.loadtesting.api.v1.agent";

export interface LogSettings {
  $type: "yandex.cloud.loadtesting.api.v1.agent.LogSettings";
  /** Id of Yandex Cloud log group to upload agent logs to */
  cloudLogGroupId: string;
}

const baseLogSettings: object = {
  $type: "yandex.cloud.loadtesting.api.v1.agent.LogSettings",
  cloudLogGroupId: "",
};

export const LogSettings = {
  $type: "yandex.cloud.loadtesting.api.v1.agent.LogSettings" as const,

  encode(
    message: LogSettings,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.cloudLogGroupId !== "") {
      writer.uint32(10).string(message.cloudLogGroupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LogSettings {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseLogSettings } as LogSettings;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cloudLogGroupId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LogSettings {
    const message = { ...baseLogSettings } as LogSettings;
    message.cloudLogGroupId =
      object.cloudLogGroupId !== undefined && object.cloudLogGroupId !== null
        ? String(object.cloudLogGroupId)
        : "";
    return message;
  },

  toJSON(message: LogSettings): unknown {
    const obj: any = {};
    message.cloudLogGroupId !== undefined &&
      (obj.cloudLogGroupId = message.cloudLogGroupId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LogSettings>, I>>(
    object: I
  ): LogSettings {
    const message = { ...baseLogSettings } as LogSettings;
    message.cloudLogGroupId = object.cloudLogGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(LogSettings.$type, LogSettings);

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
