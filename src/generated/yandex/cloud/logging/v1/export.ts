/* eslint-disable */
import { messageTypeRegistry } from "../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  LogLevel_Level,
  logLevel_LevelFromJSON,
  logLevel_LevelToJSON,
} from "../../../../yandex/cloud/logging/v1/log_entry";

export const protobufPackage = "yandex.cloud.logging.v1";

export interface ExportParams {
  $type: "yandex.cloud.logging.v1.ExportParams";
  resourceTypes: string[];
  resourceIds: string[];
  streamNames: string[];
  levels: LogLevel_Level[];
  filter: string;
}

const baseExportParams: object = {
  $type: "yandex.cloud.logging.v1.ExportParams",
  resourceTypes: "",
  resourceIds: "",
  streamNames: "",
  levels: 0,
  filter: "",
};

export const ExportParams = {
  $type: "yandex.cloud.logging.v1.ExportParams" as const,

  encode(
    message: ExportParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.resourceTypes) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.resourceIds) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.streamNames) {
      writer.uint32(26).string(v!);
    }
    writer.uint32(34).fork();
    for (const v of message.levels) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.filter !== "") {
      writer.uint32(42).string(message.filter);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExportParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseExportParams } as ExportParams;
    message.resourceTypes = [];
    message.resourceIds = [];
    message.streamNames = [];
    message.levels = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.resourceTypes.push(reader.string());
          break;
        case 2:
          message.resourceIds.push(reader.string());
          break;
        case 3:
          message.streamNames.push(reader.string());
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.levels.push(reader.int32() as any);
            }
          } else {
            message.levels.push(reader.int32() as any);
          }
          break;
        case 5:
          message.filter = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ExportParams {
    const message = { ...baseExportParams } as ExportParams;
    message.resourceTypes = (object.resourceTypes ?? []).map((e: any) =>
      String(e)
    );
    message.resourceIds = (object.resourceIds ?? []).map((e: any) => String(e));
    message.streamNames = (object.streamNames ?? []).map((e: any) => String(e));
    message.levels = (object.levels ?? []).map((e: any) =>
      logLevel_LevelFromJSON(e)
    );
    message.filter =
      object.filter !== undefined && object.filter !== null
        ? String(object.filter)
        : "";
    return message;
  },

  toJSON(message: ExportParams): unknown {
    const obj: any = {};
    if (message.resourceTypes) {
      obj.resourceTypes = message.resourceTypes.map((e) => e);
    } else {
      obj.resourceTypes = [];
    }
    if (message.resourceIds) {
      obj.resourceIds = message.resourceIds.map((e) => e);
    } else {
      obj.resourceIds = [];
    }
    if (message.streamNames) {
      obj.streamNames = message.streamNames.map((e) => e);
    } else {
      obj.streamNames = [];
    }
    if (message.levels) {
      obj.levels = message.levels.map((e) => logLevel_LevelToJSON(e));
    } else {
      obj.levels = [];
    }
    message.filter !== undefined && (obj.filter = message.filter);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ExportParams>, I>>(
    object: I
  ): ExportParams {
    const message = { ...baseExportParams } as ExportParams;
    message.resourceTypes = object.resourceTypes?.map((e) => e) || [];
    message.resourceIds = object.resourceIds?.map((e) => e) || [];
    message.streamNames = object.streamNames?.map((e) => e) || [];
    message.levels = object.levels?.map((e) => e) || [];
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(ExportParams.$type, ExportParams);

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
