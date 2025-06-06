/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Timestamp } from '../../../../google/protobuf/timestamp';

export const protobufPackage = 'yandex.cloud.speechsense.v1';

export interface TextContent {
    messages: Message[];
}

export interface Message {
    userId: string;
    timestamp?: Date;
    text?: TextPayload | undefined;
}

export interface TextPayload {
    text: string;
}

const baseTextContent: object = {};

export const TextContent = {
    encode(message: TextContent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.messages) {
            Message.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): TextContent {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTextContent } as TextContent;
        message.messages = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.messages.push(Message.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): TextContent {
        const message = { ...baseTextContent } as TextContent;
        message.messages = (object.messages ?? []).map((e: any) => Message.fromJSON(e));
        return message;
    },

    toJSON(message: TextContent): unknown {
        const obj: any = {};
        if (message.messages) {
            obj.messages = message.messages.map((e) => (e ? Message.toJSON(e) : undefined));
        } else {
            obj.messages = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<TextContent>, I>>(object: I): TextContent {
        const message = { ...baseTextContent } as TextContent;
        message.messages = object.messages?.map((e) => Message.fromPartial(e)) || [];
        return message;
    },
};

const baseMessage: object = { userId: '' };

export const Message = {
    encode(message: Message, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.userId !== '') {
            writer.uint32(10).string(message.userId);
        }
        if (message.timestamp !== undefined) {
            Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(18).fork()).ldelim();
        }
        if (message.text !== undefined) {
            TextPayload.encode(message.text, writer.uint32(26).fork()).ldelim();
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
                    message.userId = reader.string();
                    break;
                case 2:
                    message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.text = TextPayload.decode(reader, reader.uint32());
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
        message.userId =
            object.userId !== undefined && object.userId !== null ? String(object.userId) : '';
        message.timestamp =
            object.timestamp !== undefined && object.timestamp !== null
                ? fromJsonTimestamp(object.timestamp)
                : undefined;
        message.text =
            object.text !== undefined && object.text !== null
                ? TextPayload.fromJSON(object.text)
                : undefined;
        return message;
    },

    toJSON(message: Message): unknown {
        const obj: any = {};
        message.userId !== undefined && (obj.userId = message.userId);
        message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());
        message.text !== undefined &&
            (obj.text = message.text ? TextPayload.toJSON(message.text) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Message>, I>>(object: I): Message {
        const message = { ...baseMessage } as Message;
        message.userId = object.userId ?? '';
        message.timestamp = object.timestamp ?? undefined;
        message.text =
            object.text !== undefined && object.text !== null
                ? TextPayload.fromPartial(object.text)
                : undefined;
        return message;
    },
};

const baseTextPayload: object = { text: '' };

export const TextPayload = {
    encode(message: TextPayload, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.text !== '') {
            writer.uint32(10).string(message.text);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): TextPayload {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTextPayload } as TextPayload;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.text = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): TextPayload {
        const message = { ...baseTextPayload } as TextPayload;
        message.text = object.text !== undefined && object.text !== null ? String(object.text) : '';
        return message;
    },

    toJSON(message: TextPayload): unknown {
        const obj: any = {};
        message.text !== undefined && (obj.text = message.text);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<TextPayload>, I>>(object: I): TextPayload {
        const message = { ...baseTextPayload } as TextPayload;
        message.text = object.text ?? '';
        return message;
    },
};

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

function toTimestamp(date: Date): Timestamp {
    const seconds = date.getTime() / 1_000;
    const nanos = (date.getTime() % 1_000) * 1_000_000;
    return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
    let millis = t.seconds * 1_000;
    millis += t.nanos / 1_000_000;
    return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
    if (o instanceof Date) {
        return o;
    } else if (typeof o === 'string') {
        return new Date(o);
    } else {
        return fromTimestamp(Timestamp.fromJSON(o));
    }
}

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
