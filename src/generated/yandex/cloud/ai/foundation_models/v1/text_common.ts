/* eslint-disable */
import { messageTypeRegistry } from "../../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  DoubleValue,
  Int64Value,
} from "../../../../../google/protobuf/wrappers";

export const protobufPackage = "yandex.cloud.ai.foundation_models.v1";

/** Defines the options for completion generation. */
export interface CompletionOptions {
  $type: "yandex.cloud.ai.foundation_models.v1.CompletionOptions";
  /** Enables streaming of partially generated text. */
  stream: boolean;
  /**
   * Affects creativity and randomness of responses. Should be a double number between 0 (inclusive) and 1 (inclusive).
   * Lower values produce more straightforward responses while higher values lead to increased creativity and randomness.
   * Default temperature: 0.3
   */
  temperature?: number;
  /**
   * The limit on the number of tokens used for single completion generation.
   * Must be greater than zero. This maximum allowed parameter value may depend on the model being used.
   */
  maxTokens?: number;
}

/** A message object representing a wrapper over the inputs and outputs of the completion model. */
export interface Message {
  $type: "yandex.cloud.ai.foundation_models.v1.Message";
  /**
   * The ID of the message sender. Supported roles:
   * * `system`: Special role used to define the behaviour of the completion model.
   * * `assistant`: A role used by the model to generate responses.
   * * `user`: A role used by the user to describe requests to the model.
   */
  role: string;
  /** Textual content of the message. */
  text: string | undefined;
}

/** An object representing the number of content [tokens](/docs/foundation-models/concepts/yandexgpt/tokens) used by the completion model. */
export interface ContentUsage {
  $type: "yandex.cloud.ai.foundation_models.v1.ContentUsage";
  /** The number of tokens in the textual part of the model input. */
  inputTextTokens: number;
  /** The total number of tokens in the generated completions. */
  completionTokens: number;
  /** The total number of tokens, including all input tokens and all generated tokens. */
  totalTokens: number;
}

/** Represents a generated completion alternative, including its content and generation status. */
export interface Alternative {
  $type: "yandex.cloud.ai.foundation_models.v1.Alternative";
  /** A message containing the content of the alternative. */
  message?: Message;
  /** The generation status of the alternative */
  status: Alternative_AlternativeStatus;
}

/** Enum representing the generation status of the alternative. */
export enum Alternative_AlternativeStatus {
  /** ALTERNATIVE_STATUS_UNSPECIFIED - Unspecified generation status. */
  ALTERNATIVE_STATUS_UNSPECIFIED = 0,
  /** ALTERNATIVE_STATUS_PARTIAL - Partially generated alternative. */
  ALTERNATIVE_STATUS_PARTIAL = 1,
  /** ALTERNATIVE_STATUS_TRUNCATED_FINAL - Incomplete final alternative resulting from reaching the maximum allowed number of tokens. */
  ALTERNATIVE_STATUS_TRUNCATED_FINAL = 2,
  /** ALTERNATIVE_STATUS_FINAL - Final alternative generated without running into any limits. */
  ALTERNATIVE_STATUS_FINAL = 3,
  /**
   * ALTERNATIVE_STATUS_CONTENT_FILTER - Generation was stopped due to the discovery of potentially sensitive content in the prompt or generated response.
   * To fix, modify the prompt and restart generation.
   */
  ALTERNATIVE_STATUS_CONTENT_FILTER = 4,
  UNRECOGNIZED = -1,
}

export function alternative_AlternativeStatusFromJSON(
  object: any
): Alternative_AlternativeStatus {
  switch (object) {
    case 0:
    case "ALTERNATIVE_STATUS_UNSPECIFIED":
      return Alternative_AlternativeStatus.ALTERNATIVE_STATUS_UNSPECIFIED;
    case 1:
    case "ALTERNATIVE_STATUS_PARTIAL":
      return Alternative_AlternativeStatus.ALTERNATIVE_STATUS_PARTIAL;
    case 2:
    case "ALTERNATIVE_STATUS_TRUNCATED_FINAL":
      return Alternative_AlternativeStatus.ALTERNATIVE_STATUS_TRUNCATED_FINAL;
    case 3:
    case "ALTERNATIVE_STATUS_FINAL":
      return Alternative_AlternativeStatus.ALTERNATIVE_STATUS_FINAL;
    case 4:
    case "ALTERNATIVE_STATUS_CONTENT_FILTER":
      return Alternative_AlternativeStatus.ALTERNATIVE_STATUS_CONTENT_FILTER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Alternative_AlternativeStatus.UNRECOGNIZED;
  }
}

