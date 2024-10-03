/* eslint-disable */
import { messageTypeRegistry } from "../../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { ExpirationConfig } from "../../../../../yandex/cloud/ai/common/common";
import {
  PromptTruncationOptions,
  CompletionOptions,
  Tool,
} from "../../../../../yandex/cloud/ai/assistants/v1/common";
import { Timestamp } from "../../../../../google/protobuf/timestamp";

export const protobufPackage = "yandex.cloud.ai.assistants.v1";

export interface Assistant {
  $type: "yandex.cloud.ai.assistants.v1.Assistant";
  id: string;
  folderId: string;
  name: string;
  description: string;
  createdBy: string;
  createdAt?: Date;
  updatedBy: string;
  updatedAt?: Date;
  expirationConfig?: ExpirationConfig;
  expiresAt?: Date;
  labels: { [key: string]: string };
  modelUri: string;
  instruction: string;
  promptTruncationOptions?: PromptTruncationOptions;
  completionOptions?: CompletionOptions;
  tools: Tool[];
}

export interface Assistant_LabelsEntry {
  $type: "yandex.cloud.ai.assistants.v1.Assistant.LabelsEntry";
  key: string;
  value: string;
}

const baseAssistant: object = {
  $type: "yandex.cloud.ai.assistants.v1.Assistant",
  id: "",
  folderId: "",
  name: "",
  description: "",
  createdBy: "",
  updatedBy: "",
  modelUri: "",
  instruction: "",
};

