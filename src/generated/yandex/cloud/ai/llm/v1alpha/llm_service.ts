/* eslint-disable */
import { messageTypeRegistry } from "../../../../../typeRegistry";
import Long from "long";
import {
  makeGenericClientConstructor,
  ChannelCredentials,
  ChannelOptions,
  UntypedServiceImplementation,
  handleServerStreamingCall,
  Client,
  CallOptions,
  ClientReadableStream,
  Metadata,
  handleUnaryCall,
  ClientUnaryCall,
  ServiceError,
} from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import {
  GenerationOptions,
  Message,
  Alternative,
  Token,
} from "../../../../../yandex/cloud/ai/llm/v1alpha/llm";
import { Operation } from "../../../../../yandex/cloud/operation/operation";

export const protobufPackage = "yandex.cloud.ai.llm.v1alpha";

/** Request for instructing the model to generate text. */
export interface InstructRequest {
  $type: "yandex.cloud.ai.llm.v1alpha.InstructRequest";
  /**
   * The name or identifier of the model to be used for text generation.
   * Possible value for now: `general`.
   */
  model: string;
  /** Configuration options for text generation. */
  generationOptions?: GenerationOptions;
  /** The text-based instruction for text generation. */
  instructionText: string | undefined;
  /** A URI containing instructions for text generation. */
  instructionUri: string | undefined;
  /** The text-based request for text generation. */
  requestText: string | undefined;
}

/** Response containing generated text alternatives and token count. */
export interface InstructResponse {
  $type: "yandex.cloud.ai.llm.v1alpha.InstructResponse";
  /** A list of alternative text responses. */
  alternatives: Alternative[];
  /** The number of tokens used in the prompt, including both the [instruction_text] and [request_text]. */
  numPromptTokens: number;
}

/** Request to engage in a chat conversation with a text generation model. */
export interface ChatRequest {
  $type: "yandex.cloud.ai.llm.v1alpha.ChatRequest";
  /**
   * The name or identifier of the model to be used for the chat.
   * Possible value for now: `general`.
   */
  model: string;
  /** Configuration options for text generation. */
  generationOptions?: GenerationOptions;
  /** The text-based instruction for the conversation. */
  instructionText: string | undefined;
  /** A list of messages in the conversation. */
  messages: Message[];
}

/** Contains a model-generated response for a chat query. */
export interface ChatResponse {
  $type: "yandex.cloud.ai.llm.v1alpha.ChatResponse";
  /** The assistant's message in the chat conversation. */
  message?: Message;
  /** Total number of tokens used in both the chat request and chat response. */
  numTokens: number;
}

/** Request to tokenize input text. */
export interface TokenizeRequest {
  $type: "yandex.cloud.ai.llm.v1alpha.TokenizeRequest";
  /**
   * The name or identifier of the model to be used for tokenization.
   * Possible values for now: `general`, `general:embedding`.
   */
  model: string;
  /** The input text to tokenize. */
  text: string;
}

/** Tokenization response. */
export interface TokenizeResponse {
  $type: "yandex.cloud.ai.llm.v1alpha.TokenizeResponse";
  /** A list of tokens obtained from tokenization. */
  tokens: Token[];
}

/** Represents a request to obtain embeddings for text data. */
export interface EmbeddingRequest {
  $type: "yandex.cloud.ai.llm.v1alpha.EmbeddingRequest";
  /** The type of embedding to be generated. */
  embeddingType: EmbeddingRequest_EmbeddingType;
  /** The name or identifier of the model to be used for embedding. Possible value for now: `general:embedding`. */
  model: string;
  /** The input text for which the embedding is requested. */
  text: string;
}

