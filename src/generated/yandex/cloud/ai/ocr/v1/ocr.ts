/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.ai.ocr.v1';

export enum Angle {
    ANGLE_UNSPECIFIED = 0,
    ANGLE_0 = 1,
    ANGLE_90 = 2,
    ANGLE_180 = 3,
    ANGLE_270 = 4,
    UNRECOGNIZED = -1,
}

export function angleFromJSON(object: any): Angle {
    switch (object) {
        case 0:
        case 'ANGLE_UNSPECIFIED':
            return Angle.ANGLE_UNSPECIFIED;
        case 1:
        case 'ANGLE_0':
            return Angle.ANGLE_0;
        case 2:
        case 'ANGLE_90':
            return Angle.ANGLE_90;
        case 3:
        case 'ANGLE_180':
            return Angle.ANGLE_180;
        case 4:
        case 'ANGLE_270':
            return Angle.ANGLE_270;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Angle.UNRECOGNIZED;
    }
}

export function angleToJSON(object: Angle): string {
    switch (object) {
        case Angle.ANGLE_UNSPECIFIED:
            return 'ANGLE_UNSPECIFIED';
        case Angle.ANGLE_0:
            return 'ANGLE_0';
        case Angle.ANGLE_90:
            return 'ANGLE_90';
        case Angle.ANGLE_180:
            return 'ANGLE_180';
        case Angle.ANGLE_270:
            return 'ANGLE_270';
        default:
            return 'UNKNOWN';
    }
}

export interface Polygon {
    /** The bounding polygon vertices. */
    vertices: Vertex[];
}

export interface Vertex {
    /** X coordinate in pixels. */
    x: number;
    /** Y coordinate in pixels. */
    y: number;
}

export interface TextAnnotation {
    /** Page width in pixels. */
    width: number;
    /** Page height in pixels. */
    height: number;
    /** Recognized text blocks in this page. */
    blocks: Block[];
    /** Recognized entities. */
    entities: Entity[];
    tables: Table[];
    /** Full text recognized from image. */
    fullText: string;
    /** Angle of image rotation. */
    rotate: Angle;
}

export interface Entity {
    /** Entity name. */
    name: string;
    /** Recognized entity text. */
    text: string;
}

export interface Block {
    /** Area on the page where the text block is located. */
    boundingBox?: Polygon;
    /** Recognized lines in this block. */
    lines: Line[];
    /** A list of detected languages */
    languages: Block_DetectedLanguage[];
    /** Block position from full_text string. */
    textSegments: TextSegments[];
}

export interface Block_DetectedLanguage {
    /** Detected language code. */
    languageCode: string;
}

export interface Line {
    /** Area on the page where the line is located. */
    boundingBox?: Polygon;
    /** Recognized text. */
    text: string;
    /** Recognized words. */
    words: Word[];
    /** Line position from full_text string. */
    textSegments: TextSegments[];
    /** Angle of line rotation. */
    orientation: Angle;
}

export interface Word {
    /** Area on the page where the word is located. */
    boundingBox?: Polygon;
    /** Recognized word value. */
    text: string;
    /** ID of the recognized word in entities array. */
    entityIndex: number;
    /** Word position from full_text string. */
    textSegments: TextSegments[];
}

export interface TextSegments {
    /** Start character position from full_text string. */
    startIndex: number;
    /** Text segment length. */
    length: number;
}

export interface Table {
    /** Area on the page where the table is located. */
    boundingBox?: Polygon;
    /** Number of rows in table. */
    rowCount: number;
    /** Number of columns in table. */
    columnCount: number;
    /** Table cells. */
    cells: TableCell[];
}

export interface TableCell {
    /** Area on the page where the table cell is located. */
    boundingBox?: Polygon;
    /** Row index. */
    rowIndex: number;
    /** Column index. */
    columnIndex: number;
    /** Column span. */
    columnSpan: number;
    /** Row span. */
    rowSpan: number;
    /** Text in cell. */
    text: string;
    /** Table cell position from full_text string. */
    textSegments: TextSegments[];
}

const basePolygon: object = {};

