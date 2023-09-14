/* eslint-disable */
import { messageTypeRegistry } from "../../../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  Status,
  statusFromJSON,
  statusToJSON,
} from "../../../../../../yandex/cloud/loadtesting/api/v1/agent/status";

export const protobufPackage = "yandex.cloud.loadtesting.api.v1.agent";

export interface Agent {
  $type: "yandex.cloud.loadtesting.api.v1.agent.Agent";
  id: string;
  folderId: string;
  name: string;
  description: string;
  computeInstanceId: string;
  status: Status;
  errors: string[];
  currentJobId: string;
}

const baseAgent: object = {
  $type: "yandex.cloud.loadtesting.api.v1.agent.Agent",
  id: "",
  folderId: "",
  name: "",
  description: "",
  computeInstanceId: "",
  status: 0,
  errors: "",
  currentJobId: "",
};

export const Agent = {
  $type: "yandex.cloud.loadtesting.api.v1.agent.Agent" as const,

  encode(message: Agent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.folderId !== "") {
      writer.uint32(18).string(message.folderId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    if (message.computeInstanceId !== "") {
      writer.uint32(42).string(message.computeInstanceId);
    }
    if (message.status !== 0) {
      writer.uint32(56).int32(message.status);
    }
    for (const v of message.errors) {
      writer.uint32(66).string(v!);
    }
    if (message.currentJobId !== "") {
      writer.uint32(74).string(message.currentJobId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Agent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAgent } as Agent;
    message.errors = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.folderId = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.description = reader.string();
          break;
        case 5:
          message.computeInstanceId = reader.string();
          break;
        case 7:
          message.status = reader.int32() as any;
          break;
        case 8:
          message.errors.push(reader.string());
          break;
        case 9:
          message.currentJobId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Agent {
    const message = { ...baseAgent } as Agent;
    message.id =
      object.id !== undefined && object.id !== null ? String(object.id) : "";
    message.folderId =
      object.folderId !== undefined && object.folderId !== null
        ? String(object.folderId)
        : "";
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.description =
      object.description !== undefined && object.description !== null
        ? String(object.description)
        : "";
    message.computeInstanceId =
      object.computeInstanceId !== undefined &&
      object.computeInstanceId !== null
        ? String(object.computeInstanceId)
        : "";
    message.status =
      object.status !== undefined && object.status !== null
        ? statusFromJSON(object.status)
        : 0;
    message.errors = (object.errors ?? []).map((e: any) => String(e));
    message.currentJobId =
      object.currentJobId !== undefined && object.currentJobId !== null
        ? String(object.currentJobId)
        : "";
    return message;
  },

  toJSON(message: Agent): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.folderId !== undefined && (obj.folderId = message.folderId);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    message.computeInstanceId !== undefined &&
      (obj.computeInstanceId = message.computeInstanceId);
    message.status !== undefined && (obj.status = statusToJSON(message.status));
    if (message.errors) {
      obj.errors = message.errors.map((e) => e);
    } else {
      obj.errors = [];
    }
    message.currentJobId !== undefined &&
      (obj.currentJobId = message.currentJobId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Agent>, I>>(object: I): Agent {
    const message = { ...baseAgent } as Agent;
    message.id = object.id ?? "";
    message.folderId = object.folderId ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.computeInstanceId = object.computeInstanceId ?? "";
    message.status = object.status ?? 0;
    message.errors = object.errors?.map((e) => e) || [];
    message.currentJobId = object.currentJobId ?? "";
    return message;
  },
};

messageTypeRegistry.set(Agent.$type, Agent);

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