/** Enum to specify the type of embedding to be generated. */
export enum EmbeddingRequest_EmbeddingType {
  /** EMBEDDING_TYPE_UNSPECIFIED - Unspecified embedding type. */
  EMBEDDING_TYPE_UNSPECIFIED = 0,
  /**
   * EMBEDDING_TYPE_QUERY - Embedding for a query. Use this when you have a short query or search term
   * that you want to obtain an embedding for. Query embeddings are typically
   * used in information retrieval and search applications.
   */
  EMBEDDING_TYPE_QUERY = 1,
  /**
   * EMBEDDING_TYPE_DOCUMENT - Embedding for a document. Use this when you have a longer document or a piece
   * of text that you want to obtain an embedding for. Document embeddings are often
   * used in natural language understanding and document similarity tasks.
   */
  EMBEDDING_TYPE_DOCUMENT = 2,
  UNRECOGNIZED = -1,
}

export function embeddingRequest_EmbeddingTypeFromJSON(
  object: any
): EmbeddingRequest_EmbeddingType {
  switch (object) {
    case 0:
    case "EMBEDDING_TYPE_UNSPECIFIED":
      return EmbeddingRequest_EmbeddingType.EMBEDDING_TYPE_UNSPECIFIED;
    case 1:
    case "EMBEDDING_TYPE_QUERY":
      return EmbeddingRequest_EmbeddingType.EMBEDDING_TYPE_QUERY;
    case 2:
    case "EMBEDDING_TYPE_DOCUMENT":
      return EmbeddingRequest_EmbeddingType.EMBEDDING_TYPE_DOCUMENT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EmbeddingRequest_EmbeddingType.UNRECOGNIZED;
  }
}

export function embeddingRequest_EmbeddingTypeToJSON(
  object: EmbeddingRequest_EmbeddingType
): string {
  switch (object) {
    case EmbeddingRequest_EmbeddingType.EMBEDDING_TYPE_UNSPECIFIED:
      return "EMBEDDING_TYPE_UNSPECIFIED";
    case EmbeddingRequest_EmbeddingType.EMBEDDING_TYPE_QUERY:
      return "EMBEDDING_TYPE_QUERY";
    case EmbeddingRequest_EmbeddingType.EMBEDDING_TYPE_DOCUMENT:
      return "EMBEDDING_TYPE_DOCUMENT";
    default:
      return "UNKNOWN";
  }
}

/** Represents a response containing embeddings for input text data. */
export interface EmbeddingResponse {
  $type: "yandex.cloud.ai.llm.v1alpha.EmbeddingResponse";
  /** A repeated list of double values representing the embedding. */
  embedding: number[];
  /** The number of tokens in the input text. */
  numTokens: number;
}

const baseInstructRequest: object = {
  $type: "yandex.cloud.ai.llm.v1alpha.InstructRequest",
  model: "",
};

