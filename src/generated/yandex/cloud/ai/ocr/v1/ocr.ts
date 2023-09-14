/* eslint-disable */
import { messageTypeRegistry } from "../../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "yandex.cloud.ai.ocr.v1";

export interface Polygon {
  $type: "yandex.cloud.ai.ocr.v1.Polygon";
  /** The bounding polygon vertices. */
  vertices: Vertex[];
}

export interface Vertex {
  $type: "yandex.cloud.ai.ocr.v1.Vertex";
  /** X coordinate in pixels. */
  x: number;
  /** Y coordinate in pixels. */
  y: number;
}

export interface TextAnnotation {
  $type: "yandex.cloud.ai.ocr.v1.TextAnnotation";
  /** Page width in pixels. */
  width: number;
  /** Page height in pixels. */
  height: number;
  /** Recognized text blocks in this page. */
  blocks: Block[];
  /** Recognized entities. */
  entities: Entity[];
}

export interface Entity {
  $type: "yandex.cloud.ai.ocr.v1.Entity";
  /** Entity name. */
  name: string;
  /** Recognized entity text. */
  text: string;
}

export interface Block {
  $type: "yandex.cloud.ai.ocr.v1.Block";
  /** Area on the page where the text block is located. */
  boundingBox?: Polygon;
  /** Recognized lines in this block. */
  lines: Line[];
  /** A list of detected languages */
  languages: Block_DetectedLanguage[];
}

export interface Block_DetectedLanguage {
  $type: "yandex.cloud.ai.ocr.v1.Block.DetectedLanguage";
  /** Detected language code. */
  languageCode: string;
}

export interface Line {
  $type: "yandex.cloud.ai.ocr.v1.Line";
  /** Area on the page where the line is located. */
  boundingBox?: Polygon;
  /** Recognized text. */
  text: string;
  /** Recognized words */
  words: Word[];
}

export interface Word {
  $type: "yandex.cloud.ai.ocr.v1.Word";
  /** Area on the page where the word is located. */
  boundingBox?: Polygon;
  /** Recognized word value. */
  text: string;
  /** ID of the recognized word in entities array. */
  entityIndex: number;
}

const basePolygon: object = { $type: "yandex.cloud.ai.ocr.v1.Polygon" };

