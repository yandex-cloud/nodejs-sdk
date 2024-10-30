/* eslint-disable */
import { messageTypeRegistry } from '../../../../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Timestamp } from '../../../../../../google/protobuf/timestamp';

export const protobufPackage = 'yandex.cloud.ai.assistants.v1.threads';

export interface Message {
    $type: 'yandex.cloud.ai.assistants.v1.threads.Message';
    id: string;
    threadId: string;
    createdBy: string;
    createdAt?: Date;
    author?: Author;
    labels: { [key: string]: string };
    content?: MessageContent;
}

export interface Message_LabelsEntry {
    $type: 'yandex.cloud.ai.assistants.v1.threads.Message.LabelsEntry';
    key: string;
    value: string;
}

export interface MessageContent {
    $type: 'yandex.cloud.ai.assistants.v1.threads.MessageContent';
    content: ContentPart[];
}

export interface MessageData {
    $type: 'yandex.cloud.ai.assistants.v1.threads.MessageData';
    author?: Author;
    labels: { [key: string]: string };
    content?: MessageContent;
}

export interface MessageData_LabelsEntry {
    $type: 'yandex.cloud.ai.assistants.v1.threads.MessageData.LabelsEntry';
    key: string;
    value: string;
}

export interface Text {
    $type: 'yandex.cloud.ai.assistants.v1.threads.Text';
    content: string;
}

export interface ContentPart {
    $type: 'yandex.cloud.ai.assistants.v1.threads.ContentPart';
    text?: Text | undefined;
}

export interface Author {
    $type: 'yandex.cloud.ai.assistants.v1.threads.Author';
    id: string;
    role: string;
}

const baseMessage: object = {
    $type: 'yandex.cloud.ai.assistants.v1.threads.Message',
    id: '',
    threadId: '',
    createdBy: '',
};

export const Message = {
    $type: 'yandex.cloud.ai.assistants.v1.threads.Message' as const,

    encode(message: Message, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.threadId !== '') {
            writer.uint32(18).string(message.threadId);
        }
        if (message.createdBy !== '') {
            writer.uint32(26).string(message.createdBy);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(34).fork()).ldelim();
        }
        if (message.author !== undefined) {
            Author.encode(message.author, writer.uint32(42).fork()).ldelim();
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            Message_LabelsEntry.encode(
                {
                    $type: 'yandex.cloud.ai.assistants.v1.threads.Message.LabelsEntry',
                    key: key as any,
                    value,
                },
                writer.uint32(50).fork(),
            ).ldelim();
        });
        if (message.content !== undefined) {
            MessageContent.encode(message.content, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Message {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMessage } as Message;
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.threadId = reader.string();
                    break;
                case 3:
                    message.createdBy = reader.string();
                    break;
                case 4:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.author = Author.decode(reader, reader.uint32());
                    break;
                case 6:
                    const entry6 = Message_LabelsEntry.decode(reader, reader.uint32());
                    if (entry6.value !== undefined) {
                        message.labels[entry6.key] = entry6.value;
                    }
                    break;
                case 7:
                    message.content = MessageContent.decode(reader, reader.uint32());
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
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.threadId =
            object.threadId !== undefined && object.threadId !== null
                ? String(object.threadId)
                : '';
        message.createdBy =
            object.createdBy !== undefined && object.createdBy !== null
                ? String(object.createdBy)
                : '';
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        message.author =
            object.author !== undefined && object.author !== null
                ? Author.fromJSON(object.author)
                : undefined;
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                acc[key] = String(value);
                return acc;
            },
            {},
        );
        message.content =
            object.content !== undefined && object.content !== null
                ? MessageContent.fromJSON(object.content)
                : undefined;
        return message;
    },

    toJSON(message: Message): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.threadId !== undefined && (obj.threadId = message.threadId);
        message.createdBy !== undefined && (obj.createdBy = message.createdBy);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.author !== undefined &&
            (obj.author = message.author ? Author.toJSON(message.author) : undefined);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.content !== undefined &&
            (obj.content = message.content ? MessageContent.toJSON(message.content) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Message>, I>>(object: I): Message {
        const message = { ...baseMessage } as Message;
        message.id = object.id ?? '';
        message.threadId = object.threadId ?? '';
        message.createdBy = object.createdBy ?? '';
        message.createdAt = object.createdAt ?? undefined;
        message.author =
            object.author !== undefined && object.author !== null
                ? Author.fromPartial(object.author)
                : undefined;
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                if (value !== undefined) {
                    acc[key] = String(value);
                }
                return acc;
            },
            {},
        );
        message.content =
            object.content !== undefined && object.content !== null
                ? MessageContent.fromPartial(object.content)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(Message.$type, Message);