export function alternative_AlternativeStatusToJSON(
  object: Alternative_AlternativeStatus
): string {
  switch (object) {
    case Alternative_AlternativeStatus.ALTERNATIVE_STATUS_UNSPECIFIED:
      return "ALTERNATIVE_STATUS_UNSPECIFIED";
    case Alternative_AlternativeStatus.ALTERNATIVE_STATUS_PARTIAL:
      return "ALTERNATIVE_STATUS_PARTIAL";
    case Alternative_AlternativeStatus.ALTERNATIVE_STATUS_TRUNCATED_FINAL:
      return "ALTERNATIVE_STATUS_TRUNCATED_FINAL";
    case Alternative_AlternativeStatus.ALTERNATIVE_STATUS_FINAL:
      return "ALTERNATIVE_STATUS_FINAL";
    case Alternative_AlternativeStatus.ALTERNATIVE_STATUS_CONTENT_FILTER:
      return "ALTERNATIVE_STATUS_CONTENT_FILTER";
    default:
      return "UNKNOWN";
  }
}

/** Represents a token, the basic unit of content, used by the foundation model. */
export interface Token {
  $type: "yandex.cloud.ai.foundation_models.v1.Token";
  /** An internal token identifier. */
  id: number;
  /** The textual representation of the token. */
  text: string;
  /** Indicates whether the token is special or not. Special tokens may define the model's behavior and are not visible to users. */
  special: boolean;
}

const baseCompletionOptions: object = {
  $type: "yandex.cloud.ai.foundation_models.v1.CompletionOptions",
  stream: false,
};