export const Polygon = {
  $type: "yandex.cloud.ai.ocr.v1.Polygon" as const,

  encode(
    message: Polygon,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.vertices) {
      Vertex.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Polygon {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePolygon } as Polygon;
    message.vertices = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vertices.push(Vertex.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Polygon {
    const message = { ...basePolygon } as Polygon;
    message.vertices = (object.vertices ?? []).map((e: any) =>
      Vertex.fromJSON(e)
    );
    return message;
  },

  toJSON(message: Polygon): unknown {
    const obj: any = {};
    if (message.vertices) {
      obj.vertices = message.vertices.map((e) =>
        e ? Vertex.toJSON(e) : undefined
      );
    } else {
      obj.vertices = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Polygon>, I>>(object: I): Polygon {
    const message = { ...basePolygon } as Polygon;
    message.vertices = object.vertices?.map((e) => Vertex.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(Polygon.$type, Polygon);

const baseVertex: object = {
  $type: "yandex.cloud.ai.ocr.v1.Vertex",
  x: 0,
  y: 0,
};

export const Vertex = {
  $type: "yandex.cloud.ai.ocr.v1.Vertex" as const,

  encode(
    message: Vertex,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.x !== 0) {
      writer.uint32(8).int64(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(16).int64(message.y);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Vertex {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseVertex } as Vertex;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.x = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.y = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Vertex {
    const message = { ...baseVertex } as Vertex;
    message.x =
      object.x !== undefined && object.x !== null ? Number(object.x) : 0;
    message.y =
      object.y !== undefined && object.y !== null ? Number(object.y) : 0;
    return message;
  },

  toJSON(message: Vertex): unknown {
    const obj: any = {};
    message.x !== undefined && (obj.x = Math.round(message.x));
    message.y !== undefined && (obj.y = Math.round(message.y));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Vertex>, I>>(object: I): Vertex {
    const message = { ...baseVertex } as Vertex;
    message.x = object.x ?? 0;
    message.y = object.y ?? 0;
    return message;
  },
};

messageTypeRegistry.set(Vertex.$type, Vertex);

const baseTextAnnotation: object = {
  $type: "yandex.cloud.ai.ocr.v1.TextAnnotation",
  width: 0,
  height: 0,
};

export const TextAnnotation = {
  $type: "yandex.cloud.ai.ocr.v1.TextAnnotation" as const,

  encode(
    message: TextAnnotation,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.width !== 0) {
      writer.uint32(8).int64(message.width);
    }
    if (message.height !== 0) {
      writer.uint32(16).int64(message.height);
    }
    for (const v of message.blocks) {
      Block.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.entities) {
      Entity.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TextAnnotation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTextAnnotation } as TextAnnotation;
    message.blocks = [];
    message.entities = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.width = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.height = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.blocks.push(Block.decode(reader, reader.uint32()));
          break;
        case 4:
          message.entities.push(Entity.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TextAnnotation {
    const message = { ...baseTextAnnotation } as TextAnnotation;
    message.width =
      object.width !== undefined && object.width !== null
        ? Number(object.width)
        : 0;
    message.height =
      object.height !== undefined && object.height !== null
        ? Number(object.height)
        : 0;
    message.blocks = (object.blocks ?? []).map((e: any) => Block.fromJSON(e));
    message.entities = (object.entities ?? []).map((e: any) =>
      Entity.fromJSON(e)
    );
    return message;
  },

  toJSON(message: TextAnnotation): unknown {
    const obj: any = {};
    message.width !== undefined && (obj.width = Math.round(message.width));
    message.height !== undefined && (obj.height = Math.round(message.height));
    if (message.blocks) {
      obj.blocks = message.blocks.map((e) => (e ? Block.toJSON(e) : undefined));
    } else {
      obj.blocks = [];
    }
    if (message.entities) {
      obj.entities = message.entities.map((e) =>
        e ? Entity.toJSON(e) : undefined
      );
    } else {
      obj.entities = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TextAnnotation>, I>>(
    object: I
  ): TextAnnotation {
    const message = { ...baseTextAnnotation } as TextAnnotation;
    message.width = object.width ?? 0;
    message.height = object.height ?? 0;
    message.blocks = object.blocks?.map((e) => Block.fromPartial(e)) || [];
    message.entities = object.entities?.map((e) => Entity.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(TextAnnotation.$type, TextAnnotation);

const baseEntity: object = {
  $type: "yandex.cloud.ai.ocr.v1.Entity",
  name: "",
  text: "",
};

export const Entity = {
  $type: "yandex.cloud.ai.ocr.v1.Entity" as const,

  encode(
    message: Entity,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.text !== "") {
      writer.uint32(18).string(message.text);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Entity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEntity } as Entity;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
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

  fromJSON(object: any): Entity {
    const message = { ...baseEntity } as Entity;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.text =
      object.text !== undefined && object.text !== null
        ? String(object.text)
        : "";
    return message;
  },

  toJSON(message: Entity): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.text !== undefined && (obj.text = message.text);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Entity>, I>>(object: I): Entity {
    const message = { ...baseEntity } as Entity;
    message.name = object.name ?? "";
    message.text = object.text ?? "";
    return message;
  },
};

messageTypeRegistry.set(Entity.$type, Entity);

const baseBlock: object = { $type: "yandex.cloud.ai.ocr.v1.Block" };

export const Block = {
  $type: "yandex.cloud.ai.ocr.v1.Block" as const,

  encode(message: Block, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.boundingBox !== undefined) {
      Polygon.encode(message.boundingBox, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.lines) {
      Line.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.languages) {
      Block_DetectedLanguage.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Block {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBlock } as Block;
    message.lines = [];
    message.languages = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.boundingBox = Polygon.decode(reader, reader.uint32());
          break;
        case 2:
          message.lines.push(Line.decode(reader, reader.uint32()));
          break;
        case 3:
          message.languages.push(
            Block_DetectedLanguage.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Block {
    const message = { ...baseBlock } as Block;
    message.boundingBox =
      object.boundingBox !== undefined && object.boundingBox !== null
        ? Polygon.fromJSON(object.boundingBox)
        : undefined;
    message.lines = (object.lines ?? []).map((e: any) => Line.fromJSON(e));
    message.languages = (object.languages ?? []).map((e: any) =>
      Block_DetectedLanguage.fromJSON(e)
    );
    return message;
  },

  toJSON(message: Block): unknown {
    const obj: any = {};
    message.boundingBox !== undefined &&
      (obj.boundingBox = message.boundingBox
        ? Polygon.toJSON(message.boundingBox)
        : undefined);
    if (message.lines) {
      obj.lines = message.lines.map((e) => (e ? Line.toJSON(e) : undefined));
    } else {
      obj.lines = [];
    }
    if (message.languages) {
      obj.languages = message.languages.map((e) =>
        e ? Block_DetectedLanguage.toJSON(e) : undefined
      );
    } else {
      obj.languages = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Block>, I>>(object: I): Block {
    const message = { ...baseBlock } as Block;
    message.boundingBox =
      object.boundingBox !== undefined && object.boundingBox !== null
        ? Polygon.fromPartial(object.boundingBox)
        : undefined;
    message.lines = object.lines?.map((e) => Line.fromPartial(e)) || [];
    message.languages =
      object.languages?.map((e) => Block_DetectedLanguage.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(Block.$type, Block);

const baseBlock_DetectedLanguage: object = {
  $type: "yandex.cloud.ai.ocr.v1.Block.DetectedLanguage",
  languageCode: "",
};

export const Block_DetectedLanguage = {
  $type: "yandex.cloud.ai.ocr.v1.Block.DetectedLanguage" as const,

  encode(
    message: Block_DetectedLanguage,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.languageCode !== "") {
      writer.uint32(10).string(message.languageCode);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Block_DetectedLanguage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBlock_DetectedLanguage } as Block_DetectedLanguage;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.languageCode = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Block_DetectedLanguage {
    const message = { ...baseBlock_DetectedLanguage } as Block_DetectedLanguage;
    message.languageCode =
      object.languageCode !== undefined && object.languageCode !== null
        ? String(object.languageCode)
        : "";
    return message;
  },

  toJSON(message: Block_DetectedLanguage): unknown {
    const obj: any = {};
    message.languageCode !== undefined &&
      (obj.languageCode = message.languageCode);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Block_DetectedLanguage>, I>>(
    object: I
  ): Block_DetectedLanguage {
    const message = { ...baseBlock_DetectedLanguage } as Block_DetectedLanguage;
    message.languageCode = object.languageCode ?? "";
    return message;
  },
};

messageTypeRegistry.set(Block_DetectedLanguage.$type, Block_DetectedLanguage);

const baseLine: object = { $type: "yandex.cloud.ai.ocr.v1.Line", text: "" };

export const Line = {
  $type: "yandex.cloud.ai.ocr.v1.Line" as const,

  encode(message: Line, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.boundingBox !== undefined) {
      Polygon.encode(message.boundingBox, writer.uint32(10).fork()).ldelim();
    }
    if (message.text !== "") {
      writer.uint32(18).string(message.text);
    }
    for (const v of message.words) {
      Word.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Line {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseLine } as Line;
    message.words = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.boundingBox = Polygon.decode(reader, reader.uint32());
          break;
        case 2:
          message.text = reader.string();
          break;
        case 3:
          message.words.push(Word.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Line {
    const message = { ...baseLine } as Line;
    message.boundingBox =
      object.boundingBox !== undefined && object.boundingBox !== null
        ? Polygon.fromJSON(object.boundingBox)
        : undefined;
    message.text =
      object.text !== undefined && object.text !== null
        ? String(object.text)
        : "";
    message.words = (object.words ?? []).map((e: any) => Word.fromJSON(e));
    return message;
  },

  toJSON(message: Line): unknown {
    const obj: any = {};
    message.boundingBox !== undefined &&
      (obj.boundingBox = message.boundingBox
        ? Polygon.toJSON(message.boundingBox)
        : undefined);
    message.text !== undefined && (obj.text = message.text);
    if (message.words) {
      obj.words = message.words.map((e) => (e ? Word.toJSON(e) : undefined));
    } else {
      obj.words = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Line>, I>>(object: I): Line {
    const message = { ...baseLine } as Line;
    message.boundingBox =
      object.boundingBox !== undefined && object.boundingBox !== null
        ? Polygon.fromPartial(object.boundingBox)
        : undefined;
    message.text = object.text ?? "";
    message.words = object.words?.map((e) => Word.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(Line.$type, Line);

const baseWord: object = {
  $type: "yandex.cloud.ai.ocr.v1.Word",
  text: "",
  entityIndex: 0,
};

export const Word = {
  $type: "yandex.cloud.ai.ocr.v1.Word" as const,

  encode(message: Word, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.boundingBox !== undefined) {
      Polygon.encode(message.boundingBox, writer.uint32(10).fork()).ldelim();
    }
    if (message.text !== "") {
      writer.uint32(18).string(message.text);
    }
    if (message.entityIndex !== 0) {
      writer.uint32(24).int64(message.entityIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Word {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseWord } as Word;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.boundingBox = Polygon.decode(reader, reader.uint32());
          break;
        case 2:
          message.text = reader.string();
          break;
        case 3:
          message.entityIndex = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Word {
    const message = { ...baseWord } as Word;
    message.boundingBox =
      object.boundingBox !== undefined && object.boundingBox !== null
        ? Polygon.fromJSON(object.boundingBox)
        : undefined;
    message.text =
      object.text !== undefined && object.text !== null
        ? String(object.text)
        : "";
    message.entityIndex =
      object.entityIndex !== undefined && object.entityIndex !== null
        ? Number(object.entityIndex)
        : 0;
    return message;
  },

  toJSON(message: Word): unknown {
    const obj: any = {};
    message.boundingBox !== undefined &&
      (obj.boundingBox = message.boundingBox
        ? Polygon.toJSON(message.boundingBox)
        : undefined);
    message.text !== undefined && (obj.text = message.text);
    message.entityIndex !== undefined &&
      (obj.entityIndex = Math.round(message.entityIndex));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Word>, I>>(object: I): Word {
    const message = { ...baseWord } as Word;
    message.boundingBox =
      object.boundingBox !== undefined && object.boundingBox !== null
        ? Polygon.fromPartial(object.boundingBox)
        : undefined;
    message.text = object.text ?? "";
    message.entityIndex = object.entityIndex ?? 0;
    return message;
  },
};

messageTypeRegistry.set(Word.$type, Word);

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
