/* eslint-disable */
import { messageTypeRegistry } from "../../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  DoubleValue,
  Int64Value,
} from "../../../../../google/protobuf/wrappers";

export const protobufPackage = "yandex.cloud.ai.llm.v1alpha";

/** Defines the options for text generation. */
export interface GenerationOptions {
  $type: "yandex.cloud.ai.llm.v1alpha.GenerationOptions";
  /** Enables streaming of partially generated text. */
  partialResults: boolean;
  /**
   * Affects creativity and randomness of responses. Should be a double number between 0 (inclusive) and infinity.
   * Lower values produce more straightforward responses, while higher values lead to increased creativity and randomness.
   */
  temperature?: number;
  /**
   * Sets the maximum limit on the total number of tokens used for both the input prompt and the generated response.
   * Must be greater than zero and not exceed 7400 tokens.
   */
  maxTokens?: number;
}

/** Represents an alternative generated response, including its score and token count. */
export interface Alternative {
  $type: "yandex.cloud.ai.llm.v1alpha.Alternative";
  /** The generated text response. */
  text: string;
  /** The score or confidence of the generated text. */
  score: number;
  /** The number of tokens in the generated response. */
  numTokens: number;
}

/** Represents a message within a chat. */
export interface Message {
  $type: "yandex.cloud.ai.llm.v1alpha.Message";
  /** Identifies the sender of the message. */
  role: string;
  /** The text content of the message. */
  text: string;
}

/** Represents a token, the basic unit of text, used by the LLM. */
export interface Token {
  $type: "yandex.cloud.ai.llm.v1alpha.Token";
  /** An internal token identifier. */
  id: number;
  /** The textual representation of the token. */
  text: string;
  /** Indicates whether the token is special or not. Special tokens define the model's behavior and are not visible to users. */
  special: boolean;
}

const baseGenerationOptions: object = {
  $type: "yandex.cloud.ai.llm.v1alpha.GenerationOptions",
  partialResults: false,
};

export const GenerationOptions = {
  $type: "yandex.cloud.ai.llm.v1alpha.GenerationOptions" as const,

  encode(
    message: GenerationOptions,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.partialResults === true) {
      writer.uint32(8).bool(message.partialResults);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): GenerationOptions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenerationOptions } as GenerationOptions;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.partialResults = reader.bool();
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

  fromJSON(object: any): GenerationOptions {
    const message = { ...baseGenerationOptions } as GenerationOptions;
    message.partialResults =
      object.partialResults !== undefined && object.partialResults !== null
        ? Boolean(object.partialResults)
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

  toJSON(message: GenerationOptions): unknown {
    const obj: any = {};
    message.partialResults !== undefined &&
      (obj.partialResults = message.partialResults);
    message.temperature !== undefined &&
      (obj.temperature = message.temperature);
    message.maxTokens !== undefined && (obj.maxTokens = message.maxTokens);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenerationOptions>, I>>(
    object: I
  ): GenerationOptions {
    const message = { ...baseGenerationOptions } as GenerationOptions;
    message.partialResults = object.partialResults ?? false;
    message.temperature = object.temperature ?? undefined;
    message.maxTokens = object.maxTokens ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(GenerationOptions.$type, GenerationOptions);

const baseAlternative: object = {
  $type: "yandex.cloud.ai.llm.v1alpha.Alternative",
  text: "",
  score: 0,
  numTokens: 0,
};

export const Alternative = {
  $type: "yandex.cloud.ai.llm.v1alpha.Alternative" as const,

  encode(
    message: Alternative,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.text !== "") {
      writer.uint32(10).string(message.text);
    }
    if (message.score !== 0) {
      writer.uint32(17).double(message.score);
    }
    if (message.numTokens !== 0) {
      writer.uint32(24).int64(message.numTokens);
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
          message.text = reader.string();
          break;
        case 2:
          message.score = reader.double();
          break;
        case 3:
          message.numTokens = longToNumber(reader.int64() as Long);
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
    message.text =
      object.text !== undefined && object.text !== null
        ? String(object.text)
        : "";
    message.score =
      object.score !== undefined && object.score !== null
        ? Number(object.score)
        : 0;
    message.numTokens =
      object.numTokens !== undefined && object.numTokens !== null
        ? Number(object.numTokens)
        : 0;
    return message;
  },

  toJSON(message: Alternative): unknown {
    const obj: any = {};
    message.text !== undefined && (obj.text = message.text);
    message.score !== undefined && (obj.score = message.score);
    message.numTokens !== undefined &&
      (obj.numTokens = Math.round(message.numTokens));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Alternative>, I>>(
    object: I
  ): Alternative {
    const message = { ...baseAlternative } as Alternative;
    message.text = object.text ?? "";
    message.score = object.score ?? 0;
    message.numTokens = object.numTokens ?? 0;
    return message;
  },
};

messageTypeRegistry.set(Alternative.$type, Alternative);

const baseMessage: object = {
  $type: "yandex.cloud.ai.llm.v1alpha.Message",
  role: "",
  text: "",
};

export const Message = {
  $type: "yandex.cloud.ai.llm.v1alpha.Message" as const,

  encode(
    message: Message,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.role !== "") {
      writer.uint32(10).string(message.role);
    }
    if (message.text !== "") {
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
        : "";
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
    message.text = object.text ?? "";
    return message;
  },
};

messageTypeRegistry.set(Message.$type, Message);

const baseToken: object = {
  $type: "yandex.cloud.ai.llm.v1alpha.Token",
  id: 0,
  text: "",
  special: false,
};

export const Token = {
  $type: "yandex.cloud.ai.llm.v1alpha.Token" as const,

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