export const Assistant = {
  $type: "yandex.cloud.ai.assistants.v1.Assistant" as const,

  encode(
    message: Assistant,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    if (message.createdBy !== "") {
      writer.uint32(42).string(message.createdBy);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.createdAt),
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.updatedBy !== "") {
      writer.uint32(58).string(message.updatedBy);
    }
    if (message.updatedAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.updatedAt),
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.expirationConfig !== undefined) {
      ExpirationConfig.encode(
        message.expirationConfig,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.expiresAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.expiresAt),
        writer.uint32(82).fork()
      ).ldelim();
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      Assistant_LabelsEntry.encode(
        {
          $type: "yandex.cloud.ai.assistants.v1.Assistant.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(90).fork()
      ).ldelim();
    });
    if (message.modelUri !== "") {
      writer.uint32(98).string(message.modelUri);
    }
    if (message.instruction !== "") {
      writer.uint32(106).string(message.instruction);
    }
    if (message.promptTruncationOptions !== undefined) {
      PromptTruncationOptions.encode(
        message.promptTruncationOptions,
        writer.uint32(114).fork()
      ).ldelim();
    }
    if (message.completionOptions !== undefined) {
      CompletionOptions.encode(
        message.completionOptions,
        writer.uint32(122).fork()
      ).ldelim();
    }
    for (const v of message.tools) {
      Tool.encode(v!, writer.uint32(130).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Assistant {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAssistant } as Assistant;
    message.labels = {};
    message.tools = [];
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
          message.createdBy = reader.string();
          break;
        case 6:
          message.createdAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 7:
          message.updatedBy = reader.string();
          break;
        case 8:
          message.updatedAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.expirationConfig = ExpirationConfig.decode(
            reader,
            reader.uint32()
          );
          break;
        case 10:
          message.expiresAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 11:
          const entry11 = Assistant_LabelsEntry.decode(reader, reader.uint32());
          if (entry11.value !== undefined) {
            message.labels[entry11.key] = entry11.value;
          }
          break;
        case 12:
          message.modelUri = reader.string();
          break;
        case 13:
          message.instruction = reader.string();
          break;
        case 14:
          message.promptTruncationOptions = PromptTruncationOptions.decode(
            reader,
            reader.uint32()
          );
          break;
        case 15:
          message.completionOptions = CompletionOptions.decode(
            reader,
            reader.uint32()
          );
          break;
        case 16:
          message.tools.push(Tool.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Assistant {
    const message = { ...baseAssistant } as Assistant;
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
    message.createdBy =
      object.createdBy !== undefined && object.createdBy !== null
        ? String(object.createdBy)
        : "";
    message.createdAt =
      object.createdAt !== undefined && object.createdAt !== null
        ? fromJsonTimestamp(object.createdAt)
        : undefined;
    message.updatedBy =
      object.updatedBy !== undefined && object.updatedBy !== null
        ? String(object.updatedBy)
        : "";
    message.updatedAt =
      object.updatedAt !== undefined && object.updatedAt !== null
        ? fromJsonTimestamp(object.updatedAt)
        : undefined;
    message.expirationConfig =
      object.expirationConfig !== undefined && object.expirationConfig !== null
        ? ExpirationConfig.fromJSON(object.expirationConfig)
        : undefined;
    message.expiresAt =
      object.expiresAt !== undefined && object.expiresAt !== null
        ? fromJsonTimestamp(object.expiresAt)
        : undefined;
    message.labels = Object.entries(object.labels ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      acc[key] = String(value);
      return acc;
    }, {});
    message.modelUri =
      object.modelUri !== undefined && object.modelUri !== null
        ? String(object.modelUri)
        : "";
    message.instruction =
      object.instruction !== undefined && object.instruction !== null
        ? String(object.instruction)
        : "";
    message.promptTruncationOptions =
      object.promptTruncationOptions !== undefined &&
      object.promptTruncationOptions !== null
        ? PromptTruncationOptions.fromJSON(object.promptTruncationOptions)
        : undefined;
    message.completionOptions =
      object.completionOptions !== undefined &&
      object.completionOptions !== null
        ? CompletionOptions.fromJSON(object.completionOptions)
        : undefined;
    message.tools = (object.tools ?? []).map((e: any) => Tool.fromJSON(e));
    return message;
  },

  toJSON(message: Assistant): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.folderId !== undefined && (obj.folderId = message.folderId);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    message.createdBy !== undefined && (obj.createdBy = message.createdBy);
    message.createdAt !== undefined &&
      (obj.createdAt = message.createdAt.toISOString());
    message.updatedBy !== undefined && (obj.updatedBy = message.updatedBy);
    message.updatedAt !== undefined &&
      (obj.updatedAt = message.updatedAt.toISOString());
    message.expirationConfig !== undefined &&
      (obj.expirationConfig = message.expirationConfig
        ? ExpirationConfig.toJSON(message.expirationConfig)
        : undefined);
    message.expiresAt !== undefined &&
      (obj.expiresAt = message.expiresAt.toISOString());
    obj.labels = {};
    if (message.labels) {
      Object.entries(message.labels).forEach(([k, v]) => {
        obj.labels[k] = v;
      });
    }
    message.modelUri !== undefined && (obj.modelUri = message.modelUri);
    message.instruction !== undefined &&
      (obj.instruction = message.instruction);
    message.promptTruncationOptions !== undefined &&
      (obj.promptTruncationOptions = message.promptTruncationOptions
        ? PromptTruncationOptions.toJSON(message.promptTruncationOptions)
        : undefined);
    message.completionOptions !== undefined &&
      (obj.completionOptions = message.completionOptions
        ? CompletionOptions.toJSON(message.completionOptions)
        : undefined);
    if (message.tools) {
      obj.tools = message.tools.map((e) => (e ? Tool.toJSON(e) : undefined));
    } else {
      obj.tools = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Assistant>, I>>(
    object: I
  ): Assistant {
    const message = { ...baseAssistant } as Assistant;
    message.id = object.id ?? "";
    message.folderId = object.folderId ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.createdBy = object.createdBy ?? "";
    message.createdAt = object.createdAt ?? undefined;
    message.updatedBy = object.updatedBy ?? "";
    message.updatedAt = object.updatedAt ?? undefined;
    message.expirationConfig =
      object.expirationConfig !== undefined && object.expirationConfig !== null
        ? ExpirationConfig.fromPartial(object.expirationConfig)
        : undefined;
    message.expiresAt = object.expiresAt ?? undefined;
    message.labels = Object.entries(object.labels ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.modelUri = object.modelUri ?? "";
    message.instruction = object.instruction ?? "";
    message.promptTruncationOptions =
      object.promptTruncationOptions !== undefined &&
      object.promptTruncationOptions !== null
        ? PromptTruncationOptions.fromPartial(object.promptTruncationOptions)
        : undefined;
    message.completionOptions =
      object.completionOptions !== undefined &&
      object.completionOptions !== null
        ? CompletionOptions.fromPartial(object.completionOptions)
        : undefined;
    message.tools = object.tools?.map((e) => Tool.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(Assistant.$type, Assistant);

const baseAssistant_LabelsEntry: object = {
  $type: "yandex.cloud.ai.assistants.v1.Assistant.LabelsEntry",
  key: "",
  value: "",
};

export const Assistant_LabelsEntry = {
  $type: "yandex.cloud.ai.assistants.v1.Assistant.LabelsEntry" as const,

  encode(
    message: Assistant_LabelsEntry,
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Assistant_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAssistant_LabelsEntry } as Assistant_LabelsEntry;
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

  fromJSON(object: any): Assistant_LabelsEntry {
    const message = { ...baseAssistant_LabelsEntry } as Assistant_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: Assistant_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Assistant_LabelsEntry>, I>>(
    object: I
  ): Assistant_LabelsEntry {
    const message = { ...baseAssistant_LabelsEntry } as Assistant_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(Assistant_LabelsEntry.$type, Assistant_LabelsEntry);

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

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