const baseMessage_LabelsEntry: object = {
    $type: 'yandex.cloud.ai.assistants.v1.threads.Message.LabelsEntry',
    key: '',
    value: '',
};

export const Message_LabelsEntry = {
    $type: 'yandex.cloud.ai.assistants.v1.threads.Message.LabelsEntry' as const,

    encode(message: Message_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Message_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMessage_LabelsEntry } as Message_LabelsEntry;
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

    fromJSON(object: any): Message_LabelsEntry {
        const message = { ...baseMessage_LabelsEntry } as Message_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: Message_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Message_LabelsEntry>, I>>(
        object: I,
    ): Message_LabelsEntry {
        const message = { ...baseMessage_LabelsEntry } as Message_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

messageTypeRegistry.set(Message_LabelsEntry.$type, Message_LabelsEntry);

const baseMessageContent: object = {
    $type: 'yandex.cloud.ai.assistants.v1.threads.MessageContent',
};

export const MessageContent = {
    $type: 'yandex.cloud.ai.assistants.v1.threads.MessageContent' as const,

    encode(message: MessageContent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.content) {
            ContentPart.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MessageContent {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMessageContent } as MessageContent;
        message.content = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.content.push(ContentPart.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): MessageContent {
        const message = { ...baseMessageContent } as MessageContent;
        message.content = (object.content ?? []).map((e: any) => ContentPart.fromJSON(e));
        return message;
    },

    toJSON(message: MessageContent): unknown {
        const obj: any = {};
        if (message.content) {
            obj.content = message.content.map((e) => (e ? ContentPart.toJSON(e) : undefined));
        } else {
            obj.content = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<MessageContent>, I>>(object: I): MessageContent {
        const message = { ...baseMessageContent } as MessageContent;
        message.content = object.content?.map((e) => ContentPart.fromPartial(e)) || [];
        return message;
    },
};

messageTypeRegistry.set(MessageContent.$type, MessageContent);

const baseMessageData: object = { $type: 'yandex.cloud.ai.assistants.v1.threads.MessageData' };

export const MessageData = {
    $type: 'yandex.cloud.ai.assistants.v1.threads.MessageData' as const,

    encode(message: MessageData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.author !== undefined) {
            Author.encode(message.author, writer.uint32(10).fork()).ldelim();
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            MessageData_LabelsEntry.encode(
                {
                    $type: 'yandex.cloud.ai.assistants.v1.threads.MessageData.LabelsEntry',
                    key: key as any,
                    value,
                },
                writer.uint32(18).fork(),
            ).ldelim();
        });
        if (message.content !== undefined) {
            MessageContent.encode(message.content, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MessageData {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMessageData } as MessageData;
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.author = Author.decode(reader, reader.uint32());
                    break;
                case 2:
                    const entry2 = MessageData_LabelsEntry.decode(reader, reader.uint32());
                    if (entry2.value !== undefined) {
                        message.labels[entry2.key] = entry2.value;
                    }
                    break;
                case 3:
                    message.content = MessageContent.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): MessageData {
        const message = { ...baseMessageData } as MessageData;
        message.author =
            object.author !== undefined && object.author !== null
                ? Author.fromJSON(object.author)
                : undefined;
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                acc[key] = String(value);
                return acc;
            },
            {},
        );
        message.content =
            object.content !== undefined && object.content !== null
                ? MessageContent.fromJSON(object.content)
                : undefined;
        return message;
    },

    toJSON(message: MessageData): unknown {
        const obj: any = {};
        message.author !== undefined &&
            (obj.author = message.author ? Author.toJSON(message.author) : undefined);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.content !== undefined &&
            (obj.content = message.content ? MessageContent.toJSON(message.content) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<MessageData>, I>>(object: I): MessageData {
        const message = { ...baseMessageData } as MessageData;
        message.author =
            object.author !== undefined && object.author !== null
                ? Author.fromPartial(object.author)
                : undefined;
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                if (value !== undefined) {
                    acc[key] = String(value);
                }
                return acc;
            },
            {},
        );
        message.content =
            object.content !== undefined && object.content !== null
                ? MessageContent.fromPartial(object.content)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(MessageData.$type, MessageData);

const baseMessageData_LabelsEntry: object = {
    $type: 'yandex.cloud.ai.assistants.v1.threads.MessageData.LabelsEntry',
    key: '',
    value: '',
};

export const MessageData_LabelsEntry = {
    $type: 'yandex.cloud.ai.assistants.v1.threads.MessageData.LabelsEntry' as const,

    encode(message: MessageData_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MessageData_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMessageData_LabelsEntry } as MessageData_LabelsEntry;
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

    fromJSON(object: any): MessageData_LabelsEntry {
        const message = { ...baseMessageData_LabelsEntry } as MessageData_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: MessageData_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<MessageData_LabelsEntry>, I>>(
        object: I,
    ): MessageData_LabelsEntry {
        const message = { ...baseMessageData_LabelsEntry } as MessageData_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

messageTypeRegistry.set(MessageData_LabelsEntry.$type, MessageData_LabelsEntry);

const baseText: object = { $type: 'yandex.cloud.ai.assistants.v1.threads.Text', content: '' };

export const Text = {
    $type: 'yandex.cloud.ai.assistants.v1.threads.Text' as const,

    encode(message: Text, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.content !== '') {
            writer.uint32(10).string(message.content);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Text {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseText } as Text;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.content = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Text {
        const message = { ...baseText } as Text;
        message.content =
            object.content !== undefined && object.content !== null ? String(object.content) : '';
        return message;
    },

    toJSON(message: Text): unknown {
        const obj: any = {};
        message.content !== undefined && (obj.content = message.content);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Text>, I>>(object: I): Text {
        const message = { ...baseText } as Text;
        message.content = object.content ?? '';
        return message;
    },
};

messageTypeRegistry.set(Text.$type, Text);

const baseContentPart: object = { $type: 'yandex.cloud.ai.assistants.v1.threads.ContentPart' };

export const ContentPart = {
    $type: 'yandex.cloud.ai.assistants.v1.threads.ContentPart' as const,

    encode(message: ContentPart, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.text !== undefined) {
            Text.encode(message.text, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ContentPart {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseContentPart } as ContentPart;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.text = Text.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ContentPart {
        const message = { ...baseContentPart } as ContentPart;
        message.text =
            object.text !== undefined && object.text !== null
                ? Text.fromJSON(object.text)
                : undefined;
        return message;
    },

    toJSON(message: ContentPart): unknown {
        const obj: any = {};
        message.text !== undefined &&
            (obj.text = message.text ? Text.toJSON(message.text) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ContentPart>, I>>(object: I): ContentPart {
        const message = { ...baseContentPart } as ContentPart;
        message.text =
            object.text !== undefined && object.text !== null
                ? Text.fromPartial(object.text)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(ContentPart.$type, ContentPart);

const baseAuthor: object = {
    $type: 'yandex.cloud.ai.assistants.v1.threads.Author',
    id: '',
    role: '',
};

export const Author = {
    $type: 'yandex.cloud.ai.assistants.v1.threads.Author' as const,

    encode(message: Author, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.role !== '') {
            writer.uint32(18).string(message.role);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Author {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAuthor } as Author;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.role = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Author {
        const message = { ...baseAuthor } as Author;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.role = object.role !== undefined && object.role !== null ? String(object.role) : '';
        return message;
    },

    toJSON(message: Author): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.role !== undefined && (obj.role = message.role);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Author>, I>>(object: I): Author {
        const message = { ...baseAuthor } as Author;
        message.id = object.id ?? '';
        message.role = object.role ?? '';
        return message;
    },
};

messageTypeRegistry.set(Author.$type, Author);

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin
    ? T
    : T extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T extends ReadonlyArray<infer U>
    ? ReadonlyArray<DeepPartial<U>>
    : T extends {}
    ? { [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]> }
    : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
    ? P
    : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
              Exclude<keyof I, KeysOfUnion<P> | '$type'>,
              never
          >;

function toTimestamp(date: Date): Timestamp {
    const seconds = date.getTime() / 1_000;
    const nanos = (date.getTime() % 1_000) * 1_000_000;
    return { $type: 'google.protobuf.Timestamp', seconds, nanos };
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
