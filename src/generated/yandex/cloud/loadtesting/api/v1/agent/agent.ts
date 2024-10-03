/* eslint-disable */
import { messageTypeRegistry } from "../../../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  Status,
  statusFromJSON,
  statusToJSON,
} from "../../../../../../yandex/cloud/loadtesting/api/v1/agent/status";
import { LogSettings } from "../../../../../../yandex/cloud/loadtesting/api/v1/agent/log_settings";

export const protobufPackage = "yandex.cloud.loadtesting.api.v1.agent";

/** Load testing agent on which tests are executed. */
export interface Agent {
  $type: "yandex.cloud.loadtesting.api.v1.agent.Agent";
  /** ID of the agent. Generated at creation time. */
  id: string;
  /** ID of the folder that the agent belongs to. */
  folderId: string;
  /** Name of the agent. */
  name: string;
  /** Description of the agent. */
  description: string;
  /**
   * ID of the compute instance managed by the agent.
   *
   * Empty if there is no such instance (i.e. the case of external agent).
   */
  computeInstanceId: string;
  /** Status of the agent. */
  status: Status;
  /** List of errors reported by the agent. */
  errors: string[];
  /** ID of the test that is currently being executed by the agent. */
  currentJobId: string;
  /** Version of the agent. */
  agentVersionId: string;
  /** Agent labels as `key:value` pairs. */
  labels: { [key: string]: string };
  /** Agent log settings */
  logSettings?: LogSettings;
}

export interface Agent_LabelsEntry {
  $type: "yandex.cloud.loadtesting.api.v1.agent.Agent.LabelsEntry";
  key: string;
  value: string;
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
  agentVersionId: "",
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
    if (message.agentVersionId !== "") {
      writer.uint32(82).string(message.agentVersionId);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      Agent_LabelsEntry.encode(
        {
          $type: "yandex.cloud.loadtesting.api.v1.agent.Agent.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(98).fork()
      ).ldelim();
    });
    if (message.logSettings !== undefined) {
      LogSettings.encode(
        message.logSettings,
        writer.uint32(106).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Agent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAgent } as Agent;
    message.errors = [];
    message.labels = {};
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
        case 10:
          message.agentVersionId = reader.string();
          break;
        case 12:
          const entry12 = Agent_LabelsEntry.decode(reader, reader.uint32());
          if (entry12.value !== undefined) {
            message.labels[entry12.key] = entry12.value;
          }
          break;
        case 13:
          message.logSettings = LogSettings.decode(reader, reader.uint32());
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
    message.agentVersionId =
      object.agentVersionId !== undefined && object.agentVersionId !== null
        ? String(object.agentVersionId)
        : "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      acc[key] = String(value);
      return acc;
    }, {});
    message.logSettings =
      object.logSettings !== undefined && object.logSettings !== null
        ? LogSettings.fromJSON(object.logSettings)
        : undefined;
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
    message.agentVersionId !== undefined &&
      (obj.agentVersionId = message.agentVersionId);
    obj.labels = {};
    if (message.labels) {
      Object.entries(message.labels).forEach(([k, v]) => {
        obj.labels[k] = v;
      });
    }
    message.logSettings !== undefined &&
      (obj.logSettings = message.logSettings
        ? LogSettings.toJSON(message.logSettings)
        : undefined);
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
    message.agentVersionId = object.agentVersionId ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.logSettings =
      object.logSettings !== undefined && object.logSettings !== null
        ? LogSettings.fromPartial(object.logSettings)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(Agent.$type, Agent);

const baseAgent_LabelsEntry: object = {
  $type: "yandex.cloud.loadtesting.api.v1.agent.Agent.LabelsEntry",
  key: "",
  value: "",
};

export const Agent_LabelsEntry = {
  $type: "yandex.cloud.loadtesting.api.v1.agent.Agent.LabelsEntry" as const,

  encode(
    message: Agent_LabelsEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Agent_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAgent_LabelsEntry } as Agent_LabelsEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Agent_LabelsEntry {
    const message = { ...baseAgent_LabelsEntry } as Agent_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: Agent_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Agent_LabelsEntry>, I>>(
    object: I
  ): Agent_LabelsEntry {
    const message = { ...baseAgent_LabelsEntry } as Agent_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(Agent_LabelsEntry.$type, Agent_LabelsEntry);

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