export const Polygon = {
    encode(message: Polygon, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
        message.vertices = (object.vertices ?? []).map((e: any) => Vertex.fromJSON(e));
        return message;
    },

    toJSON(message: Polygon): unknown {
        const obj: any = {};
        if (message.vertices) {
            obj.vertices = message.vertices.map((e) => (e ? Vertex.toJSON(e) : undefined));
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

const baseVertex: object = { x: 0, y: 0 };

export const Vertex = {
    encode(message: Vertex, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
        message.x = object.x !== undefined && object.x !== null ? Number(object.x) : 0;
        message.y = object.y !== undefined && object.y !== null ? Number(object.y) : 0;
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

const baseTextAnnotation: object = { width: 0, height: 0, fullText: '', rotate: 0 };

export const TextAnnotation = {
    encode(message: TextAnnotation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
        for (const v of message.tables) {
            Table.encode(v!, writer.uint32(42).fork()).ldelim();
        }
        if (message.fullText !== '') {
            writer.uint32(50).string(message.fullText);
        }
        if (message.rotate !== 0) {
            writer.uint32(56).int32(message.rotate);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): TextAnnotation {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTextAnnotation } as TextAnnotation;
        message.blocks = [];
        message.entities = [];
        message.tables = [];
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
                case 5:
                    message.tables.push(Table.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.fullText = reader.string();
                    break;
                case 7:
                    message.rotate = reader.int32() as any;
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
            object.width !== undefined && object.width !== null ? Number(object.width) : 0;
        message.height =
            object.height !== undefined && object.height !== null ? Number(object.height) : 0;
        message.blocks = (object.blocks ?? []).map((e: any) => Block.fromJSON(e));
        message.entities = (object.entities ?? []).map((e: any) => Entity.fromJSON(e));
        message.tables = (object.tables ?? []).map((e: any) => Table.fromJSON(e));
        message.fullText =
            object.fullText !== undefined && object.fullText !== null
                ? String(object.fullText)
                : '';
        message.rotate =
            object.rotate !== undefined && object.rotate !== null
                ? angleFromJSON(object.rotate)
                : 0;
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
            obj.entities = message.entities.map((e) => (e ? Entity.toJSON(e) : undefined));
        } else {
            obj.entities = [];
        }
        if (message.tables) {
            obj.tables = message.tables.map((e) => (e ? Table.toJSON(e) : undefined));
        } else {
            obj.tables = [];
        }
        message.fullText !== undefined && (obj.fullText = message.fullText);
        message.rotate !== undefined && (obj.rotate = angleToJSON(message.rotate));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<TextAnnotation>, I>>(object: I): TextAnnotation {
        const message = { ...baseTextAnnotation } as TextAnnotation;
        message.width = object.width ?? 0;
        message.height = object.height ?? 0;
        message.blocks = object.blocks?.map((e) => Block.fromPartial(e)) || [];
        message.entities = object.entities?.map((e) => Entity.fromPartial(e)) || [];
        message.tables = object.tables?.map((e) => Table.fromPartial(e)) || [];
        message.fullText = object.fullText ?? '';
        message.rotate = object.rotate ?? 0;
        return message;
    },
};

const baseEntity: object = { name: '', text: '' };

export const Entity = {
    encode(message: Entity, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.text !== '') {
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
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.text = object.text !== undefined && object.text !== null ? String(object.text) : '';
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
        message.name = object.name ?? '';
        message.text = object.text ?? '';
        return message;
    },
};

const baseBlock: object = {};

export const Block = {
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
        for (const v of message.textSegments) {
            TextSegments.encode(v!, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Block {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBlock } as Block;
        message.lines = [];
        message.languages = [];
        message.textSegments = [];
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
                    message.languages.push(Block_DetectedLanguage.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.textSegments.push(TextSegments.decode(reader, reader.uint32()));
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
            Block_DetectedLanguage.fromJSON(e),
        );
        message.textSegments = (object.textSegments ?? []).map((e: any) =>
            TextSegments.fromJSON(e),
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
                e ? Block_DetectedLanguage.toJSON(e) : undefined,
            );
        } else {
            obj.languages = [];
        }
        if (message.textSegments) {
            obj.textSegments = message.textSegments.map((e) =>
                e ? TextSegments.toJSON(e) : undefined,
            );
        } else {
            obj.textSegments = [];
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
        message.textSegments = object.textSegments?.map((e) => TextSegments.fromPartial(e)) || [];
        return message;
    },
};

const baseBlock_DetectedLanguage: object = { languageCode: '' };

export const Block_DetectedLanguage = {
    encode(message: Block_DetectedLanguage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.languageCode !== '') {
            writer.uint32(10).string(message.languageCode);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Block_DetectedLanguage {
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
                : '';
        return message;
    },

    toJSON(message: Block_DetectedLanguage): unknown {
        const obj: any = {};
        message.languageCode !== undefined && (obj.languageCode = message.languageCode);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Block_DetectedLanguage>, I>>(
        object: I,
    ): Block_DetectedLanguage {
        const message = { ...baseBlock_DetectedLanguage } as Block_DetectedLanguage;
        message.languageCode = object.languageCode ?? '';
        return message;
    },
};

const baseLine: object = { text: '', orientation: 0 };

export const Line = {
    encode(message: Line, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.boundingBox !== undefined) {
            Polygon.encode(message.boundingBox, writer.uint32(10).fork()).ldelim();
        }
        if (message.text !== '') {
            writer.uint32(18).string(message.text);
        }
        for (const v of message.words) {
            Word.encode(v!, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.textSegments) {
            TextSegments.encode(v!, writer.uint32(34).fork()).ldelim();
        }
        if (message.orientation !== 0) {
            writer.uint32(40).int32(message.orientation);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Line {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseLine } as Line;
        message.words = [];
        message.textSegments = [];
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
                case 4:
                    message.textSegments.push(TextSegments.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.orientation = reader.int32() as any;
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
        message.text = object.text !== undefined && object.text !== null ? String(object.text) : '';
        message.words = (object.words ?? []).map((e: any) => Word.fromJSON(e));
        message.textSegments = (object.textSegments ?? []).map((e: any) =>
            TextSegments.fromJSON(e),
        );
        message.orientation =
            object.orientation !== undefined && object.orientation !== null
                ? angleFromJSON(object.orientation)
                : 0;
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
        if (message.textSegments) {
            obj.textSegments = message.textSegments.map((e) =>
                e ? TextSegments.toJSON(e) : undefined,
            );
        } else {
            obj.textSegments = [];
        }
        message.orientation !== undefined && (obj.orientation = angleToJSON(message.orientation));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Line>, I>>(object: I): Line {
        const message = { ...baseLine } as Line;
        message.boundingBox =
            object.boundingBox !== undefined && object.boundingBox !== null
                ? Polygon.fromPartial(object.boundingBox)
                : undefined;
        message.text = object.text ?? '';
        message.words = object.words?.map((e) => Word.fromPartial(e)) || [];
        message.textSegments = object.textSegments?.map((e) => TextSegments.fromPartial(e)) || [];
        message.orientation = object.orientation ?? 0;
        return message;
    },
};

const baseWord: object = { text: '', entityIndex: 0 };

export const Word = {
    encode(message: Word, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.boundingBox !== undefined) {
            Polygon.encode(message.boundingBox, writer.uint32(10).fork()).ldelim();
        }
        if (message.text !== '') {
            writer.uint32(18).string(message.text);
        }
        if (message.entityIndex !== 0) {
            writer.uint32(24).int64(message.entityIndex);
        }
        for (const v of message.textSegments) {
            TextSegments.encode(v!, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Word {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseWord } as Word;
        message.textSegments = [];
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
                case 4:
                    message.textSegments.push(TextSegments.decode(reader, reader.uint32()));
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
        message.text = object.text !== undefined && object.text !== null ? String(object.text) : '';
        message.entityIndex =
            object.entityIndex !== undefined && object.entityIndex !== null
                ? Number(object.entityIndex)
                : 0;
        message.textSegments = (object.textSegments ?? []).map((e: any) =>
            TextSegments.fromJSON(e),
        );
        return message;
    },

    toJSON(message: Word): unknown {
        const obj: any = {};
        message.boundingBox !== undefined &&
            (obj.boundingBox = message.boundingBox
                ? Polygon.toJSON(message.boundingBox)
                : undefined);
        message.text !== undefined && (obj.text = message.text);
        message.entityIndex !== undefined && (obj.entityIndex = Math.round(message.entityIndex));
        if (message.textSegments) {
            obj.textSegments = message.textSegments.map((e) =>
                e ? TextSegments.toJSON(e) : undefined,
            );
        } else {
            obj.textSegments = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Word>, I>>(object: I): Word {
        const message = { ...baseWord } as Word;
        message.boundingBox =
            object.boundingBox !== undefined && object.boundingBox !== null
                ? Polygon.fromPartial(object.boundingBox)
                : undefined;
        message.text = object.text ?? '';
        message.entityIndex = object.entityIndex ?? 0;
        message.textSegments = object.textSegments?.map((e) => TextSegments.fromPartial(e)) || [];
        return message;
    },
};

const baseTextSegments: object = { startIndex: 0, length: 0 };

export const TextSegments = {
    encode(message: TextSegments, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.startIndex !== 0) {
            writer.uint32(8).int64(message.startIndex);
        }
        if (message.length !== 0) {
            writer.uint32(16).int64(message.length);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): TextSegments {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTextSegments } as TextSegments;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.startIndex = longToNumber(reader.int64() as Long);
                    break;
                case 2:
                    message.length = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): TextSegments {
        const message = { ...baseTextSegments } as TextSegments;
        message.startIndex =
            object.startIndex !== undefined && object.startIndex !== null
                ? Number(object.startIndex)
                : 0;
        message.length =
            object.length !== undefined && object.length !== null ? Number(object.length) : 0;
        return message;
    },

    toJSON(message: TextSegments): unknown {
        const obj: any = {};
        message.startIndex !== undefined && (obj.startIndex = Math.round(message.startIndex));
        message.length !== undefined && (obj.length = Math.round(message.length));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<TextSegments>, I>>(object: I): TextSegments {
        const message = { ...baseTextSegments } as TextSegments;
        message.startIndex = object.startIndex ?? 0;
        message.length = object.length ?? 0;
        return message;
    },
};

const baseTable: object = { rowCount: 0, columnCount: 0 };

export const Table = {
    encode(message: Table, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.boundingBox !== undefined) {
            Polygon.encode(message.boundingBox, writer.uint32(10).fork()).ldelim();
        }
        if (message.rowCount !== 0) {
            writer.uint32(16).int64(message.rowCount);
        }
        if (message.columnCount !== 0) {
            writer.uint32(24).int64(message.columnCount);
        }
        for (const v of message.cells) {
            TableCell.encode(v!, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Table {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTable } as Table;
        message.cells = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.boundingBox = Polygon.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.rowCount = longToNumber(reader.int64() as Long);
                    break;
                case 3:
                    message.columnCount = longToNumber(reader.int64() as Long);
                    break;
                case 4:
                    message.cells.push(TableCell.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Table {
        const message = { ...baseTable } as Table;
        message.boundingBox =
            object.boundingBox !== undefined && object.boundingBox !== null
                ? Polygon.fromJSON(object.boundingBox)
                : undefined;
        message.rowCount =
            object.rowCount !== undefined && object.rowCount !== null ? Number(object.rowCount) : 0;
        message.columnCount =
            object.columnCount !== undefined && object.columnCount !== null
                ? Number(object.columnCount)
                : 0;
        message.cells = (object.cells ?? []).map((e: any) => TableCell.fromJSON(e));
        return message;
    },

    toJSON(message: Table): unknown {
        const obj: any = {};
        message.boundingBox !== undefined &&
            (obj.boundingBox = message.boundingBox
                ? Polygon.toJSON(message.boundingBox)
                : undefined);
        message.rowCount !== undefined && (obj.rowCount = Math.round(message.rowCount));
        message.columnCount !== undefined && (obj.columnCount = Math.round(message.columnCount));
        if (message.cells) {
            obj.cells = message.cells.map((e) => (e ? TableCell.toJSON(e) : undefined));
        } else {
            obj.cells = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Table>, I>>(object: I): Table {
        const message = { ...baseTable } as Table;
        message.boundingBox =
            object.boundingBox !== undefined && object.boundingBox !== null
                ? Polygon.fromPartial(object.boundingBox)
                : undefined;
        message.rowCount = object.rowCount ?? 0;
        message.columnCount = object.columnCount ?? 0;
        message.cells = object.cells?.map((e) => TableCell.fromPartial(e)) || [];
        return message;
    },
};

const baseTableCell: object = { rowIndex: 0, columnIndex: 0, columnSpan: 0, rowSpan: 0, text: '' };

export const TableCell = {
    encode(message: TableCell, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.boundingBox !== undefined) {
            Polygon.encode(message.boundingBox, writer.uint32(10).fork()).ldelim();
        }
        if (message.rowIndex !== 0) {
            writer.uint32(16).int64(message.rowIndex);
        }
        if (message.columnIndex !== 0) {
            writer.uint32(24).int64(message.columnIndex);
        }
        if (message.columnSpan !== 0) {
            writer.uint32(32).int64(message.columnSpan);
        }
        if (message.rowSpan !== 0) {
            writer.uint32(40).int64(message.rowSpan);
        }
        if (message.text !== '') {
            writer.uint32(50).string(message.text);
        }
        for (const v of message.textSegments) {
            TextSegments.encode(v!, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): TableCell {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTableCell } as TableCell;
        message.textSegments = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.boundingBox = Polygon.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.rowIndex = longToNumber(reader.int64() as Long);
                    break;
                case 3:
                    message.columnIndex = longToNumber(reader.int64() as Long);
                    break;
                case 4:
                    message.columnSpan = longToNumber(reader.int64() as Long);
                    break;
                case 5:
                    message.rowSpan = longToNumber(reader.int64() as Long);
                    break;
                case 6:
                    message.text = reader.string();
                    break;
                case 7:
                    message.textSegments.push(TextSegments.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): TableCell {
        const message = { ...baseTableCell } as TableCell;
        message.boundingBox =
            object.boundingBox !== undefined && object.boundingBox !== null
                ? Polygon.fromJSON(object.boundingBox)
                : undefined;
        message.rowIndex =
            object.rowIndex !== undefined && object.rowIndex !== null ? Number(object.rowIndex) : 0;
        message.columnIndex =
            object.columnIndex !== undefined && object.columnIndex !== null
                ? Number(object.columnIndex)
                : 0;
        message.columnSpan =
            object.columnSpan !== undefined && object.columnSpan !== null
                ? Number(object.columnSpan)
                : 0;
        message.rowSpan =
            object.rowSpan !== undefined && object.rowSpan !== null ? Number(object.rowSpan) : 0;
        message.text = object.text !== undefined && object.text !== null ? String(object.text) : '';
        message.textSegments = (object.textSegments ?? []).map((e: any) =>
            TextSegments.fromJSON(e),
        );
        return message;
    },

    toJSON(message: TableCell): unknown {
        const obj: any = {};
        message.boundingBox !== undefined &&
            (obj.boundingBox = message.boundingBox
                ? Polygon.toJSON(message.boundingBox)
                : undefined);
        message.rowIndex !== undefined && (obj.rowIndex = Math.round(message.rowIndex));
        message.columnIndex !== undefined && (obj.columnIndex = Math.round(message.columnIndex));
        message.columnSpan !== undefined && (obj.columnSpan = Math.round(message.columnSpan));
        message.rowSpan !== undefined && (obj.rowSpan = Math.round(message.rowSpan));
        message.text !== undefined && (obj.text = message.text);
        if (message.textSegments) {
            obj.textSegments = message.textSegments.map((e) =>
                e ? TextSegments.toJSON(e) : undefined,
            );
        } else {
            obj.textSegments = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<TableCell>, I>>(object: I): TableCell {
        const message = { ...baseTableCell } as TableCell;
        message.boundingBox =
            object.boundingBox !== undefined && object.boundingBox !== null
                ? Polygon.fromPartial(object.boundingBox)
                : undefined;
        message.rowIndex = object.rowIndex ?? 0;
        message.columnIndex = object.columnIndex ?? 0;
        message.columnSpan = object.columnSpan ?? 0;
        message.rowSpan = object.rowSpan ?? 0;
        message.text = object.text ?? '';
        message.textSegments = object.textSegments?.map((e) => TextSegments.fromPartial(e)) || [];
        return message;
    },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
    if (typeof globalThis !== 'undefined') return globalThis;
    if (typeof self !== 'undefined') return self;
    if (typeof window !== 'undefined') return window;
    if (typeof global !== 'undefined') return global;
    throw 'Unable to locate global object';
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin
    ? T
    : T extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T extends ReadonlyArray<infer U>
    ? ReadonlyArray<DeepPartial<U>>
    : T extends {}
    ? { [K in keyof T]?: DeepPartial<T[K]> }
    : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
    ? P
    : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;

function longToNumber(long: Long): number {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER');
    }
    return long.toNumber();
}

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