export const InstructRequest = {
  $type: "yandex.cloud.ai.llm.v1alpha.InstructRequest" as const,

  encode(
    message: InstructRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.model !== "") {
      writer.uint32(10).string(message.model);
    }
    if (message.generationOptions !== undefined) {
      GenerationOptions.encode(
        message.generationOptions,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.instructionText !== undefined) {
      writer.uint32(26).string(message.instructionText);
    }
    if (message.instructionUri !== undefined) {
      writer.uint32(42).string(message.instructionUri);
    }
    if (message.requestText !== undefined) {
      writer.uint32(34).string(message.requestText);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InstructRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseInstructRequest } as InstructRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.model = reader.string();
          break;
        case 2:
          message.generationOptions = GenerationOptions.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.instructionText = reader.string();
          break;
        case 5:
          message.instructionUri = reader.string();
          break;
        case 4:
          message.requestText = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): InstructRequest {
    const message = { ...baseInstructRequest } as InstructRequest;
    message.model =
      object.model !== undefined && object.model !== null
        ? String(object.model)
        : "";
    message.generationOptions =
      object.generationOptions !== undefined &&
      object.generationOptions !== null
        ? GenerationOptions.fromJSON(object.generationOptions)
        : undefined;
    message.instructionText =
      object.instructionText !== undefined && object.instructionText !== null
        ? String(object.instructionText)
        : undefined;
    message.instructionUri =
      object.instructionUri !== undefined && object.instructionUri !== null
        ? String(object.instructionUri)
        : undefined;
    message.requestText =
      object.requestText !== undefined && object.requestText !== null
        ? String(object.requestText)
        : undefined;
    return message;
  },

  toJSON(message: InstructRequest): unknown {
    const obj: any = {};
    message.model !== undefined && (obj.model = message.model);
    message.generationOptions !== undefined &&
      (obj.generationOptions = message.generationOptions
        ? GenerationOptions.toJSON(message.generationOptions)
        : undefined);
    message.instructionText !== undefined &&
      (obj.instructionText = message.instructionText);
    message.instructionUri !== undefined &&
      (obj.instructionUri = message.instructionUri);
    message.requestText !== undefined &&
      (obj.requestText = message.requestText);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<InstructRequest>, I>>(
    object: I
  ): InstructRequest {
    const message = { ...baseInstructRequest } as InstructRequest;
    message.model = object.model ?? "";
    message.generationOptions =
      object.generationOptions !== undefined &&
      object.generationOptions !== null
        ? GenerationOptions.fromPartial(object.generationOptions)
        : undefined;
    message.instructionText = object.instructionText ?? undefined;
    message.instructionUri = object.instructionUri ?? undefined;
    message.requestText = object.requestText ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(InstructRequest.$type, InstructRequest);

const baseInstructResponse: object = {
  $type: "yandex.cloud.ai.llm.v1alpha.InstructResponse",
  numPromptTokens: 0,
};

export const InstructResponse = {
  $type: "yandex.cloud.ai.llm.v1alpha.InstructResponse" as const,

  encode(
    message: InstructResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.alternatives) {
      Alternative.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.numPromptTokens !== 0) {
      writer.uint32(16).int64(message.numPromptTokens);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InstructResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseInstructResponse } as InstructResponse;
    message.alternatives = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.alternatives.push(
            Alternative.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.numPromptTokens = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): InstructResponse {
    const message = { ...baseInstructResponse } as InstructResponse;
    message.alternatives = (object.alternatives ?? []).map((e: any) =>
      Alternative.fromJSON(e)
    );
    message.numPromptTokens =
      object.numPromptTokens !== undefined && object.numPromptTokens !== null
        ? Number(object.numPromptTokens)
        : 0;
    return message;
  },

  toJSON(message: InstructResponse): unknown {
    const obj: any = {};
    if (message.alternatives) {
      obj.alternatives = message.alternatives.map((e) =>
        e ? Alternative.toJSON(e) : undefined
      );
    } else {
      obj.alternatives = [];
    }
    message.numPromptTokens !== undefined &&
      (obj.numPromptTokens = Math.round(message.numPromptTokens));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<InstructResponse>, I>>(
    object: I
  ): InstructResponse {
    const message = { ...baseInstructResponse } as InstructResponse;
    message.alternatives =
      object.alternatives?.map((e) => Alternative.fromPartial(e)) || [];
    message.numPromptTokens = object.numPromptTokens ?? 0;
    return message;
  },
};

messageTypeRegistry.set(InstructResponse.$type, InstructResponse);

const baseChatRequest: object = {
  $type: "yandex.cloud.ai.llm.v1alpha.ChatRequest",
  model: "",
};

export const ChatRequest = {
  $type: "yandex.cloud.ai.llm.v1alpha.ChatRequest" as const,

  encode(
    message: ChatRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.model !== "") {
      writer.uint32(10).string(message.model);
    }
    if (message.generationOptions !== undefined) {
      GenerationOptions.encode(
        message.generationOptions,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.instructionText !== undefined) {
      writer.uint32(26).string(message.instructionText);
    }
    for (const v of message.messages) {
      Message.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChatRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseChatRequest } as ChatRequest;
    message.messages = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.model = reader.string();
          break;
        case 2:
          message.generationOptions = GenerationOptions.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.instructionText = reader.string();
          break;
        case 4:
          message.messages.push(Message.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ChatRequest {
    const message = { ...baseChatRequest } as ChatRequest;
    message.model =
      object.model !== undefined && object.model !== null
        ? String(object.model)
        : "";
    message.generationOptions =
      object.generationOptions !== undefined &&
      object.generationOptions !== null
        ? GenerationOptions.fromJSON(object.generationOptions)
        : undefined;
    message.instructionText =
      object.instructionText !== undefined && object.instructionText !== null
        ? String(object.instructionText)
        : undefined;
    message.messages = (object.messages ?? []).map((e: any) =>
      Message.fromJSON(e)
    );
    return message;
  },

  toJSON(message: ChatRequest): unknown {
    const obj: any = {};
    message.model !== undefined && (obj.model = message.model);
    message.generationOptions !== undefined &&
      (obj.generationOptions = message.generationOptions
        ? GenerationOptions.toJSON(message.generationOptions)
        : undefined);
    message.instructionText !== undefined &&
      (obj.instructionText = message.instructionText);
    if (message.messages) {
      obj.messages = message.messages.map((e) =>
        e ? Message.toJSON(e) : undefined
      );
    } else {
      obj.messages = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ChatRequest>, I>>(
    object: I
  ): ChatRequest {
    const message = { ...baseChatRequest } as ChatRequest;
    message.model = object.model ?? "";
    message.generationOptions =
      object.generationOptions !== undefined &&
      object.generationOptions !== null
        ? GenerationOptions.fromPartial(object.generationOptions)
        : undefined;
    message.instructionText = object.instructionText ?? undefined;
    message.messages =
      object.messages?.map((e) => Message.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(ChatRequest.$type, ChatRequest);

const baseChatResponse: object = {
  $type: "yandex.cloud.ai.llm.v1alpha.ChatResponse",
  numTokens: 0,
};

export const ChatResponse = {
  $type: "yandex.cloud.ai.llm.v1alpha.ChatResponse" as const,

  encode(
    message: ChatResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.message !== undefined) {
      Message.encode(message.message, writer.uint32(10).fork()).ldelim();
    }
    if (message.numTokens !== 0) {
      writer.uint32(16).int64(message.numTokens);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChatResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseChatResponse } as ChatResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.message = Message.decode(reader, reader.uint32());
          break;
        case 2:
          message.numTokens = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ChatResponse {
    const message = { ...baseChatResponse } as ChatResponse;
    message.message =
      object.message !== undefined && object.message !== null
        ? Message.fromJSON(object.message)
        : undefined;
    message.numTokens =
      object.numTokens !== undefined && object.numTokens !== null
        ? Number(object.numTokens)
        : 0;
    return message;
  },

  toJSON(message: ChatResponse): unknown {
    const obj: any = {};
    message.message !== undefined &&
      (obj.message = message.message
        ? Message.toJSON(message.message)
        : undefined);
    message.numTokens !== undefined &&
      (obj.numTokens = Math.round(message.numTokens));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ChatResponse>, I>>(
    object: I
  ): ChatResponse {
    const message = { ...baseChatResponse } as ChatResponse;
    message.message =
      object.message !== undefined && object.message !== null
        ? Message.fromPartial(object.message)
        : undefined;
    message.numTokens = object.numTokens ?? 0;
    return message;
  },
};

messageTypeRegistry.set(ChatResponse.$type, ChatResponse);

const baseTokenizeRequest: object = {
  $type: "yandex.cloud.ai.llm.v1alpha.TokenizeRequest",
  model: "",
  text: "",
};

export const TokenizeRequest = {
  $type: "yandex.cloud.ai.llm.v1alpha.TokenizeRequest" as const,

  encode(
    message: TokenizeRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.model !== "") {
      writer.uint32(10).string(message.model);
    }
    if (message.text !== "") {
      writer.uint32(18).string(message.text);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TokenizeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTokenizeRequest } as TokenizeRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.model = reader.string();
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

  fromJSON(object: any): TokenizeRequest {
    const message = { ...baseTokenizeRequest } as TokenizeRequest;
    message.model =
      object.model !== undefined && object.model !== null
        ? String(object.model)
        : "";
    message.text =
      object.text !== undefined && object.text !== null
        ? String(object.text)
        : "";
    return message;
  },

  toJSON(message: TokenizeRequest): unknown {
    const obj: any = {};
    message.model !== undefined && (obj.model = message.model);
    message.text !== undefined && (obj.text = message.text);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TokenizeRequest>, I>>(
    object: I
  ): TokenizeRequest {
    const message = { ...baseTokenizeRequest } as TokenizeRequest;
    message.model = object.model ?? "";
    message.text = object.text ?? "";
    return message;
  },
};

messageTypeRegistry.set(TokenizeRequest.$type, TokenizeRequest);

const baseTokenizeResponse: object = {
  $type: "yandex.cloud.ai.llm.v1alpha.TokenizeResponse",
};

export const TokenizeResponse = {
  $type: "yandex.cloud.ai.llm.v1alpha.TokenizeResponse" as const,

  encode(
    message: TokenizeResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.tokens) {
      Token.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TokenizeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTokenizeResponse } as TokenizeResponse;
    message.tokens = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokens.push(Token.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TokenizeResponse {
    const message = { ...baseTokenizeResponse } as TokenizeResponse;
    message.tokens = (object.tokens ?? []).map((e: any) => Token.fromJSON(e));
    return message;
  },

  toJSON(message: TokenizeResponse): unknown {
    const obj: any = {};
    if (message.tokens) {
      obj.tokens = message.tokens.map((e) => (e ? Token.toJSON(e) : undefined));
    } else {
      obj.tokens = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TokenizeResponse>, I>>(
    object: I
  ): TokenizeResponse {
    const message = { ...baseTokenizeResponse } as TokenizeResponse;
    message.tokens = object.tokens?.map((e) => Token.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(TokenizeResponse.$type, TokenizeResponse);

const baseEmbeddingRequest: object = {
  $type: "yandex.cloud.ai.llm.v1alpha.EmbeddingRequest",
  embeddingType: 0,
  model: "",
  text: "",
};

export const EmbeddingRequest = {
  $type: "yandex.cloud.ai.llm.v1alpha.EmbeddingRequest" as const,

  encode(
    message: EmbeddingRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.embeddingType !== 0) {
      writer.uint32(8).int32(message.embeddingType);
    }
    if (message.model !== "") {
      writer.uint32(18).string(message.model);
    }
    if (message.text !== "") {
      writer.uint32(26).string(message.text);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EmbeddingRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEmbeddingRequest } as EmbeddingRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.embeddingType = reader.int32() as any;
          break;
        case 2:
          message.model = reader.string();
          break;
        case 3:
          message.text = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EmbeddingRequest {
    const message = { ...baseEmbeddingRequest } as EmbeddingRequest;
    message.embeddingType =
      object.embeddingType !== undefined && object.embeddingType !== null
        ? embeddingRequest_EmbeddingTypeFromJSON(object.embeddingType)
        : 0;
    message.model =
      object.model !== undefined && object.model !== null
        ? String(object.model)
        : "";
    message.text =
      object.text !== undefined && object.text !== null
        ? String(object.text)
        : "";
    return message;
  },

  toJSON(message: EmbeddingRequest): unknown {
    const obj: any = {};
    message.embeddingType !== undefined &&
      (obj.embeddingType = embeddingRequest_EmbeddingTypeToJSON(
        message.embeddingType
      ));
    message.model !== undefined && (obj.model = message.model);
    message.text !== undefined && (obj.text = message.text);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EmbeddingRequest>, I>>(
    object: I
  ): EmbeddingRequest {
    const message = { ...baseEmbeddingRequest } as EmbeddingRequest;
    message.embeddingType = object.embeddingType ?? 0;
    message.model = object.model ?? "";
    message.text = object.text ?? "";
    return message;
  },
};

messageTypeRegistry.set(EmbeddingRequest.$type, EmbeddingRequest);

const baseEmbeddingResponse: object = {
  $type: "yandex.cloud.ai.llm.v1alpha.EmbeddingResponse",
  embedding: 0,
  numTokens: 0,
};

export const EmbeddingResponse = {
  $type: "yandex.cloud.ai.llm.v1alpha.EmbeddingResponse" as const,

  encode(
    message: EmbeddingResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.embedding) {
      writer.double(v);
    }
    writer.ldelim();
    if (message.numTokens !== 0) {
      writer.uint32(16).int64(message.numTokens);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EmbeddingResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEmbeddingResponse } as EmbeddingResponse;
    message.embedding = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.embedding.push(reader.double());
            }
          } else {
            message.embedding.push(reader.double());
          }
          break;
        case 2:
          message.numTokens = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EmbeddingResponse {
    const message = { ...baseEmbeddingResponse } as EmbeddingResponse;
    message.embedding = (object.embedding ?? []).map((e: any) => Number(e));
    message.numTokens =
      object.numTokens !== undefined && object.numTokens !== null
        ? Number(object.numTokens)
        : 0;
    return message;
  },

  toJSON(message: EmbeddingResponse): unknown {
    const obj: any = {};
    if (message.embedding) {
      obj.embedding = message.embedding.map((e) => e);
    } else {
      obj.embedding = [];
    }
    message.numTokens !== undefined &&
      (obj.numTokens = Math.round(message.numTokens));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EmbeddingResponse>, I>>(
    object: I
  ): EmbeddingResponse {
    const message = { ...baseEmbeddingResponse } as EmbeddingResponse;
    message.embedding = object.embedding?.map((e) => e) || [];
    message.numTokens = object.numTokens ?? 0;
    return message;
  },
};

messageTypeRegistry.set(EmbeddingResponse.$type, EmbeddingResponse);

/** Service for text generation and conversation. */
export const TextGenerationServiceService = {
  /** RPC method for instructing the model to generate text. */
  instruct: {
    path: "/yandex.cloud.ai.llm.v1alpha.TextGenerationService/Instruct",
    requestStream: false,
    responseStream: true,
    requestSerialize: (value: InstructRequest) =>
      Buffer.from(InstructRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => InstructRequest.decode(value),
    responseSerialize: (value: InstructResponse) =>
      Buffer.from(InstructResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => InstructResponse.decode(value),
  },
  /** RPC method for engaging in a chat conversation with the model. */
  chat: {
    path: "/yandex.cloud.ai.llm.v1alpha.TextGenerationService/Chat",
    requestStream: false,
    responseStream: true,
    requestSerialize: (value: ChatRequest) =>
      Buffer.from(ChatRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ChatRequest.decode(value),
    responseSerialize: (value: ChatResponse) =>
      Buffer.from(ChatResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ChatResponse.decode(value),
  },
} as const;

export interface TextGenerationServiceServer
  extends UntypedServiceImplementation {
  /** RPC method for instructing the model to generate text. */
  instruct: handleServerStreamingCall<InstructRequest, InstructResponse>;
  /** RPC method for engaging in a chat conversation with the model. */
  chat: handleServerStreamingCall<ChatRequest, ChatResponse>;
}

export interface TextGenerationServiceClient extends Client {
  /** RPC method for instructing the model to generate text. */
  instruct(
    request: InstructRequest,
    options?: Partial<CallOptions>
  ): ClientReadableStream<InstructResponse>;
  instruct(
    request: InstructRequest,
    metadata?: Metadata,
    options?: Partial<CallOptions>
  ): ClientReadableStream<InstructResponse>;
  /** RPC method for engaging in a chat conversation with the model. */
  chat(
    request: ChatRequest,
    options?: Partial<CallOptions>
  ): ClientReadableStream<ChatResponse>;
  chat(
    request: ChatRequest,
    metadata?: Metadata,
    options?: Partial<CallOptions>
  ): ClientReadableStream<ChatResponse>;
}

export const TextGenerationServiceClient = makeGenericClientConstructor(
  TextGenerationServiceService,
  "yandex.cloud.ai.llm.v1alpha.TextGenerationService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): TextGenerationServiceClient;
  service: typeof TextGenerationServiceService;
};

/** Service for tokenizing input text. */
export const TokenizerServiceService = {
  /** RPC method for tokenizing input text. */
  tokenize: {
    path: "/yandex.cloud.ai.llm.v1alpha.TokenizerService/Tokenize",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: TokenizeRequest) =>
      Buffer.from(TokenizeRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => TokenizeRequest.decode(value),
    responseSerialize: (value: TokenizeResponse) =>
      Buffer.from(TokenizeResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => TokenizeResponse.decode(value),
  },
} as const;

export interface TokenizerServiceServer extends UntypedServiceImplementation {
  /** RPC method for tokenizing input text. */
  tokenize: handleUnaryCall<TokenizeRequest, TokenizeResponse>;
}

export interface TokenizerServiceClient extends Client {
  /** RPC method for tokenizing input text. */
  tokenize(
    request: TokenizeRequest,
    callback: (error: ServiceError | null, response: TokenizeResponse) => void
  ): ClientUnaryCall;
  tokenize(
    request: TokenizeRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: TokenizeResponse) => void
  ): ClientUnaryCall;
  tokenize(
    request: TokenizeRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: TokenizeResponse) => void
  ): ClientUnaryCall;
}

export const TokenizerServiceClient = makeGenericClientConstructor(
  TokenizerServiceService,
  "yandex.cloud.ai.llm.v1alpha.TokenizerService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): TokenizerServiceClient;
  service: typeof TokenizerServiceService;
};

/** Service for obtaining embeddings for text data. */
export const EmbeddingsServiceService = {
  /** RPC method to obtain embeddings for input text data. */
  embedding: {
    path: "/yandex.cloud.ai.llm.v1alpha.EmbeddingsService/Embedding",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: EmbeddingRequest) =>
      Buffer.from(EmbeddingRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => EmbeddingRequest.decode(value),
    responseSerialize: (value: EmbeddingResponse) =>
      Buffer.from(EmbeddingResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => EmbeddingResponse.decode(value),
  },
} as const;

export interface EmbeddingsServiceServer extends UntypedServiceImplementation {
  /** RPC method to obtain embeddings for input text data. */
  embedding: handleUnaryCall<EmbeddingRequest, EmbeddingResponse>;
}

export interface EmbeddingsServiceClient extends Client {
  /** RPC method to obtain embeddings for input text data. */
  embedding(
    request: EmbeddingRequest,
    callback: (error: ServiceError | null, response: EmbeddingResponse) => void
  ): ClientUnaryCall;
  embedding(
    request: EmbeddingRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: EmbeddingResponse) => void
  ): ClientUnaryCall;
  embedding(
    request: EmbeddingRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: EmbeddingResponse) => void
  ): ClientUnaryCall;
}

export const EmbeddingsServiceClient = makeGenericClientConstructor(
  EmbeddingsServiceService,
  "yandex.cloud.ai.llm.v1alpha.EmbeddingsService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): EmbeddingsServiceClient;
  service: typeof EmbeddingsServiceService;
};

/** Service for asynchronous text generation. */
export const TextGenerationAsyncServiceService = {
  /** RPC method for instructing the model to generate text. */
  instruct: {
    path: "/yandex.cloud.ai.llm.v1alpha.TextGenerationAsyncService/Instruct",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: InstructRequest) =>
      Buffer.from(InstructRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => InstructRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
} as const;

export interface TextGenerationAsyncServiceServer
  extends UntypedServiceImplementation {
  /** RPC method for instructing the model to generate text. */
  instruct: handleUnaryCall<InstructRequest, Operation>;
}

export interface TextGenerationAsyncServiceClient extends Client {
  /** RPC method for instructing the model to generate text. */
  instruct(
    request: InstructRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  instruct(
    request: InstructRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  instruct(
    request: InstructRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
}

export const TextGenerationAsyncServiceClient = makeGenericClientConstructor(
  TextGenerationAsyncServiceService,
  "yandex.cloud.ai.llm.v1alpha.TextGenerationAsyncService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): TextGenerationAsyncServiceClient;
  service: typeof TextGenerationAsyncServiceService;
};

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