export const CompletionOptions = {
  $type: "yandex.cloud.ai.foundation_models.v1.CompletionOptions" as const,

  encode(
    message: CompletionOptions,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.stream === true) {
      writer.uint32(8).bool(message.stream);
    }
    if (message.temperature !== undefined) {
      DoubleValue.encode(
        { $type: "google.protobuf.DoubleValue", value: message.temperature! },
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.maxTokens !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxTokens! },
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CompletionOptions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCompletionOptions } as CompletionOptions;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stream = reader.bool();
          break;
        case 2:
          message.temperature = DoubleValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 3:
          message.maxTokens = Int64Value.decode(reader, reader.uint32()).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CompletionOptions {
    const message = { ...baseCompletionOptions } as CompletionOptions;
    message.stream =
      object.stream !== undefined && object.stream !== null
        ? Boolean(object.stream)
        : false;
    message.temperature =
      object.temperature !== undefined && object.temperature !== null
        ? Number(object.temperature)
        : undefined;
    message.maxTokens =
      object.maxTokens !== undefined && object.maxTokens !== null
        ? Number(object.maxTokens)
        : undefined;
    return message;
  },

  toJSON(message: CompletionOptions): unknown {
    const obj: any = {};
    message.stream !== undefined && (obj.stream = message.stream);
    message.temperature !== undefined &&
      (obj.temperature = message.temperature);
    message.maxTokens !== undefined && (obj.maxTokens = message.maxTokens);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CompletionOptions>, I>>(
    object: I
  ): CompletionOptions {
    const message = { ...baseCompletionOptions } as CompletionOptions;
    message.stream = object.stream ?? false;
    message.temperature = object.temperature ?? undefined;
    message.maxTokens = object.maxTokens ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(CompletionOptions.$type, CompletionOptions);

const baseMessage: object = {
  $type: "yandex.cloud.ai.foundation_models.v1.Message",
  role: "",
};

export const Message = {
  $type: "yandex.cloud.ai.foundation_models.v1.Message" as const,

  encode(
    message: Message,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.role !== "") {
      writer.uint32(10).string(message.role);
    }
    if (message.text !== undefined) {
      writer.uint32(18).string(message.text);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Message {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMessage } as Message;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.role = reader.string();
          break;
        case 2:
          message.text = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Message {
    const message = { ...baseMessage } as Message;
    message.role =
      object.role !== undefined && object.role !== null
        ? String(object.role)
        : "";
    message.text =
      object.text !== undefined && object.text !== null
        ? String(object.text)
        : undefined;
    return message;
  },

  toJSON(message: Message): unknown {
    const obj: any = {};
    message.role !== undefined && (obj.role = message.role);
    message.text !== undefined && (obj.text = message.text);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Message>, I>>(object: I): Message {
    const message = { ...baseMessage } as Message;
    message.role = object.role ?? "";
    message.text = object.text ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(Message.$type, Message);

const baseContentUsage: object = {
  $type: "yandex.cloud.ai.foundation_models.v1.ContentUsage",
  inputTextTokens: 0,
  completionTokens: 0,
  totalTokens: 0,
};

export const ContentUsage = {
  $type: "yandex.cloud.ai.foundation_models.v1.ContentUsage" as const,

  encode(
    message: ContentUsage,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.inputTextTokens !== 0) {
      writer.uint32(8).int64(message.inputTextTokens);
    }
    if (message.completionTokens !== 0) {
      writer.uint32(16).int64(message.completionTokens);
    }
    if (message.totalTokens !== 0) {
      writer.uint32(24).int64(message.totalTokens);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ContentUsage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseContentUsage } as ContentUsage;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inputTextTokens = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.completionTokens = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.totalTokens = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ContentUsage {
    const message = { ...baseContentUsage } as ContentUsage;
    message.inputTextTokens =
      object.inputTextTokens !== undefined && object.inputTextTokens !== null
        ? Number(object.inputTextTokens)
        : 0;
    message.completionTokens =
      object.completionTokens !== undefined && object.completionTokens !== null
        ? Number(object.completionTokens)
        : 0;
    message.totalTokens =
      object.totalTokens !== undefined && object.totalTokens !== null
        ? Number(object.totalTokens)
        : 0;
    return message;
  },

  toJSON(message: ContentUsage): unknown {
    const obj: any = {};
    message.inputTextTokens !== undefined &&
      (obj.inputTextTokens = Math.round(message.inputTextTokens));
    message.completionTokens !== undefined &&
      (obj.completionTokens = Math.round(message.completionTokens));
    message.totalTokens !== undefined &&
      (obj.totalTokens = Math.round(message.totalTokens));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ContentUsage>, I>>(
    object: I
  ): ContentUsage {
    const message = { ...baseContentUsage } as ContentUsage;
    message.inputTextTokens = object.inputTextTokens ?? 0;
    message.completionTokens = object.completionTokens ?? 0;
    message.totalTokens = object.totalTokens ?? 0;
    return message;
  },
};

messageTypeRegistry.set(ContentUsage.$type, ContentUsage);

const baseAlternative: object = {
  $type: "yandex.cloud.ai.foundation_models.v1.Alternative",
  status: 0,
};

export const Alternative = {
  $type: "yandex.cloud.ai.foundation_models.v1.Alternative" as const,

  encode(
    message: Alternative,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.message !== undefined) {
      Message.encode(message.message, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Alternative {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAlternative } as Alternative;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.message = Message.decode(reader, reader.uint32());
          break;
        case 2:
          message.status = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Alternative {
    const message = { ...baseAlternative } as Alternative;
    message.message =
      object.message !== undefined && object.message !== null
        ? Message.fromJSON(object.message)
        : undefined;
    message.status =
      object.status !== undefined && object.status !== null
        ? alternative_AlternativeStatusFromJSON(object.status)
        : 0;
    return message;
  },

  toJSON(message: Alternative): unknown {
    const obj: any = {};
    message.message !== undefined &&
      (obj.message = message.message
        ? Message.toJSON(message.message)
        : undefined);
    message.status !== undefined &&
      (obj.status = alternative_AlternativeStatusToJSON(message.status));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Alternative>, I>>(
    object: I
  ): Alternative {
    const message = { ...baseAlternative } as Alternative;
    message.message =
      object.message !== undefined && object.message !== null
        ? Message.fromPartial(object.message)
        : undefined;
    message.status = object.status ?? 0;
    return message;
  },
};

messageTypeRegistry.set(Alternative.$type, Alternative);

const baseToken: object = {
  $type: "yandex.cloud.ai.foundation_models.v1.Token",
  id: 0,
  text: "",
  special: false,
};

export const Token = {
  $type: "yandex.cloud.ai.foundation_models.v1.Token" as const,

  encode(message: Token, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int64(message.id);
    }
    if (message.text !== "") {
      writer.uint32(18).string(message.text);
    }
    if (message.special === true) {
      writer.uint32(24).bool(message.special);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Token {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseToken } as Token;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.text = reader.string();
          break;
        case 3:
          message.special = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Token {
    const message = { ...baseToken } as Token;
    message.id =
      object.id !== undefined && object.id !== null ? Number(object.id) : 0;
    message.text =
      object.text !== undefined && object.text !== null
        ? String(object.text)
        : "";
    message.special =
      object.special !== undefined && object.special !== null
        ? Boolean(object.special)
        : false;
    return message;
  },

  toJSON(message: Token): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.text !== undefined && (obj.text = message.text);
    message.special !== undefined && (obj.special = message.special);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Token>, I>>(object: I): Token {
    const message = { ...baseToken } as Token;
    message.id = object.id ?? 0;
    message.text = object.text ?? "";
    message.special = object.special ?? false;
    return message;
  },
};

messageTypeRegistry.set(Token.$type, Token);

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
